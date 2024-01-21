import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row justify-around bg-black text-white py-8">
        <div>
          <h2>CrustyGrab</h2>
        </div>
        <div>
          <a className="mr-2">Home</a>
          <a className="mr-2">Menu</a>
          <a>Contact</a>
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
