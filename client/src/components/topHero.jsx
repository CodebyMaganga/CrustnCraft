import React from "react";
import Pizza from "../assets/pizza.jpg";
import Users from "../assets/users1.png";
import Delivery from "../assets/bike-delivery.png";
import { IoIosPeople } from "react-icons/io";

const TopHero = () => {
  return (
    <div className="relative">
      <div>
        <img
          className="h-[30rem] w-screen object-cover"
          src={Pizza}
          alt="Pizza image"
        />
      </div>
      <div className="absolute top-40 left-20 ">
        <h2 className="font-bold text-white text-4xl">
          It's not just a pizza, it's an experience🍕🍕
        </h2>
        <p className="text-white font-bold">
          Embark on a delectable journey with our irresistible pizza creations!{" "}
        </p>
        <button>Order Now</button>
      </div>
      <div className="absolute bottom-14 left-20 text-white flex flex-row gap-10">
        <div>
          <img className="h-[5rem]" src={Users} alt="users" />
          <p>1000+ trusted clients</p>
        </div>
        <div className="ml-10">
          <img className="h-[5rem]" src={Delivery} alt="Delivery" />
          <p>2500+ Deliveries</p>
        </div>
      </div>
    </div>
  );
};

export default TopHero;
