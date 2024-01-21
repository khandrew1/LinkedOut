import { LuDot } from "react-icons/lu";
import { BiWorld } from "react-icons/bi";
import Image from "next/image";
import pfp from "./IMG_8502.jpg";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";

const Post = () => {

    // TODO: Convert these to props
    const user = {
        name: "Andrew Khadder",
        picture: pfp,
        time: "1w",
        message: "I'm happy to share that I'm no longer friends with David Chong!"
    }

    const { picture, name, time, message } = user;

  return (
    <div className="flex flex-col bg-gray-200 h-1/5 w-1/3 rounded-lg text-black p-3">
      <div className="flex w-fit">
        <Image
          src={picture}
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
      <p className="flex justify-center items-center h-full">
        {message}
      </p>
      <div className="flex space-x-3 text-xl items-end">
        <FaRegHeart />
        <FaRegComment />
      </div>
    </div>
  );
};

export default Post;
