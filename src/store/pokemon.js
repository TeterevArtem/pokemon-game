import { createSlice } from "@reduxjs/toolkit";
import FireBaseClass from "../service/firebase";

export const slice = createSlice({
  name: 'pokemons',
  initialState: {
    isLoading: false,
    selected: {},
    data: {},
    error: null  
  },
  reducers: {
    fetchPokemons: state => ({
      ...state,
      isLoading: true
    }),
    fetchPokemonsResolve: (state, action) => ({
      ...state,
      isLoading: false,
      data: action.payload
    }),
    fetchPokemonsReject: (state, action) => ({
      ...state,
      data: {},
      error: action.payload
    }),
    setSelectedPokemon: (state, action) => {
      return {
        ...state, 
        selected: action.payload
      }
    }
  }
})

export const {fetchPokemons, fetchPokemonsResolve, fetchPokemonsReject, setSelectedPokemon} = slice.actions;
export const selectPokemonLoading = state => state.pokemons.isLoading;
export const selectPokemonData = state => state.pokemons.data;
export const selectedPokemonData = state => state.pokemons.selected;

export const getPokemonAsync = () => async (dispatch) => {
  dispatch(fetchPokemons);
  const data = await FireBaseClass.getPokemonsOnce();
  dispatch(fetchPokemonsResolve(data))
}

export default slice.reducer;