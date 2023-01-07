import logo from "../assets/action.png";
import "../App.css";
import Resume from "../assets/Resume.pdf";
import { useState } from "react";

function HamburgerNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav
      id="navbar"
      className="px-5 py-4 text-slate-50 flex justify-between items-center align-middle shadow-sm transition ease-out"
    >
      <img className="logo w-[15%]" src={logo}></img>
      <div className="flex items-center justify-between border-gray-400 py-8">
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gr"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gr"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gr"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            {" "}
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gr"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col font-martian items-center justify-between min-h-[250px] shadow-lg p-20">
              <li className="my-8 text-slate-300 hover:text-gr w-32">
                <a href="#about">
                  <span className="text-gr">1. </span>About
                </a>
              </li>
              <li className="my-8 text-slate-300 hover:text-gr w-32">
                <a href="#skills">
                  <span className="text-gr">2. </span>Skills
                </a>
              </li>
              <li className="my-8 text-slate-300 hover:text-gr w-32">
                <a href="#work">
                  <span className="text-gr">3. </span>Work
                </a>
              </li>
              <li className="my-8 text-slate-300 hover:text-gr w-32">
                <a href="#contact">
                  <span className="text-gr">4. </span>Contact
                </a>
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
        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
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
        background: #112240;
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
