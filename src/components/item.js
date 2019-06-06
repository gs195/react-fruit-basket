import React from "react";

function Item({ fruitName, fruitEmoji }) {
  return (
    <li>
      {fruitEmoji} {fruitName}
    </li>
  );
}

export default Item;
