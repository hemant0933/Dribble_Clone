import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import ExploreSection from "./Components/ExploreSection";
import Feed from "./Components/Feed";
import Carousel from "./Components/Carousel";

function App() {
  return (
    <div className="w-full h-[auto] m-0 p-0 flex items-center flex-col">
      <Navbar />
      <HeroSection />
      <ExploreSection />
      <Feed/>
      <Carousel/>
    </div>
  );
}

export default App;
