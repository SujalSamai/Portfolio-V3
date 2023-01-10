import top from "../assets/upward.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function TopArrow() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <a
      data-aos="fade-in"
      className="fixed right-2 md:right-14 bottom-10 z-50"
      href="#app"
    >
      <img className="w-4/6 md:w-5/6" src={top}></img>
    </a>
  );
}
