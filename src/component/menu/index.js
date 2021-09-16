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
    "title": 'CONTACT',
    "to" : "/contact"
  },
]

const Menu = ({ isActive }) => {
  const onMenuClick = () => {
    console.log(isActive);
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
                  <Link to={to}>
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