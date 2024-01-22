"use client";

import { Label, TextInput } from "flowbite-react";

export default function Admin() {
  return (
    <div className="bg-[#30362F] text-white h-screen">
      <div>Delete Restaurant</div>
      <div className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block border-solid">
            <Label htmlFor="small" value="Restaurant Name" />
          </div>
          <TextInput id="small" type="text" sizing="sm" />
        </div>
        <div>
          <div className="mb-2 block border-solid">
            <Label htmlFor="small" value="Restaurant Address" />
          </div>
          <TextInput id="small" type="text" sizing="sm" />
        </div>
        <div>
          <button className="bg-[#625834] p-4 rounded-full">
            Delete Restaurant
          </button>
        </div>
      </div>
      <div className="flex max-w-md flex-col gap-4 mt-10">
        <div>
          <div className="mb-2 block border-solid">
            <Label htmlFor="small" value="Pizza Name" />
          </div>
          <TextInput id="small" type="text" sizing="sm" />
        </div>
        <div>
          <div className="mb-2 block border-solid">
            <Label htmlFor="small" value="Pizza Ingredients" />
          </div>
          <TextInput id="small" type="text" sizing="sm" />
        </div>
        <div>
          <div className="mb-2 block border-solid">
            <Label htmlFor="small" value="Restaurant ID" />
          </div>
          <TextInput id="small" type="text" sizing="sm" />
        </div>
        <div>
          <button className="bg-[#625834] p-4 rounded-full">
            Add Pizza Flavor
          </button>
        </div>
      </div>
    </div>
  );
}
