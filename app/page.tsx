import HeroCollage from "@/components/home/HeroCollage";
import TrendingCarousel from "@/components/home/TrendingCarousel";
import PopularCarousel from "@/components/home/PopularCarousel";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ trending?: string, popular?: string }>;
}) {
  const timeWindow = (await searchParams).trending || 'day';
  const popularTab = (await searchParams).popular ||"streaming";

  return (
    <>
      <HeroCollage />
      <TrendingCarousel timeWindow={timeWindow}/>
      <PopularCarousel popularTab={popularTab} />
    </>
  );
}
