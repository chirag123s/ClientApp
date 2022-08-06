
import React,{ useContext } from "react";
import {Link} from "react-router-dom";

import "./topbar.css";
import { Search,Person,Chat,Notifications } from "@mui/icons-material";
import {AuthContext} from "../../context/AuthContext";
import { logoutCall } from "../../apiCalls";
import { useNavigate } from 'react-router-dom';

export default function Topbar() {

const {user,dispatch } = useContext(AuthContext);
const navigate = useNavigate();
const onLogout = (e) =>{
  logoutCall(dispatch,navigate);
};
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">Tweet App</span>
        </Link>
        
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input 
          placeholder="Search for friends" 
          className="searchInput" 
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <button className="topbarLink" onClick={onLogout}>Logout</button>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person/>
            <span className="topbarIconbadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat/>
            <span className="topbarIconbadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications/>
            <span className="topbarIconbadge">1</span>
          </div>
          </div>
          <Link to = {`/profile/${user.loginId}`} >
          {/* <img src={user.Avater ? user.Avater : "/assets/person.png"} alt="" className="topbarImg" /> */}
          <img src="/assets/person.png" alt="" className="topbarImg" />
          </Link>
      </div>
    </div>
  );
}
