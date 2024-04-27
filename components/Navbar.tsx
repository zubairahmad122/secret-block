import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navItems } from "@/constants";

const Navbar = () => {
  return (
    <nav className="max-w-screen-2xl static top-0 left-0 z-40 border-b border-[#FFFFFF17] min-h-[60px] mt-7 mx-auto px-5 sm:px-[100px] xll::px-[146px]">
      <div className="flex relative z-40 items-center justify-between w-full h-full">
        <Link href="/">
          <Image src="/logo.svg" width={215} height={31} className="w-[215px] h-[31px]" alt="Logo" />
        </Link>
        <ul className="flex items-center gap-10">
          {navItems?.map((item) => (
            <li key={item.id} className="sm-text">
              <Link href={"/"}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
