import swiperElect from "../../shared/images/hand-drawn-electronics-store-sale-banner-template_23-2151138129.png";
import swiperLap from "../../shared/images/electronics-store-template-design_23-2151143839.avif";
import {
  getProduct,
  getCategory,
  addToCart,
  addToWishlist,
} from "../../entities/store/reducers/tableSlice";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import swiperIphone from "../../shared/images/swiper_Iphone.png";
import { Button } from "../../features/components/ui/button";
import headphones from "../../shared/images/headphones.png";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../../features/components/ui/input";
import { useEffect, useRef, useState } from "react";
import security from "../../shared/images/security.png";
import services from "../../shared/images/Services.png";
import { Swiper, SwiperSlide } from "swiper/react";
import raiting from "../../shared/images/raiting.png";
import iphone from "../../shared/images/iphone.png";
import JBL from "../../shared/images/JBL.png";
import { Link } from "react-router";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles/swiper.css";
import "./styles/home.css";
import React from "react";
import "swiper/css";
import "../../app/styles/global.css";
import toast from "react-hot-toast";

let API = import.meta.env.VITE_API_URL;

const Home = () => {
  const products = useSelector((state) => state.table.products);
  const categories = useSelector((state) => state.table.categories);
  const dispatch = useDispatch();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const prevValue = useRef(null);
  const nextValue = useRef(null);
  const [time, setTime] = useState({});
  const wishlist = useSelector((state) => state.table.wishlist);
  
  useEffect(() => {
    dispatch(getProduct());
    dispatch(getCategory());
  }, []);

  useEffect(() => {
    const skidkaDate = new Date();
    skidkaDate.setDate(skidkaDate.getDate() + 4);

    const timer = setInterval(() => {
      const nowDate = new Date();
      const diff = skidkaDate - nowDate;

      if (diff <= 0) {
        clearInterval(timer);
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setTime({ days, hours, minutes, seconds });
      }
    }, 1000);
  }, []);

  return (
    <>
      <section className="my-[50px] md:max-w-[1200px] w-[100%] m-auto md:flex-row flex-col flex items-center justify-between">
        <Input
          id={"inputHome"}
          className="h-[56px] md:hidden max-md:w-[90%] block text-[20px] font-medium"
          placeholder="Search"
        />
          <ul className="md:w-[238px] max-md:m-auto w-[95%] max-md:flex flex-wrap gap-[20px] max-md:my-[30px] md:h-[344px] md:border-r-[1px] md:border-[#0000001A]">
            {categories.map((e) => {
              return (
              <Link key={e.id} to={"/product"}>
                <li className="p-2 text-[15px] max-md:rounded-[4px] max-md:flex max-md:items-center max-md:justify-center max-md:bg-[#F5F5F5] font-medium" >{e.categoryName}</li>
              </Link>
              );
              })}
          </ul>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper dd"
        >
          <SwiperSlide>
            <span className="md:hidden block">
              <img src={iphone} alt="iphone" />
            </span>
            <span className="md:block hidden">
              <img src={swiperIphone} alt="swiper Iphone" />
            </span>
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiperLap} alt="swiper Laptop" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiperElect} alt="swiper Electronic" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiperIphone} alt="swiper Iphone" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiperElect} alt="swiper Electronic" />
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="md:max-w-[1200px] w-[90%] m-auto">
        <h3 className="flex items-center gap-[10px] text-[#DB4444] text-[16px] font-semibold">
          <p className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></p>
          Today’s
        </h3>

        <article className="flex md:flex-row flex-col my-[20px] items-center justify-between">
          <article className="flex md:flex-row flex-col items-start md:items-center md:mt-[20px] mb-[30px] gap-[10px] md:gap-20">
            <h2 className="text-4xl font-bold py-5">Flash Sales</h2>
            <article className="flex items-center gap-5">
              <article className="text-start">
                <h2 className="text-[15px] font-bold">Days</h2>
                <h2 className="text-4xl font-bold">{time.days}</h2>
              </article>
              <h2 className="text-3xl font-bold text-[#E07575]">:</h2>
              <article className="text-start">
                <h2 className="text-[15px] font-bold">Hours</h2>
                <h2 className="text-4xl font-bold">{time.hours}</h2>
              </article>
              <h2 className="text-3xl font-bold text-[#E07575]">:</h2>
              <article className="text-start">
                <h2 className="text-[15px] font-bold">Minutes</h2>
                <h2 className="text-4xl font-bold">{time.minutes}</h2>
              </article>
              <h2 className="text-3xl font-bold text-[#E07575]">:</h2>
              <article className="text-start">
                <h2 className="text-[15px] font-bold">Seconds</h2>
                <h2 className="text-4xl font-bold">{time.seconds}</h2>
              </article>
            </article>
          </article>

          <article className="md:flex hidden items-center gap-[10px]">
            <p
              ref={prevValue}
              className="w-[46px] h-[46px] bg-[#F5F5F5] flex items-center justify-center rounded-full"
            >
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
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </p>
            <p
              ref={nextValue}
              className="w-[46px] h-[46px] bg-[#F5F5F5] flex items-center justify-center rounded-full"
            >
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
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </p>
          </article>
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
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevValue.current;
              swiper.params.navigation.nextEl = nextValue.current;
              swiper.navigation.init();
              swiper.navigation.update();
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
                                  }
                                  else {
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
        </article>

        <article className="w-[234px] m-auto my-[32px]">
          <Link to={"/product"}>
            <Button className="bg-[#DB4444] w-[234px] h-[56px] rounded-[4px] text-[16px] font-medium">
              View All Products
            </Button>
          </Link>
        </article>
      </section>

      <hr className="my-[60px] max-w-[1200px] m-auto border-[0.5px] border-[#00000027]" />

      <section className="md:max-w-[1200px] w-[90%] m-auto">
        <h3 className="flex items-center gap-[10px] text-[#DB4444] text-[16px] font-semibold">
          <p className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></p>
          Categories
        </h3>

        <article className="flex md:flex-row flex-col my-[20px] items-center justify-between">
          <h2 className="text-[35px] md:text-[36px] font-semibold my-[25px]">
            Browse By Category
          </h2>
          <article className="md:flex hidden items-center gap-[10px]">
            <p
              ref={prevRef}
              className="w-[46px] h-[46px] bg-[#F5F5F5] flex items-center justify-center rounded-full"
            >
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
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </p>
            <p
              ref={nextRef}
              className="w-[46px] h-[46px] bg-[#F5F5F5] flex items-center justify-center rounded-full"
            >
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
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </p>
          </article>
        </article>

        <article>
          <Swiper
            loop={true}
            slidesPerView={5}
            spaceBetween={10}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
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
              "@2.00": {
                slidesPerView: 5,
                spaceBetween: 60,
              },
            }}
            className="mySwiper ws"
          >
            {categories.map((e) => {
              return (
                <SwiperSlide key={e.id}>
                  <Link to={"/product"}>
                    <article className="w-[170px] max-md:m-auto h-[145px] border-[#0000004D] border-[1px] hover:border-0 transition-colors duration-300 hover:bg-[#DB4444] hover:text-[white] rounded-[4px] flex items-center flex-col justify-center gap-[10px]">
                      <img
                        src={`${API}images/${e.categoryImage}`}
                        alt="images"
                        className="w-[76px] h-[76px]"
                      />
                      <p className="text-[16px] font-normal">
                        {e.categoryName}
                      </p>
                    </article>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </article>
      </section>

      <hr className="my-[60px] max-w-[1200px] m-auto border-[0.5px] border-[#00000027]" />

      <section className="md:max-w-[1200px] w-[90%] m-auto">
        <h3 className="flex items-center gap-[10px] text-[#DB4444] text-[16px] font-semibold">
          <p className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></p>
          This Month
        </h3>
        <article className="flex md:flex-row flex-col my-[20px] items-start md:items-center justify-between">
          <h2 className="text-[33px] md:text-[36px] font-semibold my-[25px]">
            Best Selling Products
          </h2>
          <Link to={"/product"}>
            <Button className="bg-[#DB4444] w-[156px] h-[56px]">
              View All
            </Button>
          </Link>
        </article>

        <article className="flex items-center md:flex-row flex-col max-md:gap-[30px] justify-between">
            {products &&
              products.slice(0, 4).map((e) => {
                return (
                  <article key={e.id}>
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
                                  }
                                  else {
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
                          className="w-full h-[41px] text-[18px] absolute left-0 bottom-0 bb hidden bg-black text-[white]"
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
                  </article>
                );
              })}
        </article>
      </section>

      <section className="bg-[#000000] my-[60px] md:flex-row md:max-w-[1200px] w-[100%] m-auto flex-col px-[10px] flex items-start py-[69px] md:px-[56px] justify-between ">
        <article>
          <p className="text-[#00FF66] text-[17px] font-semibold">Categories</p>
          <h2 className="text-[30px] md:text-[48px] text-[#FAFAFA] font-semibold">
            Enhance Your <br className="hidden md:block" /> Music Experience
          </h2>
          <article className="flex items-center gap-[32px] my-[40px]">
            <article className="w-[62px] flex flex-col items-center justify-center h-[62px] rounded-full bg-white">
              <h3 className="text-[18px] font-medium">{time.days}</h3>
              <p className="text-[13px] font-medium">Days</p>
            </article>
            <article className="w-[62px] flex flex-col items-center justify-center h-[62px] rounded-full bg-white">
              <h3 className="text-[18px] font-medium">{time.hours}</h3>
              <p className="text-[13px] font-medium">Hours</p>
            </article>
            <article className="w-[62px] flex flex-col items-center justify-center h-[62px] rounded-full bg-white">
              <h3 className="text-[18px] font-medium">{time.minutes}</h3>
              <p className="text-[13px] font-medium">Minutes</p>
            </article>
            <article className="w-[62px] flex flex-col items-center justify-center h-[62px] rounded-full bg-white">
              <h3 className="text-[18px] font-medium">{time.seconds}</h3>
              <p className="text-[13px] font-medium">Seconds</p>
            </article>
          </article>
          <Button className="bg-[#00FF66] max-md:mb-[30px] w-[171px] h-[56px] text-[#212121] text-[16px] font-semibold hover:text-[#c7c1c1]">
            Buy Now!
          </Button>
        </article>
        <img src={JBL} alt="JBL" />
      </section>

      <section className="w-[90%] md:max-w-[1200px] my-[60px] m-auto">
        <p className="flex items-center gap-[10px] text-[#DB4444] text-[16px] font-semibold">
          <span className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></span>
          Our Products
        </p>
        <h2 className="text-[33px] md:text-[36px] font-semibold my-[25px]">
          Explore Our Products
        </h2>

        <article className="flex items-center gap-[20px] flex-wrap">
          {products &&
            products.map((e) => {
              return (
                <article
                  key={e.id}
                  className="w-[280px] m-auto md:m-0 relative h-[350px]"
                >
                  <article className="bg-[#F5F5F5] sd relative rounded-[4px] h-[250px] p-[12px]">
                    <article className="flex items-start justify-between">
                      <article className="flex items-start justify-between">
                        <p className="w-[55px] h-[26px] flex items-center justify-center bg-[#00FF66] text-[white] rounded-[4px] text-[14px] font-medium">
                          NEW
                        </p>
                        <aside className="absolute top-2 right-2 flex flex-col gap-1">
                          <p
                            style={{backgroundColor: wishlist.find((el) => el.id == e.id) && localStorage.getItem('token') ? "red" : "white", color: wishlist.find((el) => el.id == e.id) && localStorage.getItem('token') ? "white" : "black",}}
                            onClick={() => {
                                if (localStorage.getItem('token')) {
                                  dispatch(addToWishlist(e))
                                  if (!wishlist.find(el => el.id == e.id)) {
                                    toast.success('Product add to wishlist')
                                  }
                                  else {
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
          <Link to={"/product"}>
            <Button className="bg-[#DB4444] w-[234px] h-[56px] rounded-[4px] text-[16px] font-medium">
              View All Products
            </Button>
          </Link>
        </article>
      </section>

      <section className="md:max-w-[1200px] my-[60px] w-[100%] m-auto">
        <p className="flex items-center gap-[10px] text-[#DB4444] text-[16px] font-semibold">
          <span className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></span>
          Featured
        </p>
        <h2 className="text-[33px] md:text-[36px] font-semibold my-[25px]">
          New Arrival
        </h2>
        <article className="text-[#FAFAFA] md:flex-row flex-col gap-[30px] flex items-start justify-between">
          <article className="relative h-[287px] w-[100%] md:h-[570px] bg-[black]">
            <article className="flex flex-col absolute bottom-0 justify-end bg-[url('@/shared/images/ps5.png')] p-[32px] w-[100%] h-[287px] md:h-[500px] bg-no-repeat">
              <h3 className="text-[24px] font-semibold">PlayStation 5</h3>
              <p className="text-[14px] font-normal my-[16px]">
                Black and White version of the PS5 <br /> coming out on sale.
              </p>
              <p className="text-[16px] font-medium border-b-[1px] border-[gray] w-[75px]">
                Shop Now
              </p>
            </article>
          </article>
          <article className="flex flex-col w-[100%] gap-[32px]">
            <article className="flex flex-col justify-end bg-[url('@/shared/images/attractive-woman.png')] h-[284px] bg-no-repeat bg-[#0a0a0a] w-full md:w-[570px] p-[32px]">
              <h3 className="text-[24px] font-semibold">Women’s Collections</h3>
              <p className="text-[14px] font-normal my-[16px]">
                Featured woman collections that <br /> give you another vibe.
              </p>
              <p className="text-[16px] font-medium border-b-[1px] border-[gray] w-[75px]">
                Shop Now
              </p>
            </article>
            <article className="flex items-center md:flex-row flex-col gap-[30px]">
              <article className="h-[254px] w-[100%] md:w-[270px] bg-[#0a0a0a]">
                <article className="flex flex-col justify-end mt-[20px] m-auto bg-[url('@/shared/images/speakers.png')] bg-no-repeat w-[50%] md:w-[220px] h-[212px]">
                  <h3 className="text-[24px] font-semibold">Speakers</h3>
                  <p className="text-[14px] font-normal my-[10px]">
                    Amazon wireless speakers
                  </p>
                  <p className="text-[16px] font-medium border-b-[1px] border-[gray] w-[75px]">
                    Shop Now
                  </p>
                </article>
              </article>
              <article className="h-[254px] w-[100%] md:w-[270px] bg-[#0a0a0a]">
                <article className="flex flex-col justify-end mt-[20px] m-auto bg-[url('@/shared/images/gucci.png')] w-[50%] md:w-[220px] h-[212px] bg-no-repeat bg-[#110909]">
                  <h3 className="text-[24px] font-semibold">Perfume</h3>
                  <p className="text-[14px] font-normal my-[10px]">
                    GUCCI INTENSE OUD EDP
                  </p>
                  <p className="text-[16px] font-medium border-b-[1px] border-[gray] w-[75px]">
                    Shop Now
                  </p>
                </article>
              </article>
            </article>
          </article>
        </article>
      </section>

      <section className="w-[90%] md:max-w-[1200px] md:flex-row gap-[50px] flex-col flex items-center justify-between my-[100px] m-auto">
        <article className="text-center">
          <img src={services} alt="services" className="m-auto" />
          <h3 className="text-[20px] mt-[24px] font-semibold">
            FREE AND FAST DELIVERY
          </h3>
          <p className="text-[16px] font-normal">
            Free delivery for all orders over $140
          </p>
        </article>
        <article className="text-center">
          <img src={headphones} alt="services" className="m-auto" />
          <h3 className="text-[20px] mt-[24px] font-semibold">
            24/7 CUSTOMER SERVICE
          </h3>
          <p className="text-[16px] font-normal">
            Friendly 24/7 customer support
          </p>
        </article>
        <article className="text-center">
          <img src={security} alt="services" className="m-auto" />
          <h3 className="text-[20px] mt-[24px] font-semibold">
            MONEY BACK GUARANTEE
          </h3>
          <p className="text-[16px] font-normal">
            We reurn money within 30 days
          </p>
        </article>
      </section>
    
    </>
  );
};

export default Home;