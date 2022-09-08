export const BRISANJE_ISPORUKE = 'BRISANJE_ISPORUKE'
export const DODAVANJE_ISPORUKE = 'DODAVANJE_ISPORUKE'
export const PROMJENA_STATUSA_ISPORUKE = 'PROMJENA_STATUSA_ISPORUKE';
export const PRETRAGA_ISPORUKA = 'PRETRAGA_ISPORUKA';

import Isporuka from "../../models/Isporuka";


export const brisanjeIsporuke = (id) => {
    return {
        type: BRISANJE_ISPORUKE,
        idIsporuke: id
    }
}

export const dodavanjeIsporuke = (noviObjekt) => {
    return {
        type: DODAVANJE_ISPORUKE,
        isporuka: new Isporuka(
                    noviObjekt.id, 
                    noviObjekt.proizvod, 
                    noviObjekt.kolicina, 
                    noviObjekt.sektor,
                    noviObjekt.status
                )
    }
}


export const promjenaStatusaIsporuke = (id) => {
    return {
        type: PROMJENA_STATUSA_ISPORUKE,
        idIsporuke: id
    }
}

export const pretragaIsporuka = (sektor, proizvod) => {
    return {
        type: PRETRAGA_ISPORUKA,
        filterSektor: sektor,
        filterProizvod : proizvod
    }
}




