<script>
    export let korisnik;
    export let brisanje;

</script>

<stackLayout orientation="horizontal" backgroundColor={'white'}>
    <label class="celija" text={korisnik.ime} width= "20%" />
    <label class="celija" text={korisnik.prezime} width= "20%" />
    <label class="celija" text={korisnik.uloga} width= "20%" />
    <label class="celija" text={korisnik.username} width= "20%" />
    <button on:tap={brisanje} class="btnBrisi" text="BRIŠI" width= "20%" />
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
</style>