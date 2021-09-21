import React, { useContext, useEffect, useState } from 'react';
import MovieService from '../../API/MovieService';
import { AuthContext } from '../../context/context';
import { useFetching } from '../../hooks/useFetching';

const MovieComents = (props) => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const [comment, setComment] = useState({})
  console.log(isAuth)

  return (
    <div>
      <div>
        <h1>Comments</h1>

      </div>
      <div>
        <form
          // action=""
          // //onSubmit={(e) => handleSubmit(e)}
          // //onKeyDown={(e) => {
          //   // if (e.code === "Enter") {
          //   //   handleSubmit(e);
          //   // }
          // }}
        >
          <div>
            <div>
              <textarea
                //className={}
                name="new_comment"
                placeholder="Введите комментарий"
                //value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </div>
            <div >
              <button type="submit">Click</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MovieComents;