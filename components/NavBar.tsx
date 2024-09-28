import { Calendar, Menu, MessageCircleCode, Search } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ProfileDropDown } from "./ProfileDropDown";

const NavBar = () => {
  return (
    <nav className="flex w-full justify-between py-3 border-b">
      <div className="flex items-center align-middle">
        <Link
          href="/"
          className="font-mono font-bold text-xl hover:text-yellow-500 flex items-center mx-2 gap-2"
        >
          {" "}
          {/* <span><img src="/logo.png" alt="logo" /></span> */}
          <span className=" ml-1">FICTION READ</span>
          
        </Link>
      </div>

      <ul className="flex">
        <div className="flex border border-slate-800">
          <input
            type="text"
            className="bg-background focus:w-32 w-20 transition-all focus:outline-0 pl-5"
            placeholder="Search"
          />
          <Search className="mx-2 h-10 w-10 p-2" />
        </div>
        <div className="flex mx-4"><ProfileDropDown />
          <MessageCircleCode className="mx-2 hover:bg-slate-700 p-2 h-10 w-10 rounded-md max-md:hidden" />
          <Calendar className="mx-2 hover:bg-slate-700 p-2 h-10 w-10 rounded-md max-md:hidden" />
          
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
