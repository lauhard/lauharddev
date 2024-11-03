<script lang="ts">
    import { onMount } from "svelte";

    let { message = "", speed = 70, blink = 3, delay = 0 } = $props();
    let consoleMessage: HTMLParagraphElement | null = $state(null);
    let cursor: HTMLSpanElement | null = $state(null);
    onMount(() => {
        //typeConsoleMessage();
    });
    $effect(() => {
        if (consoleMessage)
            setTimeout(() => {
                typeConsoleMessage();
            }, delay);
    });

    const addSpan = (parent: HTMLElement, color: string) => {
        const span = document.createElement("span");
        span.style.color = color;
        parent?.appendChild(span);
        return span;
    };
    // function should write it into a paragraph letter by letter like a typewriter
    const typeConsoleMessage = () => {
        let i = 0;

        const typeWriter = () => {
            if (i < message.length && consoleMessage) {
                if (consoleMessage.innerText.length <= 7) {
                    let span = addSpan(consoleMessage, "var(--color-2)");
                    span.innerHTML += message.charAt(i);
                } else if (
                    (consoleMessage.innerText.length <= 10 &&
                        message.includes("log")) ||
                    (message.includes("warn") &&
                        consoleMessage.innerText.length <= 11) ||
                    (message.includes("error") &&
                        consoleMessage.innerText.length <= 12) ||
                    (message.includes("info") &&
                        consoleMessage.innerText.length <= 11)
                ) {
                    let span = addSpan(consoleMessage, "var(--primary)");
                    span.innerHTML += message.charAt(i);
                } else if (
                    (consoleMessage.innerText.length == 11 &&
                        message.includes("log")) ||
                    (consoleMessage.innerText.length == 12 &&
                        message.includes("warn")) ||
                    (consoleMessage.innerText.length == 13 &&
                        message.includes("error")) ||
                    (consoleMessage.innerText.length == 12 &&
                        message.includes("info"))
                ) {
                    let span = addSpan(consoleMessage, "var(--accent)");
                    span.innerHTML += message.charAt(i);
                } else if (message.length - 2 == i) {
                    let span = addSpan(consoleMessage, "var(--accent)");
                    span.innerHTML += message.charAt(i);
                } else {
                    consoleMessage.innerHTML += message.charAt(i);
                }
                if (message.length - 1 == i && cursor) {
                    cursor.style.animationIterationCount =
                        "var(--iteration-count)";
                }

                i++;
                setTimeout(typeWriter, speed);
            }
        };
        typeWriter();
    };
</script>

<!-- content here -->
<div>
    <p bind:this={consoleMessage}></p>
    <span
        bind:this={cursor}
        class="cursor"
        style="--iteration-count:{blink}; --delay:{delay}ms;"
    ></span>
</div>

<style>
    div {
        position: relative;
        transition: all 0.3s ease-in-out;
    }
    p {
        font-family: monospace;
        margin: 0;
        padding: 0;
        letter-spacing: normal;
        position: relative;
        width: auto;
        padding-right: 0 !important;
        inline-size: fit-content;
        block-size: fit-content;
        margin-right: 0.5rem;
        display: inline;
        color: var(--text-2);
        text-wrap: pretty;
        transition: all 0.3s ease-in-out;
    }
    .cursor {
        display: inline-block;
        width: 1px;
        background-color: var(--text-2);
        height: inherit;
        height: 1.3rem;
        position: absolute;
        margin: 0;
        padding: 0;
        bottom: 5px;
        opacity: 0;
        animation-delay: var(--delay);
        animation-name: blink;
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }

    @keyframes blink {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>
