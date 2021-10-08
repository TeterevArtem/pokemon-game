import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import PokemonCard from "../../../../component/pokemonCards";
import { fetchPokemons, getPokemonAsync, setSelectedPokemon, selectPokemonData, handleSelectedPokemons, selectedPokemonPlayer1} from '../../../../store/pokemon';
import s from './style.module.css';

const StartPage = () => {
  const [pokemons, setPokemons] = useState({});

  const history = useHistory('/')
  const pokemonStoreData = useSelector(selectPokemonData);
  console.log(pokemonStoreData);
  
  const dispatch = useDispatch();
  
  const handlerClickSelected = ( key ) => {
    
    const pokemon = {...pokemons[key]};

    dispatch(handleSelectedPokemons(key));

    dispatch(setSelectedPokemon({key, pokemon}));

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
    setPokemons(fetchPokemons)
    dispatch(getPokemonAsync())
    
  },[dispatch]);

  useEffect( () => {
    setPokemons(pokemonStoreData)
  },[pokemonStoreData])

  const handlerStartGame = () => {
    history.push('/game/board')
  }

  return (
    <>
      
      <button className={s.button} onClick={handlerStartGame} disabled={Object.entries(selectedPokemonPlayer1).length < 5}>Start Game</button>
     
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
                    if (Object.keys(pokemonStoreData).length < 5 || selected) {
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