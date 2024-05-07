import { Button } from "@/components/ui/button"


const Navbar = () => {
  return (
    <div className="flex flex-wrap gap-2 justify-between text-sm font-semibold p-9 mx-[120px] rounded-md">
      <span>
        <img src="/home/names_aditya/Desktop/react-portfolio/portfolio/src/Assets/dasalogo.png" alt="logo" />
      </span>
      <ul className="flex flex-wrap flex-row gap-8 mr-8 items-center justify-center">
        <Button> Here</Button>
        <li>Home</li>
        <li>Reviews</li>
        <li>Gallery</li>
        <li>Contact</li>
        <li>Travel</li>
      </ul>
    </div>
  );
};

export default Navbar;
