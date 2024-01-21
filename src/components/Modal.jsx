import picture from "./IMG_8502.jpg";
import Image from "next/image";

const Modal = () => {
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
        <textarea className="resize-none rounded-xl h-3/5 p-3" />
        <div className="flex justify-end">
          <button className="bg-green-200 w-20 rounded-full h-10">Post</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
