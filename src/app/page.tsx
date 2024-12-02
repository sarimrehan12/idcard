import React from "react";
import Image from "next/image";

export default function IDCard() {
  return (
    <div className='flex flex-col min-h-screen bg-white '>
      <div className='flex-grow flex items-center justify-center p-6'>
        <div className='bg-slate-200 p-12 rounded-lg shadow-lg max-w-4xl w-full flex items-center justify-center border-4 border-sky-300'>

          {/*backgroung pic*/}
          <div className="absolute insert-0 flex items-center justify-center">
            <div className="relative w-full h-full max-w-[400px] max-h-[300px] ">

              <Image
                src="/image/pic.jpeg"
                alt="background image"
                width={400}
                height={300}
                objectFit="cover"
                className="opacity-10"
              />
            </div>
          </div>
          {/*left section*/}
          <div className="w-2/3 pr-4 pt-16 relative z-10">
            {/*logo section*/} 
    <img
    src="/image/logo.jpeg"
    alt="card logo"
    className="absolute top-[-20px] left-0 w-16 h-18 z-10 "/>

            <p className="mb-2">
                <span className="text-sky-500">
                  {""}
                <strong>Name:</strong></span>
              <span className="text-black"> Sarim Rehan </span>
            </p>
                
            <p className="mb-2">
                <span className="text-sky-500">
                  {""}
                <strong>Roll Number:</strong></span>
              <span className="text-black"> 1234 </span>
            </p>

            <p className="mb-2">
                <span className="text-sky-500">
                  {""}
                <strong>Distance Learning:</strong></span>
              <span className="text-black"> No </span>
            </p>
            <p className="mb-2">
                <span className="text-sky-500">
                  {""}
                <strong>City:</strong></span>
              <span className="text-black"> Karachi </span>
            </p> 

            <p className="mb-2">
                <span className="text-sky-500">
                  {""}
                <strong>Centre:</strong></span>
              <span className="text-black"> Governor House Karachi </span>
            </p> 

            <p className="mb-2">
                <span className="text-sky-500">
                  {""}
                <strong>Campus:</strong></span>
              <span className="text-black"> Main </span>
            </p>  

            <p className="mb-2">
                <span className="text-sky-500">
                  {""}
                <strong>Days/Time:</strong></span>
              <span className="text-black"> Tuesday-2:00PM-5:00pm </span>
            </p> 

            <p className="mb-2">
                <span className="text-sky-500">
                  {""}
                <strong>Batch:</strong></span>
              <span className="text-black"> 2 </span>
            </p>  

          
{/*Button section*/}
    <div className=" flex flex-col mt-4 ">
      <button className=" relative w-full p-1 rounded-lg border border-grey-300 bg-blue-900 text-white items-center justify-center flex ">
      <span className="absolute insert-0 bg-slate-500"
      style={{width:"50%"}}>
        

      </span>
      <span className="relative z-10">Q1 & WMD</span>
      </button>
      </div> 
      </div>
    {/*Right section*/}
    <div className="w-1/3 text-center relative z-10">
      <Image
      src={"/image/profilepic.jpeg"}
      alt={"card pic"}
      width={800}
      height={800}
      className="rounded-lg mb-6 w-full"/>
      <p className="border-t-2 border-t-slate-400 pt-2 font-bold text-sky-500 mt-10 text-2xl">Authorized Signature</p>
    </div>

    










          </div>
        </div>
    </div>
  )
}
