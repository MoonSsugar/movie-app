import MovieCard from "../MovieCard";
import TrendingToggle from "./TrendingToggle";
import type { Movie } from "@/types/types";

interface TrendingCarouselProps {
  timeWindow: string;
}

export default async function TrendingCarousel({
  timeWindow,
}: TrendingCarouselProps) {
  const url = `https://api.themoviedb.org/3/trending/movie/${timeWindow}?language=en-US`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  };

  const trendingRes = await fetch(url, options);
  const trendingMovies = await trendingRes.json();

  return (
    <section className="w-full pt-10">
      <div className="max-w-325 mx-auto">
        <TrendingToggle initialTimeWindow={timeWindow}/> 

        <div className="flex overflow-x-auto gap-5 pb-3 pt-6 snap-x">
          {trendingMovies.results.map((movie: Movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </section>
  );
}
