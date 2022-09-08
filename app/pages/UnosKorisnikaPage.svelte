<script>
    import spremnik from "~/store/centralniSpremnik";
    import { dodavanjeKorisnika } from "~/store/actions/korisnici";
    import { goBack } from "svelte-native";
import { ScrollView } from "@nativescript/core";

    let ime = "";
    let prezime = "";
    let odabranaUlogaIndex = 0
    let username = "";
    let pass = "";

    let listaUloga = ['radnik', 'poslovoda']

    const dodajKorisnika = () =>{
        const noviObjekt = {
            id: Math.random().toString(),
            ime: ime,
            prezime: prezime,
            uloga: listaUloga[odabranaUlogaIndex],
            username: username,
            pass: pass
        }
        if(ime.length < 2 || prezime.length < 3 || username.length < 5 || pass.length < 5)
            alert('Neispravan unos')
            else {
                spremnik.dispatch(dodavanjeKorisnika(noviObjekt))
                alert('Korisnik je dodan!')
            }

        ime = ''
        prezime = ''
        odabranaUlogaIndex = 0
        username = ''
        pass = ''
    }

</script>

<page>
    <actionBar class="barNaslovna" title="Unos Korisnika" />
    <gridLayout style="padding: 5%">
        <stackLayout>
            <button class="returnBtn" text="⏎" on:tap={goBack} />
        </stackLayout>
        <stackLayout class="unosKorisnikaStack">
            <label text="Ime:" />
            <stackLayout class="okvirPodatakKorisnik">
                <textField bind:text={ime}/>
            </stackLayout>
            <label text="Prezime:" />
            <stackLayout class="okvirPodatakKorisnik">
                <textField bind:text={prezime} />
            </stackLayout>
            <label text="Uloga:" />
            <stackLayout class="okvirPodatakKorisnik">
                <!-- <textField bind:text={uloga} /> -->
                <listPicker  
                    style="height: 110;"
                    items={listaUloga} 
                    bind:selectedIndex={odabranaUlogaIndex} 
                />
            </stackLayout>
            <label text="Korisnicko ime:" />
            <stackLayout class="okvirPodatakKorisnik">
                <textField bind:text={username} />
            </stackLayout>
            <label text="Lozinka:" />
            <stackLayout class="okvirPodatakKorisnik">
                <textField bind:text={pass} />
            </stackLayout>
            <button
                class="spremiKorBtn"
                text="SPREMI"
                on:tap={() => dodajKorisnika()}
            />
        </stackLayout>
    </gridLayout>
</page>


