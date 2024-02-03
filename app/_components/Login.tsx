"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const Login = ({ changePage }:any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();


  const handleLogin = () => {
    if(email !== ""  && password !== ""){
      router.push("/dashboard")
    }
  };

  return (
    <>
      <form className="self-center md:w-[35rem]  bg-white p-6 rounded-md shadow-md max-w-md w-full">
        <h2 className="text-4xl font-semibold mb-3 text-center">Login</h2>
        <p className="text-sm text-gray-400 text-center">
          Securely access your Expense Tracker account.
        </p>
        <div className="grid gap-4 md:mt-8">
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
          <span>Not a member?</span>
          <button onClick={changePage} className="text-blue-800 ms-2">
            Sign up here
          </button>
        </div>

        <Button onClick={handleLogin} className="text-white w-full mt-6">
          Login
        </Button>
      </form>
    </>
  );
};

export default Login;
