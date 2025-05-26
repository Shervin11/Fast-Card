import { lazy } from "react";

export const Layout = lazy(() => import("../layout/layout"));
export const Home = lazy(() => import("../home/home"));
export const About = lazy(() => import("../about/about"));
export const Contact = lazy(() => import("../contact/contact"));
export const SignUp = lazy(() => import("../signUp/signUp"));
export const LogIn = lazy(() => import("../logIn/logIn"));
export const Product = lazy(() => import("../product/product.jsx"));
export const Profile = lazy(() => import("../profile/profile.jsx"));
export const Cart = lazy(() => import("../cart/cart.jsx"));
export const CheckOut = lazy(() => import("../check/check.jsx"));
export const Info = lazy(() => import("../info/info.jsx"));
export const Wishlist = lazy(() => import("../wishlist/wishlist.jsx"));
