<script>
    import { navigate } from 'svelte-native'
    import PocetnaPage from './PocetnaPage.svelte'
    import UnosIsporukePage from './UnosIsporukePage.svelte';
    import PrikazIsporukaPage from './PrikazIsporukaPage.svelte';
    
</script>


<page>
    <actionBar class="barNaslovna" title="Poslovoda" />
    <gridLayout class='glavniGrid'>
        <stackLayout>
            <label text='Prijavljeni ste kao:' />
            <label text='Ime Prezime' />
            <button class='odjavaBtn' text="ODJAVI SE" 
                on:tap="{ () => navigate({ page: PocetnaPage}) }" 
            />
            <button class='bigBtn' text="UNOS ISPORUKE"
                on:tap="{ () => navigate({ page: UnosIsporukePage}) }"     
            />
            <button class='bigBtn' text="ISPORUKE"
                on:tap="{ () => navigate({ page: PrikazIsporukaPage}) }"     
            />
        </stackLayout>
    </gridLayout>
    
</page>



