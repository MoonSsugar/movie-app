import HeroSection from "@/components/media/HeroSection";
import type { Video } from "@/types/types";

export default async function MoviePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const url = `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits,videos`;

  const options = {
    method: "GET",

    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  };

  const res = await fetch(url, options);
  const movie = await res.json();
  const trailer = movie.videos.results.find(
    (video: Video) => video.type === "Trailer",
  );

  return (
    <>
      <HeroSection movie={movie} trailerKey={trailer.key} />
    </>
  );
}
