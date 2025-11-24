/* eslint-disable react/prop-types */
const SectionHeading = ({ title, subtitle, center }) => {
  return (
    <div className={`${center ? "text-center" : ""} mb-8`}>
      <h2 className="text-2xl font-semibold text-turquoise">{title}</h2>
      {subtitle && (
        <p className="text-gray-300 max-w-2xl mx-auto mt-1">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
