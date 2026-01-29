import HeroSection from "@/components/media/HeroSection";
import CastCarousel from "@/components/media/CastCarousel";
import type { Video } from "@/types/types";
import RecommendationsCarousel from "@/components/media/RecommendationsCarousel";

export default async function TvPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const url = `https://api.themoviedb.org/3/tv/${id}?append_to_response=credits,videos`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  };

  const res = await fetch(url, options);
  const series = await res.json();

  const trailer = series.videos.results.find(
    (video: Video) => video.type === "Trailer",
  );

  return (
    <>
      <HeroSection media={series} trailerKey={trailer?.key || undefined} type="tv"/>
      <CastCarousel cast={series.credits.cast} />
      <RecommendationsCarousel id={id} type="tv" />
    </>
  );
}
