import React from "react";

const Button = ({ variant, onClick, style, children }) => {
  let buttonStyle = {
    padding: "10px 20px",
    fontSize: "13px",
    borderRadius: "8px",
    backgroundColor: "#4eb570",
    border: "none",
    cursor: "pointer",
    color: "white",
    height: "2.5rem",
    width: "4.5rem",
    marginLeft: "5px",
    ...style
  };

  if (variant === "small") {
    buttonStyle = {
      padding: "5px 10px",
      fontSize: "11px",
      height: "2rem",
      width: "2.3rem",
      borderRadius: "8px",
      cursor: "pointer",
      color: "white",
      backgroundColor: "#4eb570",
      border: "none"
    };
  }

  return (
    <button
      className={`button-${variant}`}
      onClick={onClick}
      style={buttonStyle}
    >
      {children}
    </button>
  );
};

export default Button;
