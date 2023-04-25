<script lang="ts">
    export let float=''
    export let cardWidth='100%'
    export let cardHeight='auto'
    export let imageWidth='100%'
    export let sectionWidth='100%'
    export let borderRadius='5px'
    export let flexDirection=''
    export let alignItems=''
    export let justifyContent=''
    export let figcaption=''
    export let src="";
    export let alt="";
    export let boxShadow="false";
    export let glow="false";
    
    $:display= flexDirection != ''? "flex" : "block"
   
</script>
<div class="card" 
class:flex="{display === 'flex'}"

    style=" 
        width:{cardWidth};
        display:{display};
        min-height:{cardHeight};
        flex-direction:{flexDirection};
        justify-content:{justifyContent};
        align-items:{alignItems};
        flex-wrap:wrap;
    "
    >
    <div class="image-wrapper" 
        style=" 
            max-width:{imageWidth};
            border-radius:{borderRadius};
        "
        class:boxShadow="{boxShadow === 'true'}"
        class:glow="{glow === 'true'}"
        class:floatLeft="{float === 'left'}"
        class:floatRight="{float === 'right'}"
        >
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
    </div>
    {#if sectionWidth !== '0' && sectionWidth !== '0px'}
        <section class="card__section"
            style="
                width:{sectionWidth};
                "
            >
            <slot></slot>
        </section>
    {/if}
   
</div>

<style lang="scss">
.card {
    margin:0px;
    padding:0px;
    box-sizing:border-box;
    position: relative;
    .image-wrapper{
        min-width:200px;
        padding: 0px !important;
        height:100%; 
        box-sizing:border-box;
        position: relative;
        overflow: hidden;
        .image-wrapper__figure {
            border-style: none;
            height:100%;
            margin:-5px;
            padding:0px;
            box-sizing:border-box;
            position: relative;
            overflow: hidden;
        }
        .figure__image{
            position: relative;
            width:100%;
            margin:0px;
            padding:0px;
            box-sizing:border-box;
            object-fit: cover;
            overflow: hidden;
        }
        .figure__figcation{
            width:100%;
            height:auto;
            margin:0px;
            margin-top:-5px;
            padding: 15px;
            box-sizing:border-box;
            font-size: .8rem;
            letter-spacing: 1px;
            font-weight: 100;
            font-style: italic;
            background-color: var(--second-background-color);
        }
    }
    .boxShadow{
        box-shadow: 1px 1px 15px 3px #000;
    }
    .glow{
        border-radius: 0px;
        box-shadow:1px 1px 15px 3px var(--second-accent-color);
    }
    .floatLeft{
        float: left;
        margin:10px;
    }
    .floatRight{
        float: right;
        margin:10px;
    }
    .card__section{
        height:100%;
        box-sizing:border-box;
        word-wrap:normal;
        word-break: keep-all;
        margin: 0;
        padding: 0;
        min-width:300px;
    }
}
@media (max-width: 550px) {
    .image-wrapper{
        max-width:100% !important;
        margin: 0 !important;
        padding: 0 !important;
        margin-bottom: 10px !important;
        box-sizing: border-box;
    }
}
</style>