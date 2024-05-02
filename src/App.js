import "./App.css";
import Testimonials from "./assets/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Plans from "./components/Plans/Plans";
import Program from "./components/Program/Program";
import Reasons from "./components/Reasons/Reasons";
import Join from "./components/join/Join";
function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
