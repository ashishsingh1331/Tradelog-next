import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="relative flex w-full justify-between h-16 items-center p-2">
      <div>Logo</div>
      <NavBar />
    </header>
  );
};

export default Header;
