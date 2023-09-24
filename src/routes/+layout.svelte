<script>
    import "../app.css"

    import Menu from "svelte-material-icons/Menu.svelte";
    import Account from "svelte-material-icons/Account.svelte";
    import Close from "svelte-material-icons/Close.svelte";

    let isMenuOpen = false;

    function toggleMenu(){
        isMenuOpen = !isMenuOpen;
    }

</script>

<header>
    <a href="/">
        <img src="smint_logo.png" alt="smint logo" height="35px"/>
    </a>

    <button on:click={toggleMenu} class="btn-menu">
        {#if isMenuOpen}
            <Close color="white" height="40px" width="35px" />
        {:else}
            <Menu color="white" height="40px" width="35px" />
        {/if}
    </button>

    <nav style={`visibility:${isMenuOpen ? "visible" : "hidden"};`}>
        <ul>
            <a href="/login" on:click={toggleMenu} ><Account color="white" height=50 width=50 /></a>
            <li><a href="/" on:click={toggleMenu} >Accueil</a></li>
            <li><a href="/histoire" on:click={toggleMenu} >Histoire</a></li>
            <li><a href="/contact" on:click={toggleMenu} >Contact</a></li>
        </ul>
        <p class="citation">Au nom du Smint, du Xylitol et de la Sainte menthe</p>
    </nav>
</header>

<main>
    <slot />
</main>
<!-- 
<footer>

</footer> -->

<style>
    header {
        position: fixed;
        top: 0;
        background-color: var(--dark-blue);
        height: 50px;
        width: 100vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
    }

    footer {
        position: absolute;
        bottom: 0;
    }

    nav {
        position: fixed;
        top: 50px;
        left: 0;
        width: 100vw;
        height: calc(100vh - 50px);
        background-color: var(--dark-blue);
    }

    nav ul {
        width: 100%;
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 40px;
    }

    nav a {
        color: white;
        font-size: 2rem;
    }

    p.citation {
        color: white;
        text-align: center;
    }

    .btn-menu {
        background: none;
        cursor: pointer;
    }

    main {
        margin-top: 50px;
    }
</style>
