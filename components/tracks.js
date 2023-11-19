import React from "react";

const Tracks = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="w-[95%] lg:w-[80%] ">
        <div className="text-white text-center mt-5 lg:mt-10 mb-3 lg:mb-7 text-[35px] lg:text-[50px] htext">
          Tracks
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-12">
          <div className="flex flex-row items-center justify-start gap-4 p-3 border-[#39a7ff] border-[1px] rounded-xl shadows">
            <div className="p-4 bg-[#39a7ff] rounded-full">
              {" "}
              <img
                src="../assets/soft.webp"
                className="lg:h-16 lg:w-16 h-12"
                alt=""
              />
            </div>

            <div className="w-[80%] text-white">
              <div className="hsmall text-xl font-extrabold">
                Generic Software
              </div>
              <div className="hsmall leading-snug tracking-tight text-sm mt-1 ">
                Discover the world of computer magic in the Generic Software
                pathway. It is all about creating cool things like websites and
                mobile apps. Whether you are a coding whiz or just getting
                started, dive into crafting awesome digital solutions!
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-4 p-3 border-[#39a7ff] border-[1px] rounded-xl shadows">
            <div className="p-4 bg-[#39a7ff] rounded-full">
              {" "}
              <img
                src="../assets/hard.webp"
                className="lg:h-16 lg:w-16 h-12"
                alt=""
              />
            </div>
            <div className="w-[80%] text-white">
              <div className="hsmall text-xl font-extrabold">
                Generic Hardware
              </div>
              <div className="hsmall leading-snug tracking-tight text-sm mt-1 ">
                Get into cool tech stuff with the Generic Hardware pathway. If
                you like circuitry or building hardware, this track lets you
                turn your ideas into real gadgets.
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-4 p-3 border-[#39a7ff] border-[1px] rounded-xl shadows">
            <div className="p-4 bg-[#39a7ff] rounded-full">
              {" "}
              <img
                src="../assets/fintech.webp"
                className="lg:h-16 lg:w-16 h-12"
                alt=""
              />
            </div>
            <div className="w-[80%] text-white">
              <div className="hsmall text-xl font-extrabold">Fintech</div>
              <div className="hsmall leading-snug tracking-tight text-sm mt-1 ">
                Shape the future of finance in the Fintech pathway by exploring
                blockchain and other cutting-edge financial innovations. Whether
                you are developing disruptive payment solutions or innovative
                financial apps, this pathway invites you to redefine the
                landscape where tech and finance converge.
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-4 p-3 border-[#39a7ff] border-[1px] rounded-xl shadows">
            <div className="p-4 bg-[#39a7ff] rounded-full">
              {" "}
              <img
                src="../assets/healthcare.webp"
                className="lg:h-16 lg:w-16 h-12"
                alt=""
              />
            </div>
            <div className="w-[80%] text-white">
              <div className="hsmall text-xl font-extrabold">Health Care</div>
              <div className="hsmall leading-snug tracking-tight text-sm mt-1 ">
                Mix tech and healthcare in this pathway, where your ideas could
                make a big difference in how we care for people. It is open to
                tech lovers and healthcare folks alike.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
