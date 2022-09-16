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
    <gridLayout style="glavniGrid">
        <stackLayout>
            <button class="returnBtn" text="⏎" on:tap={goBack} />
        </stackLayout>
        <stackLayout class="unosKorisnikaStack">
            <label text="Ime:" />
            <stackLayout>
                <textField hint="Unesi ime..." class="okvir" bind:text={ime}/>
            </stackLayout>
            <label text="Prezime:" />
            <stackLayout>
                <textField hint="Unesi prezime..." class="okvir" bind:text={prezime} />
            </stackLayout>
            <label text="Uloga:" />
            <stackLayout>
                <listPicker 
                    horizontalAlignment="left"
                    class="filterUloga"
                    items={listaUloga} 
                    bind:selectedIndex={odabranaUlogaIndex} 
                />
            </stackLayout>
            <label text="Korisnicko ime:" />
            <stackLayout>
                <textField hint="Unesi korisnicko ime..." class="okvir" bind:text={username} />
            </stackLayout>
            <label text="Lozinka:" />
            <stackLayout>
                <textField hint="Unesi lozinku..." class="okvir" bind:text={pass} />
            </stackLayout>
            <button
                class="spremiKorBtn"
                text="SPREMI"
                on:tap={() => dodajKorisnika()}
            />
        </stackLayout>
    </gridLayout>
</page>

<style>
    .barNaslovna{
        background-color: #658ff1;
        color: white;
    }
    .glavniGrid {
        padding: 5%;
    }
    .returnBtn {
        margin-top: 15;
        margin-left: 10;
        padding-top: 6%;
        horizontal-align: left;
        border-radius: 10;
        background-color: #658ff1;
        color: whitesmoke;
        font-size: 20;
        width: 70;
        height: 110px;
    }
    .unosKorisnikaStack {
        horizontal-align: center;
        margin-top: 70;
        width: 200;
    }
    .okvir {
        border-color: black;
        border-width: 1;
        border-radius: 10;
        margin: 14 0;
        font-size: 16;
    }
    .filterUloga {
        height: 105;
        width: 100;
        border-color: black;
        border-width: 1;
        border-radius: 10;
        margin: 14 0
    }
    .spremiKorBtn {
        margin-top: 30;
        height: 50;
        border-radius: 5;
        background-color: #658ff1;
        color: white;
    }
</style>

