import cn from "classnames";
import s from "./style.module.css";

const Menu = ({handlerClick, isActive}) => {
  const toggleMenu = () => {
    handlerClick && handlerClick();
  }
  return (
    <div onClick={toggleMenu} className={cn(s.menuContainer, {[s.active]: isActive})}>
      <div className="overlay" />
      <div className="menuItems">
        <ul>
          <li>
            <a href="#welcome">
              HOME
            </a>
          </li>
          <li>
            <a href="#game">
              GAME
            </a>
          </li>
          <li>
            <a href="#about">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#contact">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu;