import { useQuery } from 'react-query';
import styled from 'styled-components';
import { fetchMovieNowPlaying } from '../api';

const Wrapper = styled.div`
  width: 100vw;
  height: 200vh;
  background: linear-gradient(135deg, cyan, lightgreen);
`;

export default function Home() {
  const { data, isLoading } = useQuery(
    ['movie', 'now_playing'],
    fetchMovieNowPlaying
  );
  console.log(data);
  return <Wrapper></Wrapper>;
}
