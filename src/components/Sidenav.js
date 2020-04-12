import React from "react";
import { boards } from "../utils/boards.js";

const Sidenav = props => {
  const boardOptions = Object.entries(boards);

  return (
    <div className="sidenav">
      Sidenav
      <ul>
        {boardOptions.map(([boardId, board], index) => {
          return (
            <li key={index}>
              <button>{board.name}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { Sidenav };
