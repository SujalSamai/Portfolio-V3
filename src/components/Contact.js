import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import hashnode from "../assets/hashnode.svg";
import instagram from "../assets/instagram.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section
      data-aos="fade-up"
      data-aos-easing="ease-in"
      data-aos-duration="2000"
      id="contact"
      className="w-10/12 md:w-5/12 m-auto"
    >
      <h4 className="text-gr md:text-base font-martian text-center">
        04. What's next?
      </h4>
      <h1 className="my-5 text-slate-300 text-5xl font-bold text-center">
        Get in Touch.
      </h1>
      <p className="text-slate-400 text-center leading-6">
        Contact through the below form or shoot me an email directly at
        <span className="text-gr font-martian text-sm">
          {" "}
          sujalsamai123@gmail.com
        </span>
      </p>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-in"
        data-aos-duration="2000"
        className="py-10 w-10/12 mx-auto text-slate-200"
      >
        <form
          action="https://formspree.io/f/mdobvqal"
          method="POST"
          className=""
        >
          <div className="flex flex-col">
            <input
              type="text"
              name="fullname"
              placeholder="Name"
              className="my-5 p-5 bg-transparent border-[1px] border-gr rounded-sm"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="my-5 p-5 bg-transparent border-[1px] border-gr rounded-sm"
            />
            <textarea
              rows="7"
              cols="26"
              placeholder="Message"
              name="message"
              className="my-5 p-5 bg-transparent border-[1px] border-gr rounded-sm"
            ></textarea>
          </div>
          <div className="flex">
            <button
              className="bg-transparent border-gr border-[1px] p-4 hover:bg-bl hover:shadow-lg rounded-md text-gr m-auto"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className="mt-10 w-10/12 mx-auto flex justify-around lg:hidden">
        <a className="" href="https://twitter.com/SujalSamai">
          <img
            className="w-7/12 mx-auto p-2 hover:-translate-y-1 hover:transition ease-out duration-200 rounded-3xl hover:bg-gr"
            src={twitter}
          ></img>
        </a>
        <a className="" href="https://www.linkedin.com/in/sujal-samai/">
          <img
            className="w-7/12 p-2 mx-[0.70rem] hover:-translate-y-1 hover:transition ease-out duration-200 rounded-3xl hover:bg-gr"
            src={linkedin}
          ></img>
        </a>
        <a className="" href="https://github.com/SujalSamai">
          <img
            className="w-7/12 mx-auto p-2 hover:-translate-y-1 hover:transition ease-out duration-200 rounded-3xl hover:bg-gr"
            src={github}
          ></img>
        </a>
        <a className="" href="https://sujalsamai.hashnode.dev/">
          <img
            className="w-7/12 mx-auto p-2 hover:-translate-y-1 hover:transition ease-out duration-200 rounded-3xl hover:bg-gr"
            src={hashnode}
          ></img>
        </a>
        <a className="" href="#">
          <img
            className="w-7/12 mx-auto p-2 hover:-translate-y-1 hover:transition ease-out duration-200 rounded-3xl hover:bg-gr"
            src={instagram}
          ></img>
        </a>
      </div>
      <div className="md:mt-10">
        <p className="text-slate-500 text-center font-martian text-[0.65rem] md:text-xs pt-5">
          Built with React & Tailwind CSS.
        </p>
        <p className="text-slate-500 text-center font-martian text-[0.65rem] md:text-xs pt-2 pb-5">
          by Sujal Samai 💖
        </p>
      </div>
    </section>
  );
}

export default Contact;
