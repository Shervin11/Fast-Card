import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router";
import {
  addToCart,
  addToWishlist,
  getProduct,
  getProductById
} from "../../entities/store/reducers/tableSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/autoplay";
import "./styles/swiper.css";
import { FreeMode, Thumbs, Autoplay, Navigation } from "swiper/modules";
import frame from "@/shared/images/Frame 920.png";
import { Button } from "../../features/components/ui/button";
import delivery from "@/shared/images/icon-delivery.png";
import raiting from "@/shared/images/raiting.png";
import ret from "@/shared/images/Icon-return.png";

let API = import.meta.env.VITE_API_URL;

const Info = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  let product = useSelector((state) => state.table.product);
  let dispatch = useDispatch();
  let [arr, setArr] = useState([]);
  const products = useSelector((state) => state.table.products);
  const wishlist = useSelector((state) => state.table.wishlist);
  let { id } = useParams();
  
  useEffect(() => {
    dispatch(getProductById(id));
    setArr(product);
    dispatch(getProduct());
  }, [id]);
  
  useEffect(() => {
    setArr(product);
  }, [product]);

  return (
    <>
      <article className="w-[90%] md:max-w-[1200px] m-auto my-[70px] flex items-center gap-[12px]">
        <h3 className="text-[15px] font-semibold text-[gray]">Account</h3>
        <p className="text-[#00000080]">/</p>
        <h3 className="text-[15px] font-semibold text-[gray]">Gaming</h3>
        <p className="text-[#00000080]">/</p>
        <h3 className="text-[15px] font-semibold">{arr.productName}</h3>
      </article>

      <section className="md:max-w-[1200px] flex gap-[70px] flex-col md:flex-row items-start my-[40px] m-auto w-[90%]">
        <article className="md:w-[600px] w-[100%]">
          <Swiper
            style={{
              "--swiper-navigation-color": "#000",
              "--swiper-pagination-color": "#000",
            }}
            loop={true}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Thumbs]}
            className="mywiper2 mb-4"
          >
            {arr.images &&
              arr.images.map((el, i) => (
                <SwiperSlide key={i}>
                  <img 
                    src={`${API}/images/${el.images}`}
                    alt="image"
                    className="rounded-[4px] w-[100%] h-[600px] md:w-[600px]"
                  />
                </SwiperSlide>
              ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className="mywiper as"
          >
            {arr.images?.map((el, i) => (
              <SwiperSlide key={i}>
                <img
                  src={`${API}/images/${el.images}`}
                  alt="image"
                  className="w-[170px] h-[130px] object-cover rounded-lg cursor-pointer"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </article>

        <article className="md:w-[400px]">
          <h2 className="text-[24px] mb-[20px] font-semibold">
            {product.productName}
          </h2>
          <article className="flex items-center gap-[16px]">
            <img src={frame} alt="frame" />
            <hr className="border-[1px] border-black h-[16px] opacity-50" />
            <h3 className="text-[#12CA5B] text-[14px] font-semibold">
              In Stock
            </h3>
          </article>
          <article>
            <h2 className="text-[26px] my-[21px] font-bold">
              ${product.discountPrice}.00
            </h2>
            <p className="text-[#00000099]">{product.description}</p>
            <hr className="border-[1px] border-[#504d4d80] w-full my-[21px]" />
            <article className="flex items-center gap-[24px]">
              <h3 className="text-[20px]">Colours:</h3>
              <p
                style={{ backgroundColor: product.color }}
                className="w-[20px] h-[20px] rounded-full border-[1px] border-black"
              ></p>
            </article>
          </article>

          <article className="my-[33px] flex items-center gap-[24px]">
            <h3 className="text-[20px]">Size:</h3>
            <article className="flex items-center gap-[12px]">
              <article className="border-[1px] border-[#00000080] w-[40px] h-[32px] rounded-[4px] hover:bg-[#DB4444] hover:border-0 hover:text-[#FAFAFA] flex items-center justify-center">
                <h3>XS</h3>
              </article>
              <article className="border-[1px] border-[#00000080] w-[40px] h-[32px] rounded-[4px] hover:bg-[#DB4444] hover:border-0 hover:text-[#FAFAFA] flex items-center justify-center">
                <h3>S</h3>
              </article>
              <article className="border-[1px] border-[#00000080] w-[40px] h-[32px] rounded-[4px] hover:bg-[#DB4444] hover:border-0 hover:text-[#FAFAFA] flex items-center justify-center">
                <h3>M</h3>
              </article>
              <article className="border-[1px] border-[#00000080] w-[40px] h-[32px] rounded-[4px] hover:bg-[#DB4444] hover:border-0 hover:text-[#FAFAFA] flex items-center justify-center">
                <h3>L</h3>
              </article>
              <article className="border-[1px] border-[#00000080] w-[40px] h-[32px] rounded-[4px] hover:bg-[#DB4444] hover:border-0 hover:text-[#FAFAFA] flex items-center justify-center">
                <h3>XL</h3>
              </article>
            </article>
          </article>

          <article className="flex items-center justify-between">
            <article className="flex items-center">
              <h3
                className="w-[40px] h-[44px] border-[#00000080] border-[1px] rounded-s-[4px] hover:bg-[#DB4444] hover:border-0 hover:text-[#FAFAFA] flex items-center justify-center text-[25px]"
              >
                -
              </h3>
              <h2 className="w-[80px] h-[44px] border-[#00000080] border-[1px_0px_1px_0px] flex items-center justify-center text-[25px]">
                {product.quantity}
              </h2>
              <h3
                className="w-[40px] h-[44px] border-[#00000080] border-[1px] rounded-e-[4px] hover:bg-[#DB4444] hover:border-0 hover:text-[#FAFAFA] flex items-center justify-center text-[25px]"
              >
                +
              </h3>
            </article>
            <Button
              onClick={() => {
                  if (localStorage.getItem('token')) {
                      dispatch(addToCart(product.id));
                    }
                  else {
                      toast.error("You are dont log in your account")
                    }
                  }}
              className={
                "bg-[#DB4444] hidden md:block w-[165px] text-[18px] h-[44px]"
              }
            >
              Buy Now
            </Button>
            <p 
               className="w-[40px] h-[40px] border-[1px] border-[#00000080] rounded-[4px] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </p>
          </article>
          <Button
            className={
              "bg-[#DB4444] my-[20px] md:hidden block w-full text-[18px] h-[44px]"
            }
          >
            Buy Now
          </Button>

          <article className="font-semibold py-[20px] border-[#00000080] border-[1px] rounded-[4px] my-[33px]">
            <article className="flex items-center gap-[16px] mx-[20px]">
              <img src={delivery} alt="delivery" />
              <article>
                <h3 className="text-[18px]">Free Delivery</h3>
                <p className="text-[12px]">
                  Enter your postal code for Delivery Availability
                </p>
              </article>
            </article>
            <hr className="w-full my-[20px]" />
            <article className="flex items-center gap-[16px] mx-[20px]">
              <img src={ret} alt="return" />
              <article>
                <h3 className="text-[18px]">Return Delivery</h3>
                <p className="text-[12px]">
                  Free 30 Days Delivery Returns. Details
                </p>
              </article>
            </article>
          </article>
        </article>
      </section>

      <section className="md:max-w-[1200px] w-[90%] m-auto my-[150px]">
        <h3 className="flex items-center my-[32px] gap-[10px] text-[#DB4444] text-[16px] font-semibold">
          <p className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></p>
          Related Item
        </h3>
        <Swiper
          loop={true}
          slidesPerView={4}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="mySwiper sw"
        >
          {products &&
            products.map((e) => {
              return (
                <SwiperSlide key={e.id}>
                  <article className="w-[280px] m-auto md:m-0 relative h-[350px]">
                    <article className="bg-[#F5F5F5] sd relative rounded-[4px] h-[250px] p-[12px]">
                      <article className="flex items-start justify-between">
                        <p className="w-[55px] h-[26px] flex items-center justify-center bg-[#DB4444] text-[white] rounded-[4px] text-[14px] font-medium">
                          - 40%
                        </p>
                        <aside className="absolute top-2 right-2 flex flex-col gap-1">
                          <p                        
                            style={{backgroundColor: wishlist.find((el) => el.id == e.id) && localStorage.getItem('token') ? "red" : "white", color: wishlist.find((el) => el.id == e.id) && localStorage.getItem('token') ? "white" : "black",}}
                             onClick={() => {
                            if (localStorage.getItem('token')) {
                              dispatch(addToWishlist(e))
                              if (!wishlist.find(el => el.id == e.id)) {
                                toast.success('Product add to wishlist')
                              } else {
                                toast.success('Product delete from wishlist')
                              }
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
                        className="w-full h-[41px] absolute left-0 bottom-0 bb hidden bg-black text-[white]"
                      >
                        Add To Cart
                      </button>
                    </article>
                    <article className="text-start mt-[10px]">
                      <h3 className="text-[17px] font-[550]">
                        {e.productName}
                      </h3>
                      <p className="text-[#DB4444] my-[5px] text-[16px] font-semibold">
                        ${e.discountPrice}
                        <span className="line-through text-[#a79595] ml-[10px]">
                          ${e.price}
                        </span>
                      </p>
                      <img src={raiting} alt="raiting" />
                    </article>
                  </article>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </section>
    </>
  );
};

export default Info;
