import React, { useEffect, useState } from 'react'
import logo from "@/shared/images/logo.png";
import { Link, NavLink, useNavigate } from 'react-router';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/features/components/ui/dropdown-menu.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../../../features/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/features/components/ui/sheet"

import { getCart } from '../../../entities/store/reducers/tableSlice.js';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const wishlist = useSelector((state) => state.table.wishlist);
  let data = useSelector((state) => state.table.dataOfCart);
  let [wish, setWish] = useState(0);
    
    useEffect(() => {
        dispatch(getCart());
    }, []);
    
    useEffect(() => {
        setWish(wishlist.length);
    }, [wishlist]);
    

    return (
    <><header className="md:max-w-[1200px] w-[90%] m-auto">
        <nav className="my-[12px] flex items-center justify-between">
          <article className="flex items-center gap-[140px]">
            <img src={logo} alt="logo" className="md:block hidden" />
            <article className="md:hidden flex items-center gap-[12px]">
              <Sheet >
                <SheetTrigger><p>
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
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </p></SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle className='text-[18px]'>Exclusive</SheetTitle>
                    <SheetDescription>        
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "border-b-[1px] border-[#00000059]" : ""
                          }
                          to={"/"}
                        >
                          <p className="text-[19px] font-normal p-[10px] hover:bg-[#f5f0f0] h-[40px]">Home</p>
                        </NavLink>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "border-b-[1px] border-[#00000059]" : ""
                          }
                          to={"/contact"}
                        >
                          <p className="text-[19px] font-normal p-[10px] hover:bg-[#f5f0f0] h-[40px]">Contact</p>
                        </NavLink>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "border-b-[1px] border-[#00000059]" : ""
                          }
                          to={"/about"}
                        >
                          <p className="text-[19px] font-normal p-[10px] hover:bg-[#f5f0f0] h-[40px]">About</p>
                        </NavLink>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "border-b-[1px] border-[#00000059]" : ""
                          }
                          to={"/signUp"}
                        >
                          <p className="text-[19px] font-normal p-[10px] hover:bg-[#f5f0f0] h-[40px]">Sign Up</p>
                        </NavLink>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
              <h3 className="text-[24px] font-bold">Exclusive</h3>
            </article>
            <ul className="hidden md:flex items-center gap-[32px]">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-[1px] border-[#00000059]" : ""
                }
                to={"/"}
              >
                <li className="text-[18px] font-normal">Home</li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-[1px] border-[#00000059]" : ""
                }
                to={"/contact"}
              >
                <li className="text-[18px] font-normal">Contact</li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-[1px] border-[#00000059]" : ""
                }
                to={"/about"}
              >
                <li className="text-[18px] font-normal">About</li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-[1px] border-[#00000059]" : ""
                }
                to={"/signUp"}
              >
                <li className="text-[18px] font-normal">Sign Up</li>
              </NavLink>
            </ul>
          </article>
          <article className="flex items-center gap-[20px]">
            <Input
              className="w-[240px] hidden md:block text-[12px] bg-[#F5F5F5] font-medium"
              placeholder="What are you looking for?"
            />
            <Link to={localStorage.getItem("token") ? "wishlist" : "signUp"}>
              <p className="hidden md:block relative">
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
                <span
                  style={{
                    display: localStorage.getItem("token") ? "flex" : "none",
                  }}
                  className="w-[20px] rounded-full flex items-center justify-center text-[#FAFAFA] top-[-10px] right-[-10px] absolute h-[20px] bg-[#DB4444]"
                >
                  {wish}
                </span>
              </p>
            </Link>
            <Link to={localStorage.getItem("token") ? "cart" : "signUp"}>
              <p className="relative">
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
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                <span
                  style={{
                    display: localStorage.getItem("token") ? "flex" : "none",
                  }}
                  className="w-[20px] rounded-full flex items-center justify-center text-[#FAFAFA] top-[-10px] right-[-10px] absolute h-[20px] bg-[#DB4444]"
                >
                  {data.totalProducts}
                </span>
              </p>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <p style={{
                  display: localStorage.getItem("token") ? "block" : "none",
                }}>
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
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </p>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="border-0"
              >
                <Link to={"/profile"}>
                  <DropdownMenuItem>
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
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                    </p>
                    <p>Account</p>
                  </DropdownMenuItem>
                </Link>
                <Link to={"checkOut"}>
                  <DropdownMenuItem>
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
                          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                      </svg>
                    </p>
                    <p>My Order</p>
                  </DropdownMenuItem>
                </Link>

                <Link to={"/wishlist"}>
                  <DropdownMenuItem className="flex md:hidden">
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
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                      </svg>
                    </p>
                    <p>Wishlist</p>
                  </DropdownMenuItem>
                </Link>

                <DropdownMenuItem
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/")
                    window.location.reload()
                  }}
                >
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
                        d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                      />
                    </svg>
                  </p>
                  <p>Logout</p>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </article>
        </nav>
      </header></>
  )
}

export default Header