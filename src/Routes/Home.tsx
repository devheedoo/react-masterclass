import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { fetchMoviesNowPlaying, IMoviesNowPlaying } from '../api';
import { makeMovieImageUrl } from '../utils';

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
  position: relative;
  background-color: red;
`;

const Row = styled(motion.div)`
  position: absolute;
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(6, 1fr);
`;

const Box = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  color: black;
  flex: 1;
  height: 120px;
`;

const rowVariants: Variants = {
  initial: { x: window.outerWidth + 10 },
  animate: { x: 0 },
  exit: { x: -window.outerWidth - 10 },
};

export default function Home() {
  const { data, isLoading } = useQuery<IMoviesNowPlaying>(
    ['movie', 'now_playing'],
    fetchMoviesNowPlaying
  );
  const [movieOfBanner, ...moviesOfSlider] = data?.results ?? [];

  const sampleSlide = [1, 2, 3, 4, 5, 6];

  const [isExitingSlide, setExitingSlide] = useState(false);
  const handleExitComplete = () => setExitingSlide(false);

  const [sliderIndex, setSliderIndex] = useState(0);
  const showNextSlide = () => {
    if (isExitingSlide) return;
    setExitingSlide(true);
    setSliderIndex((prev) => (prev === sampleSlide.length - 1 ? 0 : prev + 1));
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
                variants={rowVariants}
                initial="initial"
                animate="animate"
                transition={{ type: 'tween', duration: 0.5 }}
                exit="exit"
                key={sliderIndex}
              >
                {sampleSlide.map((e) => (
                  <Box key={e}>{e}</Box>
                ))}
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      )}
    </Wrapper>
  );
}
