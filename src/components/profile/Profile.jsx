import picture from "./IMG_8502.jpg";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="bg-gray-300 w-1/2 h-1/2 rounded-lg flex">
      <div className="flex h-fit items-center">
        <Image
          src={picture}
          unoptimized={true}
          height={40}
          width={40}
          alt="Andrew Khadder's pfp"
          className="bg-gray-400 rounded-full w-40 h-40 flex items-center m-6"
        />
        <div className="flex flex-col gap-y-3">
          <p className="flex font-bold items-center text-3xl mr-8">
            Andrew Khadder
          </p>
          <div className="flex auto justify-between w-full">
            <button className="bg-green-300 w-full rounded-full">Add</button>
            <button className="bg-red-500 w-full rounded-full">OPP</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
