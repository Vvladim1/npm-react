import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.myposts}>
      <h4>My posts</h4>
      <div className={s.addpost}>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <Post />

    
    </div>
  );
};

export default MyPosts;
