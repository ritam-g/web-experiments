import React from "react";
import Card from "./Card";

function Cards({ data }) {
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Cards;
