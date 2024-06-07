function Footer() {
  return (
    <section className="w-full pt-24 flex justify-center bg-[#151515]">
      <div className="lg:w-[65%] w-[90%] max-w-[1450px]">
        <footer className="flex flex-col ">
          <FooterContent />

          <FooterBottom />
          <div></div>
        </footer>
      </div>
    </section>
  );
}

function FooterContent() {
  return (
    <div className="flex lg:flex-row flex-col justify-between mb-12">
      <FooterLeft />
      <FooterRight />
    </div>
  );
}

function FooterLeft() {
  return (
    <div>
      <img src="images/brand-image.svg" alt="" />
      <p className="text-[#cce6ffBF] text-[16px] mt-4 max-w-[300px]">
        The program uses advanced data visulization techniques.
      </p>
    </div>
  );
}

function FooterRight() {
  return (
    <div className="flex lg:flex-row lg:mt-0 mt-12 flex-col gap-16">
      <FooterRightRow1 />
      <FooterRightRow2 />
      <FooterRightRow3 />
    </div>
  );
}

function FooterRightRow1() {
  const FOOTER_ROW1 = [
    "Company",
    "Best Known for",
    "Our Features",
    "Our Offerings",
    "Pricing",
  ];

  return (
    <ul className="flex flex-col gap-2 cursor-pointer">
      {FOOTER_ROW1.map((item, index) => (
        <li
          style={{
            color: index === 0 ? "#cce6ff" : "",
            marginBottom: index === 0 ? "5px" : "",
            fontSize: index === 0 ? "19px" : "",
            fontWeight: index === 0 ? "bold" : "",
          }}
          className="text-[#7c8995] hover:text-[#cce6ff] duration-500 transition-all  text-[15px]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
function FooterRightRow2() {
  const FOOTER_ROW1 = [
    "Social media",
    "Instagram",
    "Facebook",
    "Linkedin",
    "Twitter",
  ];

  return (
    <ul className="flex flex-col gap-2 cursor-pointer">
      {FOOTER_ROW1.map((item, index) => (
        <li
          style={{
            color: index === 0 ? "#cce6ff" : "",
            marginBottom: index === 0 ? "5px" : "",
            fontSize: index === 0 ? "19px" : "",
            fontWeight: index === 0 ? "bold" : "",
          }}
          className="text-[#7c8995] hover:text-[#cce6ff] duration-500 transition-all text-[15px]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
function FooterRightRow3() {
  const FOOTER_ROW1 = [
    "Webflow stuff",
    "Style Guide",
    "Licensing",
    "Instructions",
    "Change Log",
  ];

  return (
    <ul className="flex flex-col gap-2 cursor-pointer">
      {FOOTER_ROW1.map((item, index) => (
        <li
          style={{
            color: index === 0 ? "#cce6ff" : "",
            marginBottom: index === 0 ? "5px" : "",
            fontSize: index === 0 ? "19px" : "",
            fontWeight: index === 0 ? "bold" : "",
          }}
          className="text-[#7c8995] hover:text-[#cce6ff] duration-500 transition-all text-[15px]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function FooterBottom() {
  return (
    <div className="flex lg:flex-row flex-col gap-4 justify-between border-t border-white/10 py-8 ">
      <p className="text-[#cce6ff] font-semibold text-[15px]">
        CREATED BY{" "}
        <span className="underline cursor-pointer hover:text-red-400 transition-all duration-300">
          OVERSIGHT
        </span>
      </p>
      <p className="text-[#cce6ff] font-semibold text-[15px] ">
        POWERED BY{" "}
        <span className="underline cursor-pointer hover:text-red-400 transition-all duration-300">
          WEBFLOW
        </span>
      </p>
    </div>
  );
}
export default Footer;
