
interface Props {
    title: string;
    desc: string;
}

const ProcedureStep = ({title, desc} : Props) => {
  return (
    <div>
      <div className="flex flex-col gap-3 text-[#000000] p-4 w-[400px] h-[100px]">
        {title}
        <div className="text-[#6F6D6D]">
          {desc}
        </div>
      </div>
    </div>
  );
};

export default ProcedureStep;
