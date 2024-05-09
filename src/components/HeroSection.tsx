import Navbar from "./Navbar";
import Hero from "./Hero";
import parisimage from "../Assets/paris.jpg";

const HeroSection = () => {
  return (
    <div className="relative h-screen" id="home">
      {/* Background image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-10"
        style={{
          backgroundImage: `url(${parisimage})`,
        }}
      ></div>

      {/* Overlay with background color and opacity */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#253B5A] bg-opacity-50 z-20"></div>
      {/* Content */}
      <div className="top-0 left-0 relative z-30">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default HeroSection;
