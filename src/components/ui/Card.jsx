/* eslint-disable react/prop-types */
const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-gray-800 rounded-lg p-6 shadow ${className}`}>
      {children}
    </div>
  );
};

export default Card;
