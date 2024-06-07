function Trial() {
  return (
    <section className="w-full pt-28 flex justify-center bg-[#151515]">
      <div className="max-w-[1450px] lg:w-auto w-[90%] flex justify-center lg:items-center">
        <MainContent />
      </div>
    </section>
  );
}

function MainContent() {
  return (
    <div className="flex flex-col items-center">
      <img
        className="w-24 h-24 bg-[#5c48b8] mb-2 rounded-2xl flex justify-center items-center"
        src="images/logo2.svg"
        alt=""
      />
      <h2 className="text-[#cce6ff] font-bold text-[48px]">Free Trial</h2>
      <p className="text-[16px] text-center max-w-[360px] mb-8 text-[#cce6ffBF]">
        The program uses advanced data visualization techniques to transform
        textual.
      </p>
      <Button />
    </div>
  );
}

function Button() {
  return (
    <div className=" lg:h-[54px] lg:bg-[#202020] bg-transparent  text-white hover:border-blue-500 transition-all duration-500 rounded-full  lg:pl-4 lg:border border-white/10 flex lg:flex-row flex-col  gap-2 lg:gap-8 justify-between lg:items-center lg:w-[460px] w-full ">
      <input
        className=" lg:bg-transparent bg-[#202020] rounded-full   py-4 lg:px-0 px-4 w-full outline-none "
        placeholder="Email Address "
      ></input>
      <button className="bg-[#cce6ff] lg:w-auto w-full  font-semibold flex justify-center items-center px-6 py-4 rounded-full h-full  text-black">
        Subscribe
      </button>
    </div>
  );
}

export default Trial;
