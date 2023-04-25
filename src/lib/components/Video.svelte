<script lang="ts">
    export let title = "youtube title"
    export let width = "560";
    export let height = "315";
    export let source = "youtube";
    export let controls= "true";
    export let key = "";
    export let dir = "center";

    let _controls: string = controls == "false" ? "?controls=0" : "";
  
</script>
<div  style="justify-content: {dir};">
    {#if source === "youtube"}
    <iframe
      {width}
      {height}
      src="https://www.youtube.com/embed/{key}{_controls}"
      {title}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    />
  {:else if source == "vimeo"}
  
  {/if}
</div>



<style lang="scss">
    div{
        display: flex;
        width: 100%;
        height: auto;
        overflow: hidden;
        iframe{
          border-radius: 10px;
        }
    }

</style>
