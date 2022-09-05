<script>
    export let isporuka;

</script>

<stackLayout orientation="horizontal" backgroundColor={isporuka.status ? "#65a9f1" : "#FFECC5"}>
    <label class="celija" text={isporuka.proizvod} width= "25%" />
    <label class="celija" text={isporuka.kolicina} width= "17.5%" />
    <label class="celija" text={isporuka.sektor} width= "17.5%" />
    <button class="btnBrisi" text="BRIŠI" width= "20%" />
    <button class={isporuka.status ? "btnPromijeniIsp" : "btnPromijeniNeisp"} text="PROMIJENI" width= "20%" />
</stackLayout>