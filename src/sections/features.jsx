import { Container } from "../components";

function Features() {
  return (
    <section className="flex w-full justify-center bg-[#151515] py-28">
      <Container className="flex-col gap-8">
        <Top />
        <Bottom />
      </Container>
    </section>
  );
}

function Top() {
  return (
    <div className="flex flex-col justify-between lg:flex-row lg:items-center">
      <h2 className="text-[28px] text-[#cce6ff] lg:text-[48px]">
        Our Features
      </h2>
      <p className="max-w-[380px] text-[14px] text-[#cce6ffBF] lg:text-[16px]">
        Discover our powerful and intuitive features designed to make your
        digital life easier and more convenient.
      </p>
    </div>
  );
}

function Bottom() {
  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      <LeftSide />
      <RightSide />
    </div>
  );
}

function LeftSide() {
  return (
    <div className="grid grid-cols-1 gap-8">
      <div className="flex flex-col rounded-2xl border border-white/10 bg-[#202020] p-4 transition-all duration-300 hover:-translate-y-2 hover:bg-[#0D0D0D] lg:items-center lg:text-center">
        <img className="w-[588px]" src="images/data-graph-2.png" alt="" />
        <div className="flex flex-col gap-4 p-3 lg:p-10">
          <h1 className="text-[24px] font-bold text-[#cce6ff] lg:text-[28px]">
            Track every micro statistic
          </h1>
          <p className="text-[14px] text-[#cce6ffBF] lg:text-[16px]">
            Our template is designed to help you showcase your product and it’s
            core features with our user-friendly interface.
          </p>
        </div>
      </div>
      <div className="flex flex-col rounded-2xl border border-white/10 bg-[#202020] p-4 transition-all duration-300 hover:-translate-y-2 hover:bg-[#0D0D0D] lg:items-center lg:text-center">
        <img className="w-[588px]" src="images/two-col-grid.png" alt="" />
        <div className="flex flex-col gap-4 p-3 lg:p-10">
          <h1 className="text-[24px] font-bold text-[#cce6ff] lg:text-[28px]">
            Live stats of your webapp
          </h1>
          <p className="text-[14px] text-[#cce6ffBF] lg:text-[16px]">
            This template helps you to clearly communicate the unique value
            proposition of your SaaS product.
          </p>
        </div>
      </div>
    </div>
  );
}

function RightSide() {
  return (
    <div className="grid grid-cols-1 gap-8">
      <div className="flex flex-col rounded-2xl border border-white/10 bg-[#202020] p-4 transition-all duration-300 hover:-translate-y-2 hover:bg-[#0D0D0D] lg:items-center lg:text-center">
        <img className="w-[588px]" src="images/profiles.png" alt="" />
        <div className="flex flex-col gap-4 p-3 lg:p-10">
          <h1 className="whitespace-nowrap text-[24px] font-bold text-[#cce6ff] lg:text-[28px]">
            Simplify your hiring process
          </h1>
          <p className="text-[14px] text-[#cce6ffBF] lg:text-[16px]">
            The template offers customisable features, allowing you to chose or
            add specific asset.
          </p>
        </div>
      </div>
      <div className="flex flex-col rounded-2xl border border-white/10 bg-[#202020] p-4 transition-all duration-300 hover:-translate-y-2 hover:bg-[#0D0D0D] lg:items-center lg:text-center">
        <img className="w-full" src="images/staff.png" alt="" />
        <div className="flex flex-col gap-4 p-3 lg:p-10">
          <h1 className="text-[24px] font-bold text-[#cce6ff] lg:text-[28px]">
            Keep your staff organized
          </h1>
          <p className="text-[14px] text-[#cce6ffBF] lg:text-[16px]">
            With our easy-to-use platform, you can streamline your time and
            attendance tracking process and improve overall.
          </p>
        </div>
      </div>
    </div>
  );
}

export { Features };
