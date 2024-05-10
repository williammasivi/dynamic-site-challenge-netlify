const HomePage = () => {
  return (
    <main className="home-bg pt-20 text-center px-6 flex flex-col items-center justify-around">
      <div className="h-[276px] bg-red-500 flex flex-col items-center justify-between">
        <h1 className='font-medium text-base tracking-wide'>So, you want to travel to</h1>
        <h1 className="text-5xl">Space</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="bg-white text-black w-[150px] h-[150px] flex justify-center items-center rounded-full">
        <h1 className="font-extrabold text-3xl">Explore</h1>
      </div>
    </main>
  );
};

export default HomePage;
