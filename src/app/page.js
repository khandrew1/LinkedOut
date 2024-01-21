"use client";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full overflow-hidden">
      <p className="text-9xl">
        Linked<span className="line-through">Out</span>
      </p>
      <div className="flex gap-3">
        <button onClick={() => signIn("google")}>Login</button>
      </div>
    </div>
  );
}
