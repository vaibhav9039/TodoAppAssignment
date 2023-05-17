import React from "react";

const Button = ({ variant, onClick, children }) => {
  const buttonStyle = {
    padding: variant === "big" ? "10px 20px" : "5px 10px",
    fontSize: variant === "big" ? "18px" : "14px",
    borderRadius: "5px",
    background: "#eaeaea",
    border: "none",
    cursor: "pointer"
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
