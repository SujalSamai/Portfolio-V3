import list from "../assets/list.svg";
import computer from "../assets/computer.png";
import "../App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const skillsArr = [
  {
    heading: "Languages",
    tech: "Java, C/C++, Javascript, Python, HTML5, CSS, SQL, TypeScript",
  },
  {
    heading: "Frameworks/Libraries",
    tech: "React, Tailwind CSS, Bootstrap",
  },
  {
    heading: "Tools",
    tech: "Git, Github, Appwrite, VS Code, Intellij IDEA, Firebase, POSTMAN",
  },
  {
    heading: "Databases",
    tech: "MySQL, Appwrite, FireStore",
  },
  {
    heading: "Others",
    tech: "Data Structures & Algorithm, Technical Writing, Team Management",
  },
];

const skillsEl = skillsArr.map((skill) => {
  return (
    <SkillCard key={skill.heading} heading={skill.heading} tech={skill.tech} />
  );
});

function SkillCard(props) {
  return (
    <div
      data-aos="fade-in"
      data-aos-easing="ease-in"
      data-aos-duration="1000"
      className="my-5"
    >
      <h4 className="text-gr font-martian text-sm">{props.heading}</h4>
      <p className="my-3 flex text-sm">
        <img className="mr-2 w-3" src={list}></img>
        {props.tech}
      </p>
    </div>
  );
}

export default function Skills() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section
      id="skills"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration="1500"
      className="w-10/12 backdrop-blur-lg lg:w-7/12 mx-auto hover:scale-105 hover:transition ease-in-out duration-300 rounded-sm p-8 md:p-16 shadow-2xl"
    >
      <div className="md:w-7/12 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl text-slate-300 font-inter font-bold">
          <span className="font-martian text-gr text-sm md:text-lg">02. </span>
          Skills
        </h1>
        <p className="w-7/12 md:w-8/12 border-t-[1px] border-slate-600"></p>
      </div>
      <div className="flex mt-8">
        <div className="flex-col text-slate-400 md:w-7/12">{skillsEl}</div>
        <div className="hidden md:block w-5/12">
          <img className="computer" src={computer}></img>
        </div>
      </div>
    </section>
  );
}
