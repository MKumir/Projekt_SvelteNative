import { createStore, combineReducers } from "redux";

import isporukaReducer from "./reducers/isporuke";
import korisnikReducer from "./reducers/korisnici";
import loginReducer from "./reducers/login";

const glavniReducer = combineReducers({
    isporuke: isporukaReducer,
    korisnici: korisnikReducer,
    login: loginReducer
})

const centralniSpremnik = createStore(glavniReducer)

export default centralniSpremnik;