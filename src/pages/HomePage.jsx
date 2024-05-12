import React from 'react';


const HomePage = () => {
  return (
    <main className="home-bg h-screen pt-[200px] px-6 lg:flex-row lg:justify-between lg:px-[165px] pb-[120px] h-screen pt-[200px] px-6 lg:flex-row lg:justify-between lg:px-[165px] pb-[120px]">
      <div className="h-full w-full flex justify-between gap-[200px]">
        <div className="h-[276px] flex flex-col items-center justify-between flex-1">
          <h1 className="text-7xl uppercase tracking-wide"> Connecting Communities for Climate Action</h1>
          <p className="leading-[20px]">
            Let’s face it; if you want to go to space, you might as well genuinely
            go to outer space and not hover kind of on the edge of it. Well sit
            back, and relax because we’ll give you a truly out of this world
            experience!
          </p>
        </div>

      </div>
    </main>
  );
};

export default HomePage;
