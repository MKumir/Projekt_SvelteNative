<script>
    import { navigate } from 'svelte-native'
    import LoginPage from './LoginPage.svelte'
    
</script>

<page>
    <actionBar class="barNaslovna" title="Naslovna" />
    <gridLayout class='pocetniGrid'>
        <stackLayout>
            <label class="naslov" text="SKLADIŠTE" />
            <button class='prijavaBtn' text="Prijava" 
                on:tap="{ () => navigate({ page: LoginPage}) }" 
            />
        </stackLayout>
    </gridLayout>
</page>

<style>
    .barNaslovna {
        background-color: #658ff1;
        color: white;
    }
    .pocetniGrid {
        horizontal-align: center;
        vertical-align: middle
    }
    .naslov {
        font-size: 26;
    }
    .prijavaBtn {
        margin-top: 20;
        height: 50;
        border-radius: 5;
        background-color: #658ff1;
        color: white;
    }
</style>




