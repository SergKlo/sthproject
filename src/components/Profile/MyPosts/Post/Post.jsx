import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://ae04.alicdn.com/kf/S36fc3a09e887434cad17f5ada02d209c3.jpg_350x350.jpg" alt="avatar" />
          {props.message}
            <div>
              <span>like</span> {props.likesCount}
            </div>
    </div>
)
}

export default Post