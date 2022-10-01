import React from "react";
import BotSpecs from "./BotSpecs";
import BotCard from "./BotCard";

function YourBotArmy({ bots ,onClick}) {
  // const handleDelete = (deletedTransaction) => {
  //   const updatedTransaction = bots.filter((q) => {
  //     return q.id !== deletedTransaction;
  //   });
  //   setBots(updatedTransaction);
  // };

  const bott = bots.filter((bot) => {
    // console.log(bot);

    <BotCard key={bot.id} bot={bot} onClick={onClick} />;

    //   // <BotSpecs key={bot.id} bot={bot} onSelectBot={onSelectBot} />
  });

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">{bott}</div>
      </div>
    </div>
  );
}

export default YourBotArmy;
