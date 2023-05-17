import React, { useState } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";

const TodoRow = ({ label, onDelete }) => {
  const [completed, setCompleted] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleCheckboxChange = () => {
    setCompleted(!completed);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleDeleteClick = () => {
    onDelete();
  };

  const buttonStyle = {
    display: hovered ? "inline" : "none"
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Checkbox
        label={label}
        checked={completed}
        onChange={handleCheckboxChange}
      />
      <Button variant="small" onClick={handleDeleteClick} style={buttonStyle}>
        Delete
      </Button>
    </div>
  );
};

export default TodoRow;
