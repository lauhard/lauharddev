<script lang="ts">
    import { onMount } from 'svelte';
    import type { Metadata } from '../../../app';
    import { addCodeBlockExtension } from '$lib';
    import Image from '$lib/components/Image.svelte';
    import { TableOfContents } from 'lucide-svelte';
    import Toc from '$lib/components/TOC.svelte';
    import { page } from '$app/stores';

    let { data } = $props();
    let metadata: Metadata = data.metadata;
    let categories: Array<string> = metadata.categories;
    let headings:NodeListOf<HTMLHeadingElement>|undefined = $state();
    let viewCount=$state(0);
    onMount(async()=>{
        headings = document.querySelectorAll(" h2, h3, h4, h5, h6");
        await addCodeBlockExtension();
        const slug = $page.url.pathname.split('/').pop();
        const response = await fetch('/api/views', {
            method: 'POST',
            body: JSON.stringify({ slug }),
            headers: {
                'content-type': 'application/json'
            }
        });

        const result = await response.json();
        let { view_count } = await result.rows[0];
        viewCount = view_count;
    })

</script>

<svelte:head>
    <title>{metadata.title}</title>
    <meta name="title" content="{metadata.title}">
    <meta name="description" content="{metadata.excerpt}">
    <meta name="keywords" content="{metadata.title}">
    <meta property="og:title" content="{metadata.title}">
    <meta property="og:description" content="{metadata.excerpt}">
    <!--<meta property="og:image" content="{image}">-->
</svelte:head>

{#if metadata?.image}
    <Image src={metadata?.image} alt={"blogpost setup"}></Image>
     <!-- content here -->
{/if}

<h1 class="heading">{metadata.title}</h1>
<p>page views: {viewCount}</p>
<div class="metadata">
    <p class="excerpt">{metadata.excerpt}</p>
    <p><span class="descr">Published: </span> <span class="value">{metadata.created}</span></p>
    {#if metadata?.updated}
        <p><span class="descr">Updated: </span> <span class="value">{metadata?.updated}</span></p>
    {/if}
    {#if metadata.readingTime}
        <p><span class="descr">Reading: </span> <span class="value">{metadata.readingTime.text}</span></p>
    {/if}
    {#if metadata.author}
        <p><span class="descr">Author: </span> <span class="value">{metadata.author}</span></p>
    {/if}
    {#if categories}
        <div class="categories">
                <p><span class="descr">Categories:</span>
                {#each categories as category}
                    <a class="category" href={`category/${category}`} title={category}>{category}</a>
                {/each}
            </p>
        </div>
    {/if}
</div>

{#if headings}
    <Toc {headings}></Toc>
{/if}

<div class="blog-post">
    {@render data.post()}
</div>

<style lang="scss">
    .heading{
        text-decoration: underline;
        font-weight: 700;
        line-height: 2.7rem;
    }
    .metadata{
        p{
            color: var(--text-1);
            margin: 0;
            .descr{
                font-weight: var(--font-weight-8);
                width: 100px;
                display: inline-block;
                text-transform: uppercase;
                font-size: var(--font-size-0);
            }
            .value{
                font-size: 0.9rem;
                font-size: .89rem; //16px
            }
        }
        .excerpt{
            margin-bottom: 2rem;
        }
        .categories {
            margin-bottom: 2rem;
            .category{
                margin-right: 0.5rem;
                font-size: .89rem;
                text-transform: capitalize;
                &::after{
                    content: ',';
                }
                &:last-child{
                    &::after{
                        content: '';
                    }
                }
                /*&::before{
                    content: '#';
                }*/
            }
        }
    }
</style>