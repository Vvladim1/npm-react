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

      props.dispatch({type: 'ADD-NEW-POST'});
    
  };

  let onPostChange = () => {

    let text = newPostEl.current.value;
    props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
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
