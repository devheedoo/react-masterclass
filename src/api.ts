const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_API_KEY = 'e39a8d93726f02bc3d5a6e1542f7a2f9';

export function fetchMovieNowPlaying() {
  return fetch(
    `${TMDB_BASE_URL}/movie/now_playing?api_key=${TMDB_API_KEY}&language=ko-KR&page=1`
  ).then((res) => res.json());
}
