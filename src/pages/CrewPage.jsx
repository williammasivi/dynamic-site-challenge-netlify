const CrewPage = () => {
  return (
    <div className="crew-bg flex flex-col items-center justify-center h-screen crew-bg pt-[220px] pb-[120px]">
  
      <h1 className="">02 MEET YOUR CREW</h1>
      <h1 className="absolute w-214 h-37 left-165.5 top-400 font-Bellefair font-normal text-white text-2xl leading-37 uppercase mix-blend-normal opacity-50">
        COMMANDER
      </h1>
      <h1 className="absolute w-488 h-64 left-165.5 top-452 font-Bellefair font-normal text-white text-4xl leading-64 uppercase">
        DOUGLAS HURLEY
      </h1>
      <p className="absolute w-444 h-128 left-165 top-543 text-white">
        Douglas Gerald Hurley is an American engineer, former <br /> Marine
        Corps pilot and former NASA astronaut. He <br /> launched into space for
        the third time as commander of <br /> Crew Dragon Demo-2.
      </p>
      <img src="/background-crew-desktop.jpg" alt="" />
      <div style={{ backgroundImage: "/background-crew-desktop.png" }}></div>

      <div className="absolute w-445 h-445 left-179 top-324 left-12 right-0 top-1/2">
        <img className="" src="/image-removebg-preview(289).png" alt="" />
      </div>
    </div>
  );
};

export default CrewPage;
