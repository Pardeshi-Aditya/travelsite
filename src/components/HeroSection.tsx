import Navbar from "./Navbar";
import Hero from "./Hero";

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      {/* Background image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-10"
        style={{
          backgroundImage:
            'url("/home/names_aditya/Desktop/react-portfolio/portfolio/src/Assets/paris.jpg")',
        }}
      >HERE</div>
      {/* Overlay with background color and opacity */}
      <div className="absolute z-20 top-0 left-0 w-full h-full bg-[#253B5A] bg-opacity-50"></div>
      {/* Content */}
      <div className="relative z-30">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default HeroSection;
