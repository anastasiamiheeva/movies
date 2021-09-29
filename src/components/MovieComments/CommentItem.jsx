import React from 'react';
import cl from './CommentItem.module.css';

const CommentItem = ({ date, id, func, value, author, time }) => {
  return (
    <div className={cl.comment}>
      <div className={cl.comment_info}>
        <div className={cl.info}>
          <div className={cl.comment_author}>{author}</div>
          <div className={cl.comment_date}>{date}<span> {time}</span></div>
        </div>
        <div className={cl.comment__btn_wrap}>
          <button className={cl.comment_btn}>
            <i className='fas fa-pen' />
          </button>
          <button  onClick={()=> func(id)}  className={cl.comment_btn}>
            <i className='fas fa-trash-alt' />
          </button>
        </div>
      </div>
      <div className={cl.comment_text}>{value}</div>
    </div>
  
  );
};

export default CommentItem;