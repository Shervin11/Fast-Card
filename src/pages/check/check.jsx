import React, { useEffect, useState } from "react";
import { Input } from "../../features/components/ui/input";
import { getCart } from "../../entities/store/reducers/tableSlice";
import { useDispatch, useSelector } from "react-redux";
import bank from "@/shared/images/bank.png";
import { Button } from "../../features/components/ui/button";

let API = import.meta.env.VITE_API_URL;

const Check = () => {
  let data = useSelector((state) => state.table.dataOfCart);
  let dispatch = useDispatch();
  let [arr, setArr] = useState([]);

  useEffect(() => {
    setArr(data.productsInCart);
  }, [data.productsInCart]);

  useEffect(() => {
    setArr(data.productsInCart);
    dispatch(getCart());
  }, []);

  return (
    <>
      <article className="w-[90%] md:max-w-[1200px] m-auto my-[70px] flex items-center gap-[12px]">
        <h3 className="text-[15px] font-semibold text-[gray]">Product</h3>
        <p className="text-[#00000080]">/</p>
        <h3 className="text-[15px] font-semibold text-[gray]">View Cart</h3>
        <p className="text-[#00000080]">/</p>
        <h3 className="text-[15px] font-semibold">CheckOut</h3>
      </article>

      <section className="md:max-w-[1200px] flex flex-col md:flex-row items-start justify-between gap-[30px] mb-[200px] m-auto w-[90%]">
        <article className="w-full">
          <h2 className="text-[36px] font-medium">Billing Details</h2>
          <article className="md:w-[510px] p-[20px] w-full shadow-[#00000029] shadow-[1px_1px_10px] mt-[20px] flex flex-col md:items-center gap-[20px]">
            <Input
              className={"h-[56px] text-[#00000099]"}
              placeholder="First name"
            />
            <Input
              className={"h-[56px] text-[#00000099]"}
              placeholder="Last name"
            />
            <Input
              className={"h-[56px] text-[#00000099]"}
              placeholder="Street address"
            />
            <Input
              className={"h-[56px] text-[#00000099]"}
              placeholder="Apartment, floor, etc. (optional)"
            />
            <Input
              className={"h-[56px] text-[#00000099]"}
              placeholder="Town/City"
            />
            <Input
              className={"h-[56px] text-[#00000099]"}
              placeholder="Phone number"
            />
            <Input
              className={"h-[56px] text-[#00000099]"}
              placeholder="Email address"
            />
            <article className="flex md:items-center gap-[10px] text-[19px]">
              <input type="checkbox" className="w-[24px] h-[24px]" />
              <p>
                Save this information for <br className="md:hidden block" />
                faster check-out next time
              </p>
            </article>
          </article>
        </article>

        <article>
          <article className="md:w-[460px] w-full">
            {arr &&
              arr.map((e) => {
                return (
                  <article
                    className="md:h-[94px] flex items-center justify-between my-[8px]"
                    key={e.id}
                  >
                    <article className="flex items-center gap-[10px] md:gap-[20px] text-[18px]">
                      <img
                        src={`${API}images/${e.product.image}`}
                        alt="image"
                        className="w-[54px] h-[54px]"
                      />
                      <h3 className="text-[15px] w-[100px] font-semibold">
                        {e.product.productName}
                      </h3>
                    </article>
                    <h3 className="text-[18px]">
                      ${e.product.discountPrice * e.quantity}
                    </h3>
                  </article>
                );
              })}
          </article>
          <article>
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
            <article className="flex items-center justify-between">
              <article className="flex items-center gap-[5px]">
                <input type="radio" name="rad" />
                <h3 className="text-[18px]">Bank</h3>
              </article>
              <img src={bank} alt="Bank" />
            </article>
            <article className="flex items-center gap-[5px]">
              <input type="radio" name="rad" />
              <h3 className="text-[18px]">Cash on delivery</h3>
            </article>
          </article>
          <article className="flex md:w-[460px] my-[40px] rounded-[2px] shadow-[1px_1px_15px] shadow-[#00000029] p-[20px] items-center gap-[20px]">
            <Input
              placeholder="Coupon Code"
              className={"md:w-[250px] h-[56px] text-[18px]"}
            />
            <Button
              className={
                "bg-transparent text-[18px] text-[#DB4444] font-medium w-[95px] md:w-[145px] rounded-[4px] hover:text-[#FAFAFA] hover:border-0 h-[56px] border-[#00000080] border-[1px]"
              }
            >
              Apply
            </Button>
          </article>
          <Button className="w-[190px] h-[56px] bg-[#DB4444] text-[18px]">
            Place Order
          </Button>
        </article>
      </section>
    </>
  );
};

export default Check;
