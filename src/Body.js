import React, { useEffect, useState } from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import SongRow from "./SongRow";

function Body({ selectedPlaylist, spotify }) {
  const viewHeight = window.outerHeight;
  const [tracks, setTracks] = useState();
  const [dispatch] = useDataLayerValue();
  console.log("selectedPlaylist", selectedPlaylist);
  useEffect(() => {
    spotify.getPlaylistTracks(selectedPlaylist?.id).then((tracks) => {
      console.log("tracks", tracks);
      setTracks(tracks);
    });
  }, [selectedPlaylist]);
  

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className="body" >
      <Header spotify={spotify} />
      {/* Playlist heading and thumbnail */}
      {/* filter bar */}
      {/* List of songs with title, artist, album, date,
         duration of song and click of the item song should play */}
      {tracks ? (
        tracks?.items?.map((item) => (console.log(item), <SongRow track={item.track} />))
      ) : (
        <h1> No tracks </h1>
      )}
    </div>
  );
}

export default Body;
