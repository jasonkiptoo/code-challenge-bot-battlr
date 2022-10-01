import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import { Routes, BrowserRouter as Router, useMatch } from "react-router-dom";

function BotsPage() {
  const [bots, setBots] = useState([]);
  // const [bot, setBot] = useState([]);

  //start here with your code for step one
  ///fetch bots to page
  const getBotCollection = () => {
    fetch("http://localhost:8002/bots")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBots(data);
        // console.log(data);
      });
  };
  useEffect(() => {
    getBotCollection();
    // handleBot();
  }, []);
  ////
  
const getCick=(data)=>{
console.log(data);
}
  //
  // bots.map((bot)=>bot)
  // setBot(bots);

  return (
    <div>
      {/* <Routes  path="/"> */}
      <YourBotArmy bots={bots} onSelectt={getCick} />
      {/* </Routes> */}
      <BotCollection bots={bots} />
    </div>
  );
}
export default BotsPage;
