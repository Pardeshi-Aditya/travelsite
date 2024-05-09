import style from "../css/Procedure.module.css";
import ProcedureStep from "./ProcedureStep";
import line from "../Assets/line.svg"

const Procedure = () => {
  const data = [
    {
      title: "Choose your Destination",
      desc: "Explore our website and share your desired destination with us, or let us assist you in finding the perfect one.",
    },
    {
      title: "Connect with Us",
      desc: "Keep it classic and straightforward. Share your preferences with us to ensure a smooth experience. Whether you're traveling alone, with friends, or family, just let us know the headcount and any special requests for a personalized trip. We're here to make sure your journey is hassle-free!",
    },
    {
      title: "Prepare to embark on your dream getaway",
      desc: "Prepare your luggage and access the details of your points of contact for all locations. We hope you'll cherish your travel experience!",
    },
  ];

  return (
    <div className={style.container} id="travel" style={{backgroundImage: `url(${line})`}}>
      <div className="relative flex flex-col gap-[40px]">
      <div className="text-[#000000] text-[20px] font-semibold flex justify-center items-center mb-[50px]">
        How it works
      </div>
      <div className="absolute">
        
      </div>
        <div className="translate-x-[200px]">
        <ProcedureStep title={data[0].title} desc={data[0].desc} />
        </div>
        <div className="translate-x-[800px]">
          <ProcedureStep title={data[1].title} desc={data[1].desc} />
        </div>
        <div className="translate-y-[200px]">
          <ProcedureStep title={data[2].title} desc={data[2].desc} />
        </div>
      </div>
    </div>
  );
};

export default Procedure;
