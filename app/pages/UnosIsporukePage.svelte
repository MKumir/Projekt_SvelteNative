<script>
    import { goBack } from "svelte-native";
    import spremnik from "~/store/centralniSpremnik";
    import { dodavanjeIsporuke } from '../store/actions/isporuke'
    

    let proizvod = "";
    let kolicina = "0";
    let sektor = ""
    let odabraniSektorIndex = 0
    let status = false;

    let listaSektora = ['A', 'B', 'C', 'D']

    const dodajIsporuku = () =>{
        const noviObjekt = {
            id: Math.random().toString(),
            proizvod: proizvod,
            kolicina: kolicina,
            sektor: sektor,
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
        sektor= ''
        status = false
    }
</script>

<page>
    <actionBar class="barNaslovna" title="Unos Isporuke" />
    <gridLayout class="glavniGrid">
        <stackLayout>
            <button class="returnBtn" text="⏎" on:tap={goBack} />
        </stackLayout>
        <stackLayout>
            <stackLayout class="unosIsporukeStack">
                <label text="Proizvod:" />
                <stackLayout>
                    <textField hint="Unesi proizvod..." class="okvir" bind:text={proizvod}/>
                </stackLayout>
                <label text="Kolicina: {kolicina}" />
                <stackLayout class="stackSlider">
                    <slider class="sliderKolicina" maxValue=100 bind:value={kolicina} />
                </stackLayout>
                <label text="Sektor:" />
                <stackLayout>
                    <listPicker  
                        horizontalAlignment="left"
                        class="filterSektorUnos"
                        items={listaSektora} 
                        bind:selectedIndex={odabraniSektorIndex}
                        bind:selectedValue={sektor} 
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

<style>
    .barNaslovna{
        background-color: #658ff1;
        color: white;
    }
    .glavniGrid {
        padding: 30%;
    }
    .returnBtn {
        padding-top: 6%;
        horizontal-align: left;
        border-radius: 10;
        background-color: #658ff1;
        color: whitesmoke;
        font-size: 20;
        width: 70;
        height: 110px;
    }
    .unosIsporukeStack {
        horizontal-align: center;
        margin-top: 75;
        width: 200;
    }
    .okvir {
        border-color: black;
        border-width: 1;
        border-radius: 10;
        margin: 20 0;
        font-size: 16;
    }
    .stackSlider {
        border-color: #65a9f1;
        border-width: 2;
        border-radius: 10;
        margin: 20 0;
        height: 40;
    }
    .sliderKolicina {
        margin-top: 10;
    }
    .filterSektorUnos {
        height: 105;
        width: 120;
        border-color: black;
        border-width: 1;
        border-radius: 10;
        margin: 20 0
    }
    .switchIsporuceno {
        margin-top: 20;
        margin-right: 150;
    }
    .spremiIspBtn {
        margin-top: 70;
        height: 50;
        border-radius: 5;
        background-color: #658ff1;
        color: white;
    }
</style>


