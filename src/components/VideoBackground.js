import React, { useEffect } from 'react';
import { API_Options } from '../utils/constants';

export const VideoBackground = () => {
  const getMovieVideos = async () => {
    const data = await fetch(
      'http://api.themoviedb.org/3/movie/976573/videos?language=en-US',
      API_Options
    );
    const json = await data.json();

    console.log(json);
    const filterData = json.results.filter((video) => video.type === 'Trailer');
    const trailer = filterData[0];
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
  return (
    <div>
      <iframe
        className=" w-screen aspect-video "
        src="https://www.youtube.com/embed/LdOM0x0XDMo?si=C-pqwNIV7bIuRvyD + &autoplay=1&mute=1&loop=true"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
