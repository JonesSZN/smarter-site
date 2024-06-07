import Header from "./sections/header";
import Hero from "./sections/hero";
import Partner from "./sections/partner";
import Offer from "./sections/offer";
import Known from "./sections/known";
import Features from "./sections/features";
import Pricing from "./sections/pricing";
import Trial from "./sections/trial";
import Footer from "./sections/footer";

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
