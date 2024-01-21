import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

const Header = () => {
  return (
    <div className="h-20 bg-white flex justify-between text-black">
      <div className="flex p-3">
        <p className="text-black">LinkedOut</p>
        <div className="relative w-full">
          <input
            className="bg-gray-300 pl-8 pr-2"
            placeholder="Search..."
          ></input>
          <FaSearch className="text-1xl absolute top-1 left-2" />
        </div>
      </div>
      <div className="flex p-3 space-x-5">
        <IoHome className="text-5xl" />
        <CgProfile className="text-5xl" />
      </div>
    </div>
  );
};

export default Header;
