"use client"
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" flex justify-center items-center pb-5">
      {/* to do- shortlisted teams, registration, timeline, rules, form */}
      <div className="w-[90%]">
        <div className="h-[2px] mb-5 w-full bg-[#39a7ff]"></div>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between text-xs lg:text-sm hsmall font-extrabold">
          <p className="text-white text-center">© Organizers @ HackRevolution | all rights reserved</p>
          <p className="text-white text-center mt-4 lg:mt-0">Developed by <Link href='https://www.linkedin.com/in/abdulbasith1733/' target='_blank'><span className="text-[#39a7ff]  font-extrabold">Abdul Basith</span></Link> and Team</p>
        </div>
        



      </div>
      
    </div>
  );
};

export default Footer;
