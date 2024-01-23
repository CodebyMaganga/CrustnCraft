import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import Cafe from "./assets/cafe.jpg";
import { BASE_URL } from "../utils";

const Restaurants = () => {
  const [cafes, setCafe] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/restaurants`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setCafe(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://127.0.0.1:5555/restaurants/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data, "Delete Succesfully");
      });
  };

  return (
    <div className="mt-5 flex flex-row flex-wrap justify-around">
      {cafes.map((item) => (
        <Card
          className="max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={Cafe}
        >
          <h5 className="text-2xl font-bold tracking-tight ">{item.name}</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {item.address}
          </p>
          <button
            onClick={() => handleDelete(item.id)}
            className="bg-[#FE4A49]"
          >
            Delete
          </button>
        </Card>
      ))}
    </div>
  );
};

export default Restaurants;
