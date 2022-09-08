<script>
    import spremnik from '~/store/centralniSpremnik';
    import { odjavaKorisnika } from '~/store/actions/login';
    import { navigate } from 'svelte-native'
    import PocetnaPage from './PocetnaPage.svelte'
    import UnosIsporukePage from './UnosIsporukePage.svelte';
    import PretragaIsporukaPage from './PretragaIsporukaPage.svelte'

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
    <actionBar class="barNaslovna" title="Poslovoda" />
    <gridLayout class='glavniGrid'>
        <stackLayout>
            <label text='Prijavljeni ste kao:' />
            <label class="imePrezime" text="{ime} {prezime}"/>
            <button class='odjavaBtn' text="ODJAVI SE" 
                on:tap={() => odjava()} 
            />
            <button class='bigBtn' text="UNOS ISPORUKE"
                on:tap="{ () => navigate({ page: UnosIsporukePage}) }"     
            />
            <button class='bigBtn' text="ISPORUKE"
                on:tap="{ () => navigate({ page: PretragaIsporukaPage}) }"     
            />
        </stackLayout>
    </gridLayout>
    
</page>



