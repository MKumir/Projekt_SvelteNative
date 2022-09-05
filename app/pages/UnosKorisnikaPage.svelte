<script>
    import { goBack } from "svelte-native";

    let ime = "";
    let prezime = "";
    let uloga = "";
    let username = "";
    let pass = "";

</script>

<page>
    <actionBar class="barNaslovna" title="Unos Korisnika" />
    <gridLayout style="padding: 5%">
        <stackLayout>
            <button class="returnBtn" text="⏎" on:tap="{goBack}" />
        </stackLayout>
        <stackLayout style="margin-top: 35">
            <stackLayout class="unosKorisnikaStack">
                <label text="Ime:" />
                <stackLayout class="okvir">
                    <textField bind:text={ime}/>
                </stackLayout>
                <label text="Prezime:" />
                <stackLayout class="okvir">
                    <textField bind:text={prezime} />
                </stackLayout>
                <label text="Uloga:" />
                <stackLayout class="okvir">
                    <textField bind:text={uloga} />
                </stackLayout>
                <label text="Korisnicko ime:" />
                <stackLayout class="okvir">
                    <textField bind:text={username} />
                </stackLayout>
                <label text="Lozinka:" />
                <stackLayout class="okvir">
                    <textField bind:text={pass} />
                </stackLayout>
                <button
                    class="spremiBtn"
                    text="SPREMI"
                />
            </stackLayout>
        </stackLayout>
    </gridLayout>
</page>


