import { Input } from "../../features/components/ui/input";
import React from "react";
import { Button } from "../../features/components/ui/button";
import google from "../../shared/images/Icon-Google.png";
import { Link, NavLink, useNavigate } from "react-router";
import { useState } from "react";
import { regFunc } from "../../entities/store/reducers/tableSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const dispatch = useDispatch();

  async function registerFunc() {
    let obj = {
      userName: name,
      phoneNumber: phone,
      email: email,
      password: password,
      confirmPassword: conPassword,
    };
    try {
      dispatch(regFunc(obj));
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConPassword("");

      navigate("/logIn");

      toast.success("Register successfuly")
    } catch (error) {
      console.error(error);
      toast.error("Registered rejected");
    }
  }

  return (
    <>
      <section className="w-[90%] md:max-w-[420px] m-auto my-[100px] md:my-[240px]">
        <h1 className="text-[36px] font-medium">Create an account</h1>
        <p className="text-[16px] font-normal mb-[50px]">
          Enter your details below
        </p>
        <article className="flex flex-col gap-[20px]">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="h-[56px]"
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="h-[56px]"
          />
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone number"
            className="h-[56px]"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            className="h-[56px]"
          />
          <Input
            value={conPassword}
            onChange={(e) => setConPassword(e.target.value)}
            placeholder="Confirm Password"
            type="password"
            className="h-[56px]"
          />
        </article>
        <article className="flex flex-col gap-[16px] mt-[40px]">
          <Button
            onClick={registerFunc}
            className="bg-[#DB4444] w-full h-[56px]"
          >
            Create Account
          </Button>

          <Button className="bg-[white] text-[black] hover:text-[white] hover:border-0 border-[1px] border-[#00000066] w-full h-[56px]">
            <img src={google} alt="icon google" />
            Sign up with Google
          </Button>
          <article className="flex items-center justify-center gap-[20px]">
            <p className="text-[gray]">Already have account?</p>
            <NavLink to={"/logIn"} className="font-semibold">
              Log in
            </NavLink>
          </article>
        </article>
      </section>
    </>
  );
};

export default SignUp;
