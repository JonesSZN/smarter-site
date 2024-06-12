import {
  Header,
  Hero,
  Partner,
  Offer,
  Known,
  Features,
  Pricing,
  Trial,
  Footer,
} from "./sections";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <Hero />
        <Partner />
        <Offer />
        <Known />
        <Features />
        <Pricing />
        <Trial />
        <Footer />
      </main>
    </>
  );
}

export default App;
