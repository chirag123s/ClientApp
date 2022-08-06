import React from 'react';
import "./home.css";
import Feed from "../../components/feed/Feed";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import RightBar from "../../components/rightbar/Rightbar";

export default function Home() {
  return (
    <>
    <Topbar/>
    <div className="homeContainer">
      <Sidebar/>
      <Feed/>
      <RightBar/>
      
    </div>
    </>
  )
}
