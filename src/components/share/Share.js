import React, { useRef,useState} from 'react';
import "./share.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {useContext} from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { Cancel } from '@mui/icons-material';

export default function Share() {
  const {user:currentUser} = useContext(AuthContext);
  const desc = useRef();
  const [file,setFile] = useState(null);

  const submitHandler = async (e) =>{
    e.preventDefault()
    const newPost = {
      desc: desc.current.value
    }
    const data = new FormData();
    data.append("PostText",newPost.desc);
    data.append("PostImg",file);
    data.append("LoginId",currentUser.loginId);
    if(file){
      const data = new FormData();
      data.append("PostText",newPost.desc);
      data.append("PostImg",file);
      data.append("LoginId",currentUser.loginId);
    }
    console.log(data.PostImg);
    try {
      await axios.post("http://localhost:5010/tweets/"+currentUser.loginId+"/Add",data,{ headers: {"Authorization" : `Bearer ${currentUser.token}`} });
      window.location.reload();
    } catch (error) {
      
    }
  }


  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/1.jpg" alt="" />
          <input
            placeholder={`What's in your mind ${currentUser.loginId}?`}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr"/>
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
            <div className="shareOptions">
                <label htmlFor="file" className="shareOption">
                    <PlayArrowIcon htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                    <input style={{display:"none"}}type='file' id='file' accept='.jpg,.png,.jpeg' onChange={(e) =>setFile(e.target.files[0]) } />
                </label>
                <div className="shareOption">
                    <PlayArrowIcon htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <PlayArrowIcon htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <PlayArrowIcon htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton" type="submit">Share</button>
        </form>
      </div>
    </div>
  );
}