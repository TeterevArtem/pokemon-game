import cn from "classnames";
import s from "./style.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as LoginSVG } from "../../assets/login.svg";
import { ReactComponent as UserSVG } from "../../assets/user.svg";
import { useSelector } from "react-redux";
import { selectUserLoading, selectUserLocalId } from "../../store/users";

const Navbar = ({toggleMenu, isActive, bgActive=false, openModal}) => {
  const toggleNav = () => {
    toggleMenu && toggleMenu();
  }
  const isLoadingUser = useSelector(selectUserLoading);
  const localId = useSelector(selectUserLocalId);
  
  return (
    <nav className={cn(s.root, {[s.bgActive]: bgActive})} id={s.navbar}>
      <div className={s.navWrapper}>
        <p className={s.brand}>
          LOGO
        </p>
        <div className={s.loginAndMenu}>
          {
            (!isLoadingUser && !localId) && (
              <div className={s.loginWrap} onClick={openModal}>
                <LoginSVG />
              </div>
            )
          }
          {
            (!isLoadingUser && localId) && (
              <Link className={s.loginWrap} to="/user">
                <UserSVG />
              </Link>
            )
          }          
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