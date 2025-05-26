import React, { useEffect, useState } from "react";
import { Input } from "../../features/components/ui/input";
import { Button } from "../../features/components/ui/button";
import { upDate, UserProfile } from "../../entities/store/reducers/tableSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router";
import toast from "react-hot-toast";

const Profile = () => {
  let user = useSelector((state) => state.table.user);
  let dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const [ig, setImage] = useState(null);

  useEffect(() => {
    dispatch(UserProfile())
    toast.success('Succesfuly save changes')
  }, []);

  useEffect(() => {
    setEmail(user.email);
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setPhoneNumber(user.phoneNumber);
    setDob(user.dob)
    setImage(user.image)
  }, [user]);

  const handle = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Image", ig);
    formData.append("FirstName", firstName);
    formData.append("LastName", lastName);
    formData.append("Email", email);
    formData.append("PhoneNumber", phone);
    formData.append("Dob", dob);
    dispatch(upDate(formData));
  };

  return (
    <>
      <article className="w-[90%] md:max-w-[1200px] m-auto my-[40px] md:flex-row flex-col flex md:items-center justify-between">
        <article className="flex items-center gap-[12px]">
          <h3 className="text-[15px] font-semibold text-[gray]">Home</h3>
          <p className="text-[#00000080]">/</p>
          <h3 className="text-[15px] font-semibold">My Account</h3>
        </article>
        <Input
          id={"inputHome"}
          className="h-[56px] md:hidden max-md:w-[90%] block my-[20px] text-[20px] font-medium"
          placeholder="Search"
        />
      </article>

      <section className="md:max-w-[1200px] m-auto my-[100px] gap-[30px] md:flex-row flex-col flex items-start justify-between mb-[200px] w-[90%]">
        <article>
          <h3 className="text-[18px] font-semibold">Manage My Account</h3>
          <article className="pl-[28px] my-[20px]">
            <p className="text-[#DB4444] text-[18px]">My Profile</p>
            <p className="text-[#747272] text-[18px]">Address Book</p>
            <p className="text-[#747272] text-[18px]">My Payment Options</p>
          </article>
          <h3 className="text-[18px] font-semibold">My Orders</h3>
          <article className="pl-[28px] my-[20px]">
            <p className="text-[#747272] text-[18px]">My Returns</p>
            <p className="text-[#747272] text-[18px]">My Cancellations</p>
          </article>
          <h3 className="text-[18px] font-semibold">My WishList</h3>
        </article>

        <article className="md:w-[870px] w-[100%] shadow-[#00000029] shadow-[0px_0px_10px] p-[20px] md:p-[40px]">
          <h3 className="text-[#DB4444] text-[20px] font-medium">Profile</h3>
          <form onSubmit={handle}>
            <article className="flex md:flex-row flex-col gap-[16px] items-center justify-between my-[22px]">
              <Input
                className={"md:w-[385px] h-[56px] p-[16px]"}
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Input
                className={"md:w-[385px] h-[56px] p-[16px]"}
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </article>
            <article className="flex md:flex-row flex-col gap-[16px] items-center justify-between my-[22px]">
              <Input
                className={"md:w-[385px] h-[56px] p-[16px]"}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                className={"md:w-[385px] h-[56px] p-[16px]"}
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </article>
            <article className="flex md:flex-row flex-col gap-[16px] items-center justify-between my-[22px]">
              <Input
                className={"md:w-[385px] h-[56px] p-[16px]"}
                placeholder="date of birthday"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
              <Input
                className={"md:w-[385px] h-[56px] p-[16px]"}
                placeholder="image"
                type={'file'}
                onChange={(e) => setImage(e.target.files[0])}
              />
            </article>
            <article className="justify-end flex items-center md:flex-row flex-col-reverse gap-[10px] mt-[52px]">
              <Link to={"/"}>
              <Button type="button"
                className={
                  "text-[black] h-[44px] hover:text-[#FAFAFA] md:h-[56px] rounded-[4px] md:w-[214px] w-full bg-transparent text-[18px] font-normal"
                }
                >
                Cancel
              </Button>
                </Link>
              <Button type="submit"
                className={
                  "bg-[#DB4444] rounded-[4px] text-[#FAFAFA] text-[18px] font-medium w-full md:w-[214px] h-[44px] md:h-[56px]"
                }
              >
                Save Changes
              </Button> 
            </article>
          </form>
        </article>
      </section>
    </>
  );
};

export default Profile;
