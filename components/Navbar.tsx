'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { navItems } from "@/constants";

const Navbar = () => {
  const [isOPen,setIsOpen] = useState(false)
  return (
    <nav className="max-w-screen-2xl static top-0 left-0 z-40 min-h-[60px] mt-7 mx-auto px-5 sm:px-[100px] xll::px-[146px]">
      <div className="flex border-b border-[#FFFFFF17] relative z-40 items-center justify-between pb-3 sm:pb-6 w-full h-full">
        <Link href="/">
          <Image src="/logo.svg" width={215} height={31} className=" w-[170px] sm:w-[215px] h-auto sm:h-[31px]" alt="Logo" />
        </Link>
        <ul className=" max-sm:hidden flex items-center gap-10">
          {navItems?.map((item) => (
            <li key={item.id} className="sm-text">
              <Link href={"/"}>{item.title}</Link>
            </li>
          ))}
        </ul>

        <Image onClick={() => setIsOpen(!isOPen)} src='/icons/menu.svg' width={41} height={41} className="sm:hidden cursor-pointer " alt="Menu" />
        <ul className={` ${isOPen ? 'right-0' :'right-[-2000px]'} sm:hidden absolute top-16 transition-all ease-out duration-100  flex flex-col items-start bg-[#151E25DE] p-5 gap-5 `}>
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
