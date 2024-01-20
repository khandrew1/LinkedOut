"use client";
import { useState } from "react";

const Page = () => {
  const [animate, setAnimate] = useState(false);

  return (
    <div className="flex flex-col h-full justify-center items-center">
      <div
        className={`flex text-9xl font-bold ${animate && "animate-slide-up"}`}
      >
        Linked Out
      </div>
      <button onClick={() => setAnimate(!animate)}>Test Animation</button>
    </div>
  );
};

export default Page;
