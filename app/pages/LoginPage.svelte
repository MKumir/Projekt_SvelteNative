<script>
    import { navigate, goBack } from "svelte-native";
    import PocetnaPoslovodaPage from "./PocetnaPoslovodaPage.svelte";
    import PocetnaAdminPage from "./PocetnaAdminPage.svelte";
    import PocetnaRadnikPage from "./PocetnaRadnikPage.svelte";
    import { KORISNICI } from "../data/korisnici-podaci"

    let korisnici = KORISNICI

    let username = "";
    let pass = "";

    const prijava = () => {
        let prijavljen = false
        korisnici.map(k => {
            if (k.username === username && k.pass === pass) {
                if (k.uloga === "poslovoda") {
                    navigate({ page: PocetnaPoslovodaPage})
                    prijavljen = true
                }
                if (k.uloga === "admin") {
                    navigate({ page: PocetnaAdminPage})
                    prijavljen = true
                }
                if (k.uloga === "radnik") {
                    navigate({ page: PocetnaRadnikPage})
                    prijavljen = true
                }
            }
        })
        if(prijavljen === false) {
            alert('Neispravni podaci')
        }
        
    }

</script>

<page>
    <actionBar class="barLogin" title="Login" />
    <gridLayout class="glavniGrid">
        <stackLayout>
            <button class="returnBtnLogin" text="⏎" on:tap="{goBack}" />
        </stackLayout>
        <stackLayout>
            <stackLayout class="loginStack">
                <label text="Korisnicko ime:" />
                <stackLayout class="okvir">
                    <textField bind:text={username}/>
                </stackLayout>
                <label text="Lozinka:" />
                <stackLayout class="okvir">
                    <textField bind:text={pass} secure={true} />
                </stackLayout>
                <button
                    class="prijaviSeBtn"
                    text="PRIJAVI SE"
                    on:tap={() => prijava()}
                />
            </stackLayout>
        </stackLayout>
    </gridLayout>
</page>
