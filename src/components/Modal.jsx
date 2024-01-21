"use client";
import Image from "next/image";
import { useState } from "react";

const Modal = ({ name, picture, setModal, uid }) => {
  const [message, setMessage] = useState("");

  const addPost = async () => {
    await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ uid: uid, message: message, date: new Date() }),
    })
      .then(() => setModal(false))
      .catch((e) => console.log(e));
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-1/2 h-3/5 rounded-xl">
      <div className="flex flex-col bg-gray-300 rounded-xl h-full text-code-white p-4 gap-y-5">
        <div className="flex flex-row h-fit">
          <Image
            src={picture}
            unoptimized={true}
            height={20}
            width={20}
            alt="Andrew Khadder's pfp"
            className="bg-gray-400 rounded-full w-20 h-20 flex items-center"
          />
          <p className="flex items-center pl-3 text-2xl">Andrew Khadder</p>
        </div>
        <textarea
          className="resize-none rounded-xl h-3/5 p-3"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button
            className="bg-red-200 w-20 rounded-full h-10"
            onClick={() => setModal(false)}
          >
            Cancel
          </button>
          <button
            className="bg-green-200 w-20 rounded-full h-10"
            onClick={addPost}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
