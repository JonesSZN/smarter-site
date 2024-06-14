import { ChevronRight } from "lucide-react";
import { Container } from "../components";

function Hero() {
  return (
    <section className="flex w-full bg-[#151515] py-24 lg:py-28">
      <Container className="w-[95%] flex-col items-center lg:w-[60%]">
        <HeroTop />
        <HeroImage />
      </Container>
    </section>
  );
}

function HeroTop() {
  return (
    <div className="mb-4 flex flex-col items-center justify-center gap-2">
      <div className="flex flex-col items-center gap-2 lg:flex lg:flex-row">
        <p className="text-[14px] text-[#7a8794]">
          READ MORE ABOUT WISEX ON APPLE.COM
        </p>
        <button className="flex items-center gap-1 rounded-full bg-[#5240a6] px-[14px] py-[5px] font-semibold text-white">
          More <ChevronRight color="white" size={18} />
        </button>
      </div>

      <h1 className="my-4 max-w-[350px] text-center text-4xl text-[41px] font-bold text-[#cce6ff] lg:max-w-[880px] lg:text-7xl">
        Make boring text and data beautiful with{" "}
        <span className="text-[#5c48b8]">Smarter</span>
      </h1>
      <p className="mb-4 max-w-[380px] text-center text-sm text-[#cce6ffBF] lg:max-w-[650px] lg:text-[16px]">
        The program uses advanced data visualization techniques to transform
        textual information into graphical representations that are easy to
        understand and interpret.
      </p>
      <Buttons />
    </div>
  );
}

function Buttons() {
  return (
    <div className="mb-12 flex w-full flex-col gap-3 lg:flex lg:w-auto lg:flex-row">
      <button className="rounded-full border border-[#cce6ff] bg-[#151515] px-10 py-[8px] text-[16px] font-semibold text-[#cce6ff] lg:flex lg:py-[12px]">
        Read More
      </button>
      <button className="rounded-full bg-[#cce6ff] px-10 py-[8px] text-[16px] font-semibold text-[#202020] lg:flex lg:py-[12px]">
        Try Now
      </button>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="w-[392px] overflow-hidden rounded-3xl border-[7px] border-[#2e2e2e] lg:w-[954px]">
      <img className="" src="images/dashboard.webp" alt="" />
    </div>
  );
}

export { Hero };
