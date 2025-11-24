import Header from "../sections/Header";
import Footer from "../sections/Footer";

import {
  HeroAbout,
  VisionMission,
  TeamSection,
  CTASection,
} from "../components/about";
import Working from "../sections/Working";
import WhoWeAre from "../components/about/WhoWeAre";

const DetailedAbout = () => {
  return (
    <div className="w-full bg-gray-900 text-white">
      <Header />

      <main className="max-w-7xl mx-auto px-1 py-0">
        <HeroAbout />
        <WhoWeAre />
        <VisionMission />
        <Working />
        <TeamSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default DetailedAbout; 
