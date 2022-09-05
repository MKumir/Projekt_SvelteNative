<script>
    import { navigate } from 'svelte-native'
    import LoginPage from './LoginPage.svelte'
    
</script>

<page>
    <actionBar class="barNaslovna" title="Naslovna" />
    <gridLayout class='pocetniGrid'>
        <stackLayout>
            <label class="naslov" text="SKLADISTE" />
            <button class='prijavaBtn' text="Prijava" 
                on:tap="{ () => navigate({ page: LoginPage}) }" 
            />
        </stackLayout>
    </gridLayout>
    
</page>




