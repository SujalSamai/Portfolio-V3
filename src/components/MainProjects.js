import data from "./MPArr";
import github from "../assets/github.svg";
import link from "../assets/link.svg";

function MainProjectCard(props) {
  const img = (
    <div className="hidden md:block w-[65%] hover:transition ease-out duration-500 cursor-pointer shadow-lg hover:-translate-y-4">
      <a href={props.live}>
        <img
          className="grayscale-[70%] w-[40rem] z-0 h-[100%] hover:grayscale-0"
          src={props.img}
        ></img>
      </a>
    </div>
  );
  let imgUrl = props.img;
  if (props.index === 2) {
    return (
      <div className="flex py-16">
        <div className="md:w-2/4 z-10 text-slate-200 p-4 shadow-2xl md:shadow-none]">
          <p className="text-gr font-martian text-xs">Featured Project</p>
          <h2 className="text-slate-300 text-3xl font-bold mb-4">
            {props.heading}
          </h2>
          <p className="bg-lbl px-5 py-4 text-slate-400 text-sm shadow-lg">
            {props.desc}
          </p>
          <p className="font-martian text-slate-400 text-xs my-7">
            {props.tech}
          </p>
          <div className="flex justify-start">
            <a
              className="hover:scale-110 hover:transition-all"
              href={props.github}
            >
              <img className="w-5 mr-4" src={github}></img>
            </a>
            <a
              className="hover:scale-110 hover:transition-all"
              href={props.live}
            >
              <img className="w-5 mr-4" src={link}></img>
            </a>
          </div>
        </div>
        {img}
      </div>
    );
  } else {
    return (
      <div className="flex py-16">
        {img}
        <div className="md:w-2/4 z-10 text-slate-200 p-4 text-right shadow-2xl md:shadow-none">
          <p className="text-gr font-martian text-xs">Featured Project</p>
          <h2 className="text-slate-300 text-3xl font-bold mb-4">
            {props.heading}
          </h2>
          <p className="bg-lbl px-5 py-4 text-slate-400 text-sm shadow-lg">
            {props.desc}
          </p>
          <p className="font-martian text-slate-400 text-xs my-7">
            {props.tech}
          </p>
          <div className="flex justify-end">
            <a
              className="hover:scale-110 hover:transition-all"
              href={props.github}
            >
              <img className="w-5 mx-4" src={github}></img>
            </a>
            <a
              className="hover:scale-110 hover:transition-all"
              href={props.live}
            >
              <img className="w-5" src={link}></img>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

function MainProjects() {
  const projectsEl = data.map((project) => {
    return (
      <MainProjectCard
        key={project.id}
        index={project.id}
        heading={project.heading}
        desc={project.desc}
        img={project.img}
        tech={project.tech}
        github={project.github}
        live={project.live}
      />
    );
  });
  return (
    <section
      id="work"
      className="w-10/12 md:w-7/12 mx-auto my-[15rem] flex flex-col "
    >
      <div className="md:w-10/12 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl text-slate-300 font-inter font-bold">
          <span className="font-martian text-gr text-sm md:text-lg">03. </span>
          Some things I've Built
        </h1>
        <p className="w-4/12 md:w-6/12 border-t-[1px] border-slate-600"></p>
      </div>
      <div>{projectsEl}</div>
    </section>
  );
}

export default MainProjects;
