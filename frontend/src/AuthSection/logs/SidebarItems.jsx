import React from "react";

function SidebarItems({ list, selectedLog, setSelectedLog }) {
  return (
    <ul className="list-group">
      {list.map((item) =>
        item.date === selectedLog.date ? (
          <li key={item.id} className="list-group-item bg-light">
            <strong>{item.date}</strong>
          </li>
        ) : (
          <li
            key={item.id}
            onClick={() => setSelectedLog(item)}
            className="list-group-item cursor-pointer"
          >
            {item.date}
          </li>
        )
      )}
    </ul>
  );
}

export default SidebarItems;
