import React from "react";
import homeImage from "/home.jpg";

const HomePage = () => {
  return (
    <main className="pt-[200px]">
      <div className="pl-14 text-justify pr-[45px] lg:pr-[100px] mb-8">
        <div>
          <h1 className="font-bold text-5xl text-center mb-4">
            Connecting Communities for Climate Action
          </h1>
          <p className="text-md">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <img src={homeImage} alt="home image" />
      </div>
    </main>
  );
};

export default HomePage;
