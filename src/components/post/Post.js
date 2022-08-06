import React from "react";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const [like, setLike] = useState(post.likeCount);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);
  console.log(post);

  // useEffect(()=>{
  //     setIsLiked(post.likes.includes(currentUser.userId))
  // },[currentUser.userId,post.likes])

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        "http://localhost:5010/tweets/user/search/" + post.loginId,
        { headers: { Authorization: `Bearer ${currentUser.token}` } }
      );
      setUser(res.data);
    };
    fetchUser();
  }, [post.loginId]);

  const insertLike = async () => {
    const res = await axios.put(
      `http://localhost:5010/tweets/${currentUser.loginId}/Like/${post.postId}`,
      { headers: { Authorization: `Bearer ${currentUser.token}` } }
    );
  };

  const likeHandler = () => {
    try {
      insertLike();
    } catch (error) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.loginId}`}>
              <img
                className="postProfileImg"
                src={user.avatar || "/assets/person.png"}
                alt=""
              />
            </Link>

            <span className="postUsername">{user.loginId}</span>
            <span className="postDate">{format(post.createdOn)}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            {post.postText != null ? post.postText : ""}
          </span>
          <img className="postImg" src="" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="/assets/like.png"
              onClick={likeHandler}
              alt=""
            />
            <span className="postlikeCounter">{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
