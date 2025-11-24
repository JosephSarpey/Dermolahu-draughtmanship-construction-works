import MotionWrapper from "../ui/MotionWrapper";
//import SectionHeading from "../ui/SectionHeading";
import { slideUpVariants, zoomInVariants } from "../../sections/animation";
import { planning } from "../../export";

const WorkingProcess = () => { 
  return (
    <section id="workingprocess" className="bg-white text-black rounded-lg p-8 mt-14">
      <MotionWrapper variants={slideUpVariants} className="max-w-4xl mx-auto text-center">
        <h3 className="text-turquoise font-medium">A SYSTEMATIC APPROACH</h3>
        <h2 className="text-2xl lg:text-3xl font-semibold">How Our Expert Engineers Work</h2>
        <div className="mx-auto mt-4 w-20 h-1.5 bg-turquoise"></div>
      </MotionWrapper>

      <MotionWrapper variants={zoomInVariants} className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {planning.map((item, i) => (
          <article key={i} className="flex flex-col items-center gap-4 border rounded-lg p-6 bg-white hover:shadow-lg transition">
            <div className="p-3 bg-turquoise rounded-full">
              <item.icon className="w-6 h-6 text-black" />
            </div>
            <h4 className="font-semibold uppercase text-sm text-turquoise">{item.title}</h4>
            <p className="text-sm text-gray-600 text-center">{item.about}</p>
          </article>
        ))}
      </MotionWrapper>
    </section>
  );
};

export default WorkingProcess;
