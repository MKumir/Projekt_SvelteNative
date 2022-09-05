<script>
    import { navigate } from 'svelte-native'
    import PocetnaPage from './PocetnaPage.svelte'

    import { Template } from 'svelte-native/components'
    import { ISPORUKE } from '../data/isporuke-podaci'
    import Isporuka from '../components/Isporuka.svelte'
    let isporuke = ISPORUKE;
    let neisporuceneIsporuke = isporuke.filter(i => i.status === false)

    
</script>

<page>
    <actionBar class="barNaslovna" title="Radnik" />
    <gridLayout style="padding: 8%">
        <stackLayout>
            <label text='Prijavljeni ste kao:' />
            <label text='Ime Prezime' />
            <button class='odjavaBtn' text="ODJAVI SE" 
                on:tap="{ () => navigate({ page: PocetnaPage}) }" 
            />
            <stackLayout class="headerStack" orientation="horizontal" backgroundColor="white">
                <label text="PROIZVOD" width= "25%" />
                <label text="KOLICINA" width= "17.5%" />
                <label text="SEKTOR" width= "17.5%" />
                <label text="___________" width= "20%" />
                <label text="___________" width= "20%" />
            </stackLayout>
            <listView items="{neisporuceneIsporuke}">
                <Template let:item>
                    <!-- Shows the list item label in the default color and style. -->
                    <Isporuka isporuka={item}/>
                </Template>
            </listView>
        </stackLayout>
    </gridLayout>
    
</page>



