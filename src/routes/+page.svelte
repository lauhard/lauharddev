<script lang="ts">
    import ConsoleLog from "$lib/components/ConsoleLog.svelte";
    let show = $state(false);
    setTimeout(() => {
        show = true;
    }, 15000);
</script>

<div class="landing-page">
    <div class="info-box">
        <div class="box-header">
            <span class="header-info">INFO</span>
        </div>
        <div class="box-content">
            <ConsoleLog
                message="console.log('Hello world & hello you!');"
                delay={0}
                blink={3}
            ></ConsoleLog>
            <ConsoleLog
                message="console.info('My name is Andy');"
                delay={4000}
                blink={3}
            ></ConsoleLog>
            <ConsoleLog
                message="console.info('I`m a developer from austria');"
                delay={8000}
                blink={3}
            ></ConsoleLog>
            <ConsoleLog
                message="console.error('Check out my blog  😆');"
                delay={12000}
                blink={8}
            ></ConsoleLog>
        </div>
    </div>
    {#if show}
        <a href="/blog" aria-label="Go to blog" type="button">click me</a>
    {/if}
</div>

<style lang="scss">
    .landing-page {
        display: flex;
        margin: 0;
        margin-top: 5%;
        width: 80%;
        flex-direction: column;
        justify-self: center;
        align-self: center;
        gap: 1rem;

        .info-box {
            flex-direction: column;
            border-radius: 1rem;
            width: 100%;
            text-align: left;
            display: flex !important;
            justify-self: start !important;
            align-items: flex-start !important;
            justify-content: flex-start !important;
            border: 1px solid var(--surface-2) !important;
            box-shadow: var(--shadow-5);
            background: var(--shiki-bg) !important;
            position: relative;
            overflow: hidden;
        }
        .box-content {
            display: flex;
            justify-content: center;
            flex-direction: column;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            gap: 1rem;
            padding-block: 2rem;
            padding-inline: 2rem;
        }
        .box-header {
            width: 100%;
            height: 3rem;
            display: flex;
            justify-content: center;
            margin: 0;
            padding: 0;
            align-items: center;
        }
        .header-info {
            width: 3rem;
            left: 1rem;
            position: absolute;
            background-color: var(--primary);
            font-size: 0.7rem;
            display: flex;
            justify-content: center;
            align-items: center;
            line-height: 1.5rem;
            border-radius: 0.3rem;
            font-weight: bold;
            color: var(--surface-2);
        }
    }
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        justify-self: center;
        align-self: center;
        padding-inline: 1rem;
        padding-block: 0.5rem;
        margin-top: 1rem;
        background: var(--primary);
        color: var(--text-1-dark);
        width: fit-content;
        border: none;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: var(--shadow-4);
        &:hover {
            background: var(--accent);
            box-shadow: var(--shadow-6);
        }
    }
    @media (max-width: 575.98px) {
        :root {
            --word-spacing: 1px;
        }
        .landing-page {
            //background-color: orange;
            width: 100%;
        }
    }
</style>
