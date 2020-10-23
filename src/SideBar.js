import React, { useState } from "react";
import "./SideBar.css";
import SideBarOption from "./SideBarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { getTokenFromResponse } from "./spotify";
import { useDataLayerValue } from "./DataLayer";
import InfiniteScroll from "react-infinite-scroll-component";

function SideBar() {
  const viewHeight = window.outerHeight;
  const [{ playlists, savedAlbums }, dispatch] = useDataLayerValue();
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  console.log(savedAlbums);

  let callback = (value) => {
    console.log("selectedPlaylist",value);
    setSelectedPlaylist(value);
    dispatch({
      type: "SELECTED_PLAYLIST",
      selectedPlaylist: value,
    });
  }

  return (
    // <InfiniteScroll dataLength={50}>
    <div
      className="sidebar"
      style={{ height: viewHeight }}
    >
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SideBarOption Icon={HomeIcon} option="Home" />
      <SideBarOption Icon={SearchIcon} option="Search" />
      <SideBarOption Icon={LibraryMusicIcon} option="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      <InfiniteScroll dataLength={50}>
        {playlists?.items?.map((playlist) => (
          <SideBarOption
            option={playlist.name}
            playlist={playlist}
            key={playlist.name}
            parentCallBack={callback}
          />
        ))}
        {/* {savedAlbums?.items?.map((album) => (
          <SideBarOption
            option={album.album.name}
            playlist={album.album}
            key={album.album.name}
          />
        ))} */}
      </InfiniteScroll>
      {/* {savedAlbums?.items?.map((album) => (
          <SideBarOption
            option={album.album.name}
            playlist={album.album}
            key={album.album.name}
          />
        ))} */}
    </div>
    //{" "}
  );
}

export default SideBar;
