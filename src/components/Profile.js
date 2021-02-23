import React from 'react';
import profilePic from './ebu.png';
import './Profile.css';

export const Profile = () => (
  <header>
    <div className="inner">
      <img src={profilePic} alt="" />
      <div className="user-name">
        <span>Eddy Bussiere</span>
      </div>
    </div>
  </header>
);
