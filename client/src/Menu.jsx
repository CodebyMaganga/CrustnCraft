import React, { useEffect, useState } from "react";
import Pic from "./assets/pizzacard.jpg";

const Menu = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/pizzas")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setPizzas(data);
      })
      .catch((error) => console.error("Check Error", error));
  }, []);

  return (
    <>
      <div className="bg-black py-8">
        <h2 className="text-2xl text-center text-white">
          All Pizzas Available
        </h2>
      </div>
      <div className="flex flex-row gap-4 flex-wrap mt-2 justify-around">
        {pizzas &&
          pizzas.map((item, index) => (
            <div key={index} className="max-w-sm">
              <img src={Pic} alt="image" className="product-image" />
              <div className="">
                <h3 className="">{item.name}</h3>
                <button className="bg-[#C22B0F] p-4 rounded-full mt-2">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Menu;
