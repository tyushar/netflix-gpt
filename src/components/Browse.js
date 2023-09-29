import { useEffect } from 'react';
import Header from './Header';
import { API_Options } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';

const Browse = () => {
  // fetch data from API using Async and Await
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

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
