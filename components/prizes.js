import React from "react";

const Prizes = () => {
  return (
    <div className="flex justify-center flex-col items-center   pt-5    ">
      <div className="w-[90%] ">
        <div className="text-white text-center   text-[35px] lg:text-[50px] htext ">
          Prizes
        </div>
        <div className="flex justify-center  items-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-52 items-center  justify-between">
            <div className="lg:mt-28 block lg:hidden ">
              <div className="h-32 w-32 rounded-full bg-[#39a7ff] flex items-center justify-center p-5 mt-5">
                <img src="../assets/medal.webp" alt="" />
              </div>
              <div className="flex flex-col justify-center items-center text-center text-white mt-2">
                <div className="hsmall font-extrabold text-lg">
                  &#8377; 40,000
                </div>
                <div className="htext font-light text-xl mt-1">1st Prize</div>
              </div>
            </div>
            <div className="lg:mt-28 hidden lg:block">
              <div className="h-32 w-32 rounded-full bg-[#39a7ff] flex items-center justify-center p-5 mt-5">
                <img src="../assets/2nd-place.webp" alt="" />
              </div>
              <div className="flex flex-col text-center mr-8 text-white mt-2">
                <div className="hsmall font-extrabold text-lg">
                  &#8377; 25,000
                </div>
                <div className="htext font-light text-xl mt-1">2nd Prize</div>
              </div>
            </div>
            <div className="mt-5  lg:hidden block">
              <div className="h-32 w-32 rounded-full bg-[#39a7ff] flex items-center justify-center p-5 mt-5">
                <img src="../assets/2nd-place.webp" alt="" />
              </div>
              <div className="flex flex-col justify-center items-center text-center text-white mt-2">
                <div className="hsmall font-extrabold text-lg">
                  &#8377; 25,000
                </div>
                <div className="htext font-light text-xl mt-1">2nd Prize</div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="h-40 w-40 rounded-full bg-[#39a7ff] flex items-center justify-center p-5">
                <img src="../assets/medal.webp" alt="" />
              </div>
              <div className="flex flex-col justify-center items-center text-center text-white mt-2">
                <div className="hsmall font-extrabold text-[22px]">
                  &#8377; 40,000
                </div>
                <div className="htext font-light text-[26px] mt-1">
                  1st Prize
                </div>
              </div>
            </div>
            <div className="mt-5 lg:mt-28">
              <div className="h-32 w-32 rounded-full bg-[#39a7ff] flex items-center justify-center p-5 mt-5">
                <img src="../assets/3rd-place.webp" alt="" />
              </div>
              <div className="flex flex-col justify-center items-center text-center lg:mr-8 text-white  mt-2">
                <div className="hsmall font-extrabold text-lg">
                  &#8377; 10,000
                </div>
                <div className="htext font-light text-xl mt-1">3rd Prize</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-[#39a7ff] hsmall font-extrabold mt-10 text-[22px] lg:text-[30px]">
          Prizes worth{" "}
          <span className="htext font-extralight text-white">
            <span className="font-extrabold">&#8377;</span> 75,000
          </span>{" "}
          in each track
        </div>
      </div>
    </div>
  );
};

export default Prizes;
