import React from "react";

const Button = ({
  children,
  className = "text-white bg-indigo-600 hover:bg-indigo-700",
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`disabled:opacity-50 disabled:cursor-not-allowed px-8 py-3 rounded-md shadow border text-base font-medium text-white bg-indigo-600 hover:bg-indigo-500 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
