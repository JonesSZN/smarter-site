import { Menu } from "lucide-react";

function Header() {
  return (
    <header className=" w-full fixed top-0 left-0 z-50 border-b border-white/10   py-4 flex justify-center bg-[#151515]">
      <div className="lg:w-[65%] w-[90%] max-w-[1450px] flex ">
        <Navbar />
      </div>
    </header>
  );
}

function Navbar() {
  return (
    <div className="flex  w-full justify-between items-center">
      <NavLeft />
      <NavRight />
    </div>
  );
}

function NavLeft() {
  return (
    <div className="flex gap-16 items-center">
      <NavLogo />
      <NavUL />
    </div>
  );
}

function NavLogo() {
  return (
    <img
      className="lg:w-[116px] cursor-pointer w-[90px]"
      src="images/logo.svg"
      alt=""
    />
  );
}
function NavUL() {
  const ARRAY = ["Offerings", "The Product", "Features", "Pricing"];
  return (
    <ul className="lg:flex gap-8 hidden  cursor-pointer items-center">
      {ARRAY.map((item) => (
        <li className="text-[#a7a7a7] text-[16px]">{item}</li>
      ))}
    </ul>
  );
}

function NavRight() {
  return (
    <>
      <Menu className="lg:hidden " color="#cce6ff" />
      <button className="bg-[#cce6ff] font-semibold lg:flex hidden py-[5px] px-6 rounded-full text-[#202020] text-[14px]">
        Sign In
      </button>
    </>
  );
}

export default Header;
