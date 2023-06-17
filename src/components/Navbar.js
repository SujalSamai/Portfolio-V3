import logo from "../assets/action.png";
import "../App.css";
import Resume from "../assets/Resume.pdf";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <nav
      id="navbar"
      className="nav fixed top-0 backdrop-blur-sm z-50 w-full px-10 py-4 text-slate-50 flex items-center justify-between align-middle shadow-lg transition-all delay-300 ease-out"
    >
      <img
        className="logo w-[12%] md:w-[5%] hover:animate-spin"
        src={logo}
      ></img>
      <div className="w-5/12 h-1/2 flex justify-between font-martian text-xs">
        <ol
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          className="w-10/12 flex  justify-around p-2 text-slate-300"
        >
          <li className="nav-el hover:text-gr hover:transition ease-out">
            <a href="#about">ABOUT</a>
          </li>
          <li className="nav-el hover:text-gr hover:transition ease-out">
            <a href="#skills">SKILLS</a>
          </li>
          <li className="nav-el hover:text-gr hover:transition ease-out">
            <a href="#work">WORK</a>
          </li>
          <li className="nav-el hover:text-gr hover:transition ease-out">
            <a href="#contact">CONTACT</a>
          </li>
        </ol>
        <a
          href={Resume}
          className="text-gr border-[1px] border-gr rounded-sm p-2 hover:bg-lbl"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
