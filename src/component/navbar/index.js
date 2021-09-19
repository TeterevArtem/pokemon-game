import cn from "classnames";
import s from "./style.module.css";

const Navbar = ({toggleMenu, isActive, bgActive=false}) => {
  const toggleNav = () => {
    toggleMenu && toggleMenu();
  }
  return (
    <nav className={cn(s.root, {[s.bgActive]: bgActive})} id={s.navbar}>
      <div className={s.navWrapper}>
        <p className={s.brand}>
          LOGO
        </p>
        <div onClick={toggleNav} className={cn(s.menuButton, {
            [s.active]: isActive === true, 
            [s.deactive]: isActive === false
          }) }>
          <span />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;