<script>
    export let isporuka;
    export let brisanje;
    export let promjenaStatusa;

</script>

<stackLayout orientation="horizontal" backgroundColor={isporuka.status ? "#65a9f1" : "#FFECC5"}>
    <label class="celija" text={isporuka.proizvod} width= "25%" />
    <label class="celija" text={isporuka.kolicina} width= "17.5%" />
    <label class="celija" text={isporuka.sektor} width= "17.5%" />
    <button on:tap={brisanje} class="btnBrisi" text="BRIŠI" width= "20%" />
    <button on:tap={promjenaStatusa} 
            class={isporuka.status ? "btnPromijeniIsp" : "btnPromijeniNeisp"} 
            text="PROMIJENI" 
            width= "20%" 
    />
</stackLayout>

<style>
    .celija {
        margin-top: 15;
        text-align: center;
    }
    .btnBrisi {
        font-size: 9.75;
        background-color: rgb(255, 183, 0)
    }
    .btnPromijeniIsp {
        font-size: 9.75;
        background-color: #FFECC5;
    }
    .btnPromijeniNeisp {
        font-size: 9.75;
        background-color: #65a9f1
    }
</style>