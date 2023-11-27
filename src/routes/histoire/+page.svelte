<script>
    const histoire = [
        {
            date: "13 jan. 23",
            description : "Création du smintisme"
        },
        {
            date: "23 sept. 23",
            description: "Création du site internet"
        },
        {
            date: "Maintenant",
            description: ""
        }
    ]
</script>

<div class="ligne">

{#each histoire as date}  
    <div class="moment">
        <p class="date">{date.date}</p>
        <p class="description">{date.description}</p>
    </div>
{/each}

</div>



<style>

    .ligne {
        height: 100%;
        width: calc(100% - 50px);
        border-left: 2px solid var(--dark-blue);
        margin-left: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 50px;
    }

    .moment {
        display: flex;
        align-items: center;
    }

    .date {
        width: 100px;
        height: 100px;
        background-color: var(--dark-blue);
        color: white;
        border-radius: 50%;
        display: grid;
        place-items: center;
        transform: translateX(-50%);
    }
</style>