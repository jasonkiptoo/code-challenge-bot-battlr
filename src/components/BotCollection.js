import React from "react";
import BotCard from "./BotCard";
import { Link } from "react-router-dom";

function BotCollection({ bots,onSubmitt }) {
  // Your code here

  const botList = Object.keys(bots).map((bot) => (
    <li key={bot}>
      <Link to={`/bots/${bots[bot].id}`}> 
        {/* {bots[botID].name} */}
        {<BotCard key={bots[bot].id} bot={bots[bot]} onSubmitt={onSubmitt} />}
      </Link>
    </li>

    // <BotCard key={bots[bot].id} bot={bots[bot]} onClick={handleClick} />
    // <BotCard key={bot.id} bot={bot} onSelectt={onSelectt} />
  ));

  return (
    <div className="ui four column grid">
      <div className="row">
        {botList}
       
      </div>
    </div>
  );
}

export default BotCollection;
