// import React, { useContext } from 'react';
// import { CommentsContext } from '../../context/CommentsContext';
// import cl from './MovieCommentsInput.module.css';

// const MovieCommentsInput = () => {

//   const {onClickAdd } = useContext(CommentsContext);

//    const[comment, setComment] = useState('');
   
//    const handleChange = e => {
//     setValue(e.target.value)
//    };


//    const handleSubmit = e => {
//     e.preventDefault()
//     if(editItem === null) {
//         onClickAdd (value)
//         setValue('')
//     } else {
//         editTask(value, editItem.id)
//     }
//    };
//   return (
//     <div className={cl.comments__form}>
//         <form onSubmit={handleSubmit}>
//           <div className={cl.comments__form_in}>
//             <div className={cl.textarea}>
//               <textarea
//                 name="textarea"
//                 value={comment}
//                 placeholder="Введите комментарий"
//                 onChange={handleChange}
//               ></textarea>
//             </div>
//             <div>
//               <button
//                 className={cl.button} 
//                 type="submit"
//                 disabled={!comment}
//               ><i className="fa fa-share" aria-hidden="true"></i></button>
//             </div>
//           </div>
//         </form>
//       </div>
//   );
// };

// export default MovieCommentsInput;