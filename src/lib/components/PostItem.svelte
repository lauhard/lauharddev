<script lang="ts">
	import { getCustomDate } from '$lib/utils/main';
	import  ImageCard  from '$lib/components/ImageCard.svelte';
    import type { Post } from "$lib/interfaces/post";
    import MarkerNew from './MarkerNew.svelte';
    export let post: Post;
    export const path: string = "";
    export const image: string = "";
    export const title: string = "";
    export const excerpt: string = "";
    export const published: string = "";
    export const categories: Array<string> = [];
    export let view: string = "";

    $:cardWidth = view === "list" ? "100%":"370px";
    $:imgWidth = view === "list" ? "370px":"100%";
</script>

<div class="post__card">
    <MarkerNew 
        infotext="new"
        postDate="{ getCustomDate(post.published) }"
    >
    </MarkerNew>
    <svg class="card__svg" xmlns="http://www.w3.org/2000/svg" style="" viewBox="0 0 1440 320">
        <path d="M0,256L80,213.3C160,171,320,85,480,74.7C640,64,800,128,960,154.7C1120,181,1280,171,1360,165.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    </svg>
    {#if post.img}
        <ImageCard
            cardWidth="{cardWidth}" 
            imageWidth="{imgWidth}" 
            float="left"
            flexDirection=''
            sectionWidth="100%"
            src={post.img}
        >
            <div class="card__description">
                <h2>{post.title}</h2>
                {#if post.excerpt}
                    <span>{getCustomDate(post.published)}</span>
                {/if}
                {#if post.excerpt}
                    <p>{post.excerpt}</p>
                {/if}
            </div>
        </ImageCard>
    {:else}
        <ImageCard
            cardWidth="{cardWidth}" 
            imageWidth="{imgWidth}" 
            float=""
            flexDirection='row'
            sectionWidth="100%"
            src=""
        >
            <div class="card__description">
                <h2>{post.title}</h2>
                {#if post.excerpt}
                    <span>{getCustomDate(post.published)}</span>
                {/if}
                {#if post.excerpt}
                    <p>{post.excerpt}</p>
                {/if}
            </div>
        </ImageCard>
    {/if}
   
   
</div>

<style lang="scss">
    .post__card{
        // border: 1px solid var(--second-background-color);
        border-radius: 2px 5px 10px 10px;
        transition:all .9s;
        margin: 0px;
        padding: 0px;
        position: relative;
        background-color: var(--main-background-color);
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
        rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
        overflow: hidden;
        .card__svg {
            fill:var(--second-background-color);
            opacity: .2;
            width: 100%;
            transition:all .9s;
            position:absolute;
            bottom:0px;
        }
        .card__description{
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-start;
            box-sizing: border-box;
            padding: 30px;
            h2{
                margin:0px;
                word-wrap: break-word;
                color:var(--main-color);
            }
            span{
                font-size: .65rem;
                margin-top: 5px;
                padding: 0px;
                color:var(--main-accent-color);
                font-weight: bold;
            }
            p{
                line-height: 1.5;
                letter-spacing: 1px;
                margin-top: 25px;
                color:var(--main-color);
            }
        }
    }
    .post__card:hover{
        // box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.9); 
        // box-shadow: rgba(0, 0, 0, 0.6) 0px 10px 15px -5px,
        // rgba(0, 0, 0, 0.733) 0px 4px 6px -5px;

        // border: 1px solid var(--main-accent-color);
        svg {
            fill:var(--main-accent-color);
            opacity: .5;
            width: 100%;
            transition:all .3s;
        }
        h2{
            color:var(--main-accent-color);
            text-decoration: underline;
        }
        transition:all .9s;

    }
    @media (max-width: 375px) {

    }

</style>
