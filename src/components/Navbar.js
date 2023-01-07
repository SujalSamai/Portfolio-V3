import logo from "../assets/action.png";
import "../App.css";
import Resume from "../assets/Resume.pdf";

function Navbar() {
  return (
    <nav
      id="navbar"
      className="px-10 py-4 text-slate-50 flex items-center justify-between align-middle shadow-sm transition ease-out"
    >
      <img className="logo w-[12%] md:w-[5%]" src={logo}></img>
      <div className="w-5/12 h-1/2 flex justify-between font-martian text-xs">
        <ol className="w-10/12 flex  justify-around p-2 text-slate-300">
          <li className="nav-el hover:text-gr hover:transition ease-out">
            <a href="#about">
              <span className="text-gr">1. </span>About
            </a>
          </li>
          <li className="nav-el hover:text-gr hover:transition ease-out">
            <a href="#skills">
              <span className="text-gr">2. </span>Skills
            </a>
          </li>
          <li className="nav-el hover:text-gr hover:transition ease-out">
            <a href="#work">
              <span className="text-gr">3. </span>Work
            </a>
          </li>
          <li className="nav-el hover:text-gr hover:transition ease-out">
            <a href="#contact">
              <span className="text-gr">4. </span>Contact
            </a>
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
