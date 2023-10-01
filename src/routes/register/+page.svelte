<form method="post" action="/register">
    <input type="text" name="username">
    <input type="text" name="email">
    <input type="text" name="password">
    <button type="submit">Créer un compte</button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }

    form input {
        border: 1px solid var(--dark-blue);
    }
</style>