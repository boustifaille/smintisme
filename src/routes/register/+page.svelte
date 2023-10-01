
<h1>Créer un compte</h1>
<form method="post" action="/register">
    <input type="text" name="username" placeholder="Nom d'utilisateur..">
    <input type="email" name="email" placeholder="Email...">
    <input type="password" name="password" placeholder="Mot de passe...">
    <button type="submit">Créer un compte</button>
</form>

<div>
    <a href="/login">J'ai déjà un compte?</a>
</div>

<style>
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        margin-top: 100px;
    }

    form input {
        border: 1px solid var(--dark-blue);
        padding: 5px;
    }

    div {
        text-align: center;
        margin-top: 5px;
    }
</style>