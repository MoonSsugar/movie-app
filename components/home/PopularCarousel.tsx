import SlidingTabBar from "./SlidingTabBar";
import MovieCard from "../MediaCard";
import type { MediaType } from "@/types/types";

const urls = {
  streaming: "https://api.themoviedb.org/3/movie/popular",
  on_tv: "https://api.themoviedb.org/3/tv/on_the_air",
  for_rent: "https://api.themoviedb.org/3/movie/top_rated",
  in_theaters: "https://api.themoviedb.org/3/movie/now_playing",
};

interface PopularCarouselProps {
  popularTab: string;
}

export default async function PopularCarousel({
  popularTab,
}: PopularCarouselProps) {
  const url =
    popularTab === "tv"
      ? urls.on_tv
      : popularTab === "rent"
        ? urls.for_rent
        : popularTab === "theaters"
          ? urls.in_theaters
          : urls.streaming;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  };

  const popularRes = await fetch(url, options);
  const popularMedias = await popularRes.json();

  return (
    <section className="w-full pt-10">
      <div className="max-w-300 mx-auto">
        <SlidingTabBar
          title="What's Popular"
          categorie="popular"
          tabs={[
            {
              id: "streaming",
              name: "Streaming",
            },
            {
              id: "tv",
              name: "On TV",
            },
            {
              id: "rent",
              name: "For Rent",
            },
            {
              id: "theaters",
              name: "In Theaters",
            },
          ]}
        />

        <div className="flex overflow-x-auto gap-5 pb-3 pt-6 snap-x">
          {popularMedias.results.map((media: MediaType) => {
            return <MovieCard key={media.id} media={media} tab={popularTab}/> 
          })}
        </div>
      </div>
    </section>
  );
}
