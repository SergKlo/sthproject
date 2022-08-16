import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { useSelector } from "react-redux";

const Profile = () => {
  let posts = useSelector(state => state.profileReducer.posts);

  return <div>
    <ProfileInfo/>
    <MyPosts
        posts={posts}
        // newPostText={props}
        // dispatch={props.dispatch}
               />
  </div>
}

export default Profile