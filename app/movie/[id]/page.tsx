import HeroSection from "@/components/movie/HeroSection";

export default async function MoviePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const url = `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits`;

  const options = {
    method: "GET",

    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  };

  const res = await fetch(url, options);
  const movie = await res.json();

  return (
    <>
      <HeroSection movie={movie}/>
    </>
  );
}
