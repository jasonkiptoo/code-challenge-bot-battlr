import React from "react";
import BotCard from "./BotCard";
import { Link } from "react-router-dom";

function BotCollection({ bots, onSubmitt }) {
  // Your code here
  const botList = Object.keys(bots).map((bot) => (
    <BotCard key={bots[bot].id} bot={bots[bot]} onSubmitt={onSubmitt} />
  ));

  return (
    <div className="ui four column grid">
      <div className="row">{botList}</div>
    </div>
  );
}

export default BotCollection;
