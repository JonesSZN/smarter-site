import { Container } from "../components";

function Trial() {
  return (
    <section className="flex w-full bg-[#151515] pt-28">
      <Container className="justify-center">
        <MainContent />
      </Container>
    </section>
  );
}

function MainContent() {
  return (
    <div className="flex flex-col items-center">
      <img
        className="mb-2 flex h-24 w-24 items-center justify-center rounded-2xl bg-[#5c48b8]"
        src="images/logo2.svg"
        alt=""
      />
      <h2 className="text-[48px] font-bold text-[#cce6ff]">Free Trial</h2>
      <p className="mb-8 max-w-[360px] text-center text-[16px] text-[#cce6ffBF]">
        The program uses advanced data visualization techniques to transform
        textual.
      </p>
      <Button />
    </div>
  );
}

function Button() {
  return (
    <div className="flex w-full flex-col justify-between gap-2 rounded-full border-white/10 bg-transparent text-white transition-all duration-500 hover:border-blue-500 lg:h-[54px] lg:w-[460px] lg:flex-row lg:items-center lg:gap-8 lg:border lg:bg-[#202020] lg:pl-4">
      <input
        className="w-full rounded-full bg-[#202020] px-4 py-4 outline-none lg:bg-transparent lg:px-0"
        placeholder="Email Address "
      ></input>
      <button className="flex h-full w-full items-center justify-center rounded-full bg-[#cce6ff] px-6 py-4 font-semibold text-black lg:w-auto">
        Subscribe
      </button>
    </div>
  );
}

export { Trial };
