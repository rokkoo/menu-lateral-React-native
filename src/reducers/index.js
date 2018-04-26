import { combineReducers } from "redux";
import superHeroesReducer from "./superHeroesReducer.js";
//Combinamos los datos que queremos enviar
export default combineReducers({
    superHeroes: superHeroesReducer
})