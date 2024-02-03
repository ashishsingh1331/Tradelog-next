"use client";

import React, { useEffect, useRef, useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const NavBar = () => {
  const [showNavigation, setNavigationVisibility] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    //   navbar closed on ESCAPE key press
    const handleKeyPress = (event: any) => {
      if (event.key === "Escape") {
        setNavigationVisibility(false);
      }
    };

    //   navbar closed on Outside click 
    const closeNavbar = (event: any) => {
      if(!navRef.current?.contains(event.target)){
        setNavigationVisibility(false);
      }
      
    };

    window.addEventListener("keydown", handleKeyPress);
    document.addEventListener("mousedown", closeNavbar);
    
    // Cleanup function
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      document.removeEventListener("mousedown", closeNavbar);
    };
  }, []);

  return (
    <>
      {showNavigation && (
        <nav
          ref={navRef}
          id="navbar"
          className="py-4 bg-white shadow-lg shadow-gray-100 absolute flex top-16 w-full"
        >
          <ul className="w-full flex flex-col justify-around mb-10 rounded-lg">
            <li className=" md:px-4 px-2 hover:bg-gray-100">
              <Link href="/" className="block md:py-4 py-3">Home</Link>
            </li>
            <li className=" md:px-4 px-2 hover:bg-gray-100">
              <Link href="/" className="block md:py-4 py-3">About</Link>
            </li>
            <li className="md:px-4 px-2 hover:bg-gray-100">
              <Link href="/" className="block md:py-4 py-3">Services</Link>
            </li>
            <li className="md:px-4 px-2 hover:bg-gray-100">
              <Link href="/" className="block md:py-4 py-3">Contacts</Link>
            </li>
          </ul>
        </nav>
      )}
      {showNavigation && (
        <XMarkIcon
          onClick={() => setNavigationVisibility((state) => !state)}
          className="ms-3 w-10 cursor-pointer"
        />
      )}
      {!showNavigation && (
        <Bars3BottomRightIcon
          onClick={() => setNavigationVisibility((state) => !state)}
          className="ms-3 w-10 cursor-pointer"
        />
      )}
    </>
  );
};

export default NavBar;
