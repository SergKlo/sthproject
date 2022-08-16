import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
  return (
    <div>

      <div>
        <img src='https://img.freepik.com/free-photo/3d-illustration-global-modern-creative-communication-and-internet-network-map_31965-18316.jpg' alt='webworld'></img>
      </div>
      <div className={s.descriptionBlock} >
        ava + description
      </div>

    </div>
  )
}

export default ProfileInfo