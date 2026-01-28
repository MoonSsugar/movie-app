import MediaCard from "../MediaCard";
import SlidingTabBar from "./SlidingTabBar";
import type { MediaType } from "@/types/types";

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

  console.log(trendingMovies)

  return (
    <section className="w-full pt-10">
      <div className="max-w-300 mx-auto">
        <SlidingTabBar 
          title="Trending"
          categorie="trending"
          tabs={[
            {
              id: "day",
              name: "Today"
            },
            {
              id: "week",
              name: "This Week"
            }
          ]}
        /> 

        <div className="flex overflow-x-auto gap-5 pb-3 pt-6 snap-x">
          {trendingMovies.results.map((media: MediaType) => {
            return <MediaCard key={media.id} media={media} />;
          })}
        </div>
      </div>
    </section>
  );
}
