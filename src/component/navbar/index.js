import cn from "classnames";
import s from "./style.module.css";

const Navbar = ({handlerClick, isActive}) => {
  const toggleNav = () => {
    handlerClick && handlerClick();
    console.log(isActive);
  }
  return (
    <nav className={s.root}>
      <div className={s.navWrapper}>
        <p className={s.brand}>
          LOGO
        </p>
        <a onClick={toggleNav} className={cn(s.menuButton, {[s.active]: isActive}) }>
          <span />
        </a>
      </div>
    </nav>
  )
}

export default Navbar;