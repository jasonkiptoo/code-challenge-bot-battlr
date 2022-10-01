import React from "react";
import BotCard from "./BotCard";
import { Link } from "react-router-dom";
// import BotSpecs from "./BotSpecs";

function BotCollection({ bots,onSelectt }) {
  // Your code here

  // const botList = bots.map((bot) => <BotCard bot={bot} />);
  const botList = bots.map((bot) => <BotCard key={bot.id} bot={bot}onSelectt={onSelectt}/>);


  return (
    <div className="ui four column grid" >
      <div className="row">{botList}</div>
      {/* <ul>{renderMovies}</ul>; */}
    </div>
  );
}

export default BotCollection;
