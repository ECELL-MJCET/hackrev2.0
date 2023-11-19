import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-center ">
      <div className="header w-[90%] lg:w-[75%] mt-8 lg:mt-5 mb-10">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center h-20 ">
          <div>
            <div className="uppercase text-white hidden lg:block">
              <Image
                src="../assets/mj1.png"
                width={150}
                height={100}
                alt="svg"
                className="h-20 w-full lg:h-22 lg:w-full mt-5"
              />
            </div>
            {/* <div>hello</div> */}
            <div className="uppercase text-white block lg:hidden">
              <Image
                src="../assets/mj.png"
                width={150}
                height={100}
                alt="svg"
                className="h-28 w-28 lg:h-20  my-7"
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <ul className="text-gray-400 text-[18px] flex flex-row items-center gap-9 font-mono font-semibold">
              <li>
                <Link
                  href="/"
                  className=" hover:text-[#39a7ff] transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className=" hover:text-[#39a7ff] transition duration-300"
                >
                  Rules
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className=" hover:text-[#39a7ff] transition duration-300"
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
          <div className="block lg:hidden ">
            <div className="">
              {/* <HomeIcon className="h-10 W-10 text-white " /> */}
              <ul className="text-gray-400 text-[15px] lg:text-[18px] flex flex-row items-center gap-9 font-mono font-semibold ">
                <li>
                  <Link
                    href="/"
                    className=" hover:text-[#39a7ff] transition duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className=" hover:text-[#39a7ff] transition duration-300"
                  >
                    Rules
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className=" hover:text-[#39a7ff] transition duration-300"
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
              {/* <BiHomeAlt2 className="h-10 W-10 text-white " /></div> */}
              {/* <PhoneInTalkIcon className="h-10 W-10 text-white " /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
