import React from 'react';
import s from './profile.module.css';

const Profile = () => {
    return (
        <div className={s.profile}>
        <div className={s.ava}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRgF7L_dl09HCJP27UJ_o6e67UFFqZP3jUEq6JCNwOZfCX-etnZA&s://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPzfzDUPq7igQhXCXV9ZMVXmrhyNjIXKh_Yq3K1LetZYzXuBgM&s" alt='user' />
        </div>
        <div>
          <h3>Vladimir</h3>
          <p>novice developer</p>
        </div>
      </div>
    );
} 

export default Profile;

