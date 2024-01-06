import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Aces from "../public/assets/ACES.svg";
import form from "../app/form/page";
import csi from "../public/assets/csilogo.webp";
import ecell from "../public/assets/ectext.webp";
import hello from "../public/assets/aces.webp";
import Timer from "./timer";

const Header = () => {
  return (
    <div className="flex justify-center ">
      <div className="header  lg:w-[75%] mt-2 lg:mt-5">
        {/* <div className='h-[1px] bg-white w-full rotate-[35deg] bg-opacity-50 ml-20'></div>     */}
        {/* <img src="../assets/pngtree.png" className='h-screen w-full' alt="" /> */}
        <div className="flex justify-center lg:justify-between items-center h-20 ">
          <div className="uppercase text-white">
           <Link href="https://mjcollege.ac.in/" target="_blank"> <Image
              src="../assets/mj1.webp"
              width={150}
              height={100}
              alt="svg"
              className="h-20 w-full lg:h-22 lg:w-full mt-5"
            /></Link>
          </div>
          <div className="hidden lg:block">
            <ul className="text-gray-400 text-[18px] flex flex-row items-center gap-9 font-mono font-semibold">
              {/* <li><Link href="" className=' hover:text-[#39a7ff] transition duration-300'>Home</Link></li> */}
              <li>
                <Link
                  href="#Rules"
                  className=" hover:text-[#39a7ff] transition duration-300"
                  scroll={true}
                >
                  Rules
                </Link>
              </li>
              <li className="pointer-events-none opacity-30">
                <Link
                  href="/form"
                  className=" hover:text-[#39a7ff] transition duration-300"
                  aria-disabled
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  href="#timeline"
                  className=" hover:text-[#39a7ff] transition duration-300"
                  scroll={true}
                >
                  Timeline
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className=" hover:text-[#39a7ff] transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className='uppercase text-white'><Image src={csi} alt='svg' className=' h-9 w-16 lg:h-14 lg:w-20'/></div> */}
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-8 ml-4 lg:ml-0 lg:mt-0">
          <div className="">
            <div className="text-white leading-none flex justify-center mt-10 lg:mt-28 flex-col">
              <div className="flex items-center ">
                <div className="uppercase text-[max(2.5rem,min(5vw,5.2rem))]  htext text-left mb-3 lg:mb-0 ">
                  Hack
                </div>
                <div className="ml-3 lg:ml-7 text-[max(0.8rem,min(1vw,1.2rem))]  text-white font-mono leading-relaxed font-bold">
                  <div className="h-[6px] w-28 bg-[#39a7ff] hidden lg:block"></div>
                  <div className="  lg:mt-[6px] flex">
                    {" "}
                    Venue: MJCET{" "}
                    <span className="block lg:hidden ml-[4px]"> Hyd.</span>{" "}
                    <span className="hidden mx-[8px] lg:block">
                      {" "}
                      Hyderabad.
                    </span>
                  </div>
                  <div className="hidden lg:block">
                    <div className="flex ">
                      {" "}
                      Date: 17{" "}
                      <span className="block lg:hidden ml-[4px]">
                        {" "}
                        Dec.
                      </span>{" "}
                      <span className="hidden mx-[8px] lg:block">
                        {" "}
                        December
                      </span>{" "}
                      <span className="hidden lg:block">2023.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="uppercase text-[max(2.5rem,min(5vw,5.2rem))] bg-clip-text text-transparent   bg-gradient-to-br from-white via-gray-200 to-[#0E0F68] htext">
                revolution{" "}
                <span className=" text-[#39a7ff] text-[max(2.5rem,min(5.2vw,5.4rem))] ">
                  .
                </span>
              </div>
            </div>

            <div>
              <div className="h-[3px] lg:h-2 w-28 lg:w-72 bg-[#39a7ff] mt-3 lg:mt-6 ml-1"></div>

              <div className="hsmall text-white mt-2 lg:mt-4 font-extrabold ml-1 text-[max(1.1rem,min(2.5vw,2.7rem))]  flex items-center">
                <div>Powered by</div>{" "}
                <Link href="https://www.aces-co.com/" target="_blank"><img
                  src="../assets/aces.webp"
                  className="h-5  lg:h-10 ml-1 lg:ml-3"
                  alt=""
                />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-4">
            <Link className="" href="/results" >
              <div className="flex justify-center items-center px-7 py-3 border-2  border-[#39a7ff] rounded-lg shadows cursor-pointer hover:bg-[#39a7ff] hover:bg-opacity-70 mt-10 lg:mt-20  animate-bounce duration-500">
                <div className="text-lg lg:text-xl text-white hsmall flex justify-center items-center font-extrabold">
                  View Results <BsArrowRight className="ml-1" />
                </div>
              </div>
            </Link>
           
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-16 mb-3 lg:mb-0 ml-1 gap-3">
          <div className="font-mono text-gray-400 text-md lg:text-lg leading-snug">
            Cash Prizes Worth
          </div>
          <div>
            <span className="htext leading-tight bg-clip-text text-transparent   bg-gradient-to-br from-white via-gray-200 to-[#0E0F68] text-[max(2rem,min(4vw,4.2rem))] ">
              <span className="text-bold ">&#8377; </span>3,00,000
            </span>
          </div>
        </div>
        {/* <div className='block lg:hidden'>
            <div className='flex flex-col justify-center items-center mt-10 mb-3 lg:mb-0 ml-1 gap-3  '>
                <div className='font-mono text-gray-400 text-md lg:text-lg leading-snug'>
                    Be There on
                </div>
                <div>
                <span className='htext leading-tight bg-clip-text text-transparent   bg-gradient-to-br from-white via-gray-200 to-[#0E0F68] text-[max(2rem,min(4vw,4.2rem))] '> 17th of December 2023</span>
                </div>
            </div>

            </div> */}
      </div>
    </div>
  );
};

export default Header;
