import { Clock, Rocket, Mail, Phone, Folder } from "lucide-react";
import { Container } from "../components";

function Offer() {
  return (
    <section className="flex w-full justify-center bg-[#151515] py-14 lg:py-28">
      <Container className="flex-col gap-16">
        <Top />
        <Grid />
      </Container>
    </section>
  );
}

function Top() {
  return (
    <div className="flex flex-col lg:flex lg:flex-row lg:items-center lg:justify-between">
      <p className="text-[28px] text-[#cce6ff] lg:text-[48px]">What we offer</p>
      <p className="max-w-[400px] text-[14px] text-[#cce6ffBF] lg:text-[16px]">
        We offer a range of features and services designed to make your digital
        life easier and more convenient
      </p>
    </div>
  );
}
function GridElement({ image, heading, description }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#202020] px-[20px] py-[30px] transition-all duration-200 hover:-translate-y-2 hover:bg-[#0D0D0D]">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black">
        {image}
      </div>
      <h2 className="text-[24px] font-semibold text-[#cce6ff] lg:text-[28px]">
        {heading}
      </h2>
      <p className="text-[14px] text-[#cce6ffBF] lg:text-[16px]">
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
    <div className="grid grid-cols-1 gap-8 lg:grid lg:grid-cols-3">
      {OFFER_CARDS.map((item, index) => {
        if (index === 0) {
          return (
            <div className="flex grid-cols-subgrid flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#202020] px-[20px] py-[30px] transition-all duration-200 hover:-translate-y-2 hover:bg-[#0D0D0D] lg:col-span-2 lg:flex-row">
              <div className="flex flex-col gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black">
                  {item.img}
                </div>
                <h2 className="text-[24px] font-semibold text-[#cce6ff] lg:text-[28px]">
                  {item.heading}
                </h2>
                <p className="text-[14px] text-[#cce6ffBF] lg:max-w-[270px] lg:text-[16px]">
                  {item.description}
                </p>
              </div>
              <img
                className="h-auto w-3/4 shrink-0 lg:h-[240px] lg:w-auto"
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

export { Offer };
