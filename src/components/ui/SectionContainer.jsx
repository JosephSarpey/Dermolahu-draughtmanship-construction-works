/* eslint-disable react/prop-types */
const SectionContainer = ({ children, className = "" }) => {
  return (
    <section className={`mt-14 ${className}`}>
      {children}
    </section>
  );
};

export default SectionContainer;
