import React from 'react';
import { VideoBackground } from './VideoBackground';
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';

export const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const Mainmovie = movies[0];
  const { original_title, overview, id } = Mainmovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0 scrollbar-hide overflow-hidden">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};
