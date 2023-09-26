<script>
    import { dev } from "$app/environment";
    import { inject }from "@vercel/analytics"

	import { page } from '$app/stores';

    import "../app.css";

    import smint_logo from "$lib/assets/smint_logo.png";

    import Menu from "svelte-material-icons/Menu.svelte";
    import Account from "svelte-material-icons/Account.svelte";
    import Close from "svelte-material-icons/Close.svelte";

    let isMenuOpen = false;

    function toggleMenu(){
        isMenuOpen = !isMenuOpen;
    }

    $: pageName = $page.url.pathname !== "/" ? $page.url.pathname.substring(1, $page.url.pathname.length) : "home";

    inject({mode : dev ? "development" : "production"}); // vercel analytics
</script>

<svelte:head>
    <title>Smintisme - {pageName}</title>
</svelte:head>

<header>
    <a href="/">
        <img src={smint_logo} alt="smint logo" height="35px"/>
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
            <!-- <a href="/login" on:click={toggleMenu} ><Account color="white" height=50 width=50 /></a> -->
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

<footer>
    <p style="color: white;">Copyright © 2023 Smintisme</p>
</footer>

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
        font-size: 2.5rem;
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
        min-height: calc(100vh - 70px);
    }

    footer {
        height: 50px;
        width: 100%;
        background-color: var(--dark-blue);
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
