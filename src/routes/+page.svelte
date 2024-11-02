<script lang="ts">
    import ConsoleLog from "$lib/components/ConsoleLog.svelte";
    let show = $state(false);
    setTimeout(() => {
        show = true;
    }, 15000);
</script>

<div>
    <div class="box">
        <div class="header">
            <span class="info">INFO</span>
        </div>
        <div class="content">
            <ConsoleLog
                message="console.log('Hello world & hello you!');"
                delay={0}
                blink={1}
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
                blink={3}
            ></ConsoleLog>
        </div>
    </div>
    {#if show}
        <a href="/blog">click me</a>
    {/if}
</div>

<style lang="scss">
    div {
        display: flex;
        margin-top: 5%;
        width: 100%;
        flex-direction: column;
        justify-self: center;
        align-self: center;
        gap: 1rem;
        .box {
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
        .content {
            display: flex;
            justify-content: center;
            flex-direction: column;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            gap: 1rem;
            padding-bottom: 2rem;
            padding-inline: 2rem;
        }
        .header {
            width: 100%;
            height: 3rem;
            display: flex;
            justify-content: center;
            margin: 0;
            padding: 0;
        }
        .info {
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
        .header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;
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
        width: 120px;
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
</style>
