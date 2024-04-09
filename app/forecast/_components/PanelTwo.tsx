"use client";

import { Separator } from "@/components/ui/separator";
import { Flag, Table2, TriangleAlert } from "lucide-react";

export const PanelTwo = () => {
  return (
    <div className="bg-[#0A1015] grow">
      <div className="bg-[#12262F] flex items-center gap-4 text-white">
        <div className="flex items-center gap-4 p-2 ml-8">
          <TriangleAlert className="text-[#F6AE4D]" />
          <span className="font-medium text-lg">Sample Stack</span>
        </div>
        <Separator orientation="vertical" className="h-5 w-[1px]" />
        <div className="text-xs flex items-end gap-6">
          <p>
            Stack id: <span className="text-sm">099837465721</span>
          </p>
          <Table2 className="text-[#5DE8CF] cursor-pointer" size={14} />
        </div>
        <div className="bg-[#193D4E] rounded-md m-2 flex">
          <div className="flex flex-col justify-start p-2 w-[180px]">
            <p className="font-extralight uppercase text-xs">Forecast</p>
            <p>89%</p>
          </div>
          <div className="flex flex-col justify-start p-2 w-[180px]">
            <p className="font-extralight uppercase text-xs">Forecast</p>
            <p>89%</p>
          </div>
        </div>
        <Flag className="cursor-pointer text-white/20" />
      </div>
    </div>
  );
};
