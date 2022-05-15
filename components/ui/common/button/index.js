import React from "react";

const Button = ({
  children,
  className = "text-white bg-indigo-600 hover:bg-indigo-700",
  variant = "purple",
  hoverable = true,
  ...rest
}) => {
  const variants = {
    purple: `text-white bg-indigo-600 ${hoverable && "hover:bg-indigo-700"}`,
    red: `text-white bg-red-500 ${hoverable && "hover:bg-red-600"} `,
  };

  return (
    <button
      {...rest}
      className={`disabled:opacity-50  disabled:cursor-not-allowed px-8 py-3 rounded-md shadow border text-base font-medium cursor-pointer ${className} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
