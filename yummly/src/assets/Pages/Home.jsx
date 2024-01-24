import React from "react";
import img2 from "/Images/strawberry.webp";
import img3 from "/Images/img1.webp";
import img4 from "/Images/img2.webp";
import Popular from "../Components/Popular";
import Category from "../Components/Category";
import Search from "../Components/Search";

const Home = () => {

  return (
    <>
    
    <div className=" pt-10 h-screen relative lg:w-3/4 lxl:w-4/5 lg:ml-auto lg:-mt-10 lxl:ml-auto">
      <div>
        <img
          src={img2}
          alt="strawberryplate"
          className="w-1/4 absolute lg:w-1/5"
        />
        <img
          src={img3}
          alt="blackbery"
          className=" w-1/2 absolute right-0 top-10 lg:w-1/3 "
        />
        <img
          src={img4}
          alt="SingleStrawberry"
          className="w-1/12 absolute left-24 top-16 lg:left-52 lg:w-10"
        />
      </div>
        {/* <Search/> */}
      {/* <Category /> */}
      {/* <Popular /> */}
    </div>

    </>
  );
};

export default Home;
