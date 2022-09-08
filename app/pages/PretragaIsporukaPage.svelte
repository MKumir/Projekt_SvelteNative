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

