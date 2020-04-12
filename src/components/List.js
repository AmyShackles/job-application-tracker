import React from "react";
import { Card } from "./Card.js";
const List = ({ name, id, cards, lists, onDrop, onDragOver, onDragStart }) => {
  const [currentCards, setCards] = React.useState([]);

  return (
    <div
      className={id + " list"}
      onDragOver={e => onDragOver(e)}
      onDrop={e => {
        onDrop(e, id);
      }}
    >
      <span className="task-header">{name}</span>
      {cards.map((card, index) => {
        const { title, list } = card;
        return (
          <Card
            key={index}
            title={title}
            list={list}
            onDragStart={onDragStart}
          />
        );
      })}
    </div>
  );
};

export { List };
