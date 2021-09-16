import {useState} from 'react';
import Menu from "../menu";
import Navbar from "../navbar"

const MenuHeader = ({bgActive}) => {
  const [isActive, setActive] = useState(null);
  const handlerClick = () => {
    setActive((prevState) => !prevState)
  }
  return (
    <>
      <Menu isActive={isActive}/>
      <Navbar toggleMenu={handlerClick} bgActive={bgActive} isActive={isActive}/>
    </>
  )
}

export default MenuHeader;