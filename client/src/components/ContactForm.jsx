import React from "react";
import { Label, TextInput } from "flowbite-react";

const ContactForm = () => {
  return (
    <div className="bg-[#f3f4f5]">
      <div>
        <h2 className="font-bold text-xl text-center">
          Subscribe to our newsletter for offers
        </h2>
      </div>
      <div>
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="email3" value="Your email" />
          </div>
          <TextInput
            id="email3"
            type="email"
            placeholder="name@flowbite.com"
            required
            helperText={
              <>
                We’ll never share your details. Read our
                <a
                  href="#"
                  className="ml-1 font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Privacy Policy
                </a>
                .
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
