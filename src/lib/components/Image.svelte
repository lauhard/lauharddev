<script>
    export let justifyContent=''
    export let figcaption=''
    export let src="";
    export let alt="";
    export let boxShadow="false";
    export let glow="false";
</script>

<figure class="image-wrapper__figure" 
    style="height:100%"
    >
    <img class="figure__image"
        src="{src}" 
        alt="{alt}"
        srcset="" 
        style=""
    >
    {#if figcaption.length > 0}
        <figcaption class="figure__figcation"
            style=""
        >
            {figcaption}
        </figcaption>
    {/if}
</figure>