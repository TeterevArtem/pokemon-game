import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemon";
import userReducer from './users';
import loginFormReducer from './loginForm';

export default configureStore({
  reducer: {
    pokemons: pokemonReducer,
    loginForm: loginFormReducer,
    user: userReducer
  }
})