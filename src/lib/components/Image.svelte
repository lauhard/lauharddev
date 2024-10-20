<script lang="ts">
    let { src = "", alt = "" } = $props();
    let loading: "lazy" | "eager" = "lazy";
</script>

<img class="markdown-image" {src} {alt} width="100" height="100" {loading} />

<style lang="scss">
    .markdown-image {
        object-position: center;
        object-fit: cover;
        height: auto;
        width: 100%;
        max-inline-size: 100%;
        max-block-size: 100%;
        object-fit: contain;
        border-radius: var(--size-3);
        box-sizing: border-box;
    }
</style>
