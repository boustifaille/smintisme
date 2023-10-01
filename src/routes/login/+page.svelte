<script>
    import Account from "svelte-material-icons/Account.svelte"
</script>

<div>
    <Account height=100 width=100 />
</div>

<form method="post" action="/login">
    <input placeholder="Email..." name="email" type="email" />
    <input placeholder="Mot de passe..." name="password" type="password" />
    <button type="submit" >Se connecter</button>
</form>


<style>
    div {
        width: 100%;
        height: 40vh;
        display: grid;
        place-items: center;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
        height: 40vh;
    }

    form input {
        border: 1px solid var(--dark-blue);
        padding: 5px;
        width: min(80%, 300px);
    }

</style>