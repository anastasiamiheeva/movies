import React, { useEffect, useState } from 'react';
import MyButton from '../UI/button/MyButton';
import CommentItem from './CommentItem';
import cl from './MovieComments.module.css';


const MovieComents = ({params}) => {
  const movieId = params.id
  console.log(movieId)
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('')
  console.log('comments',comments)

  const getLSComments = (movieId) => {
    const localStorageComments = localStorage.getItem("comments");
    const commentsInLS = JSON.parse(localStorageComments) || [];
    
    const lSCurrentMovie = commentsInLS.find((comment) => comment.movieId === movieId) || 
      { movieId: movieId, comments: [] };
    
    return { commentsInLS, lSCurrentMovie };
  }


  useEffect(() => {
    const {lSCurrentMovie } = getLSComments(movieId);
    setComments(lSCurrentMovie.comments)
  }, [])

  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const { commentsInLS, lSCurrentMovie } = getLSComments(movieId);
    let newCommentInLS;
    let date = new Date()
    const newCom = {
      id: Date.now(),
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString(),
      author: "You",
      value: newComment,
    };


    lSCurrentMovie.comments = [
      newCom,
      ...lSCurrentMovie.comments,
    ];

    
    if (commentsInLS.some((comments) => comments.movieId === movieId)) {
      newCommentInLS = [
        ...commentsInLS.map((comments) =>
          comments.movieId === movieId ? lSCurrentMovie : comments)
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
    const { commentsInLS, lSCurrentMovie } = getLSComments(movieId);
    lSCurrentMovie.comments = [...lSCurrentMovie.comments
      .filter(comment => comment.id !== id)]
    
    const filteredLSComments = [...commentsInLS.map((comments) =>
      comments.movieId === movieId ? lSCurrentMovie : comments
    )]

    localStorage.setItem("comments", JSON.stringify(filteredLSComments));

    setComments(lSCurrentMovie.comments);
  }

  return (
    <div className={cl.comments}>
      <div className={cl.title}>Коментарии</div>
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
          : "No comments"}
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
            <div className={cl.button}>
              <MyButton 
                type="submit"
                disabled={!newComment}
              >Add comment</MyButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MovieComents;