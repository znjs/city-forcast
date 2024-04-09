"use client";

import { CityCard } from "@/components/CityCard";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 max-w-[100%]">
        <div className="p-12">
          <div className="flex text-white items-center gap-4 mb-8">
            <h1 className="text-3xl">Hello User,</h1>
            <Button className="bg-[#72CFFF] text-black hover:bg-[#72CFFFAA]">
              <Info className="mr-2" />
              There are 2 to action items.
            </Button>
          </div>
          <div className="flex max-w-[calc(100vw-52px)] overflow-x-auto gap-3 p-2 city_cards">
            <CityCard />
            <CityCard />
            <CityCard />
            <CityCard />
            <CityCard />
            <CityCard />
          </div>
        </div>
      </div>
    </div>
  );
}
