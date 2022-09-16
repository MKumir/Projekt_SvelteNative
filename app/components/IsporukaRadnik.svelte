<script>
    export let isporuka;
    export let promjenaStatusa;

</script>

<stackLayout orientation="horizontal" backgroundColor={isporuka.status ? "#65a9f1" : "#FFECC5"}>
    <label class="celija" text={isporuka.proizvod} width= "30%" />
    <label class="celija" text={isporuka.kolicina} width= "22.5%" />
    <label class="celija" text={isporuka.sektor} width= "22.5%" />
    <button on:tap={promjenaStatusa} class={isporuka.status ? "btnPromijeniIsp" : "btnPromijeniNeisp"} text="PROMIJENI" width= "25%" />
</stackLayout>

<style>
    .celija {
        margin-top: 15;
        text-align: center;
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