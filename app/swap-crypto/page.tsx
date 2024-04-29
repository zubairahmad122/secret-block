"use client";
import ColStepper from "@/components/ColStepper";
import MarketCard from "@/components/MarketCard";
import { homesec4smname, marketTodayTitlte, sec2CardData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const page = () => {
  const [expended, setExpended] = useState(false);
  return (
    <main className="Home">
      {/* hero  section  */}
      <section id="" className="relative mb-[100px] w-full h-full min-h-screen">
        <div className="main-hero max-w-[1440px] mx-auto w-full pt-[171px] sm:pt-[40px] relative z-10  px-5 md:px-[70px] lg::px-[100px] xll::px-[146px] flex items-center flex-wrap-reverse justify-center ">
          <div className="hero-right w-full flex-col gap-9 flex justify-center items-center ">
            <div className="exc-stepper flex items-center justify-between relative w-full">
              <div className="xline"></div>
              <div className="flex relative z-10 gap-3 items-center justify-center flex-col">
                <h1 className="exstep-ac  text-[24px] font-semibold w-[60px] sm:w-[73px] h-[60px] sm:h-[73px] rounded-full flex items-center justify-center text-white">
                  <Image
                    src="/icons/check.svg"
                    width={34}
                    height={34}
                    alt="btc icon"
                    className=" w-6 h-6 sm:w-[34px] sm:h-[34px]"
                  />
                </h1>
                <p className="text-[#FFFFFF6E] text-[12px] sm:text-[16px] tracking-[3%] font-normal">
                  Choose Currency
                </p>
              </div>
              <div className="flex relative z-10 gap-3 items-center justify-center flex-col">
                <h1 className="exstep-nx text-[24px] font-semibold w-[60px] sm:w-[73px] h-[60px] sm:h-[73px] rounded-full flex items-center justify-center text-white">
                  2
                </h1>
                <p className="text-[#FFFFFF6E] text-[12px] sm:text-[16px] tracking-[3%] font-normal">
                  Enter the address
                </p>
              </div>
              <div className="flex relative z-10 gap-3 items-center justify-center flex-col">
                <h1 className="exstep text-[24px] font-semibold w-[60px] sm:w-[73px] h-[60px] sm:h-[73px] rounded-full flex items-center justify-center text-white">
                  3
                </h1>
                <p className="text-[#FFFFFF6E] text-[12px] sm:text-[16px] tracking-[3%] font-normal">
                  Create an exchange
                </p>
              </div>
            </div>
            <div className="bg-[#151E25DE] flex flex-col justify-center  backdrop-blur-lg gr-border w-full md:w-[758px] min-h-[500px] py-[41px]">
              {/* upper  */}
              <div className=" pl-[15px] xsm:pl-[41px] inset-0 relative first-letter: pr-[15px] xsm:pr-[37px] flex items-center justify-between">
                <Image
                  src="/logo.svg"
                  width={175}
                  height={25}
                  alt="lock image"
                  className=" w-[131px] sm:w-[175px] h-auto sm:h-[25px]"
                />

                <button className="bg-black rounded-[20px] p-2 normal-text">
                  CRYPTO EXCHANGE
                </button>
              </div>

              {/* bottom  */}

              <div className="px-[15px] xsm:px-[37px] inset-0 relativej mt-[35px]">
                {/* you send   */}
                <div className="flex items-center gap-[6px]">
                  <div className="flex-1 sm:w-[257px] flex items-center justify-between py-5 px-2 sm:px-[30px]  rounded-[10px] h-[64px] bg-[#00000036]">
                    <p className="text-[#FFFFFF6E] smm-text">You send</p>

                    <input
                      type="text"
                      className="text-white smm-text border-none outline-none bg-transparent w-4"
                      name=""
                      value={0.1}
                      id=""
                    />
                  </div>

                  <div className=" w-[97px] sm:w-[172px] flex items-center justify-between py-5 px-[10px] sm:px-[30px] rounded-[10px] h-[64px] border border-[#FFFFFF12] bg-[#FFFFFF0D]">
                    <div className="flex items-center gap-[7px]">
                      <Image
                        src="/icons/btc.svg"
                        width={24}
                        height={24}
                        alt="btc icon"
                      />

                      <p className="text-[#FFFFFF6E] smm-text">BTC</p>
                    </div>
                    <p className="text-[#FFFFFF6E] text-[18px]">
                      {" "}
                      <MdKeyboardArrowDown />
                    </p>
                  </div>
                </div>
                {/* you send   */}

                {/* send process   */}
                <div className="flex items-center  h-[64px] justify-end gap-[6px] relative">
                  <span className="w-[2px] h-[2px] absolute right-[85px] top-0  bg-[#FFFFFF0D]"></span>
                  <span className="w-[2px] h-[4.4px] absolute right-[85px] top-[6px]  bg-[#FFFFFF0D]"></span>
                  <span className="w-[2px] h-[4.6px] absolute right-[85px] bottom-[6px]  bg-[#FFFFFF0D]"></span>
                  <span className="w-[2px] h-[1px] absolute right-[85px] bottom-[13px]  bg-[#FFFFFF0D]"></span>
                  <span className="w-[2px] h-[2px] absolute right-[85px] bottom-0  bg-[#FFFFFF0D]"></span>

                  <div className=" w-[115px] sm:w-[172px]  h-[35px] border border-[#3B7CFB] bg-[#FFFFFF0D] rounded-xl flex items-center justify-center py-2 px-[2px] sm:px-[15px]  ">
                    <p className="text-[#FFFFFF6E] smm-text">
                      ETH 1 ≈ BTC 1.258
                    </p>
                  </div>
                </div>
                {/* send procces   */}

                {/* you get   */}
                <div className="flex items-center gap-[6px]">
                  <div className="flex-1 sm:w-[257px] flex items-center justify-between py-5 px-2 sm:px-[30px] rounded-[10px] h-[64px] bg-[#00000036] gap-[24px]">
                    <p className="text-[#FFFFFF6E] w-[55px] smm-text">
                      You get
                    </p>

                    <input
                      type="text"
                      className="text-white smm-text border-none outline-none bg-transparent  w-[94px] sm:w-[109px]"
                      name=""
                      value={"=0.0000000000 "}
                      id=""
                    />
                  </div>

                  <div className=" w-[97px] sm:w-[172px]  flex items-center justify-between py-5  px-[10px] sm:px-[30px] rounded-[10px] h-[64px] border border-[#FFFFFF12] bg-[#FFFFFF0D]">
                    <div className="flex items-center gap-[7px]">
                      <Image
                        src="/icons/btc.svg"
                        width={24}
                        height={24}
                        alt="btc icon"
                      />
                      <p className="text-[#FFFFFF6E] smm-text">BTC</p>
                    </div>
                    <p className="text-[#FFFFFF6E] text-[18px]">
                      {" "}
                      <MdKeyboardArrowDown />
                    </p>
                  </div>
                </div>
                {/* you get   */}

                {/* you get   */}
                <div className="flex flex-col  mt-10 justify-center gap-[9px]">
                  <p className="text-[14px] font-normal tracking-[3%] text-white">
                    Enter Wallet Address
                  </p>
                  <div className="flex-1 flex items-center justify-between py-3 px-2 sm:px-[30px] rounded-[10px] h-[64px] relative bg-[#00000036] gap-[24px]">
                    <input
                      type="text"
                      className="text-[#FFFFFF6E] smm-text border-none outline-none bg-transparent  w-full"
                      name=""
                      placeholder="The Recipient’s Ethereum Address"
                      id=""
                    />
                    <Image
                      src="/icons/qr.svg"
                      width={42}
                      height={42}
                      alt="btc icon"
                    />
                  </div>
                </div>
                {/* rec email   */}

                <button className="w-full py-4 px-1 xsm:px-[53px] rounded-[50px] cursor-pointer sec-normal-text mt-[43px] exhbtn">
                  Create an Exchange
                </button>

                <p className="text-[14px] font-normal tracking-[3%] text-[#FFFFFF6E] text-center mt-5">
                  By clicking Create an exchange, I agree to the Privacy
                  Policy and {" "}
                  <Link href={"/"} className="underline">
                    Terms of Service
                  </Link>
                  .
                </p>

                <div className="w-full text-center flex py-4 items-center justify-center">
                  <button onClick={() => setExpended(!expended)} className="flex absolute z-40 bottom-[-20px] items-center justify-center border-[#3B7CFB] rounded-xl py-[10px] px-[25px] text-[14px] font-normal tracking-[3%] text-[#FFFFFF6E] bg-[#0D1C3A] gap-[10px] ">
                    Add more information
                   {
                    expended ?  <MdKeyboardArrowUp size={20} /> :  <MdKeyboardArrowDown size={20} /> 
                   }
                  </button>
                </div>
              </div>
            </div>



            {
                expended && (
                    <div className="bg-[#151E25DE] z-0 flex flex-col justify-center  backdrop-blur-lg gr-borderexpended w-full md:w-[758px] min-h-[310px] py-[41px]">
          


              <div className="px-[15px] xsm:px-[37px] inset-0 relative">
               

             
                <div className="flex flex-col justify-center gap-[9px]">
                  <p className="text-[14px] font-normal tracking-[3%] text-white">
                  Promo code
                  </p>
                  <div className="flex-1 flex items-center justify-between py-5 px-2 sm:px-[30px] rounded-[10px] h-[64px] relative bg-[#00000036] gap-[24px]">
                    <input
                      type="text"
                      className="text-[#FFFFFF6E] smm-text border-none outline-none bg-transparent  w-full"
                      name=""
                      placeholder="Enter Promo Code"
                      id=""
                    />
                   
                  </div>
                </div>
             
                <div className="flex flex-col  mt-5 justify-center gap-[9px]">
                  <p className="text-[14px] font-normal tracking-[3%] text-white">
                  Refund Wallet
                  </p>
                  <div className="flex-1 flex items-center justify-between py-3 px-2 sm:px-[30px] rounded-[10px] h-[64px] relative bg-[#00000036] gap-[24px]">
                    <input
                      type="text"
                      className="text-[#FFFFFF6E] smm-text border-none outline-none bg-transparent  w-full"
                      name=""
                      placeholder="Enter your BTC Refund Address"
                      id=""
                    />
                    <Image
                      src="/icons/qr.svg"
                      width={42}
                      height={42}
                      alt="btc icon"
                    />
                  </div>
                </div>
             

           
              

              </div>
            </div>
                )
            }

            {/* --- expended end  */}
          </div>
        </div>

        <Image
          src="/images/grlightleft.png"
          width={400}
          height={400}
          alt="btc icon"
          className="absolute bottom-[-50px] left-0"
        />
      </section>
    </main>
  );
};

export default page;
