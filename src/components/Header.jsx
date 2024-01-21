"use client";

import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { signIn, signOut } from "next-auth/react";

const Header = () => {
  return (
    <div className="h-14 bg-white flex justify-between text-black">
      <div className="flex p-3 items-center">
        <div className="text-black" onClick={() => signIn("google")}>
          Linked<span className="line-through">Out</span>
        </div>
      </div>
      <div className="relative w-full flex items-center">
        <input
          className="bg-gray-300 pl-8 pr-2 w-full rounded-lg"
          placeholder="Search..."
        />
        <FaSearch className="text-1xl absolute top-5 left-2" />
      </div>
      <div className="flex p-3 space-x-5">
        <CgProfile className="text-3xl" onClick={() => signOut()} />
      </div>
    </div>
  );
};

export default Header;
