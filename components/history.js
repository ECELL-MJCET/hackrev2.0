import React from "react";
import Image from "next/image";
import Google2014 from "../public/assets/history/google-2014.webp";
import Mozilla2015 from "../public/assets/history/mozilla-2015.webp";
import xtreme2016 from "../public/assets/history/xtreme-2016.webp";
import mjhack2017 from "../public/assets/history/mjhack-2017.webp";
import mjhack2018 from "../public/assets/history/mjhack-2018.webp";
import hackrev2019 from "../public/assets/history/mjhack-2019.webp";
import hackrev2020 from "../public/assets/history/hackrev-2020.webp";
import hackrev2022 from "../public/assets/history/hackrev-2022.webp";
import hackrev2023 from "../public/assets/history/hackrev-2023.webp";

const History = () => {
  return (
    <div className="flex justify-center flex-col items-center  pt-14">
      <div className=" w-[95%] lg:w-[60%] ">
        <div className="text-white text-center  text-[35px] lg:text-[50px] htext ">
          History
        </div>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-12 h-12 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center right-3 bg-blue-500 text-white relative z-10 title-font font-medium text-[12px]">
                2014
              </div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <Image
                    className="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center"
                    src={Google2014}
                  />
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-white mb-1 text-xl">
                    Google Hackathon
                  </h2>
                  <p class="leading-relaxed text-white">
                    Google Student Club VCE collaborated with Computer Society
                    Of India (CSI) -MJCET to conduct "India's 1st Digital
                    Footprint" in Hyderabad, a Hackathon for the student web
                    designers to develop a website for real time business within
                    12 hrs on 23rd February 2014 at MJCET, Hyderabad.
                  </p>
                </div>
              </div>
            </div>
            <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-12 h-12 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center right-3 bg-blue-500 text-white relative z-10 title-font font-medium text-[12px]">
                2015
              </div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <Image
                    className="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center"
                    src={Mozilla2015}
                  />
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-white mb-1 text-xl">
                    Mozilla Hackathon
                  </h2>
                  <p class="leading-relaxed text-white">
                    The department of Computer Science, Muffakham Jah College of
                    Engineering and Technology and CSI-MJCET in collaboration
                    with Mozilla Firefox succesfully organized a 12hr
                    programming event, “Mozilla Hackathon” on 25th January 2015.
                    The theme for the hackathon was “Creating Jobs for
                    Millions”.
                  </p>
                </div>
              </div>
            </div>
            <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-12 h-12 right-3 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-[12px]">
                2016
              </div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <Image
                    className="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center"
                    src={xtreme2016}
                  />
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-white mb-1 text-xl">
                    XTREMEHACK
                  </h2>
                  <p class="leading-relaxed text-white">
                    The 12 hour long extravaganza organized by Computer Society
                    of Inida (CSI)-MJCET partnering up with XtreamIT saw a
                    quality turnout from various colleges from across the map of
                    Hyderabad! App and web development were the main theme for
                    this Hackathon.
                  </p>
                </div>
              </div>
            </div>
            <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-12 h-12 right-3 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-[12px]">
                2017
              </div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <Image
                    className="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center"
                    src={mjhack2017}
                  />
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-white mb-1 text-xl">
                    MJ-Hack
                  </h2>
                  <p class="leading-relaxed text-white">
                    On 8th October 2017, at Ghulam Ahmed Hall, MJCET we have
                    organised "MJ-Hack", a 12 hour hackathon from 8:30 am to
                    8:30 pm and received enormous response from 150 participants
                    from different branches of various engineering colleges
                    across the state.
                  </p>
                </div>
              </div>
            </div>
            <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-12 h-12 right-3 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-[12px]">
                2018
              </div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <Image
                    className="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center"
                    src={mjhack2018}
                  />
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-white mb-1 text-xl">
                    MJ-Hack
                  </h2>
                  <p class="leading-relaxed text-white">
                    Computer Society Of India(CSI)-MJCET conducted a hackathon
                    for the students to propose and develop a solution to the
                    given problem statements within 12 hrs on 19th January 2018
                    at MJCET, Hyderabad. Their solutions were reviewed and
                    mentored by developers from Mozilla Hyderabad and also by
                    various faculties and judges.
                  </p>
                </div>
              </div>
            </div>
            <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-12 h-12 right-3 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-[12px]">
                2019
              </div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <Image
                    className="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center"
                    src={hackrev2019}
                  />
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-white mb-1 text-xl">
                    Hack Revolution
                  </h2>
                  <p class="leading-relaxed text-white">
                    Muffakham Jah College of Engineering and Technology, held
                    2019’s most awaited and anticipated event, HACK REVOLUTION
                    on the 27th of January, 2019. The event witnessed the
                    collaboration of the brightest and sharpest minds across the
                    city.
                  </p>
                </div>
              </div>
            </div>
            <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-12 h-12 right-3 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-[12px]">
                2020
              </div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <Image
                    className="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center"
                    src={hackrev2020}
                  />
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-white mb-1 text-xl">
                    Hack Revolution
                  </h2>
                  <p class="leading-relaxed text-white">
                    Computer Society Of India(CSI) in collaboration with
                    Entreneurship-Cell (MJCET) conducted a hackathon for the
                    students to propose and develop a solution to the given
                    problem statements within 12 hrs on 19th January 2020 at
                    MJCET, Hyderabad. Their solutions were reviewed and mentored
                    by developers also by various faculties and judges.
                  </p>
                </div>
              </div>
            </div>
            <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-12 h-12 right-3 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-[12px]">
                2022
              </div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <Image
                    className="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center"
                    src={hackrev2022}
                  />
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-white mb-1 text-xl">
                    Hack Revolution
                  </h2>
                  <p class="leading-relaxed text-white">
                    The HackRevolution-2022 hackathon was a 15 hour event held
                    on January 8th, 2022 at Ghulam Ahmed Hall. It was organized
                    by CSI and ECell MJCET and featured participants from
                    colleges such as Vasavi, CBIT, and Lords etc. These
                    participants worked to solve various problem statements,
                    competing for a cash pool of INR 25,000.
                  </p>
                </div>
              </div>
            </div>
            <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-12 h-12 right-3 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-[12px]">
                2023
              </div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <Image
                    className="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center"
                    src={hackrev2023}
                  />
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-white mb-1 text-xl">
                    Hack Revolution 1.0
                  </h2>
                  <p class="leading-relaxed text-white">
                    Hack Revolution is a social coding competition conducted by
                    the Smart India hackathon, consisting of 3-6 members in a
                    team. It was conducted on 8th January of 2023. It provides
                    an exceptional opportunity to network with people from
                    different backgrounds and gives a career boost to the
                    students. It was a collaboration between CSI and E-Cell
                    clubs of the MJCET. The duration was about 15 hours. Winners
                    of the hackathon would qualify for the national-level
                    Hackathon organized by the Govt. of India and All India
                    Council for Technical Education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default History;
