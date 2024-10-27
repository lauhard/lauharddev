<script lang="ts">
    import { onMount } from "svelte";
    let { headings }: { headings: NodeListOf<HTMLHeadingElement> | undefined } =
        $props();

    let innerWidth = $state(0);
    let toc: HTMLElement | null = $state(null);
    let summary: HTMLElement | null = $state(null);

    onMount(() => {
        summary?.addEventListener("click", detectClick);
        toc?.addEventListener("click", detectClick);
        summary?.addEventListener("touchstart", detectClick);
        toc?.addEventListener("touchstart", detectClick);
    });
    $effect(() => {
        if (innerWidth >= 1500) toc?.setAttribute("open", "open");
        else toc?.removeAttribute("open");
    });

    const detectClick = (e: MouseEvent | TouchEvent) => {
        let target = e.target as HTMLElement;
        if (
            innerWidth >= 1500 &&
            (target.tagName.toLowerCase() === "span" ||
                target.tagName.toLowerCase() === "summary")
        ) {
            e.preventDefault();
        }
        headings?.forEach((t) => {
            if (
                t.id === (target as HTMLAnchorElement).hash?.substring(1) &&
                innerWidth < 500
            ) {
                //const rootStyles = getComputedStyle(document.documentElement);
                //rootStyles --> getPropertyValue or setPropertyValue
            }
        });
    };
</script>

<svelte:window bind:innerWidth />
{#if headings && headings.length > 0}
    <details bind:this={toc} class="toc bg-opacity-60 bg-slate-800" open>
        <summary bind:this={summary}>
            <span class=" text-neutral-content">Table of Contents</span>
        </summary>
        <ul>
            {#each headings as heading}
                <li>
                    <a href="#{heading.id}">{heading.textContent}</a>
                </li>
            {/each}
        </ul>
    </details>
{/if}

<style lang="scss">
    .toc {
        position: fixed;
        top: 50%;
        transform: translateY(-50%);
        left: calc(50% + 500px);
        z-index: 1;
        box-shadow: var(--shadow-5);
        border-radius: 1rem;
        background-color: var(--surface-1);
        min-width: 300px;
        padding: 1.5rem 2rem;
        ul {
            margin: 0;
            padding: 0;
            li {
                line-height: 2rem;
                list-style: none;
                margin: 0;
                padding: 0;
                a {
                    text-transform: capitalize;
                    text-decoration: none;
                    cursor: pointer;
                    font-weight: 300;
                    transition: all 100ms ease-in-out;
                }
                a:hover {
                    color: var(--accent);
                    text-decoration: underline;
                }
            }
        }

        summary {
            cursor: default;
            user-select: none;
            display: flex;
            justify-content: center;
            border-radius: 1rem;
            width: 100%;
            margin-inline: auto;
            word-wrap: break-word;
            text-wrap: pretty;
            text-align: center;

            span {
                font-weight: 600;
            }
        }
    }

    @media (max-width: 1500px) {
        .toc {
            --font-size: 1rem;
            position: relative;
            display: flex;
            width: inherit;
            transform: translateY(0);
            right: auto;
            box-sizing: border-box;
            left: 0;
            margin-bottom: 2rem;
            a {
                font-size: var(--font-size);
            }
            summary {
                font-size: 1.2rem;
            }
        }
    }
</style>
