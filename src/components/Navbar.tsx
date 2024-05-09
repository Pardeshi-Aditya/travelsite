
import logo from "../Assets/dasalogo.svg";
import style from "../css/Navbar.module.css";

const Navbar = () => {

  const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex flex-wrap gap-2 justify-between font-semibold pb-[30px] pt-[68px] mr-[144px] ml-160px mx-[120px] rounded-md">
      <a href="#" className={style.logo}>
        <img src={logo} alt="logo" />
      </a>
      <ul className="flex flex-row gap-8 mx-[5px] items-center justify-center font-light tracking-wider">
        <li className={style.li}><a href="#" onClick={() => scrollToSection('home')}>Home</a></li>
        <li className={style.li}><a href="#" onClick={() => scrollToSection('travel')}>Travel</a></li>
        <li className={style.li}><a href="#" onClick={() => scrollToSection('reviews')}>Reviews</a></li>
        <li className={style.li}><a href="#" onClick={() => scrollToSection('gallery')}>Gallery</a></li>
        <li className={style.li}><a href="#" onClick={() => scrollToSection('contact')}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
