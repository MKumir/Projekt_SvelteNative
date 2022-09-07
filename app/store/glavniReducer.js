import { createStore, combineReducers } from "redux";
import { ISPORUKE } from '../data/isporuke-podaci'
import { KORISNICI } from '../data/korisnici-podaci'


const pocetnoStanje = {
    isporuke: ISPORUKE,
    korisnici: KORISNICI
}

const isporukaReducer = (state = pocetnoStanje.isporuke, action) => {
    switch (action.type) {
        case 'AKCIJA' :
            return state;
    default:
        return state

    }
}

const korisnikReducer = (state = pocetnoStanje.korisnici, action) => {
    switch (action.type) {
        case 'AKCIJA' :
        return state;

    default: 
        return state
    }
}

const glavniReducer = combineReducers({
    isporuke: isporukaReducer,
    korisnici: korisnikReducer
})


const spremnik = createStore(glavniReducer);

export default spremnik;