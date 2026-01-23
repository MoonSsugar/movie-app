"use client";
import { useRouter, useSearchParams } from "next/navigation";

interface TrendingToggleProps {
  initialTimeWindow: string;
}

export default function TrendingToggle({
  initialTimeWindow,
}: TrendingToggleProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleToggle = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("trending", value);

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-baseline gap-3">
      <h1 className="font-semibold text-2xl">Trending</h1>

      <div className="flex border gap-3 px-4 py-1 rounded-full">
        <button
          className={`${initialTimeWindow === "day" ? "bg-green-300" : ""} flex grow `}
          onClick={() => handleToggle("day")}
        >
          Today
        </button>
        <button
          className={`${initialTimeWindow === "week" ? "bg-green-300" : ""}`}
          onClick={() => handleToggle("week")}
        >
          This Week
        </button>
      </div>
    </div>
  );
}
