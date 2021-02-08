import React from "react";

function SidebarItems({ list, selectedLog, setSelectedLog }) {
  return (
    <ul className="list-group">
      {list.map((item) =>
        item === selectedLog ? (
          <li key={item} className="list-group-item bg-light">
            <strong>{item}</strong>
          </li>
        ) : (
          <li
            key={item}
            onClick={() => setSelectedLog(item)}
            className="list-group-item cursor-pointer"
          >
            {item}
          </li>
        )
      )}
    </ul>
  );
}

export default SidebarItems;
