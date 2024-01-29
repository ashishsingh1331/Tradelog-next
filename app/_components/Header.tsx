import React from "react";
import NavBar from "./NavBar";
import Login from "./Login";

const Header = () => {
  return (
    <header className="flex w-full justify-between h-16 items-center p-2">
      <div>Logo</div>
      {/* <Login /> */}
      <NavBar />
    </header>
  );
};

export default Header;
