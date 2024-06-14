import { Menu } from "lucide-react";
import { Container } from "../components";

function NavLeft() {
  return (
    <div className="flex items-center gap-16">
      <NavLogo />
      <NavUL />
    </div>
  );
}

function NavLogo() {
  return (
    <img
      className="w-[90px] cursor-pointer lg:w-[116px]"
      src="images/logo.svg"
      alt=""
    />
  );
}
function NavUL() {
  const ARRAY = ["Offerings", "The Product", "Features", "Pricing"];
  return (
    <ul className="hidden cursor-pointer items-center gap-8 lg:flex">
      {ARRAY.map((item) => (
        <li className="text-[16px] text-[#a7a7a7]">{item}</li>
      ))}
    </ul>
  );
}

function NavRight() {
  return (
    <>
      <Menu className="lg:hidden" color="#cce6ff" />
      <button className="hidden rounded-full bg-[#cce6ff] px-6 py-[5px] text-[14px] font-semibold text-[#202020] lg:flex">
        Sign In
      </button>
    </>
  );
}

function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 flex w-full justify-center border-b border-white/10 bg-[#151515] py-4">
      <Container>
        <nav className="flex w-full items-center justify-between">
          <NavLeft />
          <NavRight />
        </nav>
      </Container>
    </header>
  );
}

export { Header };
