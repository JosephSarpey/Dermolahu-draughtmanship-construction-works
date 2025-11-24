/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const MotionWrapper = ({ children, variants, className }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
