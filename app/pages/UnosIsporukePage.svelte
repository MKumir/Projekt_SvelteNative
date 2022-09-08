<script>
    import { goBack } from "svelte-native";
import { bind, text } from "svelte/internal";
    import spremnik from "~/store/centralniSpremnik";
    import { dodavanjeIsporuke } from '../store/actions/isporuke'
    

    let proizvod = "";
    let kolicina = "0";
    let odabraniSektorIndex = 0
    let status = false;

    let listaSektora = ['A', 'B', 'C', 'D']
    

    // const selectedIndexChanged = (e) => console.log(e.index)

    const dodajIsporuku = () =>{
        const noviObjekt = {
            id: Math.random().toString(),
            proizvod: proizvod,
            kolicina: kolicina,
            sektor: listaSektora[odabraniSektorIndex],
            status: status
        }
        if(proizvod === '' || kolicina < 1)
            alert('Neispravan unos')
            else {
                spremnik.dispatch(dodavanjeIsporuke(noviObjekt))
                alert('Isporuka je dodana!')
            }
       
        proizvod = ''
        kolicina = '0'
        odabraniSektorIndex = 0
        status = false
    }

</script>

<page>
    <actionBar class="barNaslovna" title="Unos Isporuke" />
    <gridLayout class="glavniGrid">
        <stackLayout>
            <button class="returnBtn2" text="⏎" on:tap={goBack} />
        </stackLayout>
        <stackLayout>
            <stackLayout class="unosIsporukeStack">
                <label text="Proizvod:" />
                <stackLayout class="okvir">
                    <textField bind:text={proizvod}/>
                </stackLayout>
                <label text="Kolicina: {kolicina}" />
                <stackLayout class="okvirSlider">
                    <slider style="margin-top: 10" maxValue=100 bind:value={kolicina} />
                    <!-- <textField keyboardType='number' bind:text={kolicina} /> -->
                </stackLayout>
                <label text="Sektor:" />
                <stackLayout class="okvir">
                    <!-- <textField bind:text={sektor} /> -->
                    <listPicker  
                        style="height: 120"
                        items={listaSektora} 
                        bind:selectedIndex={odabraniSektorIndex} 
                    />
                </stackLayout>

                <stackLayout>
                    <label text="Isporučeno:" />
                    <switch class="switchIsporuceno" bind:checked={status}/>
                </stackLayout>
                <button
                    class="spremiIspBtn"
                    text="SPREMI"
                    on:tap={() => dodajIsporuku()}
                />
            </stackLayout>
        </stackLayout>
    </gridLayout>
</page>


