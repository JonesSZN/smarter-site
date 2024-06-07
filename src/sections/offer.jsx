import { Clock, Rocket, Mail, Phone, Folder } from "lucide-react";

function Offer() {
  return (
    <section className="w-full lg:py-28 py-14 flex justify-center bg-[#151515]">
      <div className="lg:w-[65%] w-[90%] flex flex-col gap-16 max-w-[1450px]">
        <Top />
        <Grid />
      </div>
    </section>
  );
}

function Top() {
  return (
    <div className="lg:flex lg:flex-row lg:justify-between lg:items-center flex flex-col">
      <p className="text-[#cce6ff] lg:text-[48px] text-[28px]">What we offer</p>
      <p className="text-[#cce6ffBF] lg:text-[16px] text-[14px] max-w-[400px]">
        We offer a range of features and services designed to make your digital
        life easier and more convenient
      </p>
    </div>
  );
}
function GridElement({ image, heading, description }) {
  return (
    <div className="bg-[#202020] py-[30px] flex flex-col gap-4 rounded-2xl px-[20px] border border-white/10 hover:bg-[#0D0D0D] transition-all duration-200 hover:-translate-y-2 ">
      <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
        {image}
      </div>
      <h2 className="text-[#cce6ff] lg:text-[28px] text-[24px] font-semibold">
        {heading}
      </h2>
      <p className="text-[#cce6ffBF] lg:text-[16px] text-[14px]">
        {description}
      </p>
    </div>
  );
}
function Grid() {
  const OFFER_CARDS = [
    {
      img: <Clock fill="white" size={30} />,
      heading: "Automatic Upload",
      description:
        "With this feature, you can set your app to automatically upload any files added to a specific folder on your computer.",
    },

    {
      img: <Rocket fill="white" size={30} />,
      heading: "Lightning-Fast Upload speed on the go",
      description:
        "With this feature, you can upload any file in a flash. The app's high-speed upload capabilities make it easy to transfer large files quickly and efficiently.",
    },
    {
      img: <Mail fill="white" size={30} />,
      heading: "Email Upload any file any time",
      description:
        "With this feature, you can upload files directly from your email client.",
    },
    {
      img: <Phone fill="white" size={30} />,
      heading: "Upload directly from your mobile device",
      description:
        "Especially useful if you have a large number of files uploading.",
    },
    {
      img: <Folder fill="yellow" size={30} />,
      heading: "Upload entire folders of files anytime",
      description:
        "Especially useful if you have a large number of files uploading.",
    },
  ];
  return (
    <div className="lg:grid lg:grid-cols-3 grid grid-cols-1 gap-8">
      {OFFER_CARDS.map((item, index) => {
        if (index === 0) {
          return (
            <div className="bg-[#202020] py-[30px] lg:col-span-2 grid-cols-subgrid flex lg:flex-row flex-col items-center justify-between  gap-4 rounded-2xl px-[20px] border border-white/10 hover:bg-[#0D0D0D] transition-all duration-200 hover:-translate-y-2 ">
              <div className="flex flex-col gap-4">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                  {item.img}
                </div>
                <h2 className="text-[#cce6ff] lg:text-[28px] text-[24px] font-semibold">
                  {item.heading}
                </h2>
                <p className="text-[#cce6ffBF] lg:max-w-[270px] lg:text-[16px] text-[14px]">
                  {item.description}
                </p>
              </div>
              <img
                className="lg:w-auto lg:h-[240px] w-3/4 h-auto shrink-0"
                src="images/credit-card.png"
                alt=""
              />
            </div>
          );
        } else {
          return (
            <GridElement
              image={item.img}
              heading={item.heading}
              description={item.description}
            />
          );
        }
      })}
    </div>
  );
}

export default Offer;
