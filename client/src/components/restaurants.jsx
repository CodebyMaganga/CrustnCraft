import React, { useEffect, useState } from "react";
import Cafe from "../assets/cafe.jpg";

const Restaurants = () => {
  const [cafe, setCafe] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/restaurants")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setCafe(data);
      });
  }, []);

  return (
    <div className="mt-10">
      <div>
        <h2 className="text-center mb-10 text-xl font-bold">
          Choose from various restaurants
        </h2>
      </div>
      <div className="flex flex-row flex-wrap gap-10 justify-around">
        {cafe.map((item, index) => (
          <div key={index} className="max-w-sm">
            <img src={Cafe} alt="image" className="rounded-full h-[150px]" />
            <div className="product-details">
              <h3 className="product-name">{item.name}</h3>
              <p className="product-price">${item.adress}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
