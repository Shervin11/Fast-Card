import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";

let API = import.meta.env.VITE_API_URL;

export const getProduct = createAsyncThunk("table/getProduct", async () => {
  try {
    let { data } = await axios.get(`${API}Product/get-products`);
    return data.data.products;
  } catch (error) {
    console.error(error);
  }
});

export const getBrands = createAsyncThunk("table/getBrands", async () => {
  try {
    let { data } = await axios.get(`${API}Brand/get-brands`);
    return data.data;
  } catch (error) {
    console.error(error);
  }
});

export const getProductById = createAsyncThunk(
  "table/getProductById",
  async (id) => {
    try {
      let { data } = await axios.get(
        `${API}Product/get-product-by-id?id=${id}`
      );
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const upDate = createAsyncThunk(
  "table/upDate",
  async (obj, {dispatch}) => {
    try {
      let { data } = await axios.put(
        `${API}UserProfile/update-user-profile`, obj,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(UserProfile())
    } catch (error) {
      console.error(error);
    }
  }
);

export const getCategory = createAsyncThunk("table/getCategory", async () => {
  try {
    let { data } = await axios.get(`${API}Category/get-categories`);
    return data.data;
  } catch (error) {
    console.error(error);
  }
});

export const regFunc = createAsyncThunk("table/regFunc", async (obj) => {
  try {
    let { data } = await axios.post(`${API}Account/register`, obj);
  } catch (error) {
    console.error(error);
  }
});

export const logFunc = createAsyncThunk("table/logFunc", async (obj) => {
  try {
    let { data } = await axios.post(`${API}Account/login`, obj);
    localStorage.setItem("token", data.data);
    
  } catch (error) {
      console.error(error);
  }
});

export const UserProfile = createAsyncThunk("table/UserProfile", async () => {
  try {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token); 
    let { data } = await axios.get(
      `${API}UserProfile/get-user-profile-by-id?id=${decoded.sid}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return data.data;
  } catch (error) {
    console.error(error);
  }
});

export const addToCart = createAsyncThunk(
  "table/addToCart",
  async (id, { dispatch }) => {
    try {
      let { data } = await axios.post(
        `${API}Cart/add-product-to-cart?id=${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(getCart());
      toast.success('Successfuly add to cart')
    } catch (error) {
      console.error(error);
      toast.error('Already have in cart')
    }
  }
);

export const increase = createAsyncThunk(
  "table/increase",
  async (id, { dispatch }) => {
    try {
      let { data } = await axios.put(
        `${API}Cart/increase-product-in-cart?id=${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(getCart());
    } catch (error) {
      console.error(error);
    }
  }
);

export const reduce = createAsyncThunk(
  "table/reduce",
  async (id, { dispatch }) => {
    try {
      let { data } = await axios.put(
        `${API}Cart/reduce-product-in-cart?id=${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(getCart());
    } catch (error) {
      console.error(error);
    }
  }
);

export const delFromCart = createAsyncThunk(
  "table/delFromCart",
  async (id, { dispatch }) => {
    try {
      let { data } = await axios.delete(
        `${API}Cart/delete-product-from-cart?id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(getCart());
      toast.success('Successfuly Delete product from cart')
    } catch (error) {
      console.error(error);
    }
  }
);

export const clearCart = createAsyncThunk(
  "table/clearCart",
  async (_, { dispatch }) => {
    try {
      let { data } = await axios.delete(`${API}Cart/clear-cart`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch(getCart());
    } catch (error) {
      console.error(error);
    }
  }
);

export const getCart = createAsyncThunk("table/getCart", async () => {
  if (localStorage.getItem("token")) {
    try {
      let { data } = await axios.get(`${API}Cart/get-products-from-cart`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return data.data[0];
    } catch (error) {
      console.error(error);
    }
  } else {
    return 0;
  }
});

export const Table = createSlice({
  name: "table",
  initialState: {
    products: [],
    categories: [],
    user: "",
    dataOfCart: [],
    product: [],
    brands: [],
    wishlist: JSON.parse(localStorage.getItem("wishlist")) || []
  },
  reducers: {
    addToWishlist: (state, el) => {
      let find = state.wishlist.find((e) => e.id == el.payload.id);
      if (find) {
        state.wishlist = state.wishlist.filter((e) => e.id != el.payload.id)
      } else {
        state.wishlist.push(el.payload)
      }
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
  }},
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.product = action.payload;
    });
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.dataOfCart = action.payload;
    });
    builder.addCase(UserProfile.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(getBrands.fulfilled, (state, action) => {
      state.brands = action.payload;
    });
  },
});

export const {addToWishlist} = Table.actions

export default Table.reducer;
