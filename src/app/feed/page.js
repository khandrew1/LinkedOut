"use client";

import Post from "@/components/Post";
import { useSession, signOut } from "next-auth/react";

const Page = () => {

  const { data: session } = useSession();

  return (
    <div className="h-full flex flex-col justify-center items-center gap-3">
      <Post />
      <Post />
      <button onClick={() => signOut()}>log</button>
    </div>
  );
};

export default Page;
