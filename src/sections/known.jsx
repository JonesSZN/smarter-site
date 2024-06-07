import { ChevronRight } from "lucide-react";

function Known() {
  return (
    <section className="w-full py-16 bg-[#151515] flex justify-center">
      <div className="lg:w-[65%] w-[90%] flex flex-col max-w-[1450px]">
        <Top />
        <Bottom />
      </div>
    </section>
  );
}

function Top() {
  return (
    <div>
      <TopHeading />
      <MidCol />
    </div>
  );
}

function TopHeading() {
  return (
    <div className="flex lg:flex-row flex-col gap-2 lg:justify-between lg:items-center">
      <p className="lg:text-[48px] text-[28px] font-bold text-[#cce6ff] ">
        Best known for
      </p>
      <p className="lg:text-[16px] text-[14px]  max-w-[370px] text-[#cce6ffBF]">
        Our app offers a range of features and services designed to help you
        securely store and access your files from anywhere, at any time.
      </p>
    </div>
  );
}

function MidCol() {
  return (
    <div className="flex lg:flex-row flex-col gap-32 py-20">
      <img className="w-[636px]" src="images/data-graph.png" alt="" />
      <MidColRight />
    </div>
  );
}

function MidColRight() {
  return (
    <div className="flex flex-col mt-4 gap-4">
      <h1 className="lg:text-4xl text-[24px] font-bold text-[#cce6ff]">
        Automated Transaction Categorization
      </h1>
      <p className="lg:text-[16px] text-[14px] text-[#cce6ffBF]">
        A feature that automatically categorizes your transactions and assigns
        them to specific income or expense categories based on their
        descriptions or amounts
      </p>
      <p className="text-[16px] text-[#cce6ffBF]">
        This would help you quickly see where your money is going and make it
        easier to identify areas where you might need to adjust your spending
        habits.
      </p>
      <button className="text-[16px] max-w-[127px] whitespace-nowrap flex gap-1 items-center justify-center mt-10 py-[5px] px-[14px] rounded-full bg-[#5c48b8] text-white font-semibold">
        Read More <ChevronRight size={15} />
      </button>
    </div>
  );
}

function Bottom() {
  return (
    <div className="flex lg:flex-row flex-col-reverse gap-16">
      <BottomColLeft />
      <img className="w-[636px]" src="images/two-col-grid.png" alt="" />
    </div>
  );
}

function BottomColLeft() {
  return (
    <div className="flex flex-col mt-4 gap-4">
      <h1 className="lg:text-4xl text-[24px] font-bold text-[#cce6ff]">
        Budget Tracking and Alerts
      </h1>
      <p className="lg:text-[16px] text-[14px] text-[#cce6ffBF]">
        A feature that allows you to set up and track your monthly or weekly
        budget. The app could send you alerts when you're close to reaching your
        budget limit or overspending in certain categories.
      </p>
      <p className="text-[16px] text-[#cce6ffBF]">
        This would help you stay on track and avoid overspending.
      </p>
      <button className="text-[16px] max-w-[127px] whitespace-nowrap flex gap-1 items-center justify-center mt-10 py-[5px] px-[14px] rounded-full bg-[#5c48b8] text-white font-semibold">
        Read More <ChevronRight size={15} />
      </button>
    </div>
  );
}

export default Known;
