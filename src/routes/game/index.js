const GamePage = ({onChangePage}) => {
  const handlerBack = () => {
    onChangePage && onChangePage('home')
  }
  return (
    <div>
      This GamePage
      <button onClick={handlerBack}>Back to HomePage</button>
    </div>
  )
}

export default GamePage;