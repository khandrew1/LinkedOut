import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

const Header = () => {
  return (
    <div className="h-14 bg-white flex justify-between text-black">
      <div className="flex p-3 items-center">
        <p className="text-black">Linked<span className="line-through">Out</span></p>
      </div>
      <div className="relative w-full flex items-center">
          <input
            className="bg-gray-300 pl-8 pr-2 w-full rounded-lg"
            placeholder="Search..."
          />
          <FaSearch className="text-1xl absolute top-5 left-2" />
        </div>
      <div className="flex p-3 space-x-5">
        <CgProfile className="text-3xl" />
      </div>
    </div>
  );
};

export default Header;
