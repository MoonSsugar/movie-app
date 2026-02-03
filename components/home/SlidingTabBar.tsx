"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useRef, useLayoutEffect } from "react";
import clsx from "clsx";

interface SlidingTabBarProps {
  title: string;
  categorie: string;
  tabs: {
    id: string;
    name: string;
  }[];
}

export default function SlidingTabBar({
  title,
  tabs,
  categorie,
}: SlidingTabBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabsRef = useRef<(HTMLElement | null)[]>([]);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [tabUnderLineWidth, setTabUnderLineWidth] = useState(0);
  const [tabUnderLineLeft, setTabUnderLineLeft] = useState(0);

  useLayoutEffect(() => {
    if (activeTabIndex === null) {
      return;
    }

    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;
      setTabUnderLineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderLineWidth(currentTab?.offsetWidth ?? 0);
    };

    setTabPosition();
  }, [activeTabIndex]);

  const handleToggle = (param: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set(param, value);

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="relative flex items-baseline gap-3">
      <h1 className="font-semibold text-2xl">{title}</h1>

      <div className="relative border rounded-full">
        <span
          className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-full transition-all duration-300"
          style={{ left: tabUnderLineLeft, width: tabUnderLineWidth }}
        >
          <span className="w-full h-full bg-[#032541]" />
        </span>

        {tabs.map((tab, index) => {
          return (
            <button
              className={`px-4 py-0.5 cursor-pointer bg-clip-text font-semibold  ${clsx("text-black", { "bg-linear-to-r  text-transparent from-green-200 to-cyan-500": activeTabIndex === index })}`}
              key={tab.id}
              ref={(el) => {
                tabsRef.current[index] = el;
              }}
              onClick={() => {
                setActiveTabIndex(index);
                handleToggle(categorie, tab.id);
              }}
            >
              {tab.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
