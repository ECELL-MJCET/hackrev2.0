import Eligibility from "@/components/eligibility";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Organizers from "@/components/organizers";
import Prizes from "@/components/prizes";
import Registration from "@/components/registration";
import Rules from "@/components/rules";
import Timeline from "@/components/timline";
import Tracks from "@/components/tracks";
import History from "@/components/history";
import Image from "next/image";
import Timer from "@/components/timer";
import TimerTwo from "@/components/timerTwo";
import Alert from "@/components/alert";

export default function Home() {
  return (
    <div>
      {/* <div className="bg-[#0E0F68]"><Alert /></div> */}
      <div className="bg-gradient-radial from-[#0E0F68] to-[#18141c]">
      {/* <Alert /> */}
        <Header />
        {/* <TimerTwo /> */}
        <Tracks />
      </div>
      {/* <div className='bg-gradient-radial from-[#0E0F68] to-[#18141c]'> */}

      {/* </div> */}

      <div
        id="timeline"
        className="bg-gradient-radial from-[#0E0F68] to-[#18141c]"
      >
        <Timeline />
        <Prizes />
      </div>
      <div className="bg-gradient-radial from-[#0E0F68] to-[#18141c]"></div>
      <div
        id="Rules"
        className="bg-gradient-radial from-[#0E0F68] to-[#18141c]"
      >
        <Rules />
      </div>
      <div className="bg-gradient-radial from-[#0E0F68] to-[#18141c]">
        {/* <Registration /> */}
        <History />
        <Organizers />
        <Footer />
        
        {/* <Timer /> */}
      </div>
      
    </div>
  );
}
