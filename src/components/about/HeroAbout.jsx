import MotionWrapper from "../ui/MotionWrapper";
import { slideUpVariants } from "../../sections/animation";

const HeroAbout = () => {
  return (
    <section
      className="relative min-h-[90vh] flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/assets/archit_drawing.jpg')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

      {/* Soft spotlight glow */}
      <div className="absolute inset-0 mx-auto left-0 right-0 w-[60%] h-[60%] bg-white/10 blur-[160px]"></div>

      <div className="container mx-auto px-4 z-10">
        {/* Glass Panel */}
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 max-w-4xl shadow-xl">
          <MotionWrapper variants={slideUpVariants} className="space-y-6">

            <p className="text-turquoise font-semibold tracking-wide">WELCOME TO</p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight text-turquoise drop-shadow-md">
              Demolahu Draughtsmanship & Construction Ltd.
            </h1>

            <p className="text-lg text-gray-200 italic max-w-3xl">
              Your trusted partner in architectural design, construction, and land development.
            </p>

            <p className="text-base text-gray-200 max-w-3xl">
              We deliver comprehensive design, surveying, cost-estimation and regulatory consultancy.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="#working"
                className="inline-block bg-turquoise text-black font-semibold px-6 py-3 rounded-md shadow-lg hover:scale-110 transition-all duration-300"
              >
                How We Work
              </a>
              <a
                href="/contact"
                className="inline-block border-2 border-turquoise text-turquoise px-6 py-3 rounded-md hover:text-black transition-all duration-300 hover:scale-110"
              >
                Contact Us
              </a>
            </div>

          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
