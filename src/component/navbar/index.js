import cn from "classnames";
import s from "./style.module.css";
import { ReactComponent as LoginSVG } from "../../assets/login.svg";

const Navbar = ({toggleMenu, isActive, bgActive=false, openModal}) => {
  const toggleNav = () => {
    toggleMenu && toggleMenu();
  }
  return (
    <nav className={cn(s.root, {[s.bgActive]: bgActive})} id={s.navbar}>
      <div className={s.navWrapper}>
        <p className={s.brand}>
          LOGO
        </p>
        <div className={s.loginAndMenu}>
          <div className={s.loginWrap} onClick={openModal}>
            <LoginSVG />
          </div>
          <div onClick={toggleNav} className={cn(s.menuButton, {
            [s.active]: isActive === true, 
            [s.deactive]: isActive === false
          }) }>
          <span />
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;