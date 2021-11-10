import cl from './Carousel.module.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { img_300, noPicture } from '../../config/config';
import AliceCarousel from 'react-alice-carousel';

const Carousel = ({id}) => {
  const [credits, setCredits] = useState([]);

  const items = credits.map((c) => (
    <div className={cl.carouselItem}>
      <img
        src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
        alt={c?.name}
        
        className={cl.carouselItem__img}
      />
      <b className={cl.carouselItem__txt}>{c?.name}</b>
    </div>
  ));

  const breakpoints = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setCredits(data.cast);
  };

  useEffect(() => {
    fetchCredits();
    // eslint-disable-next-line
  }, []);

  return (
    <div >
      <AliceCarousel
      items={items}
      mouseTracking
      disableDotsControls
      responsive={breakpoints}
    />
    </div>
  );
};

export default Carousel;