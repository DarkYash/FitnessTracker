"use client";
import Image from "next/image";
import HomeBanner1 from "@/components/HomeBanner1/HomeBanner1";
import HomeBanner2 from "@/components/HomeBanner2/HomeBanner2";

export default function Home() {
  return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-star">
        <HomeBanner1 />
        <HomeBanner2 />
      </main>
  );
     
}
