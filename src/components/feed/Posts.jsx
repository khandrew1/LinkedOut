"use client";

import { useSession } from "next-auth/react";
import Post from "./Post";
import Modal from "@/components/Modal";
import { useState } from "react";

const Posts = () => {
  const { data: session } = useSession();
  const [modal, setModal] = useState(false);

  return (
    <div className="h-full flex flex-col items-center gap-3">
      {modal && (
        <Modal
          name={session.user.name}
          picture={session.user.image}
          setModal={setModal}
        />
      )}
      <button
        className="rounded-full bg-blue-200 w-20 h-12 font-bold"
        onClick={() => setModal(true)}
      >
        Post
      </button>
      <Post
        name={session.user.name}
        picture={session.user.image}
        time="1w"
        message="I'm happy to share that I'm no longer friends with David Chong!"
      />
    </div>
  );
};

export default Posts;
