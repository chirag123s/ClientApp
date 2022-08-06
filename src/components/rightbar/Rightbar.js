import React from 'react';
import "./rightbar.css";

export default function Rightbar({ user }) {
  const HomeRightbar = () => {
    return (
      <>
      <div className="rightbarHome">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/1.jpg" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        </div>
        </div>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
      <div className="rightbarProfile">
      <div className="rightbarWrapper">
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.loginId}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.email}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        </div>
        </div>
      </>
    );
  };
  return (<>
        {user ? <ProfileRightbar /> : <HomeRightbar />}
        </>
  );
}
