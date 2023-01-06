import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import hashnode from "../assets/hashnode.svg";
import instagram from "../assets/instagram.svg";

export default function Socials() {
  return (
    <div className="socials flex flex-col fixed top-[25rem] left-[2rem]">
      <a className="" href="https://twitter.com/SujalSamai">
        <img
          className="w-4/6 p-2 hover:-translate-y-1 hover:transition ease-out duration-200 rounded-3xl hover:bg-gr"
          src={twitter}
        ></img>
      </a>
      <a className="" href="https://www.linkedin.com/in/sujal-samai/">
        <img
          className="w-4/6 p-2 hover:-translate-y-1 hover:transition ease-out duration-200 rounded-3xl hover:bg-gr"
          src={linkedin}
        ></img>
      </a>
      <a className="" href="https://github.com/SujalSamai">
        <img
          className="w-4/6 p-2 hover:-translate-y-1 hover:transition ease-out duration-200 rounded-3xl hover:bg-gr"
          src={github}
        ></img>
      </a>
      <a className="" href="https://sujalsamai.hashnode.dev/">
        <img
          className="w-4/6 p-2 hover:-translate-y-1 hover:transition ease-out duration-200 rounded-3xl hover:bg-gr"
          src={hashnode}
        ></img>
      </a>
      <a className="" href="#">
        <img
          className="w-4/6 p-2 hover:-translate-y-1 hover:transition ease-out duration-200 rounded-3xl hover:bg-gr"
          src={instagram}
        ></img>
      </a>
      <div className="mt-8 w-[4rem] rotate-90">
        <p className="border-slate-200 border-[1px] mt-5 w-[4rem]"></p>
      </div>
    </div>
  );
}
