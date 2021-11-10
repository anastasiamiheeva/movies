import React, { useEffect, useRef, useState } from 'react';
import cl from './MoviePage.module.css'
import { useHistory, useParams } from "react-router";
import axios from 'axios';
import { img_300, img_500, noPicture, unavailable, unavailableLandscape } from '../../config/config';
import YouTubeIcon from "@material-ui/icons/YouTube";
import MovieComments from '../../components/MovieComments/MovieComents'
import { Button } from '@material-ui/core';
import Carousel from '../../components/Carousel/Carousel';


const MoviePage = (props) => {
  const history = useHistory();
  const {id} = useParams();
  const [content, setContent] = useState();
  const [video, setVideo] = useState();
 
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

  useEffect(() => {
    fetchData();
    fetchVideo();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {content && 
      <div className={cl.page} >
        <div className={cl.pageContent}>
          <img
            src={
              content.poster_path
                ? `${img_500}/${content.poster_path}`
                : unavailable
            }
            alt={content.name || content.title}
            className={cl.verticalImg}
          />
          <img
            src={
              content.backdrop_path
                ? `${img_500}/${content.backdrop_path}`
                : unavailableLandscape
            }
            alt={content.name || content.title}
            className={cl.horizontalImg}
          />

          <div className={cl.pageContent__desc}>
            <div className={cl.pageContent__title}>
            {content.name || content.title} (
              {(
                content.first_air_date ||
                content.release_date ||
                "-----"
              ).substring(0, 4)}
              )
            </div>

            {content.tagline && (
              <i className={cl.pageContent__tagline}>{content.tagline}</i>
            )}

            <div className={cl.pageContent__list_wrap}>
                <ul className={cl.pageContent__list}>
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
              {/* <Button
                variant='contained'
                startIcon={<YouTubeIcon/>}
                color='secondary'
                target='_blank'
                href={`http://www.youtube.com/watch?v=${video}`}
              >Watch the Trailer</Button> */}
              <div className={cl.pageContent__overview}>
                {content.overview}
              </div>
              <Carousel id={id}/>
          </div>

        </div>
      </div>
    }
    </>
  );
};

export default MoviePage;