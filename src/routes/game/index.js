import { useState } from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import StartPage from "./routes/startPage";
import BoardPage from "./routes/boardPage";
import FinishPage from "./routes/finishPage"

const GamePage = () => {
  const match = useRouteMatch();
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const [selectedPokemon2, setSelectedPokemon2] = useState([]);

  const handleSelectedPokemons = (key, pokemon) => {

    setSelectedPokemon(prevState => {
      if (prevState[key]){
        const copyState = {...prevState};
        delete copyState[key];
        return copyState;
      }
      return {
        ...prevState,
        [key]: pokemon
      }
    })
  }

  const cleanPokemon = () => {
    setSelectedPokemon({})
  }

  return (
    // <Provider store={
    //     {
    //       pokemons: selectedPokemon,
    //       pokemons2: selectedPokemon2,
    //       getContextPlayer2Card: setSelectedPokemon2,
    //       onSelectedPokemon: handleSelectedPokemons,
    //       clean: cleanPokemon
    //     }
    //   }>
    // </Provider>
      <Switch>
          <Route path={`${match.path}/`} exact component={StartPage} />
          <Route path={`${match.path}/board`} component={BoardPage} />
          <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
  );
};

export default GamePage;