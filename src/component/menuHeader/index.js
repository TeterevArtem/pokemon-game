import {useState} from 'react';
import Menu from "../menu";
import Navbar from "../navbar"

const MenuHeader = () => {
  const [isActive, setActive] = useState(false);
  const handlerClick = () => {
    setActive(!isActive)
  }
  return (
    <>
      <Menu toggleMenu={handlerClick} isActive={isActive}/>
      <Navbar toggleMenu={handlerClick} isActive={isActive}/>
    </>
  )
}

export default MenuHeader;