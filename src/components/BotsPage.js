import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import { Route, Routes, useMatch } from "react-router-dom";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [botsDisplay, setBotsDisplay] = useState([]);
  // const match = useMatch();
  //start here with your code for step one
  // /fetch bots to page
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
  function handleClick(data) {
    // console.log(data);
     setBotsDisplay(data);
  }

  return (
    <div>
      {/* <Route exact path={match.url}>
        <h3>Choose a Bot from the list below</h3>
      </Route> */}
      {/* <Route exact path={`${match.url}/:botID`}> */}
      <YourBotArmy botsDisplay={botsDisplay} />
      <BotCollection bots={bots} onSubmitt={handleClick} />
      {/* </Route> */}
    </div>
  );
}
export default BotsPage;
