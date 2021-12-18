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

export default function Home() {
  const { data, isLoading } = useQuery<IMoviesNowPlaying>(
    ['movie', 'now_playing'],
    fetchMoviesNowPlaying
  );
  const movieOfBanner = data?.results[0];
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
        </>
      )}
    </Wrapper>
  );
}
