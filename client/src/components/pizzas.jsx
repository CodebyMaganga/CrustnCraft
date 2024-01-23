import React, { useEffect, useState } from "react";
import Pic from "../assets/pizzacard.jpg";
import { BASE_URL } from "../../utils";

const Pizzas = () => {
  const [pizza, setPizza] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("Mozarella Cheese");

  useEffect(() => {
    fetch(`${BASE_URL}/pizzas`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setPizza(data);
      });
  }, []);

  const filterItems = (category) => {
    setFilteredCategory(category);
  };

  const filteredPizzas = pizza.filter((item) =>
    item.ingredients.includes(filteredCategory)
  );

  return (
    <>
      <div className="mt-5">
        <h2 className="text-2xl font-bold text-center">
          Choose various pizza delights
        </h2>
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-10">
        <div>
          <button
            onClick={() => filterItems("Mozzarella cheese")}
            className="bg-[#C22B0F] p-4 rounded-full"
          >
            Mozarella Cheese
          </button>
        </div>
        <div>
          <button
            onClick={() => filterItems("Mushrooms")}
            className="bg-[#C22B0F] p-4 rounded-full"
          >
            Mushrooms
          </button>
        </div>
        <div>
          <button
            onClick={() => filterItems("Parmesan cheese")}
            className="bg-[#C22B0F] p-4 rounded-full"
          >
            Parmesan Cheese
          </button>
        </div>
        <div>
          <button
            onClick={() => filterItems("Pepperoni")}
            className="bg-[#C22B0F] p-4 rounded-full"
          >
            Pepperoni
          </button>
        </div>
        <div>
          <button
            onClick={() => filterItems("Chicken")}
            className="bg-[#C22B0F] p-4 rounded-full"
          >
            Chicken
          </button>
        </div>
        <div>
          <button
            onClick={() => filterItems("Feta cheese")}
            className="bg-[#C22B0F] p-4 rounded-full"
          >
            Feta Cheese
          </button>
        </div>
      </div>

      <div className="flex flex-row flex-wrap mt-20 gap-3">
        {filteredPizzas.map((item, index) => (
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

export default Pizzas;
