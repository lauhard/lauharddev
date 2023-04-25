<script lang="ts">
	import type { PostData } from '$lib/interfaces/postdata';
	import type { Post } from '$lib/interfaces/post';
    import { page } from "$app/stores";
    import PostItem from "$lib/components/PostItem.svelte";
    import Search from "$lib/components/Search.svelte";
    import type { PageData } from "./$types";
    import { createSearchStore, searchHandler } from "$lib/stores/searchStore";
    import { onDestroy } from "svelte";
    export let data: PageData;
    const searchPosts = data.filteredPosts.map((postData: PostData) => ({
        ...postData,
        searchTerms: `${postData.post.title} ${postData.post.excerpt}`,
    }));

    const searchStore = createSearchStore(searchPosts);

    const unsubscribe = searchStore.subscribe((model) => searchHandler(model));

    onDestroy(() => {
        unsubscribe();
    });

    $: innerWidth = 0;
    $: layout = "card";
    let tmpLayout = "card";
    const toggleLayout = (e: Event) => {
        let target: HTMLElement = e.target as HTMLElement;
        layout =
            Object.values(target.classList).includes("fa-grip") === true
                ? "card"
                : "list";
        tmpLayout = layout;
    };
    $: if (innerWidth <= 650) {
        layout = "card";
    } else if (innerWidth > 650) {
        layout = tmpLayout;
    }
</script>

<svelte:window bind:innerWidth />

<div class="blogposts">
    <div class="heading_search">
        <div class="wrapper">
            <span class="text">Posts with Category </span>
            <div class="text_wrapper">
                <h1>
                    {data.category}
                </h1>
                <div class="decorator1" />
                <div class="decorator2" />
                <div class="decorator3" />
            </div>
        </div>
        <Search
            bind:value={$searchStore.search}
            count={$searchStore.data.length}
        />
    </div>

    {#if innerWidth > 650}
        <div class="layout-toggler">
            <button
                ><i on:mousedown={toggleLayout} class="fa-solid fa-list" />
            </button>
            <button
                ><i on:mousedown={toggleLayout} class="fa-solid fa-grip" />
            </button>
        </div>
    {/if}

    <ul
        class="posts"
        class:card={layout === "card"}
        class:list={layout === "list"}
    >
        {#each $searchStore.filtered as postData}
            <li>
                <a href={postData.path}>
                    <PostItem
                        post={postData.post}
                        path={postData.path}
                        view={layout}
                    />
                </a>
            </li>
        {/each}
    </ul>
</div>

<style lang="scss">
    .blogposts {
        display: flex;
        align-items: center;
        flex-direction: column;
        .heading_search {
            display: flex;
            width: 100%;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            box-sizing: border-box;
            margin-bottom: 20px;
            .wrapper {
                display: flex;
                flex-direction: row;
                position: relative;
                height: 30px;
                padding-bottom: 13px;
                margin-top: 40px;
                margin-bottom: 30px;
                width: 100%;
                .text {
                    width: auto;
                    position: absolute;
                    display: inline-block;
                    background-color: var(--main-background-color);
                    color: var(--main-color);
                    padding: 15px 65px 15px 15px;
                    border-radius: 5px;
                    top: -5px;
                    // border-bottom: 2px solid var(--main-accent-color);
                    box-sizing: border-box;
                }
                .text_wrapper {
                    position: absolute;
                    display: flex;
                    width: auto;
                    height: 100px;
                    flex-direction: row;
                    justify-content: space-between;
                    left: 9.8rem;
                    top: -1.3rem;

                    .decorator1 {
                        position: relative;
                        background-color: var(--main-accent-color);
                        margin-left: 0.5rem;
                        width: 1.2rem;
                        height: 1.2rem;
                        top: 1.8rem;
                        border-radius: 2px;
                        // left:10px;
                        // top:15px;
                    }
                    .decorator2 {
                        background-color: var(--main-accent-color);
                        position: relative;
                        width: .6rem;
                        height: .6rem;
                        top: 1.3rem;
                        left: 0.4rem;
                        border-radius: 1px;
                    }
                    .decorator3 {
                        background-color: var(--main-accent-color);
                        position: relative;
                        width: .4rem;
                        height: .4rem;
                        top: 1.1rem;
                        left: 0.7rem;
                        border-radius: 1px;
                    }
                    h1 {
                        width: auto;
                        position: relative;
                        border-radius: 5px;
                        background: var(--main-accent-color);
                        display: inline;
                        height: 0.2rem;
                        position: relative;
                        word-wrap: none;
                        word-break: break-all;
                        font-weight: 3rem;
                        z-index: 100;
                    }
                }
            }
        }
        .layout-toggler {
            // margin-top: 20px;
            button {
                background: none !important;
                border-style: none !important;
                box-sizing: border-box;
                .fa-solid {
                    color: var(--main-accent-color);
                    background-color: transparent;
                    padding: 8px 15px;
                    border-radius: 3px;
                    border: 1px solid var(--main-accent-color);
                }
            }
            button:hover {
                background-color: var(--main-accent-color);
                transition: all 0.4s ease-in-out;
                .fa-solid {
                    color: var(--main-color);
                    background-color: var(--main-accent-color);
                    transition: all 0.4s ease-in-out;
                }
            }
        }
        .posts {
            width: 100%;
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            margin-bottom: 10px;
            padding: 0;
            li {
                margin-bottom: 40px;
                padding-bottom: 10px;
            }
            h2 {
                margin: 0;
            }
            p {
                margin: 0;
                padding: 0.2em;
            }
        }
        .card {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: start;
        }
        .list {
            flex-direction: column;
        }
        margin-top: 40px !important;
    }

    @media (max-width: 600px) {
        .wrapper {
            display: flex;

            height: 30px;
            margin-top: 40px;
            margin-bottom: 60px !important;
            width: 100%;
            .text {
                width: auto;
                position: absolute;
                display: inline-block;
                background-color: #1b1a1a;
                padding: 5px 15px 25px 15px !important;
                border-radius: 5px;
                // border-bottom: 0px solid var(--main-accent-color) !important;
                box-sizing: border-box;
            }
            .text_wrapper {
                display: flex;
                width: auto;
                height: 100px;
                flex-direction: row !important;
                justify-content: space-between;
                left: 0.35rem !important;
                top: 0.1rem !important;

                .decorator1 {
                    position: relative;
                    background-color: var(--main-accent-color);
                    margin-left: 10px;
                    width: 1.2rem;
                        height: 1.2rem;
                    top: 25px;
                    border-radius: 2px;
                    // left:10px;
                    // top:15px;
                }
                .decorator2 {
                    background-color: var(--main-accent-color);
                    position: relative;
                    width: .6rem;
                        height: .6rem;
                    top: 10px;
                        left: 0.5rem;
                    border-radius: 1px;
                }
                h1 {
                    width: auto;
                    position: relative;
                    border-radius: 5px;
                    background: var(--main-accent-color);
                    display: inline;
                    height: 4px;
                    // padding: 0px 10px 20px 10px;
                    // margin-top: 10px;
                    // margin-left: -30px;
                    position: relative;
                    word-wrap: none;
                    word-break: break-all;
                    font-weight: 3rem;
                    // left: 9.8rem;
                    // top: -22px;
                    z-index: 100;
                    // border-bottom: 4px solid rgba(64, 64, 64, 0.373);
                }
            }
        }
        
    }
    @media (max-width: 500px) {
            .blogposts {
                // padding: 10px !important;
                // .heading_search{
                //     flex-direction: column;
                //     justify-content: flex-start;
                //     align-items: flex-start;
                // }
            }
        }
</style>
