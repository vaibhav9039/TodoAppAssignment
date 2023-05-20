import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import Checkbox from "./Checkbox";

const TodoRow = ({ label, onDelete }) => {
  const [checked, setChecked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleButtonClick = () => {
    onDelete();
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
        justifyContent: "space-between"
      }}
    >
      <Checkbox
        label={label}
        checked={checked}
        onChange={handleCheckboxChange}
      />

      {hovered && (
        <Button
          variant="small"
          onClick={handleButtonClick}
          style={{ backgroundColor: "#4eb570" }}
        >
          X
        </Button>
      )}
    </div>
  );
};

TodoRow.propTypes = {
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default TodoRow;
