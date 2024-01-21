import React from "react";
import Story from "../assets/story.jpg";

const About = () => {
  return (
    <>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f3f4f5"
            fill-opacity="1"
            d="M0,32L40,58.7C80,85,160,139,240,133.3C320,128,400,64,480,42.7C560,21,640,43,720,64C800,85,880,107,960,138.7C1040,171,1120,213,1200,234.7C1280,256,1360,256,1400,256L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="bg-[#f3f4f5]">
        <div className="mb-5">
          <h2 className="text-center font-bold">This is our story</h2>
        </div>
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-2">
            <img src={Story} alt="image" />
          </div>
          <div className="col-span-2 mt-10">
            <p>
              As a trusted pizza delivery service, we take pride in serving the
              vibrant city of Nairobi and have earned the confidence of numerous
              hotels throughout the region. Our commitment to quality and
              reliability makes us the go-to choice for those seeking a
              delicious and hassle-free pizza experience. Whether you're a local
              resident or a guest at one of Nairobi's esteemed hotels, our menu
              boasts an array of mouthwatering pizzas crafted with the finest
              ingredients. From classic favorites to unique, gourmet
              combinations, we deliver a slice of satisfaction right to your
              doorstep. Order with confidence, knowing that our dedication to
              exceptional service has made us the preferred pizza partner for
              hotels across Nairobi. Explore our menu, place your order, and
              experience the convenience and flavor that have made us the
              trusted choice in pizza delivery!"
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
