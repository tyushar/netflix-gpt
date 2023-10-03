import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMoves';

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
