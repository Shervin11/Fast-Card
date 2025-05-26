import React from "react";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { Provider } from "react-redux";
import { store } from "../entities/store/store";
import { BrowserRouter, Route, Routes } from "react-router";
import {
  About,
  Contact,
  Home,
  Layout,
  LogIn,
  SignUp,
  Product,
  Profile,
  Cart,
  CheckOut,
  Info,
  Wishlist,
} from "../pages/lazy/lazy";
import Loader from "../pages/loading/loading";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Layout />
              </Suspense>
            }
          >
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path="LogIn" element={<LogIn />} />
            <Route path="about" element={<About />} />
            <Route path="product" element={<Product />} />
            <Route path="profile" element={<Profile />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkOut" element={<CheckOut />} />
            <Route path="product/:id" element={<Info />} />
            <Route path="wishlist" element={<Wishlist />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
