<script>
    export let korisnik;

</script>

<stackLayout orientation="horizontal" backgroundColor={'white'}>
    <label class="celija" text={korisnik.ime} width= "20%" />
    <label class="celija" text={korisnik.prezime} width= "20%" />
    <label class="celija" text={korisnik.uloga} width= "20%" />
    <label class="celija" text={korisnik.username} width= "20%" />
    <button class="btnBrisi" text="BRIŠI" width= "20%" />
</stackLayout>