import { useState } from "react";

function Contact() {
  return (
    <section id="contact" className="w-5/12 m-auto">
      <h4 className="text-gr text-base font-martian text-center">
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
      <div className="py-10 w-10/12 mx-auto text-slate-200">
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
      <div className="mt-10">
        <p className="text-slate-500 text-center font-martian text-xs pt-5">
          Built by Sujal Samai
        </p>
        <p className="text-slate-500 text-center font-martian text-xs pt-2 pb-5">
          with React & Tailwind CSS 💖
        </p>
      </div>
    </section>
  );
}

export default Contact;
