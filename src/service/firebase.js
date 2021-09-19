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

export const fire = firebase;
export const database = fire.database();

export default database;