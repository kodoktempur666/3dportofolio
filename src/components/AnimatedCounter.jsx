import React from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  return (
    <div id="counter" className="pading-x-lg xl:mt-40 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <div
            key={item.label}
            className="bg-zinc-900 rounded-lg p-25 flex flex-col justify-center mx-auto"
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              <CountUp suffix={item.suffix} end={item.value} />
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
