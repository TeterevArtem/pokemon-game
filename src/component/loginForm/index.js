import { useState } from "react";
import Input from '../input';
import s from "./style.module.css";
import {changeTextButton, authState} from "../../store/loginForm";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = ({onSubmit}) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const dispatch = useDispatch()
  const authStateRedux = useSelector(authState);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit({
      email: emailValue,
      password: passwordValue
    })
    setEmailValue('');
    setPasswordValue('');
  }
  const handlerChangeText = () => {
    dispatch(changeTextButton())
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Email" name="email" value={emailValue} onChangeInput={setEmailValue} />
      <Input label="Password" name="password" type="password" value={passwordValue} onChangeInput={setPasswordValue} />
      <div className={s.button_wrap}>
        <button>{authStateRedux ? "Войти": "Зарегистрироваться"}</button>
        <span onClick={handlerChangeText}>{authStateRedux ? "Auth" : "Sign Up"}</span>
      </div>      
    </form>
  );
}

export default LoginForm;