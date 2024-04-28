import React from 'react'


const data = [
    {
        id:1,
        title:"Select Your Crypto Exchange Pair",
        des:"Begin your privacy-focused trading journey by choosing from a wide range ofcrypto exchange pairs available on Secretblock.io. Whether you're looking to trade inpopular currencies like Bitcoin and Ethereum or explore emerging tokens, our platformoffers you the flexibility to select the combination that best fits your trading needs.",
        active:true
    },
    {
        id:2,
        title:"Enter Exchange Amount",
        des:"Specify the amount you wish to exchange. Secretblock.io's intelligent systemoptimizes for the lowest possible cost by comparing rates across multiple exchanges,ensuring you get the best deal every time without compromising your privacy.",
        active:false
    },
    {
        id:3,
        title:"Enter Receiving Wallet Address",
        des:"Provide the wallet address where you would like to receive your exchangedcryptocurrency. It's crucial to ensure that the address matches the format of thereceiving currency (e.g., BTC addresses start with 1 or 3) to maintain transactionintegrity and security.",
        active:false
    },
    {
        id:4,
        title:"Send Funds to Generated Address",
        des:"Once you've confirmed the details, transfer the specified amount from yourpersonal wallet to the generated address provided by Secretblock.io. This step is pivotalin maintaining your security, as Secretblock.io does not require direct access to yourwallet, ensuring your funds and privacy are protected.",
        active:false
    },
    {
        id:5,
        title:"Complete & Track Anonymization Process",
        des:"The anonymization process typically completes between 5 to 30 minutes,safeguarding your transaction's privacy. Track the progress directly on the CheckoutPage, where you'll receive updates until the transaction is fully anonymized, combiningconvenience with unparalleled security.",
        active:false
    },
    {
        id:6,
        title:"Support & Assistance",
        des:"Should you require any assistance throughout the process, Secretblock.io'shelpdesk is ready to support you. Contact us for any inquiries, and our dedicated teamwill ensure your trading experience is seamless and secure.",
        active:false
    },
]

const ColStepper = () => {
  return (
   <div className='col-stepper'>

    {
        data?.map((item) => (
            <div className={`flex  relative items-center justify-center ${item.id !== 1 && "mt-6 sm:mt-[100px]"}`}>
            <h2 className={`step-num text-2xl sm:text-[36px] font-semibold   flex items-center justify-center rounded-full w-[50px] sm:w-[71px] h-[50px] sm:h-[71px] top-0 left-[-34px] absolute ${item.id === 1 ? "step-ac bg-[#FFFFFF1C]" : "bg-[#01080E]" }`}>{item.id}</h2>
           <div className=' ml-7 sm:ml-32 lg:ml-[250px] text-left'>
            <h2 className={` font-semibold leading-normal text-left text-[24px] sm:text-[36px]  ${item.active && "step-ac"} `}>{item.title}</h2>
            
            <p className='mt-2 font-normal text-[#FFFFFF66] text-[14px] sm:text-[16px] leading-normal sm:leading-6 '>{item.des}</p>
           </div>
        </div>
        ))
    }
   

   </div>
  )
}

export default ColStepper