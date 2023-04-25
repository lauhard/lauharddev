<script>
    export let publicRoute = true;
    export let pathname = "/";
    export let name = "";
    export let customStyle = "";
</script>

{#if publicRoute}
    <a class={$$props.class}
        href="{pathname}"
        style={customStyle}
    >
        {name}
        <slot></slot>
    </a>
{/if}
  
<style lang='scss'>
    a{
        text-decoration: none;
        color: var(--color-main);
        &:hover {
            color: var(--accent-color-main);
        }
    }
</style>