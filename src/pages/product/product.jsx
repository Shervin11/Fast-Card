import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/features/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/features/components/ui/accordion";
import { useEffect, useState } from "react";
import exellent from "@/shared/images/rating5.png";
import { getProduct } from "@/entities/store/reducers/tableSlice";
import good from "@/shared/images/rating4.png";
import unexellent from "@/shared/images/rating3.png";
import bad from "@/shared/images/rating2.png";
import raiting from "@/shared/images/raiting.png";
import { Button } from "@/features/components/ui/button";
import { Input } from "@/features/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import "@/pages/home/styles/home.css";
import { addToCart, addToWishlist, getBrands, getCategory } from "../../entities/store/reducers/tableSlice";
import { Link } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";

let API = import.meta.env.VITE_API_URL;

const Product = () => {
  const [products, setProducts] = useState([]);
  const categories = useSelector((state) => state.table.categories);
  const brands = useSelector((state) => state.table.brands);
  const dispatch = useDispatch();
  const [category, setCategory] = useState("")
  const [brand, setBrand] = useState("")
  const wishlist = useSelector((state) => state.table.wishlist);
  const [min, setMin] = useState(170);
  const [max, setMax] = useState(220000);
  const minLimit = 170;
  const maxLimit = 220000;
  
  useEffect(() => {
    dispatch(getProduct());
    dispatch(getCategory());
    dispatch(getBrands());
  }, []);

  async function getFilterData(brand = '', category = '', minPrice = 0, maxPrice = 0) {
    try {
      const { data } = await axios.get(`${API}Product/get-products?MinPrice=${minPrice}&MaxPrice=${maxPrice}&BrandId=${brand}&CategoryId=${category}`)
      setProducts(data.data.products)
    } catch (error) {
      console.error(error);
    }
  }

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), max);
    setMin(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), min);
    setMax(value);
  };

  const handleMinInput = (e) => {
    const value = Number(e.target.value);
    if (value <= max && value >= minLimit) setMin(value);
  };

  const handleMaxInput = (e) => {
    const value = Number(e.target.value);
    if (value >= min && value <= maxLimit) setMax(value);
  };

  useEffect(() => {
    getFilterData(JSON.stringify(brand), JSON.stringify(category), JSON.stringify(min), JSON.stringify(max))
  }, [category, brand, min, max]);

  return (
    <>
      <article className="w-[90%] md:max-w-[1200px] m-auto my-[40px] md:flex-row flex-col flex md:items-center justify-between">
        <article className="flex items-center gap-[12px]">
          <h3 className="text-[15px] font-semibold text-[gray]">Home</h3>
          <p className="text-[#00000080]">/</p>
          <h3 className="text-[15px] font-semibold">Explore Our Products</h3>
        </article>
        <Input
          id={"inputHome"}
          className="h-[56px] md:hidden max-md:w-[90%] block my-[20px] text-[20px] font-medium"
          placeholder="Search"
        />
        <Select>
          <SelectTrigger className="w-[150px] md:w-[217px]">
            <SelectValue placeholder="Populary" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="electronics"> Electronics</SelectItem>
            <SelectItem value="medicine">Medicine</SelectItem>
            <SelectItem value="Health">Health & Beauty</SelectItem>
          </SelectContent>
        </Select>
      </article>

      <section className="w-[90%] flex md:flex-row flex-col items-start gap-[60px] md:max-w-[1200px] m-auto my-[70px]">
        <article>
          <Accordion
            type="single"
            className="border-t-[1px] border-[#DEE2E7] w-[240px]"
            collapsible
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[#1C1C1C] text-[18px] font-semibold">
                Category
              </AccordionTrigger>
              {categories.map((e) => {
                return (
                  <AccordionContent className="flex gap-5" key={e.id}>
                  <input
                      value={category}
                      onChange={() => setCategory(e.id)}
                      type="radio"
                      className="accent-[red]"
                      name="filter1"
                    />
                  <h3 className="text-[18px] text-[#1C1C1C]">
                    {e.categoryName}     
                  </h3>
              </AccordionContent>
              );
            })}
            </AccordionItem>
          </Accordion>
          <Accordion
            type="single"
            className="border-t-[1px] border-[#DEE2E7] w-[240px]"
            collapsible
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[#1C1C1C] text-[18px] font-semibold">
                Brands
              </AccordionTrigger>
              {brands.map((e) => {
              return (
              <AccordionContent className="flex gap-5" key={e.id}>
                <input
                      value={brand}
                      onChange={() => setBrand(e.id)}
                      type="radio"
                      className="accent-[red]"
                      name="filter2"
                    />
                <h3 className="text-[18px] text-[#1C1C1C]">
                  {e.brandName}     
                </h3>
              </AccordionContent>
              );
            })}
            </AccordionItem>
          </Accordion>
          <Accordion
            type="single"
            className="border-t-[1px] border-[#DEE2E7] w-[240px]"
            collapsible
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[#1C1C1C] text-[18px] font-semibold">
                Features
              </AccordionTrigger>
              <AccordionContent className="text-[#1C1C1C] flex items-center gap-[13px] text-[18px]">
                <input type="checkbox" />
                Metallic
              </AccordionContent>
              <AccordionContent className="text-[#1C1C1C] flex items-center gap-[13px] text-[18px]">
                <input type="checkbox" />
                Plastic cover
              </AccordionContent>
              <AccordionContent className="text-[#1C1C1C] flex items-center gap-[13px] text-[18px]">
                <input type="checkbox" />
                8GB Ram
              </AccordionContent>
              <AccordionContent className="text-[#1C1C1C] flex items-center gap-[13px] text-[18px]">
                <input type="checkbox" />
                Super power
              </AccordionContent>
              <AccordionContent className="text-[#1C1C1C] flex items-center gap-[13px] text-[18px]">
                <input type="checkbox" />
                Large Memory
              </AccordionContent>
              <AccordionContent className="text-[#DB4444] text-[18px]">
                See all
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            type="single"
            className="border-t-[1px] border-[#DEE2E7] w-[240px]"
            collapsible
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[#1C1C1C] text-[18px] font-semibold">
                Price range
              </AccordionTrigger>
              <AccordionContent className="text-[#DB4444] text-[18px]">
                <article className="p-4 border-t border-gray-200">
        <article className="relative h-6 mb-4">
          <article className="absolute top-1/2 left-0 right-0 h-1 bg-red-100 rounded transform -translate-y-1/2" />
          <article
            className="absolute top-1/2 h-1 bg-red-400 rounded transform -translate-y-1/2"
            style={{
              left: `${(min / maxLimit) * 100}%`,
              right: `${100 - (max / maxLimit) * 100}%`,
            }}
          />
          <input type="range" min={minLimit} max={maxLimit} value={min} onChange={handleMinChange} className="absolute w-full pointer-events-none appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-red-400" />
          <input type="range" min={minLimit} max={maxLimit} value={max} onChange={handleMaxChange} className="absolute w-full pointer-events-none appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-red-400" />
        </article>

        <article className="flex gap-2 mb-4">
          <article className="w-1/2">
            <label className="text-xs text-gray-500 mb-1 block">Min</label>
            <input type="number" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" value={min} min={minLimit} max={max} onChange={handleMinInput} />
          </article>
          <article className="w-1/2">
            <label className="text-xs text-gray-500 mb-1 block">Max</label>
            <input type="number" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" value={max} min={min} max={maxLimit} onChange={handleMaxInput} />
          </article>
        </article>
      </article>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            type="single"
            className="border-t-[1px] border-[#DEE2E7] w-[240px]"
            collapsible
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[#1C1C1C] text-[18px] font-semibold">
                Condition
              </AccordionTrigger>
              <AccordionContent className="text-[#1C1C1C] flex items-center gap-[13px] text-[18px]">
                <input type="radio" checked />
                Any
              </AccordionContent>
              <AccordionContent className="text-[#1C1C1C] flex items-center gap-[13px] text-[18px]">
                <input type="radio" />
                Refurbished
              </AccordionContent>
              <AccordionContent className="text-[#1C1C1C] flex items-center gap-[13px] text-[18px]">
                <input type="radio" />
                Brand new
              </AccordionContent>
              <AccordionContent className="text-[#1C1C1C] flex items-center gap-[13px] text-[18px]">
                <input type="radio" />
                Old items
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            type="single"
            className="border-t-[1px] border-[#DEE2E7] w-[240px]"
            collapsible
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[#1C1C1C] text-[18px] font-semibold">
                Ratings
              </AccordionTrigger>
              <AccordionContent className="text-[#1C1C1C] flex items-center gap-[13px] text-[18px]">
                <input type="checkbox" />
                <img src={exellent} alt="exellent" />
              </AccordionContent>
              <AccordionContent className="text-[#1C1C1C] flex items-center gap-[13px] text-[18px]">
                <input type="checkbox" />
                <img src={good} alt="good" />
              </AccordionContent>
              <AccordionContent className="text-[#1C1C1C] flex items-center gap-[13px] text-[18px]">
                <input type="checkbox" />
                <img src={unexellent} alt="unexellent" />
              </AccordionContent>
              <AccordionContent className="text-[#1C1C1C] flex items-center gap-[13px] text-[18px]">
                <input type="checkbox" />
                <img src={bad} alt="bad" />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </article>

        <article>
          <article className="flex items-center gap-[20px] flex-wrap">
            {products.map((e) => {
              return (
                <article
                  key={e.id}
                  className="w-[280px] m-auto md:m-0 relative h-[350px]"
                >
                  <article className="bg-[#F5F5F5] sd relative rounded-[4px] h-[250px] p-[12px]">
                    <article className="flex items-start justify-between">
                      <article className="flex items-start justify-between">
                        <p
                          style={{ display: e.id % 2 == 0 ? "none" : "flex" }}
                          className="w-[55px] h-[26px] flex items-center justify-center bg-[#DB4444] text-[white] rounded-[4px] text-[14px] font-medium"
                        >
                          - 35%
                        </p>
                        <p
                          style={{ display: e.id % 2 == 0 ? "flex" : "none" }}
                          className="w-[55px] h-[26px] flex items-center justify-center bg-[#00FF66] text-[white] rounded-[4px] text-[14px] font-medium"
                        >
                          NEW
                        </p>
                        <aside className="absolute top-2 right-2 flex flex-col gap-1">
                          <p
                            style={{backgroundColor: wishlist.find((el) => el.id == e.id) && localStorage.getItem('token') ? "red" : "white", color: wishlist.find((el) => el.id == e.id) && localStorage.getItem('token') ? "white" : "black",}}
                             onClick={() => {
                                if (localStorage.getItem('token')) {
                                    dispatch(addToWishlist(e))
                                }
                                else {
                                   toast.error("You are dont log in your account")
                                 }
                              }}
                            className="rounded-full p-1 shadow hover:bg-gray-100 w-[24px] bg-white h-[24px] flex items-center justify-center"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                              />
                            </svg>
                          </p>
                          <Link to={`/product/${e.id}`}>
                            <p className="rounded-full p-1 shadow hover:bg-gray-100 w-[24px] bg-white h-[24px] flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                              </svg>
                            </p>
                          </Link>
                        </aside>
                      </article>
                    </article>
                    <img
                      src={`${API}/images/${e.image}`}
                      className="mt-[10px] m-auto w-[190px] h-[180px]"
                    />
                    <button
                     onClick={() => {
                        if (localStorage.getItem('token')) {
                            dispatch(addToCart(e.id));
                        }
                        else {
                            toast.error("You are dont log in your account")
                        }
                      }}
                      className="text-[20px] w-full h-[41px] absolute left-0 bottom-0 bb hidden bg-black text-[white]"
                    >
                      Add To Cart
                    </button>
                  </article>
                  <article className="text-start mt-[10px]">
                    <h3 className="text-[17px] font-[550]">{e.productName}</h3>
                    <article className="flex items-center gap-[20px]">
                      <p className="text-[#DB4444] my-[5px] text-[16px] font-semibold">
                        ${e.discountPrice}
                      </p>
                      <img src={raiting} alt="raiting" />
                    </article>
                  </article>
                </article>
              );
            })}
          </article>
          <article className="w-[234px] m-auto my-[32px]">
            <Button className="bg-[#DB4444] w-[234px] h-[56px] rounded-[4px] text-[16px] font-medium">
              More Products
            </Button>
          </article>
        </article>
      </section>
    </>
  );
};

export default Product;
