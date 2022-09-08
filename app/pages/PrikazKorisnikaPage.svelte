<script>
    import spremnik from "~/store/centralniSpremnik";
    import { brisanjeKorisnika } from '../store/actions/korisnici';
    import { goBack } from "svelte-native";
    import { Template } from 'svelte-native/components'
    import Korisnik from '../components/Korisnik.svelte'
    import Admin from '../components/Admin.svelte'
    let state = spremnik.getState()
    let korisnici = state.korisnici.korisnici
    
    spremnik.subscribe(() => {
         state = spremnik.getState();
         korisnici = state.korisnici.korisnici
    })

    const brisiKorisnika = (id) => {
        spremnik.dispatch(brisanjeKorisnika(id))
    }

</script>

<page>
    <actionBar class="barNaslovna" title="Prikaz Korisnika" />
    <gridLayout class="gridPrikaz">
        <stackLayout>
            <button class="returnBtn" text="⏎" on:tap={goBack} />
            <stackLayout>
                <stackLayout class="headerStack" orientation="horizontal" backgroundColor="white">
                    <label text="IME" width= "20%" />
                    <label text="PREZIME" width= "20%" />
                    <label text="ULOGA" width= "20%" />
                    <label text="USERNAME" width= "20%" />
                    <label text="___________" width= "20%" />
                </stackLayout>
                <listView items={korisnici}>
                    <Template let:item>
                        {#if item.uloga === "admin"}
                            <Admin admin={item}/>
                        {:else}
                            <Korisnik 
                                korisnik={item} 
                                brisanje={() => brisiKorisnika(item.id)}
                            />
                        {/if}
                    </Template>
                </listView>
        </stackLayout>
        </stackLayout>
    </gridLayout>
</page>

