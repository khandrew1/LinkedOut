"use client";
import { useSession } from "next-auth/react";
import Post from "./Post";
import Modal from "@/components/Modal";
import { useEffect, useState } from "react";

const Posts = () => {
  const { data: session } = useSession();

  const [modal, setModal] = useState(false);
  const [posts, setPosts] = useState([]);

  const newPost = {
    uid: "P8BXaVFJatPcwsXehu05",
    message: "ughhhhh",
    date: new Date(),
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/posts", { method: "GET" });
      const data = await response.json();

      setPosts(data.items);
    };

    fetchPosts();
  }, []);

  return (
    <div className="h-full flex flex-col items-center gap-3">
      {modal && (
        <Modal
          name={session.user.name}
          picture={session.user.image}
          uid={session.user.id}
          setModal={setModal}
        />
      )}
      <button
        className="rounded-full bg-blue-200 w-20 h-12 font-bold"
        onClick={() => setModal(true)}
      >
        Post
      </button>
      {posts.map((post, idx) => (
        <Post uid={post.uid} time="1w" message={post.message} key={idx} />
      ))}
    </div>
  );
};

export default Posts;
