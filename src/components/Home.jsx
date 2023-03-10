import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
            <h1 className="text-gray-500 sm:text-3xl"  >Full Stack Developer</h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Jinming Zhang
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          Current student at Northwestern University in Seattle, 
          pursuing my master degree in computer science. Passionate about software development.
           Always seeking opportunities to learn and grow.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            width={250} height={250}
            className="rounded-2xl mx-auto w-2/3 md:w-200 md:h-100"

          />
        </div>
      </div>
    </div>
  );
};

export default Home