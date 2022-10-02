import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import { Route, Routes, useMatch } from "react-router-dom";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [botsDisplay, setBotsDisplay] = useState([]);

  // /fetch bots to page
  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBots(data);
        // console.log(data);
      });
  }, []);
  ///enlist a bot to your army
  function handleClick(bot) {
    const newBots =botsDisplay.slice();
    newBots.push(bot);
   console.log(bot.id);
    {setBotsDisplay(newBots)}
    
  }
  const handleDelete = async (bot) => {
    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const updatedArmyList = bots.filter((q) => {
          return q.id !== bot;
        });
        setBots(updatedArmyList);
      });
   };
   const removeBot=(bot)=>{
        setBotsDisplay(botsDisplay.filter(q => q.id !== bot.id))

   }

  return (
    <div>
      <YourBotArmy bots={botsDisplay} onSubmitt={removeBot} />
      <BotCollection bots={bots} onSubmitt={handleClick} onDelete={handleDelete}/>
    </div>
  );
}
export default BotsPage;
