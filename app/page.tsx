import ColStepper from "@/components/ColStepper";
import MarketCard from "@/components/MarketCard";
import { homesec4smname, marketTodayTitlte, sec2CardData } from "@/constants";
import Image from "next/image";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const page = () => {
  return (
    <main className="Home">
      {/* hero  section  */}
      <section id="Hero" className="relative w-full h-full min-h-[941px]">
        <div className="hero-img"></div>
        <div className="main-hero max-w-[1440px] mx-auto w-full pt-[171px] sm:pt-[40px] relative z-10  px-5 md:px-[70px] lg::px-[100px] xll::px-[146px] min-h-[90vh] flex items-center flex-wrap-reverse justify-center gap-[54px]">
          <div className="hero-left flex-1">
            <Image
              src="/icons/lock.svg"
              width={31}
              height={43}
              alt="lock image"
            />
            <h1 className="mdbig-text text-white">
              Revolutionizing Cryptocurrency Privacy: Welcome to{" "}
              <span className="font-[900] gradient-text">Secretblock.io</span>
            </h1>

            <p className="mt-5 normal-text">
              {'"'}Bridging Innovation and Anonymity in Your Financial
              Transactions
            </p>
            <button className="more-btn py-4 px-[53px] text-[#276DF6] sec-normal-text ">
              See More
            </button>
          </div>

          {/* ---- right  */}
          <div className="hero-right flex-1 flex justify-center items-center ">
            <div className="bg-[#151E25DE]  backdrop-blur-lg gr-border w-full sm:w-[509px] h-[447px] py-[41px]">
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
                      You got
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

                <button className="w-full py-4 px-1 xsm:px-[53px] rounded-[50px] sec-normal-text mt-[43px] exhbtn">
                  Exchange
                </button>
              </div>
            </div>
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

      {/* cards section  */}
      <section className="card-sec relative z-10 my-20 max-w-[1440px] mx-auto px-5 md:px-[70px] lg::px-[100px] xll::px-[146px]">
        <h2 className="text-center font-semibold text-[36px] ">
          Privacy Bridge Protocol
        </h2>

        <div className="cards grid grid-cols-1fs xsm:grid-cols-1f sm:grid-cols-2 gap-y-5 lg:gap-y-0 lg:grid-cols-3fs xll:grid-cols-3f items-center mt-10 sm:mt-[73px] justify-center place-content-center place-items-center gap-x-4">
          {sec2CardData?.map((item) => (
            <div
              key={item.id}
              className="sec2card px-2 py-5 xsm:p-5 min-h-[293px] bg-[#01080E] text-center"
            >
              <h2 className="text-lg text-white font-medium">{item.title}</h2>

              <p className="mt-[10px] font-normal text-[14px] xsm:text-[16px] text-[#FFFFFF42] leading-normal xsm:leading-6">
                {item.des}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center mt10 sm:mt-[52px] justify-center">
          <button className="w-full py-4 px-5 xsm:px-[29px] rounded-[50px] sec-normal-text mt-[43px] max-w-[318px] exhbtn">
            Experience Secure Transactions
          </button>
        </div>
      </section>

      {/* logos section  */}
      <section
        style={{ overflowX: "scroll" }}
        className="logos-sec no-scrollbar min-w-[300px] overflow-x-scroll  relative z-10 my-20 "
      >
        <div className="logos-bg h-full min-w-[1100px] absolute  top-0 left-0 w-full z-0"></div>
        <div className="relative z-20  min-w-[900px] sm:min-w-[1050px]   max-w-[1440px] overflow-x-scroll  h-[139px] mx-auto px-5 md:px-[70px] lg::px-[100px] xll::px-[128px] flex items-start py-1 sm:items-center justify-center no-scrollbar gap-10 sm:gap-24 xll:gap-[148px]">
          <Image
            src="/logos/solana.svg"
            width={210}
            height={31}
            alt="Solona logo"
          />
          <Image
            src="/logos/polygon.svg"
            width={172}
            height={39}
            alt="Solona logo"
          />
          <Image
            src="/logos/ethereum.svg"
            width={189}
            height={48}
            alt="Solona logo"
          />
          <Image
            src="/logos/xrp.svg"
            width={169}
            height={47}
            alt="Solona logo"
          />
        </div>
      </section>

      <div className="relative  z-10 my-20 max-w-[1440px] mx-auto pr-[257px] hidden sm:flex   items-center justify-end">
        <div className="flex items-center gap-8">
          {homesec4smname?.map((item) => (
            <div key={item.id} className="flex items-center gap-[10px]">
              <p className="text-[13px] font-normal text-[#FFFFFF66] tracking-[11.5%]">
                {item.title}
              </p>
              <Image
                src="/icons/updwnarr.png"
                width={19}
                height={19}
                alt="Arrow icon"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Market Today section  */}
      <section className="card-sec relative z-10 my-20 max-w-[1440px] mx-auto px-5 md:px-[70px] lg:px-[100px] xll:px-[146px]">
        <h2 className="text-center font-semibold text-[36px] ">
           Market Today
          <div className="main flex mt-16 items-center flex-col justify-center">
            <MarketCard />
          </div>
        </h2>
      </section>

      {/*col  stepper section  */}
      <section className="card-sec relative z-10 my-36 max-w-[1440px] mx-auto px-[50px] sm:px-[70px] lg:px-[150px] xll:px-[229px]">
        <h2 className="text-center font-semibold text-[36px] ">
           How to Use Secretblock.io
          <div className="main relative flex mt-[125px] items-center  justify-start">
            <ColStepper />
          </div>
        </h2>
      </section>




          {/* cards section  */}
          <section className="ready-sec z-20 h-auto lg:min-h-[391px] relative">
          <div className="redy-bg h-full   absolute  top-0 left-0 w-full  z-0"></div>
            <div className=" relative z-10 my-20  max-w-[1550px] mx-auto ">

            <div className="flex items-center max-lg:flex-row justify-center w-full flex-wrap">

              <div className="left flex-1 py-10 xll:w-[616px] pl-5 md:pl-[70px] lg::pl-[100px] xll::px-[146px]">
                <h2 className=" text-[40px] leading-normal xl:text-[48px] font-semibold xl:leading-[70px] ">Ready to start?</h2>
                <p className=" text-[13px] xl:text-[16px] leading-normal lg:leading-[23px] font-medium mt-[9px] ">Molestie nunc ut egestas faucibus orci porta ultrices proin a. Lectus amet sed aliquam cursus risus. Feugiat aliquam diam adipiscing cursus. In tristique dictum facilisis id.</p>
                <button className="redy-btn text-[#276DF6] text-[13px] xsm:text-[16px] font-semibold bg-[#FFFFFF1C] py-4 px-[53px] rounded-[50px] relative my-5">Experience Secure Transactions</button>
              </div>

              <div className="right w-[450px] my xsm:w-full lg:w-[640px] xl:flex-1 h-[300px] xsm:h-[450px] lg:h-[388px] relative">
                <Image src='/images/tala.png' width={700} height={700} alt="loacker image" className="w-full h-full z-[-2] absolute max-lg:object-[76%] object-center top-0 left-[-10px] lg:left- object-cover" />
              </div>

            </div>
            </div>
      </section>



    </main>
  );
};

export default page;
