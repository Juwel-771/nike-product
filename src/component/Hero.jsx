import React from "react";
import shoe_image from '../assets/image/shoe_image.png';

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex flex-col lg:flex-row justify-around">
        <div className="w-1/2">
          <div className="py-5">
            <h1 className="text-7xl font-bold">YOUR FEET</h1>
            <h1 className="text-7xl font-bold my-2">DESERVE</h1>
            <h1 className="text-7xl font-bold">THE BEST</h1>
          </div>
          <p className="mb-9">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
          </p>
          <div className="">
            <button className="btn btn-error text-white mr-8">Shop Now</button>
            <button className="btn btn-warning">Category</button>
          </div>
          <p className="my-5 text-xs text-slate-700">Also Available On</p>
        </div>
        <div>
          <img
            src={shoe_image} className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
