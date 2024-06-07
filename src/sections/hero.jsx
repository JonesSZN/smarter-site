import { ChevronRight } from "lucide-react";

function Hero() {
  return (
    <section className="w-full lg:py-28 py-24 bg-[#151515] flex justify-center">
      <div className="lg:w-[60%] w-[95%] max-w-[1450px] flex flex-col justify-center items-center">
        <HeroTop />
        <HeroImage />
      </div>
    </section>
  );
}

function HeroTop() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 mb-4">
      <div className="lg:flex lg:flex-row gap-2  flex flex-col items-center">
        <p className="text-[#7a8794] text-[14px]">
          READ MORE ABOUT WISEX ON APPLE.COM
        </p>
        <button className="text-white flex items-center gap-1 bg-[#5240a6] py-[5px] px-[14px] rounded-full font-semibold">
          More <ChevronRight color="white" size={18} />
        </button>
      </div>

      <h1 className="text-center font-bold my-4 text-[#cce6ff] lg:text-7xl text-4xl text-[41px] lg:max-w-[880px] max-w-[350px]">
        Make boring text and data beautiful with{" "}
        <span className="text-[#5c48b8]">Smarter</span>
      </h1>
      <p className="lg:text-[16px] text-sm mb-4 text-center lg:max-w-[650px] max-w-[380px] text-[#cce6ffBF]">
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
    <div className="lg:flex lg:flex-row flex flex-col lg:w-auto w-full gap-3 mb-12">
      <button className="bg-[#151515] border border-[#cce6ff] text-[#cce6ff] font-semibold lg:flex  lg:py-[12px] py-[8px] px-10 rounded-full  text-[16px]">
        Read More
      </button>
      <button className="bg-[#cce6ff] font-semibold lg:flex lg:py-[12px] py-[8px] px-10 rounded-full text-[#202020] text-[16px]">
        Try Now
      </button>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="border-[7px] lg:w-[954px] w-[392px]  border-[#2e2e2e] rounded-3xl overflow-hidden">
      <img className="" src="images/dashboard.webp" alt="" />
    </div>
  );
}

export default Hero;
