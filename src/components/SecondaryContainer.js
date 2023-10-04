import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

export const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className=" bg-black">
      <div className="-mt-60 relative z-20 ">
        <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />
        <MovieList title={'Popular'} movies={movies.nowPlayingMovies} />
        <MovieList title={'Trendings'} movies={movies.nowPlayingMovies} />
        <MovieList title={'Upcoming Movies'} movies={movies.nowPlayingMovies} />
        <MovieList title={'Horror'} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};
