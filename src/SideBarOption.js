import React from 'react'
import "./SideBarOption.css"



function SideBarOption({ option = "test", Icon, playlist }) {
  function selectItem(item) {
    console.log("selected item name", item?.name);
    console.log("selected item", item);
  }
  return (
    <div className="sidebarOption" onClick={()=> selectItem(playlist)}>
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{option}</h4> : <p>{option}</p>}
    </div>
  );
}

export default SideBarOption
