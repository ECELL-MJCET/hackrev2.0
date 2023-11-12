import React from "react";
import "tailwindcss/tailwind.css";

const TeamDetails = () => {
  return (
    <div className="border border-gray-300 mx-[20px] my-[10px] py-[20px] rounded-[8px]">
      <div>
        <h1 className="text-black mx-[20px] text-[28px]">Team Member {no}</h1>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-full flex flex-col mt-[20px]">
          <span className="mx-[20px]">Enter Name</span>
          <input
            className="items-center justify-center mx-[20px] mt-[10px] border border-gray-300 p-2 rounded-md"
            placeholder="Name"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-full flex flex-col mt-[20px]">
          <span className="mx-[20px]">Enter College Name</span>
          <input
            className="items-center justify-center mx-[20px] mt-[10px] border border-gray-300 p-2 rounded-md"
            placeholder="College Name"
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="flex flex-col mt-[20px]">
          <span className="mx-[20px]">Enter Branch</span>
          <input
            className="items-center justify-center mx-[20px] mt-[10px] border border-gray-300 p-2 rounded-md"
            placeholder="Branch"
          />
        </div>

        <div className="flex flex-col mt-[20px]">
          <span className="mx-[20px]">Enter Year</span>
          <input
            className="items-center justify-center mx-[20px] mt-[10px] border border-gray-300 p-2 rounded-md"
            placeholder="Year"
          />
        </div>
        <div className="flex flex-col mt-[20px]">
          <span className="mx-[20px]">Enter Roll No</span>
          <input
            className="items-center justify-center mx-[20px] mt-[10px] border border-gray-300 p-2 rounded-md"
            placeholder="Roll No"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;