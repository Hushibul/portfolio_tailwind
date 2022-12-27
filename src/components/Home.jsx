import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container  */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Md Hushibul Haque Bhuiya
        </h1>

        <h2 className="flex items-center gap-6 text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a
          <TypeAnimation
            sequence={[
              "UI/UX Designer", // Types 'One'
              1000, // Waits 1s
              "Web Developer", // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              // Types 'Three' without deleting 'Two'
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "4rem" }}
          />
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Hi I am Md. Hushibul Haque Bhuiya and I am a full-stack web developer
          specializes on React. I graduated from Leading University, Sylhet in
          Bachelor of Computer Science and Engineering.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            {" "}
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300">
              View Work
              <span className="group-hover:rotate-90 items-center duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
