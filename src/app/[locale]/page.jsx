import Hero from "@/components/Hero";
import GlobalReach from "@/components/GlobalReach";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import CinematicVideo from "@/components/CinematicVideo";
import FaqTabs from "@/components/FaqTabs";


export const metadata = {
  title: "Home"
};

export default function Home() {
  return (
    <>
      <Hero />
      <GlobalReach />
      <WhoThisIsFor />
      <FaqTabs />
      <CinematicVideo />
    </>
  );
}
