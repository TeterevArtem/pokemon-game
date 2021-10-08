import s from "./style.module.css";
import cn from "classnames";

const Input = ({label, name, type='text', value, onChangeInput}) => {

  const handleChange = (e) => {
    onChangeInput && onChangeInput(e.target.value);
  }
  return (
    <div className={s.root}>
      <input type={type} name={name} className={cn(s.input, {[s.valid]: value.length > 0})} value={value} onChange={handleChange}/>
      <span className={s.highlight}></span>
      <span className={s.bar}></span>
      <label className={s.label}>{label}</label>
    </div>
  ) 
}

export default Input;