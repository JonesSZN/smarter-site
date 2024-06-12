import { Check } from "lucide-react";
import { Container } from "../components";

function Pricing() {
  return (
    <section className="flex w-full justify-center bg-[#151515] py-28">
      <Container className="flex-col gap-16">
        <Top />
        <Bottom />
      </Container>
    </section>
  );
}

function Top() {
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

function Bottom() {
  return (
    <div className="flex flex-col gap-8">
      <MonthlyButton />
      <Cards />
    </div>
  );
}

function MonthlyButton() {
  return (
    <div className="flex cursor-pointer flex-col items-center rounded-3xl border border-white/10 bg-[#202020] lg:max-w-[250px] lg:flex-row lg:gap-6 lg:rounded-full">
      <button className="font-semimbold w-full rounded-full bg-[#5240a6] px-7 py-3 text-[14px] text-white lg:w-auto">
        Monthly
      </button>
      <div className="flex items-center gap-1 px-7 py-3 lg:px-0 lg:py-0">
        <p className="text-[14px] font-semibold text-white">Yearly</p>
        <div className="rounded-full bg-[#5240a6] px-[6px] py-[2px]">
          <p className="text-[12px] text-white">-20%</p>
        </div>
      </div>
    </div>
  );
}

function Cards() {
  const CARD_OBJ = [
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
      {CARD_OBJ.map((item, index) => (
        <div className="h-fit w-full rounded-xl border border-white/20 bg-[#202020] p-6 transition-all duration-300 hover:bg-[#0D0D0D]">
          <button
            className={
              index === 1
                ? "rond mb-4 rounded-full bg-[#ff9022] px-6 py-2 font-semibold text-white"
                : index === CARD_OBJ.length - 1
                  ? "mb-4 rounded-full bg-green-500 px-6 py-2 text-white"
                  : "rond mb-4 rounded-full bg-[#5240a6] px-6 py-2 font-semibold text-white"
            }
          >
            {item.tag}
          </button>

          <p className="mb-8 font-bold text-[#ff9022]">{item.subheading}</p>
          <p className="text-[48px] font-bold text-[#cce6ff]">{item.price}</p>
          <p className="mb-8 text-[16px] text-[#cce6ffBF]">{item.duration}</p>
          <hr className="mb-8 border-b border-white/10" />

          <Test props={item.benefits} />

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

const Test = ({ props }) => {
  return (
    <div className="flex flex-col gap-3">
      {props.map((benefit, index) => (
        <div key={index} className="flex items-center gap-2 text-white">
          <Check color="white" size={20} />
          <p className="text-[#cce6ff]">{benefit}</p>
        </div>
      ))}
    </div>
  );
};

export { Pricing };
