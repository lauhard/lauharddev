<script lang="ts">
    export let data: any;
    console.log("postmeta data:", data);
</script>

<div class="blog-info">
    {#if data?.post?.published}
        <p>
            <span><strong>PUBLISHED:</strong></span><span
                >{data.post.published}</span
            >
        </p>
    {/if}
    {#if data.post.updated}
        <i class="fa-solid fa-diamond" />
        <p>
            <span><strong>UPDATED:</strong></span>
            <span>{data.post.updated}</span>
        </p>
    {/if}
    {#if data.post.author}
        <i class="fa-solid fa-diamond" />
        <p>
            <span><strong>AUTHOR:</strong></span><span>{data.post.author}</span>
        </p>
    {/if}
</div>

<style lang="scss">
    .blog-info {
        // margin:-5px 0px 80px 0px;
        margin:var(--margin);
        display: flex;
        justify-content: space-around;
        overflow: hidden;
        position: relative;
        width: 68%;
        word-wrap: normal;
        word-break: keep-all;
        flex-wrap: nowrap;
        p {
            padding: 0px;
            margin: 6px;
            font-weight: 200;
            font-size: 0.8rem;
            font-family: "Roboto Flex";
            word-wrap: normal;
            word-break: keep-all;
            flex-wrap: nowrap;
            // width: 0px;
        }
        i {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.7rem;
            color: var(--main-accent-color);
        }
        span {
            color: var(--second-accent-color);
            display: inline-block;
            width: auto;
            padding-right: 5px;
            word-wrap: normal;
            word-break: keep-all;
            flex-wrap: nowrap;
        }
        transition: all 0.3s ease-in-out;
        // background-color: var(--second-background-color);
        // border: 1px solid var(--border-color-dark);
        // border-radius: 5px;
        // border-bottom: dotted 3px var(--main-accent-color);

        padding: 5px;
    }
    .blog-info::after {
        position: absolute;
        left: 10%;
        width: 80%;
        height: 2px;
        top: -1px;
        z-index: 999;
        content: " ";
        // overflow: hidden;
    }

    @media (max-width: 600px) {
        .blog-info {
            margin-bottom: 0px;
            flex-direction: column;
            // margin: 20px;
            justify-content: center;
            display: flex;
            align-items: center;
            width: 80%;
            padding: 0px;
            margin:0 auto;
            margin-top: 20px;

            // background-color: var(--second-background-color);
            // border: 1px solid var(--border-color-dark);
            border-radius: 5px;
            border-bottom: dotted 3px var(--main-accent-color);
            p {
                padding: 1px;
            }
            i {
                display: none;
                transition: all 1s ease-in-out;
            }
            transition: all 0.3s ease-in-out;
        }
    }
</style>
