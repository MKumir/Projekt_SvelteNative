<script>
    import { navigate } from 'svelte-native'
    import PocetnaPage from './PocetnaPage.svelte'
    import UnosKorisnika from './UnosKorisnikaPage.svelte'
    import PrikazKorisnikaPage from './PrikazKorisnikaPage.svelte';
    
</script>

<page>
    <actionBar class="barNaslovna" title="Admin" />
    <gridLayout class='glavniGrid'>
        <stackLayout>
            <label text='Prijavljeni ste kao:' />
            <label text='Ime Prezime' />
            <button class='odjavaBtn' text="ODJAVI SE" 
                on:tap="{ () => navigate({ page: PocetnaPage}) }" 
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




