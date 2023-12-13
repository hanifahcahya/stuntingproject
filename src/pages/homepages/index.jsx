import React from "react";
import Hero from "../../layouts/hero/Hero";
import FAQitems from "../../layouts/FAQitems/FAQitem";
import Cardside from "../../components/Cardside/Cardside";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="pt-20 pb-10 md:flex">
        <Cardside />
        <div className="w-screen text-center font-poppins m-auto md:w-[800px] md:ml-14 p-8 sm:w-[600px]">
          <h1 className="pt-5 mb-4 text-4xl text-center md:pt-0 md:text-5xl">
            Stunting Is ?
          </h1>
          <p className="text-sm sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            minima modi itaque, quos nobis magni ullam quasi? Pariatur, ducimus?
            Ipsum animi a veritatis sit dignissimos necessitatibus odio delectus
            magnam perspiciatis?
          </p>
        </div>
      </div>
      <FAQitems />
    </div>
  );
};

export default Home;
