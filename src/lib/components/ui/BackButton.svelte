<script>

</script>
<button
    class="back-button"
    on:click
>
    <i class="fa-solid fa-arrow-left" />
</button>

<style lang="scss">
    .back-button {
        // border: none;
        // height: 1.5rem;
        // width: 1.5rem;
        // border-radius: 50%;
        // border: 1px solid var(--main-accent-color);
        // background-color: transparent;
        // font-size: 1rem;
        // display: flex;
        // justify-content: center;
        // align-items: center;
        // color: var(--main-color);
        position: relative;
		border: none;
		background-color: var(--main-background-color);
		border-radius: 50%;
		width: 30px;
		height: 30px;
		border: 1px solid var(--main-accent-color);
		box-sizing: border-box;
        i {
			color: var(--main-accent-color);
		}
    }
    .back-button:hover{
        background-color: var(--main-accent-color);
        i {
			color: var(--main-color);
		}
		
        transition: all 0.3s ease-in-out;

    }
</style>