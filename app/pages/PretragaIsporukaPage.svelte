<script>
    import spremnik from "~/store/centralniSpremnik";
    import { pretragaIsporuka } from "~/store/actions/isporuke";
    import { navigate, goBack } from "svelte-native";
    import PrikazIsporukaPage from "./PrikazIsporukaPage.svelte";

    let proizvod = ""
    let listaSektora = ['svi', 'A', 'B', 'C']
    let sektor = ''

    const pretraziIsporuke = () => {
        spremnik.dispatch(pretragaIsporuka(sektor, proizvod))
    }

</script>

<page>
    <actionBar class="barNaslovna" title="Pretraga Isporuka" />
    <gridLayout>
        <stackLayout>
            <button class="returnBtn" text="⏎" on:tap={goBack}/>
            <stackLayout class="pretragaIsporukeStack">
                <stackLayout class="searchStack">
                    <searchBar hint="Pretraži po proizvodu..." bind:text={proizvod} />
                </stackLayout>
                <stackLayout class="filterStack" orientation="horizontal">
                    <label class="labelFilter" text="Pretraži po sektoru:"/>
                    <listPicker  
                        class="filterSektor"
                        items={listaSektora} 
                        bind:selectedValue={sektor} 
                        
                    />
                </stackLayout>
                <stackLayout>
                    <button class="pretraziBtn" text="PRETRAŽI"
                        on:tap={ () => {
                            pretraziIsporuke()
                            navigate({ page: PrikazIsporukaPage}) 
                            }
                        }
                    />
                </stackLayout>
            </stackLayout>
        </stackLayout>
    </gridLayout>
</page>

<style>
    .barNaslovna{
        background-color: #658ff1;
        color: white;
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
    .pretragaIsporukeStack {
        padding: 30%;
        margin-top: 50;
        horizontal-align: center
    }
    .searchStack {
        font-size: 16;
    }
    .filterStack {
        margin-top: 50;
        font-size: 16;
    }
    .labelFilter {
        margin-top: 105;
        margin-left: 10;
        margin-right: 40; 
    }
    .filterSektor {
        height: 105;
        width: 120;
        border-color: black;
        border-width: 1;
        border-radius: 10;
        margin: 65 0
    }
    .pretraziBtn { 
        margin-top: 70;
        height: 50;
        border-radius: 5;
        background-color: lightgray;
        color: white;
    }

</style>
