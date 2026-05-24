"use client";

import {
  BMI_SCALE_SEGMENTS,
  getBMIPositionOnScale,
  type BMIResult,
} from "@/lib/bmi";
import { motion } from "framer-motion";

interface BMIScaleProps {
  result: BMIResult | null;
}

export function BMIScale({ result }: BMIScaleProps) {
  const position = result ? getBMIPositionOnScale(result.bmi) : 50;

  return (
    <div className="w-full">
      <div className="relative h-4 rounded-full overflow-hidden flex">
        {BMI_SCALE_SEGMENTS.map((seg) => {
          const widthPct = ((seg.max - seg.min) / 40) * 100;
          return (
            <div
              key={seg.key}
              className="h-full"
              style={{
                backgroundColor: seg.color,
                width: `${widthPct}%`,
              }}
              title={seg.key}
            />
          );
        })}
      </div>
      <div className="relative h-8 mt-1">
        {result && (
          <motion.div
            initial={{ left: "50%", opacity: 0 }}
            animate={{ left: `${position}%`, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute top-0 -translate-x-1/2 flex flex-col items-center"
          >
            <div
              className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[10px] border-l-transparent border-r-transparent"
              style={{ borderBottomColor: result.color }}
            />
            <span
              className="text-xs font-bold font-poppins mt-0.5 px-2 py-0.5 rounded-full text-white"
              style={{ backgroundColor: result.color }}
            >
              {result.bmi}
            </span>
          </motion.div>
        )}
      </div>
      <div className="flex justify-between mt-2 text-xs font-inter text-gray-500">
        <span>Under</span>
        <span>Normal</span>
        <span>Over</span>
        <span>Obese</span>
      </div>
    </div>
  );
}
