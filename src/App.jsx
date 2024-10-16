import "./App.css";
import HeroSection from "./components/HeroSection";
import MapSection from "./components/MapSection";
import MovingServiceCard from "./components/MovingServiceCard";
import Navbar from "./components/Navbar";
import OurTeam from "./components/OurTeam";
import Services from "./components/ClientsWeServe";
import WhyChooseUs from "./components/WhyChooseUs";
import ClientsWeServe from "./components/ClientsWeServe";
import BlogComponent from "./components/BlogComponent";
import FreeQuoteSection from "./components/FreeQuoteSection";
import DownloadAppSection from "./components/DownloadAppSection";
import WeMoveAndClean from "./components/WeMoveAndClean";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <OurTeam />
      <MovingServiceCard />
      <MapSection />
      <ClientsWeServe />
      <BlogComponent />
      <FreeQuoteSection />
      <DownloadAppSection />
      <WeMoveAndClean />
      <Footer />
    </div>
  );
}

export default App;
