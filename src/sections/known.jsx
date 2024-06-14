import { ChevronRight } from "lucide-react";
import { Container } from "../components";

function Known() {
  return (
    <section className="flex w-full justify-center bg-[#151515] py-16">
      <Container className="flex-col">
        <Top />
        <Bottom />
      </Container>
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
    <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
      <p className="text-[28px] font-bold text-[#cce6ff] lg:text-[48px]">
        Best known for
      </p>
      <p className="max-w-[370px] text-[14px] text-[#cce6ffBF] lg:text-[16px]">
        Our app offers a range of features and services designed to help you
        securely store and access your files from anywhere, at any time.
      </p>
    </div>
  );
}

function MidCol() {
  return (
    <div className="flex flex-col gap-32 py-20 lg:flex-row">
      <img className="w-[636px]" src="images/data-graph.png" alt="" />
      <MidColRight />
    </div>
  );
}

function MidColRight() {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <h1 className="text-[24px] font-bold text-[#cce6ff] lg:text-4xl">
        Automated Transaction Categorization
      </h1>
      <p className="text-[14px] text-[#cce6ffBF] lg:text-[16px]">
        A feature that automatically categorizes your transactions and assigns
        them to specific income or expense categories based on their
        descriptions or amounts
      </p>
      <p className="text-[16px] text-[#cce6ffBF]">
        This would help you quickly see where your money is going and make it
        easier to identify areas where you might need to adjust your spending
        habits.
      </p>
      <button className="mt-10 flex max-w-[127px] items-center justify-center gap-1 whitespace-nowrap rounded-full bg-[#5c48b8] px-[14px] py-[5px] text-[16px] font-semibold text-white">
        Read More <ChevronRight size={15} />
      </button>
    </div>
  );
}

function Bottom() {
  return (
    <div className="flex flex-col-reverse gap-16 lg:flex-row">
      <BottomColLeft />
      <img className="w-[636px]" src="images/two-col-grid.png" alt="" />
    </div>
  );
}

function BottomColLeft() {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <h1 className="text-[24px] font-bold text-[#cce6ff] lg:text-4xl">
        Budget Tracking and Alerts
      </h1>
      <p className="text-[14px] text-[#cce6ffBF] lg:text-[16px]">
        A feature that allows you to set up and track your monthly or weekly
        budget. The app could send you alerts when you're close to reaching your
        budget limit or overspending in certain categories.
      </p>
      <p className="text-[16px] text-[#cce6ffBF]">
        This would help you stay on track and avoid overspending.
      </p>
      <button className="mt-10 flex max-w-[127px] items-center justify-center gap-1 whitespace-nowrap rounded-full bg-[#5c48b8] px-[14px] py-[5px] text-[16px] font-semibold text-white">
        Read More <ChevronRight size={15} />
      </button>
    </div>
  );
}

export { Known };
