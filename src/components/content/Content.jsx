import React from "react";
import Profile from "./profile/Profile";
import MyPostsContainer from "./MyPosts/myPostConteiner";

const Content = props => {
  // debugger;
  return (
    <div>
      <Profile />
      <MyPostsContainer
        store={props.store}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Content;
