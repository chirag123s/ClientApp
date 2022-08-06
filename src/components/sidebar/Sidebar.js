import React from "react";
import "./sidebar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
      <img className="sideImage" src="/assets/1.jpg" alt="" />
        <ul className="sidebarList">
            
          <li className="sidebarListItem">
            <RssFeedIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <RssFeedIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
