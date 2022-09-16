<script>
    import spremnik from "~/store/centralniSpremnik";
    import { prijavaKorisnika } from "~/store/actions/login";
    import { navigate, goBack } from "svelte-native";
    import PocetnaPoslovodaPage from "./PocetnaPoslovodaPage.svelte";
    import PocetnaAdminPage from "./PocetnaAdminPage.svelte";
    import PocetnaRadnikPage from "./PocetnaRadnikPage.svelte";

    let stanje = spremnik.getState()
    let korisnici = stanje.korisnici.korisnici

    let username = "";
    let pass = "";

    const prijava = () => {
        let prijavljen = false
        korisnici.map(k => {
            if (k.username === username && k.pass === pass) {
                if (k.uloga === "poslovoda") {
                    spremnik.dispatch(prijavaKorisnika(k))
                    navigate({ page: PocetnaPoslovodaPage })
                    prijavljen = true
                }
                if (k.uloga === "admin") {
                    spremnik.dispatch(prijavaKorisnika(k))
                    navigate({ page: PocetnaAdminPage })
                    prijavljen = true
                }
                if (k.uloga === "radnik") {
                    spremnik.dispatch(prijavaKorisnika(k))
                    navigate({ page: PocetnaRadnikPage })
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
            <button class="returnBtn" text="⏎" on:tap="{goBack}" />
        </stackLayout>
        <stackLayout>
            <stackLayout class="loginStack">
                <label text="Korisnicko ime:" />
                <stackLayout>
                    <textField class="okvir" bind:text={username}/>
                </stackLayout>
                <label text="Lozinka:" />
                <stackLayout>
                    <textField class="okvir" bind:text={pass} secure={true} />
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

<style>
    .barLogin {
        background-color: rgb(144, 238, 191);
        color: gray;
    }
    .glavniGrid {
        padding: 30%;
    }
    .returnBtn {
        padding-top: 6%;
        horizontal-align: left;
        border-radius: 10;
        background-color: rgb(144, 238, 191);
        color: gray;
        font-size: 20;
        width: 70;
        height: 110px;
    }
    .loginStack {
        horizontal-align: center;
        margin-top: 150;
        width: 200;
    }
    .okvir {
        border-color: black;
        border-width: 1;
        border-radius: 10;
        margin: 20 0;
        font-size: 16;
    }
    .prijaviSeBtn {
        margin-top: 20;
        height: 50;
        border-radius: 5;
        background-color: rgb(144, 238, 191);
        color: gray
    }
</style>
