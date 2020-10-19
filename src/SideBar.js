import React from 'react'
import './SideBar.css'
import SideBarOption from './SideBarOption'
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from './DataLayer';


function SideBar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
    console.log("playlists", playlists);
    return (
      <div className="sidebar">
        <img
          className="sidebar__logo"
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt=""
        />
        <SideBarOption option="Home" Icon={HomeIcon} />
        <SideBarOption option="Search" Icon={SearchIcon} />
        <SideBarOption option="Your Library" Icon={LibraryMusicIcon} />
        <br />
        <strong className="sidebar__title">PLAYLISTS</strong>
        <hr />
        {playlists?.items?.map((playlist) => (
          <SideBarOption option={playlist.name} />
        ))}
      </div>
    );
}

export default SideBar
