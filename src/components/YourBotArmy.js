import React from "react";
import { useParams } from "react-router-dom";
import BotSpecs from "./BotSpecs";
import BotCollection from "./BotCollection";
import BotCard from "./BotCard";

function YourBotArmy({ bots, botsDisplay }) {
  // const params = useParams();
  const bott = botsDisplay.map((bot) => (
    <BotCard key={bot.id} bot={bot} />
  ));

  console.log(botsDisplay);
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <h3>My army</h3>
        <div className="row bot-army-row">
          {bott}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
