import firebase from "firebase/compat/app";
import "firebase/compat/database";
const firebaseConfig = {
  apiKey: "AIzaSyBNlEui5Tq6QHlaeQntENCTymvfee9sXbQ",
  authDomain: "pokemon-game-7cbbc.firebaseapp.com",
  databaseURL: "https://pokemon-game-7cbbc-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-7cbbc",
  storageBucket: "pokemon-game-7cbbc.appspot.com",
  messagingSenderId: "168003079310",
  appId: "1:168003079310:web:36ef6136654768d57bcddf"
};

firebase.initializeApp(firebaseConfig);

class Firebase {
  constructor () {
    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonSocket = (cb) => {
    this.database.ref("pokemons").on('value', (snapshot) => {
      cb(snapshot.val())
    })
  }

  offPokemonSocket = () => {
    this.database.ref("pokemons").off()
  }
  
  getPokemonsOnce = async () => {
    return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
    
  }

  postPokemons = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).set(pokemon)
  }

  addPokemons = (data) => {
    const newKey = this.database.ref().child('pokemons').push().key;
    this.database.ref('pokemons/' + newKey).set(data);
  }
}

export default Firebase;