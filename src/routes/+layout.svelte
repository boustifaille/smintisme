<script>
    import "../app.css"

    import Menu from "svelte-material-icons/Menu.svelte";

    let isMenuOpen = false;

    function toggleMenu(){
        isMenuOpen = !isMenuOpen;
    }

</script>

<header>
    <img src="smint_logo.png" alt="smint logo" height="40px"/>
    <button on:click={toggleMenu} class="btn-menu">
        <Menu color="white" height="40px" width="35px" />
    </button>
    <nav style={`visibility:${isMenuOpen ? "visible" : "hidden"};`}>
        <ul>
            <li><a href="/" on:click={toggleMenu} >Accueil</a></li>
            <li><a href="/histoire" on:click={toggleMenu} >Histoire</a></li>
            <li><a href="/contact" on:click={toggleMenu} >Contact</a></li>
        </ul>
    </nav>
</header>

<slot />

<style>
    header {
        background-color: var(--dark-blue);
        height: 50px;
        width: 100vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
    }

    nav {
        position: absolute;
        top: 50px;
        left: 0;
        width: 100vw;
        height: 100%;
        background-color: var(--dark-blue);
        /* transition: visibility 1s; */
    }

    nav ul {
        width: 100%;
        height: 100%;
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

    .btn-menu {
        background:none;
    }
</style>
