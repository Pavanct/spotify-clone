import React from "react";
import "./Player.css";
import Body from "./Body";
import SideBar from "./SideBar";
import Footer from "./Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        <SideBar spotify={spotify}/>
        <Body />
      </div>

      <Footer />
    </div>
  );
}

export default Player;
