"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function MainContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  
  const isHome = pathName === "/";

  return (
    <main className={cn("w-full", isHome ? "pt-30" : "pt-18")}>
      {children}
    </main>
  );
}
