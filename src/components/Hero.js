import "../App.css";
import logo from "../assets/coder.png";
import emailImg from "../assets/email.png";
function Hero() {
    return (
        <main className="w-10/12 lg:w-7/12 mx-auto pt-36">
            <p className="text-gr font-martian">Hi, my name is</p>
            <h1 className="text-5xl lg:text-7xl text-slate-50 my-7 font-bold">
                Sujal Samai.
            </h1>
            <h2 className="text-4xl lg:text-5xl text-slate-400 font-bold">
                Web Developer and content writer.
            </h2>
            <div className="my-5 flex justify-between">
                <img
                    src={logo}
                    className="hero-img hidden lg:block"
                    alt="logo"
                />
                <div className="flex flex-col w-full lg:w-7/12 m-auto">
                    <div>
                        <p className="text-slate-400 text-sm tracking-wider font-light">
                            I'm an undergrad, Frontend Web Developer who likes
                            to design beautiful websites primarily using
                            React.js and Tailwind CSS.
                        </p>
                        <p className="text-slate-400 text-sm tracking-wider my-2 font-light">
                            Currently, I'm focussing on improving my Frontend
                            logics and also in the process to learn Backend
                            Technologies.
                        </p>
                        <p className="text-slate-400 text-sm tracking-wider my-2 font-light">
                            I'm constantly trying to challenge myself with new
                            things and wishing to network with amazing
                            developers all around the internet and learn from
                            them.
                        </p>
                    </div>
                    <img
                        src={logo}
                        className="hero-img lg:hidden w-4/6 m-auto"
                        alt="logo"
                    />
                    <a
                        href="mailto:sujalsamai123@gmail.com"
                        className="my-10 md:w-4/6 border-2 border-gr text-base text-gr flex justify-between  items-center  hover:bg-lbl"
                    >
                        <img
                            className="border-r-[1px] p-4 w-2/12  border-gr"
                            src={emailImg}
                        ></img>
                        <span className="w-10/12 text-center">
                            sujalsamai123@gmail.com
                        </span>
                    </a>
                </div>
            </div>
        </main>
    );
}

export default Hero;
