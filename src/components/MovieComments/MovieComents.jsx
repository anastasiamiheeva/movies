import React, { useEffect, useState } from 'react';
import CommentItem from './CommentItem';
import cl from './MovieComments.module.css';
import { v4 as uuidv4 } from 'uuid';

const MovieComents = ({id}) => {
  
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('')


  const getLSComments = (id) => {
    const localStorageComments = localStorage.getItem("comments");
    const commentsInLS = JSON.parse(localStorageComments) || [];
    const lSCurrentMovie = commentsInLS.find((comment) => comment.movieId === id) || 
      { movieId: id, comments: [] };
    
    return { commentsInLS, lSCurrentMovie };
  }


  useEffect(() => {
    const {lSCurrentMovie } = getLSComments(id);
    setComments(lSCurrentMovie.comments)
  }, [])

  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const { commentsInLS, lSCurrentMovie } = getLSComments(id);
    let newCommentInLS;
    let date = new Date()
    const newCom = {
      id: uuidv4(),
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString(),
      author: "You",
      value: newComment,
    };


    lSCurrentMovie.comments = [
      newCom,
      ...lSCurrentMovie.comments,
    ];

    
    if (commentsInLS.some((comments) => comments.movieId === id)) {
      newCommentInLS = [
        ...commentsInLS.map((comments) =>
          comments.movieId === id ? lSCurrentMovie : comments)
      ];
    } else {
      newCommentInLS = [...commentsInLS, lSCurrentMovie];
    }

    localStorage.setItem("comments", JSON.stringify(newCommentInLS));

    setComments(lSCurrentMovie.comments)
    setNewComment('')
  }


  const deleteComment = (id) => {
    console.log(id)
    const { commentsInLS, lSCurrentMovie } = getLSComments(id);
    lSCurrentMovie.comments = [...lSCurrentMovie.comments
      .filter(comment => comment.id !== id)]
    
    const filteredLSComments = [...commentsInLS.map((comments) =>
      comments.movieId === id ? lSCurrentMovie : comments
    )]

    localStorage.setItem("comments", JSON.stringify(filteredLSComments));

    setComments(lSCurrentMovie.comments);
  }

  return (
    <div className={cl.comments}>
      <div className={cl.comments_list}>
        {comments.length
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
          : <div style={{textAlign: 'center'}}>No comments</div>}
      </div>
      <div className={cl.comments__form}>
        <form onSubmit={handleSubmit}>
          <div className={cl.comments__form_in}>
            <div className={cl.textarea}>
              <textarea
                name=""
                value={newComment}
                placeholder="Введите комментарий"
                onChange={(e) => setNewComment(e.target.value)}
              ></textarea>
            </div>
            <div>
              <button
                className={cl.button} 
                type="submit"
                disabled={!newComment}
              ><i className="fa fa-share" aria-hidden="true"></i></button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default MovieComents;