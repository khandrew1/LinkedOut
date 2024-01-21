"use client";
import { LuDot } from "react-icons/lu";
import { BiWorld } from "react-icons/bi";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";

const Post = ({ uid, time, message }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/api/lookup?uid=${uid}`, {
        method: "GET",
      });
      const data = await response.json();

      console.log(data.items);
      setUser(data.items);
    };

    fetchUser();
  }, [uid]);

  return user ? (
    <div className="flex flex-col bg-gray-200 h-1/5 w-1/3 rounded-lg text-black p-3 gap-3">
      <div className="flex w-fit gap-1">
        <Image
          src={user.picture}
          unoptimized={true}
          height={14}
          width={14}
          alt="Andrew Khadder's pfp"
          className="bg-gray-400 rounded-full w-14 h-14 flex items-center"
        />
        <div className="p-1">
          <Link
            href={`/profile/${uid}`}
            className="flex items-center font-bold"
          >
            {user.name}
          </Link>
          <div className="flex items-center w-fit">
            <BiWorld />
          </div>
        </div>
      </div>
      <p className="flex items-center h-full">{message}</p>
      <div className="flex space-x-3 text-xl items-end">
        <FaRegHeart />
        <FaRegComment />
      </div>
    </div>
  ) : (
    "Loading..."
  );
};

export default Post;
