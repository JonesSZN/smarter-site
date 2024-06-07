import { Check } from "lucide-react";

function Pricing() {
  return (
    <section className="w-full py-28 flex justify-center bg-[#151515]">
      <div className="lg:w-[65%] w-[90%] max-w-[1450px] flex flex-col gap-16">
        <Top />
        <Bottom />
      </div>
    </section>
  );
}

function Top() {
  return (
    <div className="flex lg:flex-row flex-col justify-between lg:items-center">
      <h2 className="text-[#cce6ff] lg:text-[48px] text-[24px] font-bold">
        Pricings
      </h2>
      <p className="lg:text-[16px] text-[14px] max-w-[370px] text-[#cce6ffBF]">
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
    <div className="flex lg:flex-row  flex-col cursor-pointer lg:gap-6 lg:max-w-[250px] lg:rounded-full rounded-3xl items-center bg-[#202020]  border border-white/10">
      <button className="py-3 lg:w-auto w-full px-7 rounded-full bg-[#5240a6] text-white text-[14px] font-semimbold">
        Monthly
      </button>
      <div className="flex lg:px-0 lg:py-0 px-7 py-3 gap-1 items-center">
        <p className="text-[14px] font-semibold text-white">Yearly</p>
        <div className="py-[2px] px-[6px] bg-[#5240a6] rounded-full">
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
    <div className="flex lg:flex-row lg:items-center  flex-col gap-6 ">
      {CARD_OBJ.map((item, index) => (
        <div className="p-6 w-full h-fit hover:bg-[#0D0D0D] transition-all duration-300   rounded-xl bg-[#202020] border border-white/20">
          <button
            className={
              index === 1
                ? "bg-[#ff9022] mb-4 py-2 px-6 text-white rond font-semibold rounded-full"
                : index === CARD_OBJ.length - 1
                ? "bg-green-500 mb-4 py-2 px-6 text-white rounded-full"
                : "bg-[#5240a6] mb-4 py-2 px-6 text-white rond font-semibold rounded-full"
            }
          >
            {item.tag}
          </button>

          <p className="text-[#ff9022] mb-8 font-bold">{item.subheading}</p>
          <p className="text-[48px] font-bold text-[#cce6ff]">{item.price}</p>
          <p className="text-[16px] mb-8 text-[#cce6ffBF]">{item.duration}</p>
          <hr className=" border-b border-white/10  mb-8" />

          <Test props={item.benefits} />

          <button
            className={
              index === 1
                ? "border border-white/100 bg-[#cce6ff] text-black font-bold  rounded-full mt-8 w-full py-3 px-10 hover: transition transform hover:scale-105 duration-300"
                : "border border-white/100  text-[#cce6ff] font-bold  rounded-full mt-8 w-full py-3 px-10 hover: transition transform hover:scale-105 duration-300"
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

export default Pricing;
