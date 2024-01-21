import { LuDot } from "react-icons/lu";
import { BiWorld } from "react-icons/bi";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { useSession } from "next-auth/react";

const Post = ({ name, picture, time, message }) => {
  return (
    <div className="flex flex-col bg-gray-200 h-1/5 w-1/3 rounded-lg text-black p-3 gap-3">
      <div className="flex w-fit gap-1">
        <Image
          src={picture}
          unoptimized={true}
          height={14}
          width={14}
          alt="Andrew Khadder's pfp"
          className="bg-gray-400 rounded-full w-14 h-14 flex items-center"
        />
        <div className="p-1">
          <p className="flex items-center font-bold">{name}</p>
          <div className="flex items-center w-fit">
            <p>{time}</p>
            <LuDot />
            <BiWorld />
          </div>
        </div>
      </div>
      <p className="flex justify-center items-center h-full">{message}</p>
      <div className="flex space-x-3 text-xl items-end">
        <FaRegHeart />
        <FaRegComment />
      </div>
    </div>
  );
};

export default Post;
