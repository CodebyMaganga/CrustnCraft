import { useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import SideBar from "./SideBar";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex flex-row justify-around bg-black text-white py-8">
        {isSidebarOpen && <SideBar />}
        <div onClick={toggleSidebar}>
          <GiHamburgerMenu />
        </div>
        <div>
          <h2>CrustyGrab</h2>
        </div>
        <div>
          <a className="mr-2">Home</a>
          <Link to="/menu">
            <a className="mr-2">Menu</a>
          </Link>
          <Link to="/restaurants">
            <a>Restaurants</a>
          </Link>
        </div>
        <div className="flex flex-row gap-5">
          <div>
            <MdOutlineShoppingBag />
          </div>
          <div>
            <FaPhoneFlip />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
