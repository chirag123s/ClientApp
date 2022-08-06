import React from 'react';
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css"
import { useState ,useEffect,useContext} from "react";
import axios from "axios";
import { AuthContext } from '../../context/AuthContext';

export default function Feed({loginId}) {
const [posts,setPosts] = useState([]);
const {user:currentUser} = useContext(AuthContext);
const api = `http://localhost:5010/tweets/User/${loginId}`;

useEffect(() => {
  const fetchPosts = async () =>{
  const res = loginId ? 
  await axios.post(api,{ headers: {"Authorization" : `Bearer ${currentUser.token}`} }):
  await axios.get("http://localhost:5010/tweets/alltweets",{ headers: {"Authorization" : `Bearer ${currentUser.token}`} });
  console.log(res.data)
  setPosts(res.data.sort((p1,p2)=>{
    return new Date(p2.createdOn) - new Date(p1.createdOn);
      })
    );
  };
  fetchPosts();

},[loginId]);

  return (
    <div className="feed">
        <div className="feedwrapper"> 
        <Share/>
        {posts.map((p) =>(
          <Post key={p.postId} post={p}/>
        ))}
        </div>
    </div>
  )
}
