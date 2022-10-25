export class Movie {
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  original_language: string;

  constructor(
    id: number,
    title: string,
    overview: string,
    vote_average: number,
    poster_path: string,
    backdrop_path: string,
    release_date: string,
    original_language: string
  ) {
    this.id = id;
    this.title = title;
    this.overview = overview;
    this.vote_average = vote_average;
    this.poster_path = poster_path;
    this.backdrop_path = backdrop_path;
    this.release_date = release_date;
    this.original_language = original_language;
  }
}
