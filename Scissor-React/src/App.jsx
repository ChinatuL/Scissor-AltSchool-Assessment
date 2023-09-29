import Hero from "./components/Hero"
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import FreeTrial from "./components/FreeTrial"
import Faqs from "./components/Faqs";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";
const App = () => {
  return (
      <>
          <main>
              <div className='container'>
                  <Hero />
                  <Features />
                  <Pricing />
                  <FreeTrial />
                  <Faqs />
                  <GetStarted />
              </div>
          </main>
          <Footer />
      </>
  );
}
export default App