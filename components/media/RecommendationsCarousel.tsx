import MediaCard from "../MediaCard";
import type { MediaType } from "@/types/types";

interface RecommendationsCarouselProps {
  id: string;
}

export default async function RecommendationsCarousel({
  id,
}: RecommendationsCarouselProps) {
  const url = `https://api.themoviedb.org/3/movie/${id}/recommendations`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  };

  const res = await fetch(url, options);
  const movies = await res.json();

  return (
    <section className="w-full mt-5">
      <div className="max-w-300 mx-auto">
        <h1 className="text-2xl font-semibold">Recommendation</h1>
        <div className="flex gap-5 pb-6 pt-3 items-baseline overflow-x-auto snap-x">
          {movies.results.length > 0 &&
            movies.results.map((movie: MediaType) => {
              return <MediaCard key={movie.id} media={movie} />;
            })}
        </div>
      </div>
    </section>
  );
}
