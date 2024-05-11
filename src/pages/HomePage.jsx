const HomePage = () => {
  return (
    <main className="home-bg pt-[200px] px-6 lg:flex-row lg:justify-between lg:px-[165px] pb-[120px]">
      <div className="h-full w-full flex justify-between gap-[200px]">
        <div className="h-[276px] flex flex-col items-center justify-between flex-1">
          <h1 className='font-medium text-base tracking-wide uppercase'>So, you want to travel to</h1>
          <h1 className="text-7xl uppercase tracking-wide">Space</h1>
          <p className="leading-[20px]">
            Let’s face it; if you want to go to space, you might as well genuinely
            go to outer space and not hover kind of on the edge of it. Well sit
            back, and relax because we’ll give you a truly out of this world
            experience!
          </p>
        </div>
        <div className="bg-white text-black w-[150px] h-[150px] md:h-[242px] md:w-[242px] flex justify-center items-center rounded-full flex-1 right-0">
          <h1 className="font-extrabold text-3xl">Explore</h1>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
