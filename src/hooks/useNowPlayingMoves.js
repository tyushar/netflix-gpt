import { useDispatch } from 'react-redux';
import { API_Options } from '../utils/constants';
import { useEffect } from 'react';
import { addNowPlayingMovies } from '../utils/moviesSlice';

// fetch data from API using Async and Await
// Custom Hook

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayngMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
      API_Options
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayngMovies();
  }, []);
};

export default useNowPlayingMovies;
