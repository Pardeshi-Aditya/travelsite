import style from "../css/Hero.module.css";
import CityCard from "./CityCard";
import { BackgroundGradient } from "./ui/background-gradient";
import { CiLocationOn } from "react-icons/ci";
import { Button } from "./ui/button";
// import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <div className={style.container}>
      <div className="flex flex-col justify-between flex-wrap items-start w-full h-screen">
        <div className="left font-black text-[32px] mx-[120px] p-20 pl-0 flex">
          <div className="w-">
            Craft Your Adventure: <br />
            Explore the unseen with Us!
            <p className="text-[16px] mt-[30px] w-1/2 font-normal">
              We tailor your journey for the ultimate experience in just three
              simple steps: Choose your destination, connect with us, and
              prepare to embark on your dream gateway!
            </p>
            <div className="flex items-center gap-2 text-[16px] my-[30px] ">
              Paris <CiLocationOn /> 
            </div>
            <Button className="text-[#fff] bg-[#f9076d] rounded-full">
              Book a trip
            </Button>
          </div>
          <div className="right flex justify-end translate-y-40">
            <div className="absolute flex gap-3 translate-x-[40%]">
              <CityCard/>

              {/* <BackgroundGradient>
                <CityCard />
              </BackgroundGradient>
              <BackgroundGradient>
                <CityCard />
              </BackgroundGradient>
              <BackgroundGradient>
                <CityCard />
              </BackgroundGradient> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
