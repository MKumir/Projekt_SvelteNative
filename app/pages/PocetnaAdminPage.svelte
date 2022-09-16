<script>
    import spremnik from '~/store/centralniSpremnik';
    import { odjavaKorisnika } from '~/store/actions/login';
    import { navigate } from 'svelte-native'
    import PocetnaPage from './PocetnaPage.svelte'
    import UnosKorisnika from './UnosKorisnikaPage.svelte'
    import PrikazKorisnikaPage from './PrikazKorisnikaPage.svelte';

    let stanje = spremnik.getState()
    let logiraniKorisnik = stanje.login.korisnik
    let ime = logiraniKorisnik.ime
    let prezime = logiraniKorisnik.prezime

    const odjava = () => {
        spremnik.dispatch(odjavaKorisnika())
        navigate({ page: PocetnaPage})
    }
    
</script>

<page>
    <actionBar class="barNaslovna" title="Admin" />
    <gridLayout class='glavniGrid'>
        <stackLayout>
            <label text='Prijavljeni ste kao:' />
            <label class="imePrezime" text="{ime} {prezime}"/>
            <button class='odjavaBtn' text="ODJAVI SE" 
                on:tap={() => odjava()} 
            />
            <button class='bigBtn' text="UNOS KORISNIKA"
                on:tap="{ () => navigate({ page: UnosKorisnika}) }"     
            />
            <button class='bigBtn' text="KORISNICI"
                on:tap="{ () => navigate({ page: PrikazKorisnikaPage}) }"     
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
        padding: 30%;
    }
    .imePrezime {
        margin-top: 20 ;
        font-size: 16;
        font-style: italic;
    }
    .odjavaBtn {
        horizontal-align: left;
        margin-top: 20;
        width: 100;
        height: 40;
        border-radius: 5;
        background-color: rgb(255, 188, 122);
        color: whitesmoke
    }
    .bigBtn {
        margin-top: 100;
        width: 300;
        height: 100;
        align-self: center;
        background-color: #658ff1;
        color: whitesmoke;
        border-radius: 20;
        font-size: 20;
    }
</style>




