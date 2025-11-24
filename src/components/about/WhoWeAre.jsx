import MotionWrapper from "../ui/MotionWrapper";
import { slideUpVariants } from "../../sections/animation";

const WhoWeAre = () => {
  return (
    <section className="relative py-10 bg-[#0a0a0a] text-gray-200">
      <MotionWrapper
        variants={slideUpVariants}
        className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        
        {/* Left Image */}
        <div className="relative">
          <img
            src="/assets/who-we-are.jpg"
            alt="Construction blueprint"
            className="rounded-lg shadow-lg object-cover w-full h-[400px] opacity-90"
          />
          <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
        </div>

        {/* Right Text */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl text-turquoise font-semibold uppercase">
            Who We Are
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Demolahu Draughtsmanship & Construction Ltd. is a trusted Ghanaian
            construction and architectural firm delivering precise drawings,
            professional project execution, and sustainable building solutions
            across residential, commercial, and industrial developments.
          </p>
          <p className="text-gray-300 leading-relaxed">
            With years of proven expertise, we bring together technology,
            compliance, and creativity to ensure every project meets structural,
            aesthetic, and regulatory standards.
          </p>

          <a
            href="/projects"
            className="inline-block bg-turquoise text-black font-semibold px-6 py-3 rounded-md hover:scale-105 transition-all duration-300"
          >
            View Our Projects
          </a>
        </div>

      </MotionWrapper>
    </section>
  );
};

export default WhoWeAre;
