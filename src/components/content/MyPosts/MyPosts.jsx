import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {


  let postsElements = props.state.posts.map(data => (<Post message={data.message}
    likesCounte={data.likesCounte} />));

    // let newPostEl = React.createRef();
    // let text = newPostEl.current.value;
    
    let addPost = () => {
      alert('ok!');
    };
    

  return (
    <div className={s.myposts}>
      <h4>My posts</h4>
      <div className={s.addpost}>
        <div>
          <textarea placeholder='hey!' />
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
