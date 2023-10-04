import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMoves';
import { MainContainer } from './MainContainer';
import { SecondaryContainer } from './SecondaryContainer';

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="overflow-hidden">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
