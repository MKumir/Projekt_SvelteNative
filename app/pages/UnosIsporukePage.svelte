<script>
    import { goBack } from "svelte-native";

    let proizvod = "";
    let kolicina = "0";
    let sektor = "";
    let status = "";

    // let listaSektora = ['A', 'B', 'C', 'D']
    // let listaStatusa = ['Isporučeno', 'Neisporučeno']

    // const selectedIndexChanged = (e) => console.log(e.index)

    // const novaIsporuka = () =>{
    //     const noviObjekt = {
    //         id: Math.random().toString(),
    //         proizvod: unosProizvoda,
    //         kolicina: unosKolicine,
    //         sektor: unosSektora,
    //         status: unosStatusa
    //     }
    //     if(unosProizvoda === '' || unosKolicine < 1)
    //         alert('Neispravan unos')
    //         else {
    //             dispatch(dodajIsporuku(noviObjekt))
    //             alert('Isporuka je dodana!')
    //         }
       
    //     postaviUnosProizvoda('')
    //     postaviUnosKolicine('')
    //     postaviUnosSektora('A')
    //     postaviUnosStatusa(false)
        
    // }

</script>

<page>
    <actionBar class="barNaslovna" title="Unos Isporuke" />
    <gridLayout class="glavniGrid">
        <stackLayout>
            <button class="returnBtn" text="⏎" on:tap="{goBack}" />
        </stackLayout>
        <stackLayout>
            <stackLayout class="unosIsporukeStack">
                <label text="Proizvod:" />
                <stackLayout class="okvir">
                    <textField bind:text={proizvod}/>
                </stackLayout>
                <label text="Kolicina:" />
                <stackLayout class="okvir">
                    <textField keyboardType='number' bind:text={kolicina} />
                </stackLayout>
                <label text="Sektor:" />
                <stackLayout class="okvir">
                    <textField bind:text={sektor} />
                </stackLayout>
                <label text="Status:" />
                <stackLayout class="okvir">
                    <textField bind:text={status} />
                </stackLayout>
                <button
                    class="spremiBtn"
                    text="SPREMI"
                />
            </stackLayout>
        </stackLayout>
    </gridLayout>
</page>


