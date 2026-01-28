"use client";
import Image from "next/image";
import { useState } from "react";
import { formateFullDate } from "@/lib/formateFullDate";
import { formateRuntime } from "@/lib/formateRuntime";
import RatingCircle from "@/components/RatingCircle";
import TrailerModal from "./TrailerModal";
import type { MediaType, Genre } from "@/types/types";

interface HeroSectionProps {
  movie: MediaType;
  trailerKey: string;
}

interface UniqueCrew {
  [key: number]: {
    name: string;
    jobs: string[];
  };
}

interface UniqueMember {
  name: string;
  jobs: string[];
}

export default function HeroSection({ movie, trailerKey }: HeroSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const releaseDate = movie.release_date.split("-");
  const country = movie.production_countries[0]?.iso_3166_1 || "US";

  const importantMembers = movie.credits.crew.filter(
    (member) =>
      member.job === "Director" ||
      member.job === "Screenplay" ||
      member.job === "Writer",
  );

  const uniqueCrew: UniqueCrew = {};

  for (const member of importantMembers) {
    if (!uniqueCrew[member.id]) {
      uniqueCrew[member.id] = {
        name: member.original_name,
        jobs: [member.job],
      };
    } else {
      uniqueCrew[member.id].jobs.push(member.job);
    }
  }

  return (
    <section className="w-full">
      <div className="relative">
        <div className="absolute w-full h-full z-10 bg-[#20200c]/80" />
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}?append_to_response=credits`}
          alt="backdrop"
          fill
          className="object-cover z-0"
        />
        <div className="relative flex z-20 p-10 gap-8 max-w-[1300px] mx-auto">
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="poster"
            width={500}
            height={500}
            className="w-75"
          />
          <div className="flex flex-col max-w-300 text-white">
            <h1 className="text-4xl font-bold flex gap-1">
              {movie.title}
              <span className="text-gray-300 font-normal">
                ({releaseDate[0]})
              </span>
            </h1>

            <p>
              {formateFullDate(movie.release_date, country)} &bull;{" "}
              {movie.genres.map((genre: Genre) => {
                return `${genre.name} `;
              })}{" "}
              &bull; {formateRuntime(movie.runtime)}
            </p>

            <div className="flex items-center mt-5">
              <RatingCircle
                size={70}
                percentage={Math.floor(movie.vote_average * 10)}
              />
              <h1 className="ml-2 font-semibold text-xl">
                User <br /> Score
              </h1>
            </div>

            {trailerKey ? (
              <div className="mt-3">
                <button
                  className="text-xl px-4 py-1 hover:underline hover:text-gray-400 transform duration-300 cursor-pointer"
                  onClick={() => setIsOpen(true)}
                >
                  Play Trailer
                </button>
              </div>
            ) : (
              ""
            )}

            {isOpen && (
              <TrailerModal trailerKey={trailerKey} setIsOpen={setIsOpen} />
            )}

            <p className="text-xl text-neutral-400 italic py-5">
              {movie.tagline}
            </p>

            <div>
              <h1 className="font-semibold text-xl">Overview</h1>
              <p className="text-">{movie.overview}</p>
            </div>

            <div className="flex justify-between max-w-md mt-10">
              {Object.values(uniqueCrew).map((member: UniqueMember) => {
                return (
                  <div key={member.name}>
                    <h1 className="font-bold underline decoration-1 decoration-gray-500">
                      {member.name}
                    </h1>
                    <p className="text-sm">{member.jobs.join(", ")} </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
