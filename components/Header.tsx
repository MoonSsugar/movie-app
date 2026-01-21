"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { CircleUserIcon } from "lucide-react";

export default function Header() {
  const [scrollDirection, setScrollDirection] = useState("");
  const [isVisible, setIsVisible] = useState(true);

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
      className={`flex flex-col w-full fixed z-50 top-0 left-0 transition-transform ${isVisible ? "translate-y-0" : "-translate-y-16"} duration-300 ease-in-out`}
    >
      <div className="h-16 w-full bg-[#021e34] p-5">
        <div className="flex justify-between max-w-300 mx-auto">
          <ul className="flex gap-3">
            <li>
              <Link href="/">Movie App</Link>
            </li>
            <li>Movies</li>
            <li>TV Shows</li>
            <li>People</li>
          </ul>
          <ul className="flex">
            <li>
              <CircleUserIcon size={30} />
            </li>
          </ul>
        </div>
      </div>

      <div className="relative w-full bg-white border-b border-gray-400">
        <form className="max-w-300 mx-auto">
          <input
            type="text"
            placeholder="Search..."
            className="w-full text-gray-400 outline-none py-3"
          />
        </form>
      </div>
    </header>
  );
}
