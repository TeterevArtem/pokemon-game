import { createSlice } from "@reduxjs/toolkit";
import FireBaseClass from "../service/firebase";

export const slice = createSlice({
  name: 'pokemons',
  initialState: {
    isLoading: false,
    selectedPokemon1: {},
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
    },
    handleSelectedPokemons: (state, action) => {
      if (state.selectedPokemon1[action.payload.key]){
        const copyState = {...state.selectedPokemon1};
        delete copyState[action.payload.key];
        return {
          ...state,
          selectedPokemon1: copyState
        };
      }
      return {
        ...state, selectedPokemon1: {
          ...state.selectedPokemon1, [action.payload.key]: {
            ...action.payload.pokemon
          }
        }
      }
    },

    cleanPokemons: (state) => {
      return {
        ...state,
        data: {}
      }
    }
  }
})

export const {fetchPokemons, fetchPokemonsResolve, fetchPokemonsReject, setSelectedPokemon, handleSelectedPokemons, cleanPokemons} = slice.actions;
export const selectPokemonLoading = state => state.pokemons.isLoading;
export const selectPokemonData = state => state.pokemons.data;
export const selectedPokemonPlayer1 = state => state.pokemons.selectedPokemon1;

export const getPokemonAsync = () => async (dispatch) => {
  dispatch(fetchPokemons);
  const data = await FireBaseClass.getPokemonsOnce();
  dispatch(fetchPokemonsResolve(data))
}




export default slice.reducer;