import React, { useState } from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, onSubmitt ,onDelete}) {
  const { id, avatar_url, bot_class, catchphrase, health, damage, armor } = bot;
 
  function handleClick() {
    onSubmitt(bot);
  }
  function handleDelete(e){
    onDelete(bot);
  }

  return (
    <div className="ui column">
      <div className="ui card" key={id}>
        <div className="image" onClick={() => {
                  handleClick();
                }}>
          <img alt="oh no!" src={avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {health}
          </span>

          <span>
            <i className="icon lightning" />
            {damage}
          </span>
          <span>
            <i className="icon shield" />
            {armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={(e) => {
                  handleDelete(e);
                }}
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
