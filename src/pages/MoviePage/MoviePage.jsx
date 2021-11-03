import React, { useEffect, useState } from 'react';
import cl from './MoviePage.module.css'
import { Redirect, useHistory, useParams } from "react-router";
import axios from 'axios';
import { img_300, img_500, unavailable } from '../../config/config';
import { CompareArrowsOutlined } from '@material-ui/icons';
import MovieComments from '../../components/MovieComments/MovieComents'

const MoviePage = (props) => {
  const history = useHistory()
  const [content, setContent] = useState();
  const {id} = useParams();
  
  // const media_type = props.location.data[0].media_type
  
  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setContent(data);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  
  return (
    <>
      {content && 
      <div>
        <div className={cl.page_wrap}>
          <div className={cl.img}>       
            <div className={cl.imgIn}>
              <div className={cl.imgWide}>
                <img src={ content.poster_path ? `${img_300}/${content.poster_path}`: unavailable } alt={content.name || content.title}/>
              </div>
            </div>
          </div>
          
        <div className={cl.about_wrap}>
          <h1>{content.title || content.name} (
            {(
              content.first_air_date ||
              content.release_date ||
              "-----"
            ).substring(0, 4)})
          </h1> 
          <div className={cl.fxRow}>
            <ul className={cl.list_about}>
              <li><span>Name (original):</span> <span>{content.title || content.name}</span></li>
              <li><span>Year: </span> 
                <span>{(
                  content.first_air_date ||
                  content.release_date ||
                  "-----").substring(0, 4)}
                </span>
              </li>
              <li><span>Country:</span> {content.production_countries.map((country, index) => (
                <span key={country.name}>{(index ? ', ' : '') +country.name}</span>))}
              </li>
              <li><span>Genre:</span> {content.genres.map((genre, index) => (
                <span key={genre.name}>{(index ? ', ' : '') + genre.name}</span>))}
              </li>
              <li>
                <span><span>Rating: </span><span>{content.vote_average}</span></span>
              </li>
            </ul>         
          </div>
            <br />      
          <div className={cl.description}>
            <h2>Overview</h2>
            <div>{content.overview}</div>
          </div>
        </div>
        
      </div>
    </div>
    
    }
    </>
  );
};

export default MoviePage;