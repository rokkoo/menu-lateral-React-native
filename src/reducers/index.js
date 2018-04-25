import { combineReducers } from "redux";
import superHeroesReducer from "./superHeroesReducers";
//Combinamos los datos que queremos enviar
export default combineReducers({
    superHeroes: superHeroesReducer
})