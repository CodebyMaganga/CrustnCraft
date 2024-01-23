"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { BASE_URL } from "../utils";

export default function Admin() {
  const [restaurantId, setRestaurant_id] = useState("");
  const [pizzaId, setPizza_id] = useState("");
  const [price, setPrice] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/restaurant_pizzas`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          restaurant_id: restaurantId,
          pizza_id: pizzaId,
          Price: price,
        }),
      });

      if (!response.ok) {
        console.error("Error:", response.status, response.statusText);
      } else {
        console.log("Item added succesfully", response.status);
      }
    } catch (error) {
      console.error("Error", error.message);
    }
  };

  return (
    <>
      <div>
        <h2>Add pizza and Restaurant</h2>
      </div>
      <form
        onSubmit={(e) => handlePost(e)}
        className="flex max-w-md flex-col gap-4 bg-black ml-2"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Restaurant Id" />
          </div>
          <TextInput
            className="text-black"
            onChange={(e) => setRestaurant_id(e.target.value)}
            id="email1"
            type="text"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Pizza Id" />
          </div>
          <TextInput
            onChange={(e) => setPizza_id(e.target.value)}
            id="password1"
            type="text"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Price" />
          </div>
          <TextInput
            onChange={(e) => setPrice(e.target.value)}
            id="password1"
            type="text"
            required
          />
        </div>

        <Button className="bg-[#4B7F52]" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
}
