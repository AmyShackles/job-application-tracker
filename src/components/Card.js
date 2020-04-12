import React from "react";

const Card = props => {
  const { title, onDragStart, bgColor, list } = props;
  return (
    <div
      className="draggable"
      onDragStart={e => onDragStart(e, title, list)}
      draggable
      style={{ backgroundColor: bgColor }}
    >
      <span>Title: {title}</span>
    </div>
  );
};
export { Card };
