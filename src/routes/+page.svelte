<script>
    import SMINT from "$lib/assets/SMINT.png";
    import video from "$lib/assets/propagande.mp4";

    const allNews = [
        {
            titre: "50 membres 🎉",
            description: "Le groupe a ateint les 50 membres. Nous attendons donc une fête ou un événement.",
            date: "2023-11-28"
        },
        {
            titre: "Status publiés",
            description: "Les status de l'association sont maintenant disponibles ! Ils permettent de mieux clarifier nos buts et notre organisation",
            date: "2023-11-23"
        },
        // {
        //     titre: "New Medical Discovery Offers Hope for Rare Disease Patients",
        //     description: "Scientists have discovered a potential treatment for a rare genetic disorder, bringing hope to affected families.",
        //     date: "2023-07-10"
        // },
        // {
        //     titre: "Space Agency Plans Ambitious Mission to Explore Exoplanets",
        //     description: "NASA announces plans for a groundbreaking mission to explore distant exoplanets in the search for habitable environments.",
        //     date: "2023-06-02"
        // },
        // {
        //     titre: "Celebrity Chef Launches Unique Restaurant Concept",
        //     description: "Renowned chef Emma Gordon introduces a one-of-a-kind dining experience that combines art, food, and technology.",
        //     date: "2023-05-15"
        // }
    ]


</script>

<div class="all">

    <h1>Bienvenue dans le smintisme !</h1>
    
    <img src={SMINT} alt="SMINT" width="100%"/>
    
    <!-- <video autoplay width="100%" loop >
        <source src={video} type="video/mp4">
            <track kind="captions">
            </video> -->
    
    <div class="btn-txt">
        <p>Découvrez notre histoire</p>
        <button class="histoire"><a href="/histoire">Notre histoire</a></button>
    </div>

    <h2 style="border-top: 1px solid var(--dark-blue); width:80%; text-align:center; padding-top:10px;">News</h2>

    <div class="news">
        {#each allNews as news}
        <div class="new">
            <div class="titre" style="font-size: 1.5rem;">{news.titre}</div>
            <div class="date">{news.date}</div>
            <div class="description">{news.description}</div>
        </div>
        {/each}
    </div>
    
    <p style="text-align: center;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusamus exercitationem eos harum, nisi recusandae impedit doloribus molestiae ea quae ducimus enim reprehenderit unde tempora omnis! Molestiae necessitatibus ipsam eos est nihil aliquam nesciunt illum distinctio eaque ad eligendi atque tempore omnis sed aut, sint perferendis. Reiciendis temporibus velit nihil.</p>


    <div class="btn-txt">
        <p>Vous avez une question ou avez besoin d'aide? Contactez-nous!</p>
        <button><a href="/contact">Contactez-nous</a></button>
    </div>
</div>

<style>

    .all {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 30px;
    }
    /* video {
        object-fit: contain;
        width: "100%";
    } */

    .news {
        display: flex;
        flex-direction: row;
        width: 100%;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        gap: 10px;
    }
    
    .new {
        scroll-snap-align: start;
        min-width: 100%;
        display: flex;
        flex-direction: column;
    }

    .new .date {
        color: var(--dark-blue);
        margin-bottom: 20px;
    }

    .btn-txt {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 10px;
    }

</style>