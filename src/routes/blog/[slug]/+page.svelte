<script lang="ts">
	import { page } from '$app/stores';
    import type { PageData } from "./$types";
    import ImageCard from "$lib/components/ImageCard.svelte";
    import { onMount } from "svelte";
    import { getCustomDate, readingTime } from "$lib/utils/main";
    import TableOfContent from '$lib/components/TableOfContent.svelte';
    export let data: PageData;
    let { content, img, title } = data.post;
    let time:any=null;

    $:filteredHeadings=new Array<HTMLAnchorElement>;
        
    onMount(async () => {
        
        const content:HTMLElement = document.getElementsByClassName("post")[0] as HTMLElement;
        time = await readingTime(content.innerText);
        data.post.readingTime = time.readingTime;
        if($page.url.pathname.includes('blog/')) {
            let headings: Array<HTMLAnchorElement> = Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6"));
            filteredHeadings = headings.filter(h => h.id != "");
            console.log(filteredHeadings);
		}
    });

</script>
<svelte:head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
</svelte:head>

<article class="post">
    <div class="post__description">
        <ImageCard
            src={img}
            float="float"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            alt=""
            sectionWidth="0"
            cardWidth="100%"
            imageWidth="36rem"
            cardHeight="auto"
            borderRadius="10px"
        ></ImageCard>
    
        <div class="description">
            <h1>{title}</h1>
            {#if data?.post?.published}
                <p>{getCustomDate(data.post.published)}</p>
            {/if}
            {#if data.post.author}
                <i class="fa-solid fa-diamond" />
                <p>{data.post.author}</p>
            {/if}
            {#if data.post.readingTime > 0}
                <i class="fa-solid fa-diamond" />
                <p>{data.post.readingTime} min read</p>
            {/if}
        </div>
    </div>
    <div class="post__content">
        <TableOfContent headings={filteredHeadings}></TableOfContent>
        <svelte:component this={content}/>
    </div>
</article>

{#if data.post.categories}
    <aside>
        <h2>Posted in:</h2>
        <ul>
        {#each data.post.categories as category}
            <li>
            <a href="/blog/category/{category}">
                {category}
            </a>
            </li>
        {/each}
        </ul>
    </aside>
{/if}
<style lang="scss">
    .post:global(img){
        border-color:var(--main-accent-color);
    }
    .post {
        box-sizing: border-box;
        margin-top: 40px !important;
        :global(p) {
            line-height: 1.4rem;
            font-size: 1rem;
            word-wrap: break-word;
            text-overflow: ellipsis;
            font-weight: 100;
        }
        .post__description{
            background: var(--second-background-color);
            .description{
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: flex-start;
                margin: 0 auto;
                box-sizing: border-box;
                max-width: 36rem;
                width: 100%;
                h1 {
                    width: 100%;
                    margin-bottom: 2px;
                    // text-decoration: underline;
                    color: var(--main-accent-color);
                    // color: var(--main-color);
                }
                i {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: .7rem;
                    color: var(--main-accent-color);
                    margin: 0 5px;
                }
                p{
                    text-transform: uppercase;
                    margin: 0 5px;
                    font-size: .8rem;
                }
            }
        }
    }
    .post__description::after {
        background: linear-gradient(-45deg, var(--main-background-color) 16px, transparent 0), linear-gradient(45deg, var(--main-background-color) 16px, transparent 0);
        background-repeat: repeat-x;
        background-size: 32px 32px;
        content: " ";
        display: block;
        left: 0px;
        width: 100%;
        height: 32px;
    }
</style>