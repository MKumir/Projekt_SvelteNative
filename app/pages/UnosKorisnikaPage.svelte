<script>
    import spremnik from "~/store/centralniSpremnik";
    import { dodavanjeKorisnika } from "~/store/actions/korisnici";
    import { goBack } from "svelte-native";

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
            <stackLayout>
                <textField hint="Unesi ime..." class="okvirPodKor" bind:text={ime}/>
            </stackLayout>
            <label text="Prezime:" />
            <stackLayout>
                <textField hint="Unesi prezime..." class="okvirPodKor" bind:text={prezime} />
            </stackLayout>
            <label text="Uloga:" />
            <stackLayout>
                <!-- <textField bind:text={uloga} /> -->
                <listPicker 
                    horizontalAlignment="left"
                    class="filterUloga"
                    items={listaUloga} 
                    bind:selectedIndex={odabranaUlogaIndex} 
                />
            </stackLayout>
            <label text="Korisnicko ime:" />
            <stackLayout>
                <textField hint="Unesi korisnicko ime..." class="okvirPodKor" bind:text={username} />
            </stackLayout>
            <label text="Lozinka:" />
            <stackLayout>
                <textField hint="Unesi lozinku..." class="okvirPodKor" bind:text={pass} />
            </stackLayout>
            <button
                class="spremiKorBtn"
                text="SPREMI"
                on:tap={() => dodajKorisnika()}
            />
        </stackLayout>
    </gridLayout>
</page>


