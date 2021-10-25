import React, { useEffect, useState } from 'react';

//import { getLSComments } from '../../localStorage/lSComments';
//import CommentItem from './CommentItem';
import cl from './MovieComments.module.css';
import { v4 as uuidv4 } from 'uuid';
// import MovieCommentsInput from '../MovieCommentsInput/MovieCommentsInput';
// import CommentsList from '../CommentsList/CommentsList';


const getCommentsfromLS = () =>{
  const data = localStorage.getItem('comments');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}
const MovieComents = ({movieId}) => {
 
  const [comments, setComments] = useState(getCommentsfromLS())
  const [comment, setComment] = useState('');
 

  //form submit
  const handleSubmit = e => {
    e.preventDefault()

    let date = new Date()
    let newComment = {
      id: uuidv4(),
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString(),
      author: "You",
      value: comment,
    };
    setComments([...comments,newComment])
    
    setComment(' ')
  }

  useEffect(()=>{
    localStorage.setItem('comments',JSON.stringify(comments));
  },[comments])

  return (
    <div className={cl.comments}>
    <div className={cl.comments_list}>
      {/* {comments.length
        ? comments.map((comment) => (
            <CommentItem
              key={comment.id}
              id={comment.id}
              author={comment.author}
              value={comment.value}
              date={comment.date}
              time={comment.time}
              func={deleteComment}  
            />
          ))
        : <div style={{textAlign: 'center'}}>No comments</div>} */}
    </div>
    <div className={cl.comments__form}>
      <form onSubmit={handleSubmit}>
        <div className={cl.comments__form_in}>
          <div className={cl.textarea}>
            <textarea
              name=""
              value={comment}
              placeholder="Введите комментарий"
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <div>
            <button
              className={cl.button} 
              type="submit"
              disabled={!comment}
            ><i className="fa fa-share" aria-hidden="true"></i></button>
          </div>
        </div>
      </form>
    </div>
  </div>
  );
};
export default MovieComents;