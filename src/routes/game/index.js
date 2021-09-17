import {useState} from 'react'
import PokemonCard from "../../component/pokemonCards";
import { POKEMONS } from '../../assets/services';
import s from './style.module.css';

const GamePage = () => {
  const [pokemons, setActive] = useState(POKEMONS);
  const handlerClick = (id) =>{
    setActive ( pokemons.map( (item) => {
      if (item.id === id) {
        item.active = !item.active;
      }
      return item;
    }))
    
  }
  


  return (
    <div>
      <div className={s.flex}>
        {
          POKEMONS.map( items => <PokemonCard key={items.id} name={items.name} img={items.img} id={items.id} type={items.type} values={items.values} isActive={items.active} onFlipCard={handlerClick}/>) 
        }
      </div>
    </div>
    
  )
}

export default GamePage;