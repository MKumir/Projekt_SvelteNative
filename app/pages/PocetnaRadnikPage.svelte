<script>
    import spremnik from '~/store/centralniSpremnik';
    import { odjavaKorisnika } from '~/store/actions/login';
    import { promjenaStatusaIsporuke } from "~/store/actions/isporuke";
    import { navigate } from 'svelte-native'
    import PocetnaPage from './PocetnaPage.svelte'
    import { Template } from 'svelte-native/components'
    import IsporukaRadnik from '../components/IsporukaRadnik.svelte'
    let stanje = spremnik.getState()
    let logiraniKorisnik = stanje.login.korisnik
    let ime = logiraniKorisnik.ime
    let prezime = logiraniKorisnik.prezime
    let isporuke = stanje.isporuke.isporuke
    let neisporuceneIsporuke = isporuke.filter(i => i.status === false)
    
    spremnik.subscribe(() => {
         stanje = spremnik.getState();
         isporuke = stanje.isporuke.isporuke
         neisporuceneIsporuke = isporuke.filter(i => i.status === false)
     })
    
    const mijenjajStatusIsporuke = (id) => {
        spremnik.dispatch(promjenaStatusaIsporuke(id))
    }

    const odjava = () => {
        spremnik.dispatch(odjavaKorisnika())
        navigate({ page: PocetnaPage})
    }

    
</script>

<page>
    <actionBar class="barNaslovna" title="Radnik" />
    <gridLayout class="glavniGrid">
        <stackLayout>
            <label text='Prijavljeni ste kao:' />
            <label class="imePrezime" text="{ime} {prezime}"/>
            <button class='odjavaBtn' text="ODJAVI SE" 
                on:tap={() => odjava()} 
            />
            <stackLayout class="headerStack" orientation="horizontal" backgroundColor="white">
                <label text="PROIZVOD" width= "30%" />
                <label text="KOLICINA" width= "22.5%" />
                <label text="SEKTOR" width= "22.5%" />
                <label text="___________" width= "25%" />
            </stackLayout>
            <listView items={neisporuceneIsporuke}>
                <Template let:item>
                    <IsporukaRadnik 
                        isporuka={item}
                        promjenaStatusa={() => mijenjajStatusIsporuke(item.id)}
                    />
                </Template>
            </listView>
        </stackLayout>
    </gridLayout>
</page>

<style>
    .barNaslovna{
        background-color: #658ff1;
        color: white;
    }
    .glavniGrid {
        padding: 30%;
    }
    .imePrezime {
        margin-top: 20 ;
        font-size: 16;
        font-style: italic;
    }
    .odjavaBtn {
        horizontal-align: left;
        margin-top: 20;
        width: 100;
        height: 40;
        border-radius: 5;
        background-color: rgb(255, 188, 122);
        color: whitesmoke
    }
    .headerStack {
        margin-top: 35;
        margin-bottom: 20;
        height: 35;
        font-size: 12.5;
        text-align: center;
    }
</style>



