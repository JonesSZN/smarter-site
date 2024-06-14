import { Check } from "lucide-react";
import { Container } from "../components";
import { useState } from "react";

function HeadingText() {
  return (
    <div className="flex flex-col justify-between lg:flex-row lg:items-center">
      <h2 className="text-[24px] font-bold text-[#cce6ff] lg:text-[48px]">
        Pricings
      </h2>
      <p className="max-w-[370px] text-[14px] text-[#cce6ffBF] lg:text-[16px]">
        Check out our affordable pricing plans designed to meet the needs of
        individuals and businesses of all sizes.
      </p>
    </div>
  );
}

function DurationSlider() {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <div className="relative flex flex-col items-center gap-4 overflow-clip rounded-3xl border border-white/10 bg-[#202020] text-sm font-semibold text-white lg:max-w-[380px] lg:flex-row lg:justify-between lg:gap-6 lg:rounded-full">
      {/* LEFT BUTTON */}
      <button
        onClick={() => setIsMonthly(true)}
        className="z-20 h-full w-full select-none px-7 py-3"
      >
        Monthly
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={() => setIsMonthly(false)}
        className="z-20 h-full w-full select-none px-7 py-3"
      >
        Yearly{" "}
        <span
          style={{
            backgroundColor: !isMonthly ? "#36296f" : "#5240a6",
          }}
          className="ml-2 inline-block rounded-full px-1.5 py-0.5 text-xs transition-all"
        >
          -30%
        </span>
      </button>

      <div
        className={`absolute h-1/2 w-full rounded-full bg-[#5240a6] transition-all duration-500 lg:h-full lg:w-1/2 ${
          isMonthly ? "max-lg:top-0 lg:left-0" : "max-lg:top-1/2 lg:left-1/2"
        }`}
      />
    </div>
  );
}

const Benefits = ({ benefits }) => {
  return (
    <div className="flex flex-col gap-3">
      {benefits.map((benefit) => (
        <div key={benefit} className="flex items-center gap-2 text-[#cce6ff]">
          <Check color="white" size={20} />
          {benefit}
        </div>
      ))}
    </div>
  );
};

function Cards() {
  const PRICING_CARDS = [
    {
      tag: "BASIC",
      price: "$19",
      duration: "Per member, per month",
      benefits: [
        "3 Active cards",
        "Up to 10 users",
        "Family management",
        "AI integration",
      ],
    },
    {
      tag: "Gold",
      subheading: "MOST POPULAR",
      price: "$32",
      duration: "Per member, per month",
      benefits: [
        "3 Active cards",
        "Its really good",
        "Up to 20 Projects",
        "Up to 10 users",
        "Family managemenet",
        "AI integration",
      ],
    },
    {
      tag: "PRO",
      price: "$42",
      duration: "Per member, per month",
      benefits: [
        "9 Active cards",
        "Up to 15 users",
        "Family management",
        "AI integration",
      ],
    },
  ];
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
      {PRICING_CARDS.map((item, index) => (
        <div className="h-fit w-full rounded-xl border border-white/20 bg-[#202020] p-6 transition-all duration-300 hover:bg-[#0D0D0D]">
          <button
            className={
              index === 1
                ? "mb-4 rounded-full bg-[#ff9022] px-6 py-2 font-semibold text-white"
                : index === PRICING_CARDS.length - 1
                  ? "mb-4 rounded-full bg-green-500 px-6 py-2 text-white"
                  : "mb-4 rounded-full bg-[#5240a6] px-6 py-2 font-semibold text-white"
            }
          >
            {item.tag}
          </button>

          <p className="mb-8 font-bold text-[#ff9022]">{item.subheading}</p>
          <p className="text-[48px] font-bold text-[#cce6ff]">{item.price}</p>
          <p className="mb-8 text-[16px] text-[#cce6ffBF]">{item.duration}</p>
          <hr className="mb-8 border-b border-white/10" />

          <Benefits benefits={item.benefits} />

          <button
            className={
              index === 1
                ? "hover: mt-8 w-full transform rounded-full border border-white/100 bg-[#cce6ff] px-10 py-3 font-bold text-black transition duration-300 hover:scale-105"
                : "hover: mt-8 w-full transform rounded-full border border-white/100 px-10 py-3 font-bold text-[#cce6ff] transition duration-300 hover:scale-105"
            }
          >
            BUY NOW
          </button>
        </div>
      ))}
    </div>
  );
}

function Pricing() {
  return (
    <section className="flex w-full bg-[#151515] py-28">
      <Container className="flex-col gap-16">
        <HeadingText />

        {/* BOTTOM */}
        <div className="flex flex-col gap-8">
          <DurationSlider />
          <Cards />
        </div>
      </Container>
    </section>
  );
}

export { Pricing };
