import React, { useEffect, useState } from 'react';
import cl from './MoviePage.module.css'
import { Redirect, useHistory, useParams } from "react-router";
import axios from 'axios';
import { img_300, img_500, noPicture, unavailable } from '../../config/config';
import { CompareArrowsOutlined } from '@material-ui/icons';
import YouTubeIcon from "@material-ui/icons/YouTube";
import MovieComments from '../../components/MovieComments/MovieComents'
import { Button } from '@material-ui/core';

const MoviePage = (props) => {
  const history = useHistory();
  const {id} = useParams();
  const [content, setContent] = useState();
  const [video, setVideo] = useState();
  const [credits, setCredits] = useState();
  const [actorsCount, setActorsCount] = useState(0)
  let activeSlideIndex = 0;

  // const media_type = props.location.data[0].media_type
  
  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setContent(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setVideo(data.results[0]?.key);
  };

  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setCredits(data.cast);
    setActorsCount(data.cast.length)
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
    fetchCredits()
    // eslint-disable-next-line
  }, []);



  const goLeft = () => {
    console.log('left')
    changeSlide('left')
  }
  const goRigth = () => {
    console.log('right')
    changeSlide('right')
  }

  function changeSlide(direction) {
    if (direction === 'right') {
      activeSlideIndex++;
      if(activeSlideIndex === actorsCount) {
        activeSlideIndex = 0;
      }
    } else if (direction === 'left') {
      activeSlideIndex--
      if(activeSlideIndex < 0) {
        activeSlideIndex = setActorsCount(actorsCount - 1);
      }
    }
  }
  console.log(actorsCount)
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
            <div className={cl.overview}>{content.overview}</div>
            <Button
            variant='contained'
            startIcon={<YouTubeIcon/>}
            color='secondary'
            target='_blank'
            href={`http://www.youtube.com/watch?v=${video}`}
            
            >Watch the Trailer</Button>
            <h2>Actors</h2>


            <div className={cl.actors_wrap}>
              <button onClick={goLeft}><i class="fas fa-arrow-left"></i></button>
            <div className={cl.actors}>
                {credits && 
                  credits.map(item => (
                    <div key={item.id}>
                      <img
                        src={item.profile_path ? `${img_300}/${item.profile_path}` : noPicture}
                        alt={item?.name}
                        className={cl.actor_img}
                      />
                      <b>{item?.name}</b>
                    </div>
                  ))
                }
            </div>
            <button onClick={goRigth}><i class="fas fa-arrow-right"></i></button>
            </div>
            
            
          </div>
        </div>
        
      </div>
    </div>
    
    }
    </>
  );
};

export default MoviePage;