import { Input } from "@/features/components/ui/input";
import { Button } from "@/features/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logFunc } from "../../entities/store/reducers/tableSlice";
import toast from "react-hot-toast";

const API = import.meta.env.VITE_API_URL;

const LogIn = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();

  let log = async () => {
    let obj = {
      userName: name,
      password: pass,
    };
    await dispatch(logFunc(obj));
    toast.success("LogIn to succesfuly")
    window.location.href = '/'
  };
  return (
    <>
      <section className="w-[90%] md:max-w-[420px] m-auto my-[100px] md:my-[240px]">
        <h1 className="text-[36px] font-medium">Log in to Exclusive</h1>
        <p className="text-[16px] font-normal mb-[50px]">
          Enter your details below
        </p>
        <article className="flex flex-col gap-[20px]">
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-[56px]"
          />
          <Input
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            className="h-[56px]"
          />
        </article>
        <article className="flex flex-col gap-[16px] mt-[40px]">
          <Button className="bg-[white] text-[#DB4444] font-semibold text-[16px] hover:text-[white] w-full h-[56px]">
            Forget Password?
          </Button>
          <Button
            onClick={log}
            className="bg-[#DB4444] w-full font-semibold text-[16px] h-[56px]"
          >
            Log In
          </Button>
        </article>
      </section>
    </>
  );
};

export default LogIn;
