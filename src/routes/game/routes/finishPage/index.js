import { useContext, useState } from "react";
import { PokemonContext } from "../../../../context/pokemonContext";
import { FirebaseContext } from "../../../../context/firebaseContext";
import { useHistory } from "react-router-dom";
import PokemonCard from "../../../../component/pokemonCards";
import s from "./style.module.css";

const FinishPage = () => {
  const {pokemons, pokemons2 ,clean} = useContext(PokemonContext);
  const firebase = useContext(FirebaseContext);
  const [selected2Pokemon, setSelected2Pokemon] = useState({});
  const [player2, setPlayer2] = useState(pokemons2)
  const history = useHistory()

  const handlerFinishClick = () => {
    history.replace('/game');
    
    firebase.addPokemons(selected2Pokemon)
    clean();  
  }

  const handleSelectedClick = (id) => {

    setPlayer2( prevState => {
      return prevState.reduce( (acc, item) => {
        item.selected = false;
        if (item.id === id) {
          item.selected = true;
          setSelected2Pokemon(item);
        }
       
        acc.push(item)
        return acc;

      },[])
    })
    
  }

  if (Object.keys(pokemons).length === 0 || Object.keys(pokemons2).length === 0) {
    history.replace('/game');
  }
  
  
  return (
    <>
      <div className={s.player}>
        {Object.values(pokemons).map( item => (
          <PokemonCard key={item.id} name={item.name} img={item.img} id={item.id} type={item.type} values={item.values} isActive possession={item.possession}/>
        ))}
      </div>      
      <button className={s.button} onClick={handlerFinishClick}>Finish Game</button>
      <div className={s.player}>
        {Object.entries(player2).map( ([key, {id, name, img, type, values, selected, possession}] ) => (
          <PokemonCard key={key} objId={key} name={name} img={img} id={id} type={type} values={values} possession={possession} handleSelectedClick={handleSelectedClick} isActive isSelected={selected} />
        ))}
      </div>
    </>
  )  
}

export default FinishPage;