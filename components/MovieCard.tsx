import Image from "next/image";
import Link from "next/link";
import { formateDate } from "@/lib/formateDate";
import type { MovieCardProps } from "@/types/types";

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="flex flex-col gap-4 relative">
      <Link
        href={`/${movie.media_type}/${movie.id}`}
        className="relative block min-w-[150px] h-[225px] "
      >
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="poster"
          fill
          className="object-cover "
          sizes="150px"
        />
      </Link>
      <div className="absolute left-2 top-52 bg-black text-white text-xl rounded-full flex items-center justify-center w-6 h-6">
        {Math.round(movie.vote_average)}
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold">{movie.title}</h1>
        <p className="text-gray-400">{formateDate(movie.release_date)}</p>
      </div>
    </div>
  );
}
