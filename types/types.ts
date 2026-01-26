export interface MediaType {
  id: number,
  title: string,
  poster_path: string,
  release_date: string,
  vote_average: number,
  media_type: string,
  first_air_date?: string,
  name?: string
}

export interface MediaCardProps {
  media: MediaType
}