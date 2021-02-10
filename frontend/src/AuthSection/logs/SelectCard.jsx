import React from "react";

function SelectCard({ isSelected, name, handleSelect }) {
  return isSelected ? (
    <button className="btn btn-secondary btn-sm mx-2">{name}</button>
  ) : (
    <button
      type="button"
      onClick={() => handleSelect(name)}
      className="btn btn-outline-secondary btn-sm mx-2"
    >
      {name}
    </button>
  );
}

export default SelectCard;
