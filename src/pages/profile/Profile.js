import React from 'react';
import "./profile.css"
import Feed from "../../components/feed/Feed";
import Topbar from "../../components/topbar/Topbar";
import RightBar from "../../components/rightbar/Rightbar";
import SideBar from "../../components/sidebar/Sidebar";
import { useState ,useEffect,useContext} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


export default function Profile() {
  const [user,setUser] = useState({});
  const username = useParams().username;
  const {user:currentUser} = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
    const res = await axios.get('http://localhost:5010/tweets/user/search/'+username,{ headers: {"Authorization" : `Bearer ${currentUser.token}`} });
    setUser(res.data)
    };
    fetchUser();
  },[]);
  console.log(user);
  return (
    <>
      <Topbar />
      <div className="profile">
      <SideBar/>
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="/assets/1.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="/assets/1.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{username}</h4>
                <span className="profileInfoDesc">{user.bio}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed loginId={username}/>
          <RightBar user = {user}/>
          </div>
        </div>
      </div>
    </>
  );
}
