import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MoviePage from '../../MoviePage/MoviePage';
import cl from './ContentModal.module.css'

const ContentModal = ({children, id, media_type,}) => {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState();
  const rootClasses = [cl.page_modal]
  if(visible) {
    rootClasses.push(cl.active)
  }

  const openModal = () => {
    setVisible(true);
  };

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setContent(data);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  
  return (
    <>
      <div
        style={{ cursor: "pointer" }}
        onClick={openModal}
      >
        {children}
      </div>
      <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
        <div className={cl.page_modal_content} onClick={e => e.stopPropagation()}>
          {content && 
            <MoviePage
              title={content.name || content.title}
              description={content.overview}
              img={content.poster_path}
              release={content.first_air_date || content.release_date || " "}
              backdrop={content.backdrop_path}
              id={id}
            />
          } 
        </div>
      </div>
    </>
  );
};

export default ContentModal;