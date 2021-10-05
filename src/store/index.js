import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./count";
import pokemonReducer from "./pokemon";
import loginFormReducer from './loginForm';

export default configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonReducer,
    loginForm: loginFormReducer,
  }
})