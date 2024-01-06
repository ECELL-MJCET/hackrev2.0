"use client";

// import ContactComp from "@/components/contact";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Results from "@/components/results";
import React from "react";

const Short = () => {
  const Fintecharry = [
    {
      team: "1. Sterban",
    },
    {
      team: "2. BIT BOUNTY HUNTERS",
    },
    {
      team: "3. Clueless Coders",
    },
    {
      team: "4. Team ACM Hacktivators",
    },
    {
      team: "5. INVINCIBLE",
    },
    {
      team: "6. Team FinBlock",
    },
    {
      team: "7. Digital Titans",
    },
    {
      team: "8. The Errorists",
    },
    {
      team: "9. DeBurgers",
    },
    {
      team: "10. Half/Coders",
    },
    {
      team: "11. BitGenius Guild",
    },
    {
      team: "12. HexaHive",
    },
    {
      team: "13. MONEYYY",
    },
    {
      team: "14. Team Sinister",
    },
    {
      team: "15. QuinTech",
    },
  ];

  const HealthCareArray = [
    {
      team: "1. Algorithm Assassins",
    },
    {
      team: "2. Lightheads",
    },
    {
      team: "3. The Seekers",
    },
    {
      team: "4. Radiants",
    },
    {
      team: "5. Denied4Access",
    },
    {
      team: "6. Coding_girls",
    },
    {
      team: "7. ALPHAS",
    },
    {
      team: "8. Data Cracker",
    },
    {
      team: "9. The Fanatics",
    },
    {
      team: "10. MIND BLENDERS",
    },
    {
      team: "11. PENTAGON",
    },
    {
      team: "12. Cognitive Healers",
    },
    {
      team: "13. Health Interllectuals",
    },
    {
      team: "14. Byte Benders",
    },
    {
      team: "15. TECH TITANS",
    },
  ];

  const GenericHard = [
    {
      team: "1. Heisenberg",
    },
    {
      team: "2. Joemama",
    },
    {
      team: "3. Team Robotics MJCET",
    },
    {
      team: "4. AgroNxt",
    },
    {
      team: "5. Team RoboFetch",
    },
    {
      team: "6. Touch Vision",
    },
    {
      team: "7. Ababeil",
    },
    {
      team: "8. EmbedSync",
    },
    {
      team: "9. Nano Ninjas",
    },
    {
      team: "10. Team Robocon MJCET",
    },
    {
      team: "11. Innovative Hawks",
    },
    {
      team: "12. Nano Engineers",
    },
    {
      team: "13. Team IRIS",
    },
    {
      team: "14. GAMORA",
    },
    {
      team: "15. ByteBins",
    },
  ];

  const GenericSoft = [
    {
      team: "1. Dark Bloom",
    },
    {
      team: "2. Team Stack",
    },
    {
      team: "3. Tech Giants",
    },
    {
      team: "4. Trojan Horses",
    },
    {
      team: "5. CODE AVENGERS",
    },
    {
      team: "6. Matrusri Builders",
    },
    {
      team: "7. Team Hextech",
    },
    {
      team: "8. Team HackHers",
    },
    {
      team: "9. BlaZe",
    },
    {
      team: "10. Challengers",
    },
    {
      team: "11. Team ZENTech",
    },
    {
      team: "12. Galactic Gliders",
    },
    {
      team: "13. Clutch Monkeys",
    },
    {
      team: "14. Team CodeFellas",
    },
    {
      team: "15. Code Enforcers",
    },
  ];
  return (
    <div className="bg-gradient-radial from-[#0E0F68] to-[#18141c]">
      <Nav />
      <div className="flex justify-center mt-10 lg:mt-2 pb-10">
        <div className="w-[97%] lg:w-[80%]">
          <div className="text-white text-center  mb-4 lg:mb-7 text-[35px] lg:text-[50px] htext ">
            Results
          </div>
          <div className="flex flex-wrap justify-evenly p-5">
            <div className="py-10 px-2">
              <p className="text-white text-3xl text-center mb-5 hsmall font-bold">Fin Tech</p>
              <div className="bg-transparent border-[2px] text-left border-[#39a7ff] rounded-xl w-fit py-10 px-4 lg:px-10 flex flex-col  justify-center">
                {Fintecharry.map((Fintecharry, team) => (
                  <Results team={Fintecharry.team} />
                ))}
                <div className="my-5 text-xl htext font-light text-[#39a7ff] px-10">Wait List</div>
                <div className="px-10 font-bold">
                    <ul>
                        <li className="my-2 text-white font-mono text-lg">1. Finmatic</li>
                        <li className="my-2 text-white font-mono text-lg">2. DeVoid</li>
                        <li className="my-2 text-white font-mono text-lg">3. HackStreet Boys </li>
                    </ul>
                </div>
              </div>
            </div>
            <div className="py-10 px-2">
              <p className="text-white text-3xl text-center mb-5 hsmall font-bold">
                Health Care
              </p>
              <div className="bg-transparent border-[2px] border-[#39a7ff] rounded-xl w-fit py-10 px-4 lg:px-10 flex flex-col  justify-center">
                 {HealthCareArray.map((HealthCareArray, team) => (
                  <Results team={HealthCareArray.team} />
                
                ))} 
              <div className="my-5 text-xl htext font-light text-[#39a7ff] px-10">Wait List</div>
                <div className="px-10 font-bold">
                    <ul>
                        <li className="my-2 text-white font-mono text-lg">1. Team Kanyarasi</li>
                        <li className="my-2 text-white font-mono text-lg">2. Team 405 Found</li>
                        <li className="my-2 text-white font-mono text-lg">3. SymptoGaurd </li>
                    </ul>
                </div>

              </div>
            </div>
            <div className="py-10 px-2">
              <p className="text-white text-3xl text-center mb-5 hsmall font-bold">
                Generic Hardware
              </p>
              <div className="bg-transparent border-[2px] border-[#39a7ff] rounded-xl w-fit py-10 px-4 lg:px-10 flex flex-col  justify-center">
                {GenericHard.map((GenericHard, team) => (
                  <Results team={GenericHard.team} />
                ))}
                 <div className="my-5 text-xl htext font-light text-[#39a7ff] px-10">Wait List</div>
                <div className=" px-10 font-bold">
                    <ul>
                        <li className="my-2 text-white font-mono text-lg">1. Extentia</li>
                        <li className="my-2 text-white font-mono text-lg">2. T-Suave</li>
                        <li className="my-2 text-white font-mono text-lg">3. HELEN </li>
                    </ul>
                </div> 
                 {/* <div className="htext text-white">Will be Announced Soon</div> */}
              </div>
            </div>
            <div className="py-10 px-2 bg-center">
              <p className="text-white text-3xl text-center mb-5 hsmall font-bold">
                Generic Software
              </p>
              <div className="bg-transparent border-[2px] border-[#39a7ff] rounded-xl w-fit py-10 px-4 lg:px-10 flex flex-col  justify-center">
                 {GenericSoft.map((GenericSoft, team) => (
                  <Results team={GenericSoft.team} />
                
                ))}
                 <div className="my-5 text-xl htext font-light text-[#39a7ff] px-10">Wait List</div>
                <div className="px-10 font-bold">
                    <ul>
                        <li className="my-2 text-white font-mono text-lg">1. Insignia</li>
                        <li className="my-2 text-white font-mono text-lg">2. Team Connect</li>
                        <li className="my-2 text-white font-mono text-lg">3. Code Learners United </li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Short;


