import {useHistory} from "react-router-dom";
const GamePage = ({onChangePage}) => {
  const history = useHistory();
  const handlerBack = () => {
    history.push('/')
  }
  return (
    <div>
      This GamePage
      <button onClick={handlerBack}>Back to HomePage</button>
    </div>
  )
}

export default GamePage;