import cn from "classnames";
import s from "./style.module.css";
import {Link} from 'react-router-dom';

const MENU = [
  {
    "title": 'HOME',
    "to" : "/"
  },
  {
    "title": 'GAME',
    "to" : "/game"
  },
  {
    "title": 'ABOUT',
    "to" : "/about"
  },
  {
    "title": 'CONTACTS',
    "to" : "/contacts"
  },
]

const Menu = ({ isActive, toggleMenu}) => {
  const onMenuClick = () => {
    toggleMenu && toggleMenu();
  }
  return (
    <div className={cn(s.menuContainer, {
        [s.active]: isActive === true, 
        [s.deactive]: isActive === false
      })}>
      <div className={s.overlay}/>
      <div className={s.menuItems}>
        <ul>
          {
            MENU.map( ({to, title}, index) => {
              return (
                <li key={index}>
                  <Link to={to} onClick={onMenuClick}>
                    {title}
                  </Link>
                </li>
              )
            } )
          }
        </ul>
      </div>
    </div>
  )
}

export default Menu;