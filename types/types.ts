// COMMON TYPES
interface ProductionCountry {
  iso_3166_1: string,
  name: string
}

export interface Genre {
  id: number;
  name: string;
}

// MEDIA & CARDS
export interface MediaType {
  id: number,
  title: string,
  poster_path: string,
  backdrop_path: string,
  release_date: string,
  vote_average: number,
  media_type: string,
  first_air_date?: string,
  name?: string,
  production_countries: ProductionCountry[],
  genres: Genre[],
  runtime: number,
  tagline: string,
  overview: string,
  credits: Credits
}

// CREDITS (CAST & CREW)
export interface CastMember {
  id: number,
  name: string,
  original_name: string,
  job: string,
}

export interface CrewMember {
  id: number,
  job: string,
  original_name: string
}

export interface Credits {
  cast: CastMember[],
  crew: CrewMember[]
}

// Video
export interface Video {
  name: string,
  key: string,
  type: string
}