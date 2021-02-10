import React from "react";

function SelectCard({ isSelected, name, handleSelect }) {
  return isSelected ? (
    <button className="btn btn-dark btn-sm mx-2">{name}</button>
  ) : (
    <button
      type="button"
      onClick={() => handleSelect(name)}
      className="btn btn-outline-dark btn-sm mx-2"
    >
      {name}
    </button>
  );
}

export default SelectCard;
