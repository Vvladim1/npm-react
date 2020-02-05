import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addNewPost } from "../../redux/state";

const MyPosts = props => {
  let postsElements = props.state.posts.map(data => (
    <Post message={data.message} likesCounte={data.likesCounte} />
  ));

  let newPostEl = React.createRef();

  let addPost = () => {
    let text = newPostEl.current.value;
    if (text != "") {
      props.addNewPost();
    }
  };

  let onPostChange = () => {
    let text = newPostEl.current.value;
    props.upDateNewPostText(text);
    // newPostEl.current.value = "";
  };

  return (
    <div className={s.myposts}>
      <h4>My posts</h4>
      <div className={s.addpost}>
        <div>
          <textarea
            ref={newPostEl}
            onChange={onPostChange}
            value={props.state.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
