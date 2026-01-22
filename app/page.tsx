import Link from "next/link";
import Image from "next/image";

interface Movie {
  id: number;
  title: string;
  original_language: string;
  poster_path: string;
}

export default async function Home() {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${process.env.TMDB_TOKEN}`,
    },
  };

  const res = await fetch(url, options);
  const movies = await res.json();

  return (
    <>
      <div>
        
      </div>
    </>
  );
}
