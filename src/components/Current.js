import gitshow from "../assets/gitshow.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Current() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease-in"
      data-aos-duration="1500"
      className="md:w-8/12 backdrop-blur-lg mx-auto hover:scale-105 hover:transition ease-in-out duration-300 rounded-sm p-8 md:p-16 mb-40"
    >
      <div className="md:w-full flex justify-between items-center">
        <h1 className="text-xl md:text-4xl text-slate-300 font-inter font-bold">
          <span className="font-martian text-gr text-sm md:text-3xl">04. </span>
          Currently working on...
        </h1>
        <p className="w-3/12 md:w-4/12 border-t-[1px] border-slate-600"></p>
      </div>
      <p className="text-slate-400 mt-5">
        An exclusive sneak-peak into what I'm building currently 👀
      </p>
      <div className="flex mt-10">
        <div className="w-2 bg-gr bg-opacity-60 hidden md:block rounded-full "></div>
        <div className="flex flex-col md:w-11/12 mx-auto">
          <a href="https://github.com/MadhaviGupta/GitShow">
            <img
              src={gitshow}
              className="shadow-xl h-[105%] md:h-auto grayscale-[50%] hover:grayscale-0"
            ></img>
          </a>
          <div className="text-slate-400 py-10 md:px-20 px-10 border-[1px] border-slate-700 hover:bg-lbl cursor-pointer">
            <h4 className="text-lg md:text-xl text-slate-200 font-bold my-5">
              What is it about?
            </h4>
            <p className="">
              A Social-Media platform based on Github, whose main focus is to
              give you a platform your Github projects in a beautiful way, so
              that you can focus on the project and we can focus on taking it to
              the masses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
