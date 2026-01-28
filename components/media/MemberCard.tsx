import Image from "next/image";
import type { CastMember } from "@/types/types";

interface MemberCardProps {
  member: CastMember
}

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center p-1 rounded-xl">
      <div className="relative min-w-[150px] h-[225px]">
        <Image 
          src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}
          alt="profile"
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold text-md">{member.original_name}</h1>
        <p className="text-sm">{member.character}</p>
      </div>
    </div>
  );
}