import React from "react";
import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex mt-10 py-14 flex-col items-center justify-center">
      <h1 className=" text-black mb-4 text-center w-[80%] font-thin text-[40px] md:text-[60px]">
        Welcome to <strong>Trade log</strong>
      </h1>
      <p className="text-center w-[88%] md:w-[90%] text-[18px] md:text-[20px] mb-7 text-slate-700">
        Take control of your trades with <strong>Trade log</strong>, the
        ultimate trade log inverstor tool. Our intuitive platform helps you
        track trades, manage investments, and achieve your financial goals. Get
        started today and experience hassle-free and desciplined approach of
        investing
      </p>
      <Button size="lg" ><Link href="/signup">Sign Up now</Link></Button>
    </div>
  );
};

Hero.propTypes = {};

export default Hero;
