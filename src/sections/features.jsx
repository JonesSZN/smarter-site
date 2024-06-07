function Features() {
  return (
    <section className="w-full py-28 flex justify-center bg-[#151515]">
      <div className="lg:w-[65%] w-[90%] max-w-[1450px] flex flex-col gap-8">
        <Top />
        <Bottom />
      </div>
    </section>
  );
}

function Top() {
  return (
    <div className="flex lg:flex-row flex-col justify-between lg:items-center">
      <h2 className="text-[#cce6ff] lg:text-[48px] text-[28px]">
        Our Features
      </h2>
      <p className="lg:text-[16px] text-[14px] text-[#cce6ffBF] max-w-[380px]">
        Discover our powerful and intuitive features designed to make your
        digital life easier and more convenient.
      </p>
    </div>
  );
}

function Bottom() {
  return (
    <div className="flex lg:flex-row flex-col gap-8">
      <LeftSide />
      <RightSide />
    </div>
  );
}

function LeftSide() {
  return (
    <div className="grid grid-cols-1 gap-8">
      <div className=" hover:bg-[#0D0D0D] transition-all duration-300 hover:-translate-y-2  p-4  border border-white/10 rounded-2xl bg-[#202020] flex flex-col lg:items-center lg:text-center ">
        <img className="w-[588px]" src="images/data-graph-2.png" alt="" />
        <div className="lg:p-10 p-3 flex flex-col gap-4">
          <h1 className="lg:text-[28px] text-[24px] font-bold text-[#cce6ff]">
            Track every micro statistic
          </h1>
          <p className="lg:text-[16px] text-[14px] text-[#cce6ffBF]">
            Our template is designed to help you showcase your product and it’s
            core features with our user-friendly interface.
          </p>
        </div>
      </div>
      <div className=" hover:bg-[#0D0D0D] transition-all duration-300 hover:-translate-y-2 p-4  border border-white/10 bg-[#202020] flex flex-col lg:items-center rounded-2xl lg:text-center ">
        <img className="w-[588px]" src="images/two-col-grid.png" alt="" />
        <div className="lg:p-10 p-3 flex flex-col gap-4">
          <h1 className="lg:text-[28px] text-[24px] font-bold text-[#cce6ff]">
            Live stats of your webapp
          </h1>
          <p className="lg:text-[16px] text-[14px] text-[#cce6ffBF]">
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
      <div className=" hover:bg-[#0D0D0D] transition-all duration-300 hover:-translate-y-2 p-4  border border-white/10  rounded-2xl bg-[#202020] flex flex-col lg:items-center lg:text-center ">
        <img className="w-[588px]" src="images/profiles.png" alt="" />
        <div className="lg:p-10 p-3 flex flex-col gap-4">
          <h1 className="lg:text-[28px] text-[24px] font-bold text-[#cce6ff] whitespace-nowrap">
            Simplify your hiring process
          </h1>
          <p className="lg:text-[16px] text-[14px] text-[#cce6ffBF]">
            The template offers customisable features, allowing you to chose or
            add specific asset.
          </p>
        </div>
      </div>
      <div className=" hover:bg-[#0D0D0D] transition-all duration-300 hover:-translate-y-2  p-4  border border-white/10 bg-[#202020] flex flex-col lg:items-center rounded-2xl  lg:text-center ">
        <img className="w-full" src="images/staff.png" alt="" />
        <div className="lg:p-10 p-3 flex flex-col gap-4">
          <h1 className="lg:text-[28px] text-[24px] font-bold text-[#cce6ff]">
            Keep your staff organized
          </h1>
          <p className="lg:text-[16px] text-[14px] text-[#cce6ffBF]">
            With our easy-to-use platform, you can streamline your time and
            attendance tracking process and improve overall.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
