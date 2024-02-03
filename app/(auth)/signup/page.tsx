"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Login from "@/app/_components/Login";


const initialValues = {
  signup:{
    view:"signup",
    heading: "Elevate Your Financial Lifestyle",
    para: "Seamlessly track your expenses, optimize your spending, and make informed financial decisions like never before. Take control of your wealth and embark on a journey towards unparalleled financial freedom!",
  },
  login:{
    view:"login",
    heading: "Welcome Back to Your Financial Kingdom",
    para: "Step into your financial kingdom with ease and convenience. As a valued member of our exclusive expense tracking platform, your journey continues here. Simply enter your login credentials to access a world of financial insights and control.",
  },
}


const Signup = () => {
  const [page , setPage] = useState(initialValues.signup)
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changePage = () =>{
    if(page.view == "signup"){
      setPage(initialValues.login);
    }else{
      setPage(initialValues.signup);
    }
  }

  const handleSignup = () => {
    // Handle signup logic here
    console.log("Signup button clicked!");
  };

  return (
    <div className="min-h-screen flex md:justify-between justify-center bg-gradient-to-br from-white to-gray-100 md:ps-20">
      {page.view == "signup"?
      (<form className="self-center bg-white p-6 rounded-md shadow-md max-w-md w-full">
        <h2 className="text-4xl font-semibold mb-3 text-center">Create an account</h2>
        <p className="text-sm text-gray-400">Create an account to start tracking your expenses like a pro!</p>
        <div className="grid gap-4 md:mt-8">
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="username" className="text-gray-600">
              Username:
            </Label>
            <Input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="email" className="text-gray-600">
              Email:
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="password" className="text-gray-600">
              Password:
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
        </div>
        <div className="text-sm py-2">
            <span>Already a member?</span> 
            <button onClick={changePage} className="text-blue-800 ms-2">Login here</button>
        </div>

        <Button onClick={handleSignup} className="text-white w-full mt-6">
          Create an account
        </Button>
      </form>)
      :
      <><Login changePage={changePage} /></>
      }
      <div className="max-md:hidden px-10 md:w-[600px] h-screen flex flex-col justify-center gap-10 lg:gap-28 text-white rounded-bl-[15rem] bg-gradient-to-br from-black to-purple-950">
        <h1 className="text-2xl lg:text-5xl font-medium md:leading-normal">{page.heading}</h1>
        <p className="md:text-sm lg:text-lg  text-gray-300">
          {page.para}
        </p>
      </div>
    </div>
  );
};

export default Signup;
