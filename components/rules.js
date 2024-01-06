import React from "react";
import ReadMoreButton from "./readmoreBtn";

const Rules = () => {

  const TeamSpecification =
  "1. Each team should consist of 4-6 participants.\n 2. Students can form teams from different branches and years.\n3. Teams from other colleges are allowed and encouraged to participate.\n4. The Hackathon will be on Sunday 17 December from 7.00 AM – 10.00 PM. Prizes will be announced immediately after the hackathon. \n5. All participant will have to make their own travel and accommodation arrangements.\n6. The organisers will provide Lunch, Tea and Snacks along with registration kits and goodies."
  
  const Registration = 
  "1. Teams can submit only one abstract. \n 2. A student can be part of only one team. \n3. The teams must follow the PPT template provided for idea submission. \n 4. The registration window will be open from 11 th Nov 2023 to 25th Nov 2023. \n 5. The teams registering for hardware track should submit a block diagram and list of hardware components that they would like to use along with the abstract. (The organisers will provide 220 V AC power supply, the teams should organise for their own components or batteries as required.)"

  const Abstraction = 
  "1. Abstracts should justify as to how the problem is being solved,cost effective solutions with a business model are encouraged. \n 2. Abstracts should not contain any form of code. \n 3. The ideas or solutions provided/developed/proposed by the team must be new and must not have been present in any previous event/program of any sort. \n 4. An algorithm/flow chart explaining the work flow of the project should be included along with the abstract. \n 5. The details of Software Tools/Languages/Environment being used should be given."

  const OtherDetails = 
  "1. There will be three prizes per track. The first prize per track is Rs. 40,000/ - , Second Prize – Rs. 25,000/- and Third prize of Rs. 10,000/- . The prize amount will be Rs. 75,000 per track and as there are four tracks the total prize is Rs. 3 Lakhs. \n 2. The prize money will be transferred to the bank account of the team members by equally splitting the same among all members within 15 days of completion of event. The students should provide all bank details along with name, account number and IFSC code. Cash prizes will not be given. \n 3. If there is a tie between two or more teams, the final decision of the prize money distribution will be taken by the organisers only and once the decision is made, it won’t be changed further.\n 4. Projects that incorporate peripheral hardware that may need additional space (such as large robotic devices, drones, etc.) must be pre-approved by the organizers. \n  5. At least one team member must be physically present during sign-in. \n 6. One must be conscious and present the project to the judges during their assigned presentation time."
  
  return (
    <div className="flex  flex-col justify-center items-center pt-5">
      <div className="w-[95%] lg:w-[80%] ">
        <div className="text-white text-center mt-4 mb-7 text-[35px] lg:text-[50px] htext ">
        Rules & Regulations
        </div>
      
      <div className="text-[#39a7ff]  mt-4 mb-3 text-[24px] lg:text-[30px] hsmall font-extrabold">
        Team Specification:
      </div>
      <div className="text-white hsmall font-bold tracking-wide  text-[14px] lg:text-[16px]  lg:leading-relaxed">
        <ReadMoreButton text={TeamSpecification} maxlength={112} />
      </div>
      <div className="text-[#39a7ff]  mt-4 mb-3 text-[24px] lg:text-[30px] hsmall font-extrabold">Registration:</div>
      <div className="text-white hsmall font-bold tracking-wide text-[14px] lg:text-[16px]  lg:leading-relaxed">
        <ReadMoreButton text={Registration} maxlength={84} />
        
        
      </div>
      <div className="text-[#39a7ff]  mt-4 mb-3 text-[24px] lg:text-[30px] hsmall font-extrabold">Abstract Submission:</div>
      <div className="text-white hsmall font-bold tracking-wide text-[14px] lg:text-[16px] lg:leading-relaxed">
        <ReadMoreButton text={Abstraction} maxlength={183}/>
      </div>
      <div className="text-[#39a7ff]  mt-4 mb-3 text-[24px] lg:text-[30px] hsmall font-extrabold">Shortlisting of teams:</div>
      <div className="text-white hsmall font-bold tracking-wide  text-[14px] lg:text-[16px] lg:leading-relaxed">
        <ul>
          <li>
            1. Post Idea submission process, the ideas will be evaluated by
            experts from Industry and Academia.
          </li>
          <li>
            2. Evaluation criteria will include novelty of the idea, complexity,
            clarity and details in the prescribed format, feasibility,
            practicability, sustainability, scale of impact, user experience and
            potential for future work progression.
          </li>
          <li>
            3. A Max of 15 teams will be shortlisted per track and 5 waitlisted
          </li>
        </ul>
      </div>
      <div className="text-[#39a7ff]  mt-4 mb-3 text-[24px] lg:text-[30px] hsmall font-extrabold">Final Registration:</div>
      <div className="text-white hsmall font-bold tracking-wide text-[14px] lg:text-[16px]  lg:leading-relaxed">
        <ul>
          <li>
            1. Shortlisted teams will be informed through their registered
            emails between 6th to 10th December.
          </li>
          <li>2. Team must register before 12th December.</li>
          <li>3. Teams that fail to register will be disqualified.</li>
          <li>4. College photo ID is mandatory for participating</li>
        </ul>
      </div>
      <div className="text-[#39a7ff]  mt-4 mb-3 text-[24px] lg:text-[30px] hsmall font-extrabold">Other Details:</div>
      <div className="text-white hsmall font-bold tracking-wide  text-[14px] lg:text-[16px] lg:leading-relaxed">
        <ReadMoreButton text={OtherDetails} maxlength={100} />
      </div>
      
    </div>
    </div>
  );
};

export default Rules;
