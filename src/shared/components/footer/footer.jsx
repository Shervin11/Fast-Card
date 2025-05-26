import React from 'react'
import { Input } from "@/features/components/ui/input";
import socity from "@/shared/images/socity.png";

const Footer = () => {
  return (
    <><footer className="max-w-[1440px] py-[60px] px-[35px] md:px-[130px] m-auto bg-[black] text-[#eeeeee]">
        <article className="flex md:flex-row flex-col max-md:gap-[35px] md:items-start justify-between">
          <article>
            <h2 className="text-[24px] font-bold">Exclusive</h2>
            <h3 className="text-[20px] font-medium my-[24px]">Subscribe</h3>
            <p className="text-[16px] mb-[10px] font-normal">
              Get 10% off your first order
            </p>
            <Input
              placeholder="Enter your email"
              className="w-[217px] h-[48px] border-[#FAFAFA] border-[1.5px] text-[16px] font-normal rounded-[4px] border-solid"
            />
          </article>
          <ul className="leading-10">
            <li className="text-[20px] font-medium">Support</li>
            <li className="text-[16px] leading-7 font-normal">
              111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
            </li>
            <li className="text-[16px] font-normal">exclusive@gmail.com</li>
            <li className="text-[16px] font-normal">+88015-88888-9999</li>
          </ul>
          <article className="flex items-center gap-[87px]">
            <ul className="leading-10">
              <li className="text-[20px] font-medium">Account</li>
              <li className="text-[16px] font-normal">My Account</li>
              <li className="text-[16px] font-normal">Cart</li>
              <li className="text-[16px] font-normal">Wishlist</li>
              <li className="text-[16px] font-normal">Shop</li>
            </ul>
            <ul className="leading-10">
              <li className="text-[20px] font-medium">Quick Link</li>
              <li className="text-[16px] font-normal">Privacy Policy</li>
              <li className="text-[16px] font-normal">Terms Of Use</li>
              <li className="text-[16px] font-normal">FAQ</li>
              <li className="text-[16px] font-normal">Contact</li>
            </ul>
          </article>
          <article>
            <h2 className="text-[20px] mb-[24px] font-medium">Social</h2>
            <img src={socity} alt="socity" />
          </article>
        </article>
      </footer></>
  )
}

export default Footer