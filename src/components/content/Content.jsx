import React from "react";
import MyPsts from "./MyPosts/MyPosts";
import Profile from "./profile/Profile";

const Content = () => {
  return (
    <div>
      <img src="data:image/jpeg;base64,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" />
      <Profile />
      <MyPsts />
    </div>
  );
};

export default Content;
