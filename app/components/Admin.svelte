<script>
    export let admin;

</script>

<stackLayout orientation="horizontal" backgroundColor={'white'}>
    <label class="celijaAdmin" text={admin.ime} width= "20%" />
    <label class="celijaAdmin" text={admin.prezime} width= "20%" />
    <label class="celijaAdmin" text={admin.uloga} width= "20%" />
    <label class="celijaAdmin" text={admin.username} width= "20%" />
</stackLayout>

<style>
    .celijaAdmin {
        margin-bottom: 15;
        text-align: center;
    }
</style>