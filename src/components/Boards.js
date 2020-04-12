import React from "react";
import { Board } from "./Board.js";
import { boards } from "../utils/boards.js";

const Boards = props => {
  return boards.map((board, index) => {
    return (
      <Board
        key={index}
        name={board.name}
        cards={board.cards}
        lists={board.lists}
      />
    );
  });
};
export { Boards };
