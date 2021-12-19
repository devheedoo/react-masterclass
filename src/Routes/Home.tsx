import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { fetchMoviesNowPlaying, IMoviesNowPlaying } from '../api';
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

const Slider = styled.div`
  /* position: relative; */
  background-color: red;
`;

const Row = styled(motion.div)<{ offset: number }>`
  position: absolute;
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(${(props) => props.offset}, 1fr);
`;

const Box = styled(motion.div)<{ fileNameWithExtension: string }>`
  aspect-ratio: 1.58;
  position: relative;
  flex: 1;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
  background-size: cover;
  background-image: url(${(props) =>
    makeMovieImageUrl(props.fileNameWithExtension, 300)});
`;

const BoxDescription = styled(motion.div)`
  height: 50px;
  background-color: ${(props) => props.theme.black.lighter};
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  h4 {
    text-align: center;
    color: ${(props) => props.theme.white.darker};
  }
`;

/* variants */
const rowVariants: Variants = {
  initial: { x: window.outerWidth + 10 },
  animate: { x: 0 },
  exit: { x: -window.outerWidth - 10 },
};

const boxVariants: Variants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.2,
    y: -80,
    zIndex: 99,
    transition: { delay: 0.3, duration: 0.3 },
  },
};

const boxDescriptionVariants: Variants = {
  hover: { opacity: 1, transition: { delay: 0.3, duration: 0.3 } },
};

export default function Home() {
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

  return (
    <Wrapper>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          <Banner fileNameWithExtension={movieOfBanner?.backdrop_path ?? ''}>
            <Title>{movieOfBanner?.title ?? ''}</Title>
            <Overview>{movieOfBanner?.overview ?? ''}</Overview>
          </Banner>
          <Slider onClick={showNextSlide}>
            <AnimatePresence
              initial={false}
              onExitComplete={handleExitComplete}
            >
              <Row
                offset={SLIDER_OFFSET}
                variants={rowVariants}
                initial="initial"
                animate="animate"
                transition={{ type: 'tween', duration: 0.5 }}
                exit="exit"
                key={sliderIndex}
              >
                {moviesOfSlider
                  .slice(
                    SLIDER_OFFSET * sliderIndex,
                    SLIDER_OFFSET * (sliderIndex + 1)
                  )
                  .map((movie) => (
                    <Box
                      key={movie.id}
                      fileNameWithExtension={movie.backdrop_path}
                      variants={boxVariants}
                      initial="initial"
                      whileHover="hover"
                      transition={{ type: 'tween' }}
                    >
                      <BoxDescription
                        variants={boxDescriptionVariants}
                        transition={{ type: 'tween' }}
                      >
                        <h4>{movie.title}</h4>
                      </BoxDescription>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      )}
    </Wrapper>
  );
}
