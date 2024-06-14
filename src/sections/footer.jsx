import { Container } from "../components";

function FooterContent() {
  return (
    <div className="mb-12 flex flex-col justify-between lg:flex-row">
      <FooterLeft />
      <FooterRight />
    </div>
  );
}

function FooterLeft() {
  return (
    <div>
      <img src="images/brand-image.svg" alt="" />
      <p className="mt-4 max-w-[300px] text-[16px] text-[#cce6ffBF]">
        The program uses advanced data visulization techniques.
      </p>
    </div>
  );
}

function FooterRight() {
  return (
    <div className="mt-12 flex flex-col gap-16 lg:mt-0 lg:flex-row">
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
    <ul className="flex cursor-pointer flex-col gap-2">
      {FOOTER_ROW1.map((item, index) => (
        <li
          style={{
            color: index === 0 ? "#cce6ff" : "",
            marginBottom: index === 0 ? "5px" : "",
            fontSize: index === 0 ? "19px" : "",
            fontWeight: index === 0 ? "bold" : "",
          }}
          className="text-[15px] text-[#7c8995] transition-all duration-500 hover:text-[#cce6ff]"
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
    <ul className="flex cursor-pointer flex-col gap-2">
      {FOOTER_ROW1.map((item, index) => (
        <li
          style={{
            color: index === 0 ? "#cce6ff" : "",
            marginBottom: index === 0 ? "5px" : "",
            fontSize: index === 0 ? "19px" : "",
            fontWeight: index === 0 ? "bold" : "",
          }}
          className="text-[15px] text-[#7c8995] transition-all duration-500 hover:text-[#cce6ff]"
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
    <ul className="flex cursor-pointer flex-col gap-2">
      {FOOTER_ROW1.map((item, index) => (
        <li
          style={{
            color: index === 0 ? "#cce6ff" : "",
            marginBottom: index === 0 ? "5px" : "",
            fontSize: index === 0 ? "19px" : "",
            fontWeight: index === 0 ? "bold" : "",
          }}
          className="text-[15px] text-[#7c8995] transition-all duration-500 hover:text-[#cce6ff]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function FooterBottom() {
  return (
    <div className="flex flex-col justify-between gap-4 border-t border-white/10 py-8 lg:flex-row">
      <p className="text-[15px] font-semibold text-[#cce6ff]">
        CREATED BY{" "}
        <span className="cursor-pointer underline transition-all duration-300 hover:text-red-400">
          OVERSIGHT
        </span>
      </p>
      <p className="text-[15px] font-semibold text-[#cce6ff]">
        POWERED BY{" "}
        <span className="cursor-pointer underline transition-all duration-300 hover:text-red-400">
          WEBFLOW
        </span>
      </p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="flex w-full justify-center bg-[#151515] pt-24">
      <Container className="flex-col">
        <FooterContent />
        <FooterBottom />
      </Container>
    </footer>
  );
}
export { Footer };
