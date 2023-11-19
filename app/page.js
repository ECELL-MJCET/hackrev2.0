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

export default function Home() {
  return (
    <div>
      <div className="bg-gradient-radial from-[#0E0F68] to-[#18141c]">
        <Header />
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
        <Registration />
        <History />
        <Organizers />
        <Footer />
      </div>
    </div>
  );
}
