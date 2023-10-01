<script>
    import Account from "svelte-material-icons/Account.svelte"
</script>

<div class="logo-container">
    <Account height=100 width=100 />
</div>

<form method="post" action="/login">
    <input placeholder="Email..." name="email" type="email" />
    <input placeholder="Mot de passe..." name="password" type="password" />
    <button type="submit" >Se connecter</button>
</form>

<div class="link-container">
    <a href="/register">Je n'ai pas de compte?</a>
</div>


<style>
    .logo-container {
        width: 100%;
        height: 40vh;
        display: grid;
        place-items: center;
    }

    .link-container {
        text-align: center;
        margin-top: 5px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
    }

</style>