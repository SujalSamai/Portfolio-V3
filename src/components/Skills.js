import list from "../assets/list.svg";
import computer from "../assets/computer.png";
import "../App.css";
export default function Skills() {
  return (
    <section
      id="skills"
      className="w-10/12 md:w-7/12 mx-auto hover:scale-105 hover:transition ease-in-out duration-300 rounded-sm p-8 md:p-16 shadow-2xl"
    >
      <div className="md:w-7/12 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl text-slate-300 font-inter font-bold">
          <span className="font-martian text-gr text-sm md:text-lg">02. </span>
          Skills
        </h1>
        <p className="w-7/12 md:w-8/12 border-t-[1px] border-slate-600"></p>
      </div>
      <div className="flex mt-8">
        <div className="flex-col text-slate-400 md:w-7/12">
          <div className="my-5">
            <h4 className="text-gr font-martian text-sm">Languages</h4>
            <p className="my-3 flex text-sm">
              <img className="mr-2 w-3" src={list}></img>
              Java, C/C++, Javascript, Python, HTML5, CSS, SQL
            </p>
          </div>
          <div className="my-5">
            <h4 className="text-gr font-martian text-sm">
              Frameworks/Libraries
            </h4>
            <p className="my-3 flex text-sm">
              <img className="mr-2 w-3" src={list}></img>
              React, Tailwind CSS, Bootstrap
            </p>
          </div>
          <div className="my-5">
            <h4 className="text-gr font-martian text-sm">Tools</h4>
            <p className="my-3 flex text-sm">
              <img className="mr-2 w-3" src={list}></img>
              Git, Github, Appwrite, VS Code, Intellij IDEA
            </p>
          </div>
          <div className="my-5">
            <h4 className="text-gr font-martian text-sm">Databases</h4>
            <p className="my-3 flex text-sm">
              <img className="mr-2 w-3" src={list}></img>
              MySQL, Appwrite
            </p>
          </div>
          <div className="my-5">
            <h4 className="text-gr font-martian text-sm">Others</h4>
            <p className="my-3 flex text-sm">
              <img className="mr-2 w-3" src={list}></img>
              Data Structures & Algorithm, Technical Writing, Team Management
            </p>
          </div>
        </div>
        <div className="hidden md:block w-5/12">
          <img className="computer" src={computer}></img>
        </div>
      </div>
    </section>
  );
}
