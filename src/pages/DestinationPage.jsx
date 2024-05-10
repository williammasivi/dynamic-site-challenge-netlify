const DestinationPage = () => {
  return (
    <>
      <h1>Destination Page</h1>
      <h3>01 PICK YOUR DESTINATION</h3>
      <h1>MOOM</h1>
      <p>
        {" "}
        See our planet as you’ve never seen it before. A perfect <br /> relaxing
        trip away to help regain perspective and come <br /> back refreshed.
        While you’re there, take in some history <br /> by visiting the Luna 2
        and Apollo 11 landing sites.{" "}
      </p>
      <img src="/background-crew-desktop.jpg" alt="" />
      <div style={{ backgroundImage: "/background-crew-desktop.png" }}></div>
      <img
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        src="/image-moon.png"
        alt=""
      />
    </>
  );
};

export default DestinationPage;
