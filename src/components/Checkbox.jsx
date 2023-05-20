import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ label, checked, onChange }) => {
  const handleCheckboxChange = (event) => {
    const newChecked = event.target.checked;
    onChange(newChecked);
  };

  return (
    <div className="checkbox" style={{ display: "flex", alignItems: "center" }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        style={{
          appearance: "none",
          borderRadius: "50%",
          width: "16px",
          height: "16px",
          border: `2px solid ${checked ? "#4eb570" : "#f0f1f1"}`,
          backgroundColor: checked ? "#4eb570" : "transparent",
          marginRight: "14px"
        }}
      />
      <label>{label}</label>
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Checkbox;
