import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  delFromCart,
  getCart,
  increase,
  reduce,
} from "../../entities/store/reducers/tableSlice";
import { Button } from "../../features/components/ui/button";
import { Input } from "../../features/components/ui/input";
import { Link } from "react-router";
import { useNavigate } from "react-router";

let API = import.meta.env.VITE_API_URL;

const Cart = () => {
  let data = useSelector((state) => state.table.dataOfCart);
  let [arr, setArr] = useState([]);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(getCart());
    setArr(data.productsInCart);
  }, []);

  useEffect(() => {
    setArr(data.productsInCart);
  }, [data.productsInCart]);

  return (
    <>
      <article className="w-[90%] md:max-w-[1200px] m-auto my-[70px] flex items-center gap-[12px]">
        <h3 className="text-[15px] font-semibold text-[gray]">Home</h3>
        <p className="text-[#00000080]">/</p>
        <h3 className="text-[15px] font-semibold">Cart</h3>
      </article>

      <section className="w-[90%] md:max-w-[1200px] my-[100px] m-auto">
        <article className="hidden md:flex items-center gap-[211px]">
          <p className="text-[#00000099] w-[170px] text-[16px]">Product</p>
          <p className="text-[#00000099] text-[16px]">Price</p>
          <p className="text-[#00000099] text-[16px]">Quantity</p>
          <p className="text-[#00000099] text-[16px]">Subtotal</p>
        </article>

        <article className="mt-[30px]">
          {arr &&
            arr.map((e) => {
              return (
                <article
                  className="md:h-[94px] shadow-[1px_1px_15px] flex items-center justify-between shadow-[#00000014] my-[8px] py-[20px] px-[32px]"
                  key={e.id}
                >
                  <article className="flex md:flex-row flex-col md:items-center gap-[10px] md:gap-[20px] w-[180px] text-[18px]">
                    <img
                      src={`${API}images/${e.product.image}`}
                      alt="image"
                      className="w-[54px] h-[54px]"
                    />
                    <h3 className="text-[15px] w-[100px] font-semibold">
                      {e.product.productName}
                    </h3>
                    <h3 className="block md:hidden text-[18px]">
                      ${e.product.discountPrice}
                    </h3>
                  </article>
                  <h3 className="w-[100px] md:block hidden text-[18px]">
                    ${e.product.discountPrice}
                  </h3>
                  <article className="w-[72px] hidden md:flex items-center justify-between py-[6px] px-[12px] text-[18px] h-[44px] border-[1.5px] border-[#00000066] rounded-[4px]">
                    <p>
                      {e.quantity < 10 ? 0 : ""}
                      {e.quantity}
                    </p>
                    <article>
                      <p onClick={() => dispatch(increase(e.id))}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 15.75 7.5-7.5 7.5 7.5"
                          />
                        </svg>
                      </p>
                      <p onClick={() => dispatch(reduce(e.id))}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </p>
                    </article>
                  </article>
                  <h3 className="text-[18px] hidden md:flex w-[100px]">
                    ${e.product.discountPrice * e.quantity}
                  </h3>
                  <p
                    className="hidden md:flex"
                    onClick={() => dispatch(delFromCart(e.id))}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-5 text-[#DB4444]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </p>
                  <article className="md:hidden flex flex-col gap-[10px]">
                    <article className="w-[72px] flex items-center justify-between py-[6px] px-[12px] text-[18px] h-[44px] border-[1.5px] border-[#00000066] rounded-[4px]">
                      <p>
                        {e.quantity < 10 ? 0 : ""}
                        {e.quantity}
                      </p>
                      <article>
                        <p onClick={() => dispatch(increase(e.id))}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-3"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 15.75 7.5-7.5 7.5 7.5"
                            />
                          </svg>
                        </p>
                        <p onClick={() => dispatch(reduce(e.id))}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-3"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </p>
                      </article>
                    </article>
                    <article className="flex items-center justify-between">
                      <h3 className="text-[18px]">
                        ${e.product.discountPrice * e.quantity}
                      </h3>
                      <p onClick={() => dispatch(delFromCart(e.id))}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="size-5 text-[#DB4444]"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </p>
                    </article>
                  </article>
                </article>
              );
            })}
        </article>

        <article className="my-[44px] flex items-center justify-between">
          <Link to={"/"}>
            <Button
              className={
                "bg-transparent text-[black] text-[18px] font-medium w-[218px] rounded-[4px] hover:text-[#FAFAFA] hover:border-0 h-[56px] border-[#00000080] border-[1px]"
              }
            >
              Return To Shop
            </Button>
          </Link>
          <article className="md:flex hidden items-center gap-[10px]">
            <Button
              className={
                "bg-transparent text-[black] text-[18px] font-medium w-[195px] rounded-[4px] hover:text-[#FAFAFA] hover:border-0 h-[56px] border-[#00000080] border-[1px]"
              }
            >
              Update Cart
            </Button>
            <Button
              onClick={() => dispatch(clearCart())}
              className={
                "bg-transparent text-[18px] text-[#DB4444] font-medium w-[195px] rounded-[4px] hover:text-[#FAFAFA] hover:border-0 h-[56px] border-[#00000080] border-[1px]"
              }
            >
              Remove all
            </Button>
          </article>
          <article className="flex md:hidden items-center gap-[10px]">
            <p>
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
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </p>
            <p onClick={() => dispatch(clearCart())}>
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
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </p>
          </article>
        </article>

        <article className="flex md:flex-row flex-col items-start gap-[40px] justify-between my-[80px]">
          <article className="flex items-center gap-[20px]">
            <Input
              placeholder="Coupon Code"
              className={
                "md:w-[300px] h-[56px] border-[1px] border-black text-[18px]"
              }
            />
            <Button
              className={
                "bg-transparent text-[18px] text-[#DB4444] font-medium w-[95px] md:w-[145px] rounded-[4px] hover:text-[#FAFAFA] hover:border-0 h-[56px] border-[#00000080] border-[1px]"
              }
            >
              Apply
            </Button>
          </article>

          <article className="w-full md:w-[468px] border-[1px] py-[20px] px-[22px] border-[black] rounded-[4px]">
            <h3 className="text-[20px] font-semibold">Cart Total</h3>
            <article className="flex my-[20px] items-center justify-between">
              <h3 className="text-[18px]">Subtotal:</h3>
              <h3>${data.totalDiscountPrice}</h3>
            </article>
            <article className="flex items-center justify-between">
              <h3 className="text-[18px]">Shipping:</h3>
              <h3>Free</h3>
            </article>
            <hr className="my-[20px]" />
            <article className="flex mb-[20px] items-center justify-between">
              <h3 className="text-[20px] font-semibold">Total:</h3>
              <h3 className="text-[20px] font-semibold">
                ${data.totalDiscountPrice}
              </h3>
            </article>
            <article className="text-center">
              <Link to={"/checkOut"}>
                <Button className="w-[260px] bg-[#DB4444] rounded-[4px] text-[18px] h-[56px]">
                  Procees to checkout
                </Button>
              </Link>
            </article>
          </article>
        </article>
      </section>
    </>
  );
};

export default Cart;
