import {useState, useEffect} from 'react'
import PokemonCard from "../../component/pokemonCards";
import database from "../../service/firebase";
import s from './style.module.css';

const GamePage = () => {
  const [pokemons, setPokemons] = useState({});
  const handlerClick = ( id ) =>{
    setPokemons(prevState => {
      return Object.entries(prevState).reduce((acc, item) => {
          const pokemon = {...item[1]};
          if (pokemon.id === id) {
              pokemon.active = !pokemon.active;
              database.ref('pokemons/'+ item[0]).set({...pokemon});
          }
  
          acc[item[0]] = pokemon;
         
          return acc;
      }, {});
    });
  }

  

  useEffect( () => {
    database.ref('pokemons').once("value", (snapshot) => {
      setPokemons(snapshot.val());
    }, [pokemons])
  })

  const data = {
    "abilities": [
      "keen-eye",
      "tangled-feet",
      "big-pecks"
    ],
    "base_experience": 122,
    "height": 11,
    "weight": 300,
    "id": 17,
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
    "name": "pidgeotto",
    "stats": {
      "hp": 63,
      "attack": 60,
      "defense": 55,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 71
    },
    "type": "normal",
    "values": {
      "top": 7,
      "right": 5,
      "bottom": 1,
      "left": 2
    }
  }
  
  const addNewPokemon = () => {
    const newKey = database.ref().child('pokemons').push().key;
    database.ref('pokemons/' + newKey).set(data);
  }

  return (
    <>
      
        <button className={s.button} onClick={addNewPokemon}>Добавить Покемона</button>
     
      <div>
        <div className={s.flex}>
          {
            Object.entries(pokemons).map( ([key, {id, name,img, type, values, active}] ) => {
              return (
                <PokemonCard 
                  key={key}
                  name={name}
                  img={img}
                  id={id}
                  type={type}
                  values={values}
                  isActive={active} 
                  onFlipCard={handlerClick}
                /> 
              )
            })
              
          }
        </div>
      </div>
    </>
  )
}

export default GamePage;