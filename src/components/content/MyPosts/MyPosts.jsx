import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let Posts = [
    { id: 1, message: "Hello!", likesCounte: 15 },
    { id: 2, message: "how are you!", likesCounte: 20 },
    { id: 3, message: "Very vell!", likesCounte: 18 }
  ];

  let postsElements = Posts.map(data => (<Post message={data.message}
    likesCounte={data.likesCounte} />));

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
      {postsElements}
    </div>
  );
};

export default MyPosts;
