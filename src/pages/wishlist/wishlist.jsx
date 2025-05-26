import React, { useEffect, useState } from "react";
import { Button } from "../../features/components/ui/button";
import raiting from "@/shared/images/raiting.png";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToWishlist,
  getProduct,
} from "../../entities/store/reducers/tableSlice";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import toast from "react-hot-toast";

let API = import.meta.env.VITE_API_URL;

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.table.wishlist);
  const products = useSelector((state) => state.table.products);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <>
      <section className="md:max-w-[1200px] my-[80px] m-auto w-[90%]">
        <article className="flex items-center justify-between">
          <h3 className="text-[20px] font-medium">Wishlist ({wishlist.length}) </h3>
          <Button
            className={
              "w-[223px] h-[56px] bg-transparent text-[black] border-[#00000080] border-[1px] rounded-[4px] text-[16px] hover:text-[#FAFAFA] hover:border-0"
            }
          >
            Move All To Bag
          </Button>
        </article>

        <article className="flex items-center my-[30px] gap-[20px] flex-wrap">
          {wishlist.map((e) => {
            return (
              <article key={e.id} className="m-auto md:m-0">
                <article className="w-[280px] m-auto md:m-0 relative h-[350px]">
                  <article className="bg-[#F5F5F5] sd relative rounded-[4px] h-[250px] p-[12px]">
                    <article className="flex items-start justify-between">
                      <p className="w-[55px] h-[26px] flex items-center justify-center bg-[#DB4444] text-[white] rounded-[4px] text-[14px] font-medium">
                        - 40%
                      </p>
                      <aside className="absolute top-2 right-2 flex flex-col gap-1">
                        <p
                          onClick={() => {
                            dispatch(addToWishlist(e));
                            toast.success('Product delete from wishlist')    
                          }}
                          className="rounded-full p-1 shadow hover:bg-gray-100 w-[24px] bg-white h-[24px] flex items-center justify-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </p>
                      </aside>
                    </article>
                    <img
                      src={`${API}/images/${e.image}`}
                      className="mt-[10px] m-auto w-[190px] h-[180px]"
                    />
                    <button
                      onClick={() => {
                        dispatch(addToCart(e.id));
                      }}
                      className="w-full text-[18px] h-[41px] absolute left-0 bottom-0 bb hidden bg-black text-[white]"
                    >
                      Add To Cart
                    </button>
                  </article>
                  <article className="text-start mt-[10px]">
                    <h3 className="text-[17px] font-[550]">{e.productName}</h3>
                    <p className="text-[#DB4444] my-[5px] text-[16px] font-semibold">
                      ${e.discountPrice}
                      <span className="line-through text-[#a79595] ml-[10px]">
                        ${e.price}
                      </span>
                    </p>
                    <img src={raiting} alt="raiting" />
                  </article>
                </article>
              </article>
            );
          })}
        </article>
      </section>

      <section className="md:max-w-[1200px] w-[90%] my-[200px] m-auto">
        <article className="flex items-center my-[30px] justify-between">
          <h3 className="flex items-center my-[32px] gap-[10px] text-[#DB4444] text-[16px] font-semibold">
            <p className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></p>
            Just For You
          </h3>
          <Button
            className={
              "w-[150px] h-[56px] bg-transparent text-[black] border-[#00000080] border-[1px] rounded-[4px] text-[16px] hover:text-[#FAFAFA] hover:border-0"
            }
          >
            See All
          </Button>
        </article>
        <article>
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
                            dispatch(addToCart(e.id));
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
        </article>
      </section>
    </>
  );
};

export default Wishlist;
