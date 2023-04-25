<script lang="ts">
    import { onMount } from "svelte";


    export let headings: any = [];

    let innerWidth = 0;
    
    $: dir = "up";
    $: toggle = () => (dir = dir == "up" ? "down" : "up");
    $: height = innerWidth < 1440 && dir == "up" ? "50px" : "auto";

</script>

<svelte:window bind:innerWidth />
<aside class="toc" style="height:{height};">
    <div class="toc__header">
        <h4>Table of Contents</h4>
        <i on:mousedown={toggle} class="fa-solid fa-chevron-{dir}" style="" />
    </div>
    <!-- <div class="wrapper">
        <slot />
    </div> -->
    <div class="wrapper">
        <ul>
            {#each headings as heading}
                <li>
                    <a href="#{heading.id}">{heading.textContent}</a>
                </li>
            {/each}
        </ul>
    </div>
</aside>

<style lang="scss">
    .toc {
        position: fixed;
        padding: 10px;
        top: 50%;
        transform: translateY(-50%);
        left: calc(50% + 420px);
        z-index: 1;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -5px, rgba(0, 0, 0, 0.05) 0px 4px 15px -5px;
        background-color: var(--second-background-color);
        border-radius: 0 0 10px 10px;
        .toc__header {
            margin-bottom:5px;
            padding: 5px;
            h4 {
                color: var(--main-color);
                margin: 0;
                padding: 0;
                padding:8px 0 8px 0;
                font-weight: 900;
                border-bottom: 1px solid rgba(120, 120, 120, 0.156);
                width: 99%;
                font-size: 20px;
                font-family: 'Roboto Flex';
            }
            i {
                display: none;
            }
        }
        .wrapper {
            max-height: 300px;
            width: 260px;
            overflow-y: auto;
            overflow-x: auto;
            scroll-behavior: smooth;
            word-wrap: none;
            word-break: keep-all;
            white-space: nowrap;
            margin:5px;
            box-sizing: border-box;
            ul {
                width: 100%;
                padding: 0px;
                margin: 0 0 5px 0;
                text-decoration: none;
                box-sizing: border-box;
                li {
                    width: 100%;
                    font-size: 0.9rem;
                    margin: 0px;
                    padding: 2px;
                    padding-right: 5px;
                    box-sizing: border-box;
                    a {
                        color: var(--main-color);
                        width: 100%;
                        font-size: 15px;
                        padding-right: 15px;
                        box-sizing: border-box;
                        font-weight: 300;
                    }
                    a:hover {
                        color: var(--main-accent-color);
                        text-decoration: underline;
                    }
                }
            }
        }
    }
    @media (max-width: 1440px) {
        .toc {
            position: relative;
            width: inherit;
            transform: translateY(0);
            padding: 5px 10px;
            right: auto;
            overflow: hidden;
            box-sizing: border-box;
            left: 0;
            .toc__header {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                i {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 28px;
                    height: 28px;
                    margin-bottom:5px;
                    border-radius: 50%;
                    background-color: var(--main-background-color);
                    border: 1px solid var(--main-accent-color);
                    color: var(--main-accent-color);
                    font-size: 15px;
                    transition: all .3s ease-in-out;
                }
                i:hover{
                    background-color: var(--main-accent-color);
                    color:var(--main-color);
                    transition: all .3s ease-in-out;
                }
            }
            .wrapper {
                max-width: 100% !important;
            }
        }
    }
</style>
