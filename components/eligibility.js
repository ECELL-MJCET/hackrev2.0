import React from "react";

const Eligibility = () => {
  return (
    // bg-gradient-conic1 from-[#0E0F68] to-[#18141c]
    <div className="flex justify-center flex-col items-center   pt-10    lg:pt-16 mb-10">
      <div className="w-[90%] ">
        <div className="text-white text-center mt-4 mb-7 text-[35px] lg:text-[50px] htext ">
          Eligibility Criteria
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-col lg:w-[50%]  ">
            <ul className="list-disc text-white hsmall font-extrabold text-lg leading-relaxed ">
              <li>
                Open to students, enterpreneurs or working professionals with an
                idea.
              </li>
              <li>
                Teams must consist of a minimum of 3 members and a maximum of 5
                members.
              </li>
              <li>Team members can be from different colleges as well.</li>
              <li>
                Each team must have a woman as one of the active key members.
              </li>
              <li>
                Only registered participants will be eligible to participate.
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <img src="../assets/des1.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;
