import me from "../assets/me.png";
import list from "../assets/list.svg";
export default function About() {
  return (
    <section id="about" className="w-7/12 mx-auto my-[15rem] flex flex-col ">
      <div className="w-6/12 flex justify-between items-center">
        <h1 className="text-2xl text-slate-300 font-inter font-semibold">
          <span className="font-martian text-gr text-lg">01. </span>About Me
        </h1>
        <p className="w-7/12 border-t-[1px] border-slate-600"></p>
      </div>
      <div className="flex justify-between text-slate-400 my-8">
        <div className="w-9/12">
          <p className="mb-5">
            Hello! My name is Sujal and I enjoy creating things that live on the
            internet. I have always been fascinated with the magic that happens
            behind the scenes in the tech world. I used to wonder how we get
            cricket scores immediately when we search them through Google, when
            my uncle used to use his Keypad Phone.
          </p>
          <p className="mb-5">
            Fast-forward to today, and I’ve had the privilege of learning that
            magic myself. I love creating UIs in the web to create fascinating
            interfaces for everyone. I contribute to various Open-Source
            Projects, and participate in Hackathons whenever I get a chance.
          </p>
          <p className="mb-5">
            I take sessions, write articles and create Projects primarily using
            React.js and Tailwind CSS. And I'm really enjoying this learning
            journey.
          </p>
          <p className="mb-5 bg-bl">
            Here are a few technologies I’ve been working with recently:
          </p>
          <div className="w-[70%] flex text-sm">
            <ul className="ml-5 mr-20 text-gr">
              <li className="p-1 flex">
                <img className="w-1/12 mr-2" src={list}></img>React.js
              </li>
              <li className="p-1 flex">
                <img className="w-1/12 mr-2" src={list}></img>Tailwind CSS
              </li>
              <li className="p-1 flex">
                <img className="w-1/12 mr-2" src={list}></img>TypeScript
              </li>
            </ul>
            <ul className=" text-gr">
              <li className="p-1 flex">
                <img className="w-1/12 mr-2" src={list}></img>Java
              </li>
              <li className="p-1 flex">
                <img className="w-1/12 mr-2" src={list}></img>Node.js
              </li>
              <li className="p-1 flex">
                <img className="w-1/12 mr-2" src={list}></img>Javascript
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            className="bg-gray-300 rounded-md w-4/6 h-min shadow-[20px_20px] shadow-gr hover:shadow-[15px_15px] hover:shadow-gr hover:transition ease-out duration-500"
            src={me}
          ></img>
        </div>
      </div>
    </section>
  );
}