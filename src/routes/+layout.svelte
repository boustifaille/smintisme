<script>
    import "../app.css"

    import Menu from "svelte-material-icons/Menu.svelte";
</script>

<header>
    <img src="smint_logo.png" alt="smint logo" height="40px"/>
    <Menu color="white" height="40px" width="35px"/> 
</header>

<slot />

<style>
    header {
        background-color: var(--dark-blue);
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
    }
</style>
