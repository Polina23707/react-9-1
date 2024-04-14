import { NavLink } from "react-router-dom";


function Menu() {
  const activeClass = ({isActive}: {isActive: boolean}) => {
    return (isActive ? "menu__item menu__item-active" : "menu__item") 
  }

  return (
    <nav className="menu">
      <NavLink to={"/"} className={activeClass}>Главная</NavLink>
      <NavLink to={"/drift"} className={activeClass}>Дрифт-такси</NavLink>
      <NavLink to={"/timeattack"} className={activeClass}>Time Attack</NavLink>
      <NavLink to={"/forza"} className={activeClass}>Forza Karting</NavLink>
    </nav>
  );
}

export default Menu;