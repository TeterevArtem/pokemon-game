import { useHistory } from 'react-router-dom';
import style from './header.module.css';

const Header = ({ title, descr, onClickButton}) => {
  const history = useHistory();
  const handlerClick = () => {
    history.push('/game')
  }
  return (
    <header className={style.root}>
      <div className={style.forest}></div>
      <div className={style.silhouette}></div>
      <div className={style.moon}></div>
      <div className={style.container}>
          <h1>{title}</h1>
          <p>{descr}</p>
          <button onClick={handlerClick}>Start Game</button>
      </div>
    </header>
  )
}

export default Header;