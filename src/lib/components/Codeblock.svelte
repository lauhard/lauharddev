<script lang="ts">
  import { copy2ClipBoard, findElement } from "$lib/utils/main";
  import { onMount } from "svelte";

  export let width = "100%";
  export let language = "";
  export let margin = "20px 0px 20px 0px";

  onMount(() => {});

  const onClickCopy = async (event: any) => {
    const target = event.target;
    const element = findElement(target, ".language-");
    if(element)copy2ClipBoard(element);
  };
</script>

<div class="codeblock" style="width: {width}; margin: {margin}; ">
  <div class="codeblock__header" style="">
    <span class="codeblock__header__label">{language}</span>
    <button
      on:click={onClickCopy}
      class="codeblock__header__btn-copy 
                bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
      ><i class="fa-solid fa-copy" />
    </button>
  </div>
  <slot />
</div>

<style lang="scss">
    .codeblock {
        background-color: inherit !important;
        background: var(--codeblock-background, #2d2d2d);
        border-radius: var(--codeblock-border-radius, 10px);
        box-shadow: var(
            --codeblock-box-shadow,
            2px 2px 6px rgba(29, 29, 29, 0.714)
        );
        font-size: .7rem;
        overflow: hidden;
        .codeblock__header {
            position: relative;
            display: flex;
            justify-content: space-between;
            height: 33px;
            background-image: linear-gradient(
                90deg,
                var(--codeblock__header-background, red) 1%,
                var(--codeblock-background, #2d2d2d) 90%
            );
            .codeblock__header__label {
                position: absolute;
                padding: 0px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: 10px;
                padding: 5px 5.5px;
                color: var(--codeblock__header__label-color, #2d2d2d);
                background-color: var(--codeblock__header__label-background, orange);
                text-decoration: underline;
                border-radius: 2px;
                font-size: 0.8em;
                font-weight: 700;
                text-shadow: 1px 1px 10px var(--codeblock__header__label-color),
                1px 1px 5px var(--codeblock__header__label-background);
            }
            .codeblock__header__btn-copy {
                position: absolute;
                right: 0px;
                margin: 5px;
                padding: 1px;
                display: flex;
                justify-content: center;
                align-items: center;
                background: transparent !important;
                color: var(--codeblock__header__btn-copy-color, #ffffff);
                border: none;
                .fa-solid {
                    display: flex;
                    margin: 0px;
                    padding: 0px;
                }
                .fa-solid:hover {
                    color: var(--codeblock__header__btn-copy-color-hover, #ff9900);
                    scale: 1.1;
                    transition: all 0.3s ease-in-out;
                }
            }
        }
    }
</style>
