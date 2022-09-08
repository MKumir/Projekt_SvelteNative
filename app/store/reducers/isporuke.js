import { ISPORUKE } from '../../data/isporuke-podaci'
import { BRISANJE_ISPORUKE, DODAVANJE_ISPORUKE, PROMJENA_STATUSA_ISPORUKE, PRETRAGA_ISPORUKA } from '../actions/isporuke'

const pocetnoStanje = {
    isporuke: ISPORUKE,
    filterIsporuke: []
}


const isporukaReducer = (state = pocetnoStanje, action) => {
    switch(action.type) {

        case DODAVANJE_ISPORUKE: {
            const novaIsporuka = action.isporuka

             if (novaIsporuka !== null) {
                const isporuke = [...state.isporuke]
                const noveIsporuke = isporuke.concat(novaIsporuka)
                return{...state, isporuke: noveIsporuke}
             } else {
                return {...state}
             }
        }

        case BRISANJE_ISPORUKE: {
            const odabrana = state.isporuke.find(i => i.id === action.idIsporuke)
            if(odabrana !== null) {
                const isporuke = [...state.isporuke]
                const noveIsporuke = isporuke.filter( i => i.id !== odabrana.id)
                const filterIsporuke = [...state.filterIsporuke]
                const noveFilterIsporuke = filterIsporuke.filter( fi => fi.id !== odabrana.id)
                return {...state, isporuke: noveIsporuke, filterIsporuke: noveFilterIsporuke}
            } else {
                return {...state}
            }
        }

        case PROMJENA_STATUSA_ISPORUKE: {
            const odabranaIndex = state.isporuke.findIndex(i => i.id === action.idIsporuke)
            
            if (odabranaIndex >= 0) {
                const noveIsporuke = [...state.isporuke]
                noveIsporuke[odabranaIndex].status = !noveIsporuke[odabranaIndex].status
                const filterIsporuke = [...state.filterIsporuke]
                
                return {...state, isporuke: noveIsporuke, filterIsporuke: filterIsporuke}
            } else {
                return {...state}
            }
        }

        case PRETRAGA_ISPORUKA: {
            const isporuke = [...state.isporuke]
            const filtriraneSektor = isporuke.filter(i => {
                if (action.filterSektor === 'svi')
                    return i
                else
                    if (i.sektor === action.filterSektor)
                        return i
            })
            const filtriraneSektorProizvod = filtriraneSektor.filter( fsi => {
                if(action.filterProizvod === ''){
                    return fsi
                }
                else {
                    if(fsi.proizvod.includes(action.filterProizvod)) {
                        return fsi
                    }
                }
            })

            return {...state, filterIsporuke: filtriraneSektorProizvod}

        }
        
        
        

        default: 
        return state
    }
}

export default isporukaReducer;