export const BRISANJE_KORISNIKA = 'BRISANJE_KORISNIKA'
export const DODAVANJE_KORISNIKA = 'DODAVANJE_KORISNIKA'

import Korisnik from "../../models/Korisnik";

export const brisanjeKorisnika = (id) => {
    return {
        type: BRISANJE_KORISNIKA,
        idKorisnika: id
    }
}

export const dodavanjeKorisnika = (noviObjekt) => {
    return {
        type: DODAVANJE_KORISNIKA,
        korisnik: new Korisnik(
                    noviObjekt.id, 
                    noviObjekt.ime, 
                    noviObjekt.prezime, 
                    noviObjekt.uloga,
                    noviObjekt.username,
                    noviObjekt.pass
                )
    }
}
