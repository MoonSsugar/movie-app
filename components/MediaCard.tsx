import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/formatters";
import RatingCircle from "./RaitingCircle/RatingCircle";
import type { MediaType } from "@/types/types";

interface MediaCardProps {
  media: MediaType,
  tab?: string
}

export default function MediaCard({ media, tab }: MediaCardProps) {
  const mediaType = tab === "tv" ? "tv" : "movie";

  return (
    <div className="flex flex-col gap-4 relative">
      <Link
        href={`/${(media.media_type || mediaType)}/${media.id}`}
        className="relative block min-w-[150px] h-[225px]"
      >
        <Image
          src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
          alt="poster"
          fill
          className="object-cover rounded-xl"
          sizes="150px"
        />
        <div className="absolute -bottom-4 left-2 z-10">
          <RatingCircle
            size={35}
            percentage={
              media.vote_average > 0 ? Math.floor(media.vote_average * 10) : 0
            }
          />
        </div>
      </Link>

      <div className="flex flex-col gap-1">
        <h1 className="font-semibold">
          <Link href={`/${(media.media_type || mediaType)}/${media.id}`}>
            {media.title || media.name}
          </Link>
        </h1>
        <p className="text-gray-400">
          {formatDate(media.release_date || (media.first_air_date as string))}
        </p>
      </div>
    </div>
  );
}
