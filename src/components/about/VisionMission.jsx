import { FiEye, FiTarget, FiAward } from "react-icons/fi";
import MotionWrapper from "../ui/MotionWrapper";
import { slideUpVariants } from "../../sections/animation";

const VisionMission = () => {
  return (
    <section className="relative py-20 bg-black text-gray-200 overflow-hidden">

      {/* Blueprint grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:70px] opacity-20 pointer-events-none"></div>

      {/* Soft turquoise spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,200,0.10),transparent_70%)] pointer-events-none"></div>

      {/* Glass panel */}
      <div className="absolute inset-x-0 top-14 mx-auto w-[92%] md:w-[78%] h-[78%] rounded-3xl backdrop-blur-md bg-white/5 border border-white/10 pointer-events-none"></div>

      <MotionWrapper
        variants={slideUpVariants}
        className="relative z-10 container mx-auto px-6"
      >
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-turquoise uppercase tracking-wide">
            Vision • Mission • Goals
          </h2>
          <p className="text-gray-400 text-base mt-3">
            The principles that define our purpose and direction.
          </p>
        </div>

        {/* The new premium pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {/* ===== PILLAR 1 ===== */}
          <div className="group relative px-6 py-10 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10">

            {/* Hover vertical beam */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[linear-gradient(to_bottom,transparent,rgba(0,200,200,0.15),transparent)]"></div>

            {/* Icon */}
            <div className="flex items-center justify-center mb-6">
              <FiEye className="text-turquoise text-4xl" />
            </div>

            <h3 className="text-xl font-semibold text-white mb-3 text-center">
              Our Vision
            </h3>
            <p className="text-gray-300 text-center leading-relaxed">
              To be the leading provider of innovative and sustainable construction solutions.
            </p>
          </div>

          {/* ===== PILLAR 2 ===== */}
          <div className="group relative px-6 py-10 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10">

            {/* Hover vertical beam */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[linear-gradient(to_bottom,transparent,rgba(0,200,200,0.15),transparent)]"></div>

            {/* Icon */}
            <div className="flex items-center justify-center mb-6">
              <FiTarget className="text-turquoise text-4xl" />
            </div>

            <h3 className="text-xl font-semibold text-white mb-3 text-center">
              Our Mission
            </h3>
            <p className="text-gray-300 text-center leading-relaxed">
              Deliver comprehensive construction, design, and development services 
              with uncompromised quality and safety.
            </p>
          </div>

          {/* ===== PILLAR 3 ===== */}
          <div className="group relative px-6 py-10 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10">

            {/* Hover vertical beam */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[linear-gradient(to_bottom,transparent,rgba(0,200,200,0.15),transparent)]"></div>

            {/* Icon */}
            <div className="flex items-center justify-center mb-6">
              <FiAward className="text-turquoise text-4xl" />
            </div>

            <h3 className="text-xl font-semibold text-white mb-3 text-center">
              Our Goals
            </h3>
            <p className="text-gray-300 text-center leading-relaxed">
              Exceed expectations through client-focused solutions and 
              community-centered development.
            </p>
          </div>

        </div>
      </MotionWrapper>
    </section>
  );
};

export default VisionMission;
