import MemberCard from "./MemberCard";
import type { CastMember } from "@/types/types";

interface CastCarouselProps {
  cast: CastMember[]
}

export default function CastCarousel({ cast }: CastCarouselProps) {

  const mainCast = cast.length > 20 ? cast.slice(0, 20) : cast;

  console.log(mainCast)

  return (
    <section className="w-full mt-5">
      <div className="max-w-300 mx-auto">
        <h1 className="text-2xl font-semibold">Top Billed Cast</h1>
        <div className="flex overflow-x-auto gap-5 pb-2 pt-2 snap-x items-baseline">
          {mainCast.map((member) => {
            return <MemberCard key={member.id} member={member}/>
          })}
        </div>
      </div>
    </section>
  );
} 