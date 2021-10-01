import { useEffect } from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import StartPage from "./routes/startPage";
import BoardPage from "./routes/boardPage";
import FinishPage from "./routes/finishPage";
import { useDispatch } from "react-redux";
import { cleanPokemons } from "../../store/pokemon";

const GamePage = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cleanPokemons)
  })
  
  return (
      <Switch>
          <Route path={`${match.path}/`} exact component={StartPage} />
          <Route path={`${match.path}/board`} component={BoardPage} />
          <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
  );
};

export default GamePage;