import Image from "next/image";

export default async function Movie({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const url = `https://api.themoviedb.org/3/movie/${id}`;

  const options = {
    method: "GET",

    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${process.env.TMDB_TOKEN}`
    },
  };

  const res = await fetch(url, options);
  const movie = await res.json();

  return (
    <div className="relative w-full h-screen">
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt="Movie Backdrop"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
