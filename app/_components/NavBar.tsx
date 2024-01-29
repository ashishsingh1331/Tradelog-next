"use client";

import React, { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const [showNavigation, setNavigationVisibility] = useState(false);
  return (
    <>
      {showNavigation && (
        <nav className=" absolute flex top-16 h-[calc(100vh-4rem)] w-full bg-white">
          <ul className="w-full">
            <li>Item 1</li>
          </ul>
        </nav>
      )}
      {showNavigation && (
        <XMarkIcon
          onClick={() => setNavigationVisibility((state) => !state)}
          className="w-10"
        />
      )}
      {!showNavigation && (
        <Bars3BottomRightIcon
          onClick={() => setNavigationVisibility((state) => !state)}
          className="w-10 lg:hidden"
        />
      )}
    </>
  );
};

export default NavBar;
