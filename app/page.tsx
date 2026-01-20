import Link from "next/link";

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
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWZhYzQxNzJiYThiOWJhMmNmZWU3YTljZDc4NDYzYiIsIm5iZiI6MTc2ODY1ODg4NS43MjYsInN1YiI6IjY5NmI5N2M1NDkyMjc1YjJkNDhmYzViMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l_2cCpIDlOhemQPaV906w5W8A2_nPoeMuams47v-pMI",
    },
  };

  const res = await fetch(url, options);
  const movies = await res.json();

  return (
    <div className="grid grid-cols-4 gap-3 m-3">
      {movies.results.map((movie: Movie) => {
        return (
          <Link key={movie.id} href={`/movie/${movie.id}`}>
            <div className="bg-green-50 rounded-xl flex flex-col gap-3 p-4">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="poster"
              />

              <h1>Title: {movie.title}</h1>

              <p>Language: {movie.original_language}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
