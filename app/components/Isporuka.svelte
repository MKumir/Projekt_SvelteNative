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
    <button on:tap={promjenaStatusa} class={isporuka.status ? "btnPromijeniIsp" : "btnPromijeniNeisp"} text="PROMIJENI" width= "20%" />
</stackLayout>