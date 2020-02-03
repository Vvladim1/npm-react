import React from "react";
import MyPsts from "./MyPosts/MyPosts";
import Profile from "./profile/Profile";

const Content = (props) => {



  return (
    <div>
      <Profile />
      <MyPsts state={props.state} />
    </div>
  );
};

export default Content;
