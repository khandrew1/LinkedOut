"use client";

import { useSession } from "next-auth/react";
import Post from "./Post";

const Posts = () => {
  const { data: session } = useSession();

  return (
    <Post
      name={session.user.name}
      picture={session.user.image}
      time="1w"
      message="I'm happy to share that I'm no longer friends with David Chong!"
    />
  );
};

export default Posts;
