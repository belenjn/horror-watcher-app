export class Movie {
  id: number;
  title: string;
  overview: string;
  vote: number;
  poster_path: string;
  release_date: string;

  constructor(
    id: number,
    title: string,
    overview: string,
    vote: number,
    poster_path: string,
    release_date: string
  ) {
    this.id = id;
    this.title = title;
    this.overview = overview;
    this.vote = vote;
    this.poster_path = poster_path;
    this.release_date = release_date;
  }
}
