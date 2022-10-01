import React from "react";
import { useParams } from "react-router-dom";
import BotCard from "./BotCard";

function YourBotArmy({ bots, botsDisplay }) {
  // const params = useParams();

  
  console.log(botsDisplay);
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <h3>My army</h3>
        <div className="row bot-army-row">
        <BotCard key={botsDisplay.id} bot={botsDisplay} />
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
