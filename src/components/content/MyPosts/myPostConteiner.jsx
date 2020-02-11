import React from "react";
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../redux/profile-reducer";
import MyPosts from './MyPosts';


const MyPostsContainer = props => {
  debugger;
  let posts = props.store.getState().profileReducer.posts;
  let areaText = props.store.getState().profileReducer.newPostText;
  // let postsElements = props.state.posts.map(data => (
  //   <Post message={data.message} likesCounte={data.likesCounte} />
  // ));

  // let newPostEl = React.createRef();

  let addPost = () => {
      // props.addPost();
      props.store.dispatch(addPostActionCreator());
    
  };

  let onPostChange = (text) => {
    // updateNewPostText(text);
    // let text = newPostEl.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
   <MyPosts updateNewPostText={onPostChange} 
            addPost={addPost} 
            // store={props.store}
            areaText={areaText}
            posts={posts} />
  );
};

export default MyPostsContainer;
