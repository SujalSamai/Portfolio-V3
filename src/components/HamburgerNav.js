import logo from "../assets/action.png";
import "../App.css";
import Resume from "../assets/Resume.pdf";
import { useState } from "react";

function HamburgerNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav
      id="ham-navbar"
      className="nav w-full px-5 py-2 text-slate-50 flex justify-between items-center align-middle shadow-sm transition ease-out"
    >
      <img
        className="logo w-[15%] md:w-[12%] hover:animate-spin"
        src={logo}
      ></img>
      <div className="flex items-center justify-between border-gray-400 py-8 transition-all ease-out delay-200">
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 hover:cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-bounce bg-gr"></span>
            <span className="block h-0.5 w-8 animate-bounce bg-gr"></span>
            <span className="block h-0.5 w-8 animate-bounce bg-gr"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            {" "}
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8 hover:cursor-pointer transition-all ease-out delay-200"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gr animate-pulse"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="10" x2="4" y2="26" />
                <line x1="6" y1="10" x2="20" y2="26" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col font-martian text-center items-center justify-between min-h-[250px] p-20">
              <li className="my-8 text-slate-300 hover:text-gr w-32">
                <a href="#about">ABOUT</a>
              </li>
              <li className="my-8 text-slate-300 hover:text-gr w-32">
                <a href="#skills">SKILLS</a>
              </li>
              <li className="my-8 text-slate-300 hover:text-gr w-32">
                <a href="#work">WORK</a>
              </li>
              <li className="my-8 text-slate-300 hover:text-gr w-32">
                <a href="#contact">CONTACT</a>
              </li>
              <a
                href={Resume}
                className="text-gr border-[1px] border-gr my-5 rounded-sm p-2 hover:bg-lbl"
              >
                Resume
              </a>
            </ul>
          </div>
        </section>

        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 80%;
        height: 100vh;
        top: 0;
        right: 0;
        background: #282A3A;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        transition: ease-in 5s;
      }
    `}</style>
      </div>
    </nav>
  );
}

export default HamburgerNav;
