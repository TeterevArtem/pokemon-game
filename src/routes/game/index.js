import { useState } from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import StartPage from "./routes/startPage";
import BoardPage from "./routes/boardPage";
import FinishPage from "./routes/finishPage"
import { PokemonContext } from "../../context/pokemonContext";

const GamePage = () => {
  const match = useRouteMatch();
  const [selectedPokemon, setSelectedPokemon] = useState({})

  const handleSelectedPokemons = (key, pokemon) => {
    setSelectedPokemon(prevState => {
      if (prevState[key]){
        const copyState = {...prevState};
        delete copyState[key];
        return copyState;
      }
      return {...prevState, [key]: pokemon}
      
    })
  }
  return (
    <PokemonContext.Provider value={{
      pokemons: selectedPokemon,
      onSelectedPokemon: handleSelectedPokemons}}>
      <Switch>
          <Route path={`${match.path}/`} exact component={StartPage} />
          <Route path={`${match.path}/board`} component={BoardPage} />
          <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  );
};

export default GamePage;