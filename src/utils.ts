export function makeMovieImageUrl(
  fileNameWithExtension: string,
  width?: number
) {
  return `https://image.tmdb.org/t/p/${
    width ? 'w' + width : 'original'
  }/${fileNameWithExtension}`;
}
