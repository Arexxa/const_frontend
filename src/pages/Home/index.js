import React from "react";
import Navbar from "../../components/Navbar";

function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-start ">
      <Navbar />
      <div className="flex flex-col justify-center items-center h-full">
        <div className="text-6xl text-primary">Home Page</div>
      </div>
    </div>
  );
}

export default Home;
