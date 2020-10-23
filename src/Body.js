import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import SongRow from "./SongRow";

function Body({ selectedPlaylist, spotify }) {
  const viewHeight = window.outerHeight;
  const [tracks, setTracks] = useState();
  const [images, setImages] = useState();
  const [{ playlists }, dispatch] = useDataLayerValue();
  console.log("selectedPlaylist", selectedPlaylist);

  useEffect( () => {
    (async () => {
    await spotify.getPlaylistTracks(selectedPlaylist?.id).then((tracks) => {
      console.log("tracks", tracks);
      setTracks(tracks);
      setImages(selectedPlaylist.images[0]);
    }); })()
  }, [selectedPlaylist]) ;

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          console.log(r);
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
    <div className="body">
      <Header spotify={spotify} />
      {/* Playlist heading and thumbnail */}
      <div className="body__info">
        <img src={images?.url} alt="playlist_cover" />
        <div className="body__infoText">
          <h2>{selectedPlaylist.name}</h2>
          <p>{selectedPlaylist?.description}</p>
        </div>
      </div>
      {/* filter bar */}
      {/* List of songs with title, artist, album, date,
         duration of song and click of the item song should play */}
      <InfiniteScroll dataLength={10}>
        {tracks ? (
          tracks?.items?.map((item) => (
            <SongRow
              track={item.track}
              playSong={playSong}
              key={item.track?.id}
            />
          ))
        ) : (
          <h1> No tracks </h1>
        )}
      </InfiniteScroll>
    </div>
  );
}

export default Body;
