import { useState, useEffect} from "react";
import Input from '../input';
import s from "./style.module.css";
import {changeTextButton, authState} from "../../store/loginForm";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = ({onSubmit, isResetField = false}) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const dispatch = useDispatch()
  const authStateRedux = useSelector(authState);
  
  useEffect( () => {
    setEmailValue('');
    setPasswordValue('');
  },[isResetField])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit({
      email: emailValue,
      password: passwordValue,
      type : authStateRedux ? "login" : "signup"
    })
    setEmailValue('');
    setPasswordValue('');
  }
  const handlerChangeText = () => {
    dispatch(changeTextButton())
  }

  return (
    <form onSubmit={handleSubmit} >
      <Input label="Email" name="email" value={emailValue} onChangeInput={setEmailValue} />
      <Input label="Password" name="password" type="password" value={passwordValue} onChangeInput={setPasswordValue} />
      <div className={s.button_wrap}>
        <button>{authStateRedux ? "Log In" : "Sign Up"}</button>
        <span onClick={handlerChangeText}>{authStateRedux ? "Sign Up" : "Register?" }</span>
      </div>      
    </form>
  );
}

export default LoginForm;