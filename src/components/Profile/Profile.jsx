import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css'

const Profile = (props) => {

  return <div>
    <ProfileInfo/>
    <MyPosts  state={props}
              newPostText={props}
              dispatch={props.dispatch}
               />
  </div>
}

export default Profile