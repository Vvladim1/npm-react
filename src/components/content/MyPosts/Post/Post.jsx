import React from "react";
import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRAul_QJonV108RRTLmYREMKl3NpvBHMqWCTq_vcEhFXgm5s9r&s" />
      post1
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
