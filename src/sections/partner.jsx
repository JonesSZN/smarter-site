import { Heart, FileUp, SmileIcon } from "lucide-react";
import { Container } from "../components";

function Partner() {
  return (
    <section className="flex w-full justify-center bg-[#0D0D0D] py-28">
      <Container className="flex-col gap-16">
        <Toppartners />
        <Cards />
      </Container>
    </section>
  );
}

function Toppartners() {
  return (
    <div className="flex flex-col gap-8 lg:flex lg:flex-row lg:justify-between lg:gap-4">
      <p className="text-[28px] font-semibold text-[#cce6ff]">Partners</p>
      <Partnernames />
    </div>
  );
}

function Partnernames() {
  const names = [
    "images/partnerlogo-1.svg",
    "images/partnerlogo-2.svg",
    "images/partnerlogo-3.svg",
    "images/partnerlogo-4.svg",
    "images/partnerlogo-5.svg",
    "images/partnerlogo-5.svg",
  ];
  return (
    <div className="grid grid-cols-2 gap-14 lg:flex lg:flex-row">
      {names.map((name) => (
        <img className="w-[169px] lg:w-[90px]" src={name} alt="" />
      ))}
    </div>
  );
}

function Cards() {
  const cardObj = [
    {
      img: <Heart fill="red" size={35} />,
      heading: "Grow your business quickly and easily",
      description:
        "Our powerful platform offers a range of tools and features designed to help you reach new customers streamline.",
    },
    {
      img: <FileUp fill="white" size={35} />,
      heading: "Upload your favorite GIFs really easy",
      description:
        "You can upload all your favorite GIFs and access them from anywhere. Whether it's for personal use or to share with friends.",
    },
    {
      img: <SmileIcon fill="yellow" size={35} />,
      heading: "More than half of US has registered",
      description:
        "We're proud to announce that more than half of the US population has registered with our app! Join the millions of satisfied users.",
    },
  ];

  return (
    <div className="flex flex-col gap-8 lg:flex lg:flex-row">
      {cardObj.map((card) => (
        <div className="flex flex-col gap-4 rounded-xl border border-gray-600 bg-[#202020] px-[20px] py-[30px] transition-all duration-200 hover:-translate-y-2 hover:bg-[#0D0D0D]">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black">
            {card.img}
          </div>
          <h2 className="text-[28px] font-semibold text-[#cce6ff]">
            {card.heading}
          </h2>
          <p className="max-w-[260px] text-[16px] text-[#cce6ff]">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export { Partner };
