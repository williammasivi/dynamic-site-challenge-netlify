import React from "react";
import destinationImage from "/destination.jpg";

const DestinationPage = () => {
  return (
    <main className="pt-[200px]">
      <div className="pl-14 text-justify pr-[45px] lg:pr-[100px] mb-8 relative flex-col justify-between items-center md:gap-24 lg:gap-32 z-10">
        <div>
          <h1> Connecting Communities for Climate Action</h1>
          <p className="leading-2 font-medium text-lg text-gray-300">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <img
          src={destinationImage}
          alt="image placeholder"
          className="w-96 h-96"
        />
      </div>
    </main>
  );
};

export default DestinationPage;
