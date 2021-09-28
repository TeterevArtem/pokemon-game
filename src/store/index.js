import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./count";
import pokemonReducer from "./pokemon";

export default configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonReducer,
  }
})