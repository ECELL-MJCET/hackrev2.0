import React from "react";
import Image from "next/image";
import Link from "next/link";

const Organizers = () => {
  return (
    <div className="flex justify-center flex-col items-center mb-[30px]">
      <div className="w-[95%] lg:w-[80%] ">
        <div className="text-white text-center mt-5 lg:mt-10 mb-3 lg:mb-7 text-[35px] lg:text-[50px] htext">
          Organized By
        </div>

        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:space-x-28">
           <Link href="https://ecellmjcet.in" target="_blank"><Image
              src="../assets/ectext.webp"
              width={150}
              height={150}
              alt="svg"
              className="h-20 w-[150px] lg:h-20 lg:[400px] mt-5 mx-[20px]"
            /></Link>
            <Image
              src="../assets/csilogo.webp"
              width={150}
              height={150}
              alt="svg"
              className="h-20 w-[150px] lg:h-22 lg:[300xp] mt-12 lg:mt-5 mx-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizers;
