const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_API_KEY = 'e39a8d93726f02bc3d5a6e1542f7a2f9';

export interface IMovieNowPlaying {
  adult: boolean;
  backdrop_path: string; // "/eENEf62tMXbhyVvdcXlnQz2wcuT.jpg"
  genre_ids: number[]; // [878, 28, 12]
  id: number; // 580489
  original_language: string; // "en"
  original_title: string; // "Venom: Let There Be Carnage"
  overview: string; // "연쇄살인마 클리터스 캐서디(우디 해럴슨)가 사형선고를 받는다. 죽을 생각이 전혀 없는 클리터스는 자신의 집행일을 연기할 목적으로 마지막 증언을 남기겠다며 탐사보도로 유명한 프리랜스 저널리스트 에디를 지목한다. 베놈을 얻는 대신 직장과 연인을 모두 잃고 폐인처럼 생활하던 에디는 클리터스와의 단독 인터뷰를 통해 다시 한번 저널리스트로서 재기할 수 있는 기회를 얻는다. 클리터스가 던져주는 수많은 단서로 인해 미결로 남아 있던 살인사건을 추가로 밝히는 데 성공한 에디는 제일 먼저 앤에게 달려가지만 전편에서 에디의 몸에 베놈이 산다는 것을 알게 된 그녀는 새로운 연인 댄 박사(레이드 스콧)와 결혼을 선언한다. 평정심을 잃은 에디는 클리터스와의 인터뷰 중 실수로 클리터스가 새로운 빌런 카니지로 거듭나는 빌미를 제공하고 마는데..."
  popularity: number; // 9995.218
  poster_path: string; // "/1Lh9LER4xRQ3INFFi2dfS2hpRwv.jpg"
  release_date: string; // "2021-09-30"
  title: string; // "베놈 2: 렛 데어 비 카니지"
  video: boolean; // false
  vote_average: number; // 7.2
  vote_count: number; // 4635
}
export interface IMoviesNowPlaying {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovieNowPlaying[];
  total_pages: number;
  total_results: number;
}

export function fetchMoviesNowPlaying() {
  return fetch(
    `${TMDB_BASE_URL}/movie/now_playing?api_key=${TMDB_API_KEY}&language=ko-KR&page=1`
  ).then((res) => res.json());
}
