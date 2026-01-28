import Link from "next/link";
import Image from "next/image";
import type { MediaType } from "@/types/types";

export default async function HeroCollage() {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  };

  const trendingResult = await fetch(url, options);
  const trendingData = await trendingResult.json();
  const trendingMovies = trendingData.results.splice(0, 5);

  return (
    <section className="w-full h-112.5">
      <div className="relative flex max-w-325 mx-auto h-full w-full">
        <div className="absolute top-30 left-10 z-20 flex flex-col gap-6 text-white">
          <div>
            <h1 className="text-6xl font-bold bg-radial text-transparent bg-clip-text from-pink-300 to-purple-400 ">
              That&apos;s a <br />
              Wrap 2025
            </h1>
            <p className="text-xl">
              The best (and worst) of the year from TMDB
            </p>
          </div>
          <div>
            <Link
              href="/2025"
              className="border-3 rounded-full px-2 py-1 font-bold hover:bg-purple-400 cursor-pointer"
            >
              Check it out &rarr;
            </Link>
          </div>
        </div>
        {trendingMovies.map((media: MediaType) => {
          return (
            <div key={media.id} className="flex flex-1 relative">
              <div className="absolute w-full h-full bg-black/50 z-10" />
              <Image
                src={`https://image.tmdb.org/t/p/original${media.poster_path}`}
                alt="img"
                fill
                className="object-cover"
                sizes="(max-width: 1500px)"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}