<script>
    import SMINT from "$lib/assets/SMINT.png";
    import video from "$lib/assets/propagande.mp4";
</script>

<div class="all">

    <h1>Bienvenue dans le smintisme !</h1>
    
    <img src={SMINT} alt="SMINT" width="100%"/>
    
    <!-- <video autoplay width="100%" loop >
        <source src={video} type="video/mp4">
            <track kind="captions">
            </video> -->
            
    <button class="histoire"><a href="/histoire">Notre histoire</a></button>

    <p style="text-align: center;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusamus exercitationem eos harum, nisi recusandae impedit doloribus molestiae ea quae ducimus enim reprehenderit unde tempora omnis! Molestiae necessitatibus ipsam eos est nihil aliquam nesciunt illum distinctio eaque ad eligendi atque tempore omnis sed aut, sint perferendis. Reiciendis temporibus velit nihil.</p>
</div>

<style>

    .all {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 50px;
    }
    video {
        object-fit: contain;
        width: "100%";
    }

</style>