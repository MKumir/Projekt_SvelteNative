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




