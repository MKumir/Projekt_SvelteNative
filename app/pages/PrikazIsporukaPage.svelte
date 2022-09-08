<script>
    import spremnik from "~/store/centralniSpremnik";
    import { brisanjeIsporuke, promjenaStatusaIsporuke } from "~/store/actions/isporuke";
    import { goBack } from "svelte-native";
    import { Template } from 'svelte-native/components'
    import Isporuka from '../components/Isporuka.svelte'

    let stanje = spremnik.getState()
    let filterIsporuke = stanje.isporuke.filterIsporuke
   
    spremnik.subscribe(() => {
        stanje = spremnik.getState();
        filterIsporuke = stanje.isporuke.filterIsporuke
    })
        
    const brisiIsporuku = (id) => {
        spremnik.dispatch(brisanjeIsporuke(id))
    }

    const mijenjajStatusIsporuke = (id) => {
        spremnik.dispatch(promjenaStatusaIsporuke(id))
    }
    

</script>

<page>
    <actionBar class="barNaslovna" title="Prikaz Isporuka" />
    <gridLayout class="gridPrikaz">
        <stackLayout>
            <button class="returnBtn" text="⏎" on:tap={goBack}/>
            <stackLayout class="headerStack" orientation="horizontal" backgroundColor="white">
                <label text="PROIZVOD" width= "25%" />
                <label text="KOLICINA" width= "17.5%" />
                <label text="SEKTOR" width= "17.5%" />
                <label text="___________" width= "20%" />
                <label text="___________" width= "20%" />
            </stackLayout>
            <listView items={filterIsporuke}>
                <Template let:item>
                    <Isporuka 
                        isporuka={item}
                        brisanje={() => brisiIsporuku(item.id)}
                        promjenaStatusa={() => mijenjajStatusIsporuke(item.id)}
                    />
                </Template>
            </listView>
        </stackLayout>
    </gridLayout>
</page>

