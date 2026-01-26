"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { CircleUserIcon } from "lucide-react";
import NavItem from "./NavItem";

export default function Header() {
  const [scrollDirection, setScrollDirection] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const pathName = usePathname();

  const SCROLL_THRESHOLD = 5;

  useEffect(() => {
    let lastScroll = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScroll ? "down" : "up";

      if (
        scrollDirection !== direction &&
        (scrollY - lastScroll > SCROLL_THRESHOLD ||
          scrollY - lastScroll < -SCROLL_THRESHOLD)
      ) {
        setScrollDirection(direction);
      }

      if (scrollDirection === "down") {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScroll = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);

    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, [scrollDirection]);

  return (
    <header
      className={`flex flex-col w-full fixed z-50 top-0 left-0 transition-transform ${isVisible ? "translate-y-0" : "-translate-y-18"} duration-300 ease-in-out`}
    >
      <div className="h-18 w-full bg-[#021e34] p-5">
        <div className="flex justify-between max-w-300 mx-auto">
          <div className="flex items-baseline gap-10">
            <Link href="/" className="text-2xl font-bold bg-linear-to-r text-transparent bg-clip-text from-green-300 to-cyan-400 opacity-90">Movie App</Link>

            <nav>
              <ul className="flex gap-6">
                <NavItem
                  title="Movies"
                  links={[
                    {
                      name: "Popular",
                      href: "/movie",
                    },
                    {
                      name: "Now Playing",
                      href: "/movie/now-playing",
                    },
                    {
                      name: "Upcoming",
                      href: "/movie/upcoming",
                    },
                    {
                      name: "Top Rated",
                      href: "/movie/top-rated",
                    },
                  ]}
                />
                <NavItem
                  title="TV Shows"
                  links={[
                    {
                      name: "Popular",
                      href: "/tv",
                    },
                    {
                      name: "Airing Today",
                      href: "/tv/airing-today",
                    },
                    {
                      name: "Upcoming",
                      href: "/tv/on-the-air",
                    },
                    {
                      name: "Top Rated",
                      href: "/tv/top-rated",
                    },
                  ]}
                />
                <NavItem
                  title="People"
                  links={[
                    {
                      name: "Popular",
                      href: "/person",
                    },
                  ]}
                />
              </ul>
            </nav>
          </div>

          <div className="flex items-center text-white">
            <CircleUserIcon size={30}/>
          </div>
        </div>
      </div>

      { pathName === "/" ? <div className="relative w-full bg-white border-b border-gray-400">
        <form className="max-w-300 mx-auto">
          <input
            type="text"
            placeholder="Search..."
            className="w-full text-gray-400 outline-none py-3"
          />
        </form>
      </div> : ""}
    </header>
  );
}
