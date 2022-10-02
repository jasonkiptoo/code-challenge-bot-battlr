import React from "react";
import { useParams } from "react-router-dom";
import BotSpecs from "./BotSpecs";
import BotCollection from "./BotCollection";
import BotCard from "./BotCard";

function YourBotArmy({ bots ,onSubmitt}) {
  // const params = useParams();

  console.log(bots);
  const bott = bots.map(
    (bot) => <BotCard key={bot.id} bot={bot}  onSubmitt={onSubmitt}/>

    //  ( if(bot.id==101)
  );
  // console.log(botsDisplay);
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <h3>My army</h3>
        <div className="row bot-army-row">{bott}</div>
      </div>
    </div>
  );
}

export default YourBotArmy;
