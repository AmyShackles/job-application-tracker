import React from "react";
import { Card } from "./Card.js";
import { List } from "./List.js";

const Board = ({ name, lists, cards }) => {
  const [currentCards, setCards] = React.useState(cards);
  const [newLists, setLists] = React.useState(lists);
  const names = Object.keys(lists);
  React.useEffect(() => {
    const newList = {};
    const listNames = Object.values(lists);
    listNames.forEach(list => {
      newList[list.id] = { id: list.id, name: list.name, jobs: [] };
    });
    currentCards.forEach(t => {
      newList[t.list].jobs.push({
        key: t.title,
        title: t.title,
        list: t.list,
        onDragStart: onDragStart,
        bgColor: t.bgcolor
      });
    });
    setLists(newList);
  }, [currentCards, lists]);

  const onDragStart = (ev, id, list) => {
    ev.dataTransfer.setData("id", id);
  };

  const onDragOver = ev => {
    ev.preventDefault();
  };

  const onDrop = (ev, list) => {
    let id = ev.dataTransfer.getData("id");
    const [movedCard] = cards.filter(task => task.title === id);
    movedCard.list = list;
    const cardsWithoutMovedCard = cards.filter(task => task.title !== id);
    setCards([...cardsWithoutMovedCard, movedCard]);
  };

  return (
    <div className="board">
      <h2 className="board-header">DRAG & DROP DEMO</h2>
      <div className="container-drag">
        {names.map((name, index) => {
          const list = newLists[name];
          console.log("list", list);
          return (
            <List
              key={index}
              id={list.id}
              name={list.name}
              lists={list}
              onDrop={onDrop}
              onDragOver={onDragOver}
              onDragStart={onDragStart}
              cards={list.jobs}
            />
          );
        })}
      </div>
    </div>
  );
};
export { Board };
