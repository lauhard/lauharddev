<script lang="ts">
    import PostItem from "$lib/components/PostItem.svelte";
    import Search from "$lib/components/Search.svelte";
    import type { PageData } from "./$types";
    import { createSearchStore, searchHandler } from "$lib/stores/searchStore";
    import { onDestroy } from "svelte";
    export let data: PageData;
    const searchPosts = data.posts.map((postData:any)=>({
        ...postData,
        searchTerms: `${postData.post.title} ${postData.post.excerpt}`
    }))
    const searchStore = createSearchStore(searchPosts);
    const unsubscribe = searchStore.subscribe((model) => searchHandler(model));
    onDestroy(()=>{
        unsubscribe();
    })

    $:innerWidth = 0;
    $:layout = "card"
    let tmpLayout = "card";
    const toggleLayout = (e:Event) => {
        let target:HTMLElement = e.target as HTMLElement;
        layout = Object.values(target.classList).includes("fa-grip") === true ? "card" : "list";
        tmpLayout = layout;
    }
    $: if(innerWidth <= 650) {
        layout = "card";
    } else if(innerWidth > 650) {
        layout = tmpLayout;
    }
</script>

<svelte:window bind:innerWidth />
<div class="blog" >

    <div class="heading-search">
        <h1>Posts</h1>
        <Search bind:value={$searchStore.search} count={$searchStore.data.length}></Search>
    </div>

    {#if innerWidth > 650}
        <div class="layout-toggler">
            <button><i on:mousedown="{toggleLayout}" class="fa-solid fa-list" ></i> </button>
            <button><i on:mousedown="{toggleLayout}" class="fa-solid fa-grip"></i> </button>
        </div>
    {/if}
    
    <ul class="post-list" 
        class:card="{layout === 'card'}"
        class:list="{layout === 'list'}">
        {#each $searchStore.filtered as postData}
            <li>
                <a href={postData.path}>
                    <PostItem post={postData.post} path={postData.path} view="{layout}"  />
                </a>
            </li>
        {/each}
    </ul>
</div>


<style lang="scss">
.blog {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    .heading-search{
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        h1 {
            color: var(--main-accent-color);
            width: auto;
            margin-right:20px;
        }
    }
    .layout-toggler{
        button{
            background: none !important;
            border-style: none !important;
            box-sizing: border-box;
            .fa-solid{
                color:var(--main-accent-color);
                background-color: transparent;
                padding: 8px 15px;
                border-radius: 3px;
                border:1px solid var(--main-accent-color);
            }
        }
        button:hover{
            background-color: var(--main-accent-color);
            transition: all .4s ease-in-out;
            .fa-solid{
                color:var(--main-color);
                background-color: var(--main-accent-color);
                transition: all .4s ease-in-out;
            }
        }
    }
    .post-list {
        width: 100%;
        display: flex;
        justify-content:space-around;
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
    .card{
        flex-direction: row;
        flex-wrap: wrap;
        justify-content:space-around;
        align-items: start;
    }
    .list{
        flex-direction: column;
    }
    margin-top: 40px !important;
}
@media (max-width: 500px) {
    .blog {
        // padding: 10px;
        .heading-search{
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
        }
    }
}
</style>
