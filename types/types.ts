export interface Movie {
  id: number,
  title: string,
  poster_path: string,
  release_date: string,
  vote_average: number,
  media_type: string,
}

export interface MovieCardProps {
  movie: Movie
}