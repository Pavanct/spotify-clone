import React, { useEffect } from 'react'
import "./Body.css"
import { useDataLayerValue } from './DataLayer';

function Body({selectedPlaylist}) {
    const viewHeight = window.outerHeight;
    console.log("selectedPlaylist", selectedPlaylist);
    return (
      <div className="body" style={{ height: viewHeight }}>
        {/* Playlist heading and thumbnail */}
        {/* filter bar */}
        {/* List of songs with title, artist, album, date,
         duration of song and click of the item song should play */}
      </div>
    );
}

export default Body
