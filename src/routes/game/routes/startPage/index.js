import {useState, useEffect, useContext} from 'react'
import { useHistory } from 'react-router';
import PokemonCard from "../../../../component/pokemonCards";
import { FirebaseContext } from '../../../../context/firebaseContext';
import { PokemonContext } from '../../../../context/pokemonContext';
import s from './style.module.css';

const StartPage = () => {
  const [pokemons, setPokemons] = useState({});

  const firebase = useContext(FirebaseContext); 
  const pokemonContext = useContext(PokemonContext);
  const history = useHistory('/')

  const handlerClickSelected = ( key ) => {
    const pokemon = {...pokemons[key]};
    pokemonContext.onSelectedPokemon(key, pokemon);

    setPokemons(prevState => {
      return ({
        ...prevState,
        [key]: {
          ...prevState[key],
          selected: !prevState[key].selected
        }
      })
    })
  }
  
  useEffect( () => {
    firebase.getPokemonSocket( pokemons => {
      Object.values(pokemons).map( item => {
        item.selected = false;
      })
      setPokemons(pokemons);
    });
    return () => firebase.offPokemonSocket();
  },[firebase]);
  
  const handlerStartGame = () => {
    history.push('/game/board')
  }

  return (
    <>
      
        <button className={s.button} onClick={handlerStartGame} disabled={Object.keys(pokemonContext.pokemons).length < 5}>Start Game</button>
     
      <div>
        <div className={s.flex}>
          {
            Object.entries(pokemons).map( ([key, {id, name,img, type, values, selected}] ) => {
              return (
                <PokemonCard
                  objId = {key}
                  key={key}
                  name={name}
                  img={img}
                  id={id}
                  type={type}
                  values={values}
                  isActive={true}
                  isSelected={selected}
                  onFlipCard={ () => {
                    if (Object.keys(pokemonContext.pokemons).length < 5 || selected) {
                      handlerClickSelected(key)
                    }
                    
                  }

                  }
                  className={s.card}
                /> 
              )
            })
              
          }
        </div>
      </div>
    </>
  )
}

export default StartPage;