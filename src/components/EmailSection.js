import "../App.css";
export default function EmailSection() {
  return (
    <div className="email hidden lg:block fixed top-[12rem] right-[0rem]">
      <p className="text-slate-500 text-sm rotate-90 hover:text-gr">
        <a className="cursor-pointer " href="mailto:sujalsamai123@gmail.com">
          sujalsamai123@gmail.com
        </a>
      </p>
      <div className="mt-8 rotate-90 ">
        <p className="border-slate-200 border-[1px] mt-44 w-[8rem]"></p>
      </div>
    </div>
  );
}
