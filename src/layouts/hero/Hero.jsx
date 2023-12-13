import React from "react";
import { Link } from "react-scroll";
import Arrow from "../../assets/arrow.png";

const Hero = () => {
  return (
    <div className="mb-2 overflow-hidden ">
      <div className="w-screen h-screen pt-56 my-auto sm:px-6 lg:px-8 bg-secondary">
        {/* Announcement Banner */}
        <div className="flex justify-center">
          <a
            href="#FAQ"
            className="items-center px-3 py-2 text-white border-gray-200 rounded-full font-poppins bg-primary hover:scale-110"
          >
            PRO release - Join to waitlist
          </a>
        </div>
        {/* End Announcement Banner */}

        {/* Title */}
        <div className="max-w-5xl mx-auto mt-5 text-center font-poppins">
          <h1 className="block text-5xl font-bold md:text-7xl lg:text-8xl dark:text-gray-600">
            Let's Build
            <span className="text-transparent bg-clip-text bg-gradient-to-tl from-blue-600 to-primary">
              Together
            </span>
          </h1>
        </div>
        {/* End Title */}

        <div className="max-w-5xl mx-auto mt-5 text-center ">
          <p className="text-xl font-medium dark:text-gray-500">
            Preline UI is an open-source set of prebuilt UI components,
            ready-to-use examples and Figma design system based on the
            utility-first Tailwind CSS framework.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-3 mt-8">
          <button className="flex items-center justify-center px-4 py-3 text-sm font-medium text-center text-white border border-transparent rounded-md cursor-pointer gap-x-3 bg-gradient-to-tl from-blue-600 to-primary hover:from-primary hover:to-blue-600 hover:scale-110 font-poppins">
            Get started
          </button>
          <button
            type="button"
            className="flex items-center p-2 font-mono text-sm rounded-lg shadow-sm group ps-3 gap-x-2 dark:bg-slate-800 dark:border-gray-700 dark:text-white hover:scale-110"
          >
            $ npm i preline
            <span className="flex items-center justify-center rounded-md w-7 h-7 dark:bg-gray-400">
              <img src={Arrow} alt="arrow" />
            </span>
          </button>
        </div>
        {/* End Buttons */}

        <div className="flex items-center justify-center mt-5 gap-x-1 sm:gap-x-2 font-poppins">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Package Manager:
          </span>
          <span className="text-sm font-bold text-gray-900 dark:text-gray-600">
            /
          </span>
          <Link
            to="FAQitems"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <p
              href="#FAQitems"
              className="flex items-center cursor-pointer gap-x-1.5 text-sm text-blue-600 decoration-2 font-medium"
            >
              Go to FAQ
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
