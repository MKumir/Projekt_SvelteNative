<script>
    import spremnik from "~/store/glavniReducer";
    import { goBack } from "svelte-native";
    import { Template } from 'svelte-native/components'
    import Isporuka from '../components/Isporuka.svelte'
    let state = spremnik.getState()
    let isporuke = state.isporuke
    // store.subscribe(() => {
    //     state = store.getState();
    // })

    

</script>

<page>
    <actionBar class="barNaslovna" title="Prikaz Isporuka" />
    <gridLayout class="gridPrikaz">
        <stackLayout>
            <button class="returnBtn" text="⏎" on:tap="{goBack}" />
            <stackLayout>
                <stackLayout class="headerStack" orientation="horizontal" backgroundColor="white">
                    <label text="PROIZVOD" width= "25%" />
                    <label text="KOLICINA" width= "17.5%" />
                    <label text="SEKTOR" width= "17.5%" />
                    <label text="___________" width= "20%" />
                    <label text="___________" width= "20%" />
                </stackLayout>
                <listView items="{isporuke}">
                    <Template let:item>
                        <Isporuka isporuka={item}/>
                    </Template>
                </listView>
        </stackLayout>
        </stackLayout>
    </gridLayout>
</page>

