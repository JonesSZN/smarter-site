import { Heart, FileUp, SmileIcon } from "lucide-react";

function Partner() {
  return (
    <section className="w-full flex py-28 justify-center bg-[#0D0D0D]">
      <div className="lg:w-[65%] w-[90%] max-w-[1450px] flex flex-col gap-16 ">
        <Toppartners />
        <Cards />
      </div>
    </section>
  );
}

function Toppartners() {
  return (
    <div className="lg:flex lg:flex-row lg:justify-between flex flex-col gap-8 lg:gap-4">
      <p className=" font-semibold text-[28px] text-[#cce6ff]">Partners</p>
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
    <div className="lg:flex lg:flex-row grid grid-cols-2 gap-14">
      {names.map((name) => (
        <img className="lg:w-[90px] w-[169px]" src={name} alt="" />
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
    <div className="lg:flex lg:flex-row flex flex-col  gap-8">
      {cardObj.map((card) => (
        <div className="py-[30px] hover:bg-[#0D0D0D] transition-all duration-200 hover:-translate-y-2 px-[20px] flex flex-col gap-4 border border-gray-600 rounded-xl bg-[#202020]">
          <div className="rounded-full bg-black w-16 h-16 flex items-center justify-center">
            {card.img}
          </div>
          <h2 className="text-[#cce6ff] font-semibold text-[28px]">
            {card.heading}
          </h2>
          <p className="text-[16px] max-w-[260px] text-[#cce6ff]">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Partner;
