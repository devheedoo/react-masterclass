import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useHistory, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { fetchMoviesNowPlaying, IMoviesNowPlaying } from '../api';
import MovieSlider from '../Components/MovieSlider';
import { makeMovieImageUrl } from '../utils';

const SLIDER_OFFSET = Math.floor(window.innerWidth / 300);

/* styled components */
const Wrapper = styled.div`
  width: 100vw;
  height: 200vh;
  background: linear-gradient(135deg, cyan, lightgreen);
`;

const Loader = styled.div``;
const Banner = styled.div<{ fileNameWithExtension: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => makeMovieImageUrl(props.fileNameWithExtension)});
  background-size: cover;
  padding: 40px;
`;

const Title = styled.h2`
  font-size: 58px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Overview = styled.p`
  font-size: 18px;
  width: 70%;
`;

const MovieDetailModal = styled(motion.div)`
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 40vw;
  height: 40vw;
  background-color: rgba(255, 255, 0, 0.8);
`;

export default function Home() {
  const history = useHistory();
  const matchesMovieId = useRouteMatch<{ movieId: string }>('/movie/:movieId');

  const { data, isLoading } = useQuery<IMoviesNowPlaying>(
    ['movie', 'now_playing'],
    fetchMoviesNowPlaying
  );
  const [movieOfBanner, ...moviesOfSlider] = data?.results ?? [];

  const [isExitingSlide, setExitingSlide] = useState(false);
  const handleExitComplete = () => setExitingSlide(false);

  const [sliderIndex, setSliderIndex] = useState(0);
  const showNextSlide = () => {
    if (isExitingSlide) return; // Disable while slide animtion playing
    const maxIndex = Math.ceil(moviesOfSlider.length / SLIDER_OFFSET) - 1;
    setExitingSlide(true);
    setSliderIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const moviesOnSlide = moviesOfSlider.slice(
    SLIDER_OFFSET * sliderIndex,
    SLIDER_OFFSET * (sliderIndex + 1)
  );

  const handleClickMovie = (movieId: number) => {
    history.push(`/movie/${movieId}`);
  };

  return (
    <Wrapper>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          <Banner
            onClick={showNextSlide}
            fileNameWithExtension={movieOfBanner?.backdrop_path ?? ''}
          >
            <Title>{movieOfBanner?.title ?? ''}</Title>
            <Overview>{movieOfBanner?.overview ?? ''}</Overview>
          </Banner>
          <MovieSlider
            movies={moviesOnSlide}
            pageIndex={sliderIndex}
            pageOffset={SLIDER_OFFSET}
            onClickMovie={handleClickMovie}
            onExitComplete={handleExitComplete}
          />
          <AnimatePresence>
            {matchesMovieId ? (
              <MovieDetailModal layoutId={matchesMovieId?.params.movieId} />
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Wrapper>
  );
}
