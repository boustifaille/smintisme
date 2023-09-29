<h1>Contactez-nous!</h1>

<p>Envoyer nous un mail :</p>
<p><a href="mailto:smintisme-contact@proton.me">smintisme-contact@proton.me</a></p>

<form>
    <input placeholder="Votre nom..."/>
    <textarea class="texte" placeholder="Le message..."/>
    <button type="submit">Envoyer</button>
</form>

<style>
    form {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    form input, form textarea {
        border: 1px solid var(--dark-blue);
        padding: 10px;
        width: min(80%, 500px);
        resize: none;
    }

    form .texte {
        height: 300px;
    }
</style>