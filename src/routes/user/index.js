import { useDispatch, useSelector } from 'react-redux';
import { removeUser, selectUserData } from '../../store/users';
import { useHistory } from 'react-router';
import s from './style.module.css';

const UserPage = () => {

  const userData = useSelector(selectUserData);
  
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = () => {
    localStorage.removeItem('idToken');
    dispatch(removeUser());
    history.replace('/');
  }
  return (
    <div className={s.root}>
      <table className={s.table}>
        <tr>
          <td>Email</td>
          <td>{userData.email}</td>
        </tr>
        <tr>
          <td>LRA</td>
          <td>{userData.lastRefreshAt}</td>
        </tr>
      </table>
      <button className={s.button} onClick={handleClick}>Log Out</button>
    </div>
  )
}
export default UserPage;