import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GetRestaurant = () => {
  const { id } = useParams();
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetch(`http://127.0.0.1:5555/restaurants/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setInfo(data);
      })
      .catch((err) => console.error("Error!", err));
  }, [id]);

  return (
    <div>
      {Object.keys(info).length > 0 ? (
        <div>
          <h2>Restaurant: {info.name}</h2>
          {info.pizzas && info.pizzas.length > 0 ? (
            <div>
              <h3>Pizzas:</h3>
              {info.pizzas.map((pizza) => (
                <h4 key={pizza.id}>{pizza.name}</h4>
              ))}
            </div>
          ) : (
            <div className="relative">
              <div className="absolute top-60 left-40">
                <h3 className="text-4xl font-bold text-center">
                  Our Pizzas just ran out!Try again later
                </h3>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="relative">
          <div className="absolute top-60 left-60">
            <h3 className="text-4xl font-bold text-center">Loading...</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetRestaurant;
