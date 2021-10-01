import {useState} from 'react';
import LoginForm from '../loginForm';
import Menu from "../menu";
import Modal from '../modal';
import Navbar from "../navbar";
import { NotificationManager } from 'react-notifications';

const MenuHeader = ({bgActive}) => {
  const [isActive, setActive] = useState(null);
  const [isOpenModal, setOpenModal] = useState(false)

  const handlerClick = () => {
    setActive(prevState => !prevState)
  }
  const handleClickModal = () => {
    setOpenModal(prevState => !prevState)
  }

  const handleSubmitLoginForm = async ({email, password}) => {
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        returnSecurityToken: true
      })
    }
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBNlEui5Tq6QHlaeQntENCTymvfee9sXbQ', requestOptions)
    .then(res => res.json());
    
    if(response.hasOwnProperty("error")){
      NotificationManager.error(response.error.message, "Wrong!!!")
    }else{
      NotificationManager.success('Success!!!')
      localStorage.setItem('idToken', response.idToken);
    }
    
  }

  return (
    <>
      <Menu isActive={isActive} toggleMenu={handlerClick}/>
      <Navbar toggleMenu={handlerClick} bgActive={bgActive} isActive={isActive} openModal={handleClickModal} />
      <Modal title="...Some title" onCloseModal={handleClickModal} isOpen={isOpenModal}>
        <LoginForm onSubmit={handleSubmitLoginForm} />
      </Modal>
    </>
  )
}

export default MenuHeader;