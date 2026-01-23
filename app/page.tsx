import HeroCollage from "@/components/home/HeroCollage";
import TrendingCarousel from "@/components/home/TrendingCarousel";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ trending?: string }>;
}) {
  const timeWindow = (await searchParams).trending || 'day';

  return (
    <>
      <HeroCollage />
      <TrendingCarousel timeWindow={timeWindow}/>
    </>
  );
}
