import { marketTodayTitlte, mbmarketTodayTitlte } from "@/constants";
import Image from "next/image";
import React from "react";

const cryptoData = [
  {
    id: 1,
    name: "Bitcoin",
    icon: "/icons/btc.svg",
    price: "$37 740 883",
    marketCap: "$37 740 883",
    vol: "$1 740 883T",
    alltimehigh: "$12 740 83B",
    oneH: "2.15%",
    twenty24H: "4.17%",
  },
  {
    id: 2,
    name: "Ethereum",
    icon: "/icons/eth.svg",
    price: "$37 740 883",
    marketCap: "$37 740 883",
    vol: "$1 740 883T",
    alltimehigh: "$12 740 83B",
    oneH: "2.15%",
    twenty24H: "4.17%",
  },
  {
    id: 3,
    name: "Binance",
    icon: "/icons/bin.svg",
    price: "$37 740 883",
    marketCap: "$37 740 883",
    vol: "$1 740 883T",
    alltimehigh: "$12 740 83B",
    oneH: "2.15%",
    twenty24H: "4.17%",
  },
  {
    id: 4,
    name: "XRP",
    icon: "/icons/xrp.svg",
    price: "$37 740 883",
    marketCap: "$37 740 883",
    vol: "$1 740 883T",
    alltimehigh: "$12 740 83B",
    oneH: "2.15%",
    twenty24H: "4.17%",
  },
  {
    id: 5,
    name: "Tether",
    icon: "/icons/tet.svg",
    price: "$37 740 883",
    marketCap: "$37 740 883",
    vol: "$1 740 883T",
    alltimehigh: "$12 740 83B",
    oneH: "2.15%",
    twenty24H: "4.17%",
  },
  {
    id: 6,
    name: "Cardano",
    icon: "/icons/car.svg",
    price: "$37 740 883",
    marketCap: "$37 740 883",
    vol: "$1 740 883T",
    alltimehigh: "$12 740 83B",
    oneH: "2.15%",
    twenty24H: "4.17%",
  },
  {
    id: 7,
    name: "Uniswap",
    icon: "/icons/xrp.svg",
    price: "$37 740 883",
    marketCap: "$37 740 883",
    vol: "$1 740 883T",
    alltimehigh: "$12 740 83B",
    oneH: "2.15%",
    twenty24H: "4.17%",
  },
  {
    id: 8,
    name: "Polkadot",
    icon: "/icons/pol.svg",
    price: "$37 740 883",
    marketCap: "$37 740 883",
    vol: "$1 740 883T",
    alltimehigh: "$12 740 83B",
    oneH: "2.15%",
    twenty24H: "4.17%",
  },
  {
    id: 9,
    name: "Chainlink",
    icon: "/icons/cha.svg",
    price: "$37 740 883",
    marketCap: "$37 740 883",
    vol: "$1 740 883T",
    alltimehigh: "$12 740 83B",
    oneH: "2.15%",
    twenty24H: "4.17%",
  },
];

const MarketCard = () => {
  return (
    <div className="flex w-full  items-center justify-center flex-col gap-x-5">
  {/* Title */}

  <div
      className=" hidden lg:grid  grid-cols-3 lg:grid-cols-9  place-items-center   lg:w-[1104px] ">
  {marketTodayTitlte?.map((item) => (
    <div key={item.id} className="flex items-center gap-[10px]">
      <p className="text-[13px] font-normal text-[#FFFFFF66] tracking-[11.5%]">{item.title}</p>
      <Image src='/icons/updwnarr.png' width={19} height={19} alt="Arrow icon" />
    </div>
  ))}
    </div>

    <div
      className=" grid lg:hidden  grid-cols-3  place-items-center w-full  ">
  {mbmarketTodayTitlte?.map((item) => (
    <div key={item.id} className="flex items-center gap-[10px]">
      <p className="text-[13px] font-normal text-[#FFFFFF66] tracking-[11.5%]">{item.title}</p>
      <Image src='/icons/updwnarr.png' width={19} height={19} alt="Arrow icon" />
    </div>
  ))}
    </div>

<div className="flex flex-col items-center justify-center w-full ">
      {/* Data */}
  {cryptoData.map((item, index) => (
    <div
      key={item.id}
      className={`grid grid-cols-3 lg:grid-cols-9 place-items-center mt-[9px] h-[72px] w-full lg:w-[1104px]  ${
        index % 2 !== 0 ? "bg-[#151E25DE] market-Grad-card" : "bg-[#01080F] market-card "
      }`}
    >
      {/* col1 */}
      <p className="text-[13px] hidden lg:inline-block font-normal text-white">{item.id}</p>
      {/* col2 */}
      <div className={`flex ml-0  lg:ml-3 w-[120px] lg:w-[80px] gap-1 items-center ${index % 2 === 0 ? " market-chil1 max-lg:h-full" : "market-gr-chil1 max-lg:h-full"} `}>
        <Image src={item.icon} width={24} height={24} alt={`${item.name} Icon`} />
        <p className="text-[13px] font-normal text-white">{item.name}</p>
      </div>
 
           {/* col3  */}
           <p className="hidden lg:inline-block text-[13px] ml-3 font-normal text-white">{item.price}</p>
          {/* col4  */}
          <p className="hidden lg:inline-block text-[13px] mr-7 font-normal text-white">{item.marketCap}</p>
          {/* col5  */}
          <p className="hidden lg:inline-block text-[13px] font-normal text-white">{item.vol}</p>
          {/* col6  */}
          <p className="hidden lg:inline-block text-[13px] font-normal mr-9 text-white">{item.alltimehigh}</p>
          {/* col7  */}
          <p className="hidden lg:inline-block text-[13px] font-normal mr-2   text-[#2CB629]">{item.oneH}</p>
          {/* col8  */}
          <p className="text-[13px] font-normal mr-4 text-[#FF5C5C]">{item.twenty24H}</p>

      <Image src={"/images/chart-img.png"} width={80} height={33} alt={`${item.name} Arrow Icon`} />
    </div>
  ))}
</div>
</div>

  );
};

export default MarketCard;
