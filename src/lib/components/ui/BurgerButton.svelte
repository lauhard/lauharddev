<script>

</script>
<button
    class="burger-button"
    on:click
>
    <i class="fa-solid fa-bars" />
</button>

<style lang="scss">
    .burger-button {
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
    .burger-button:hover{
        background-color: var(--main-accent-color);
        i {
			color: var(--main-color);
		}
        transition: all 0.3s ease-in-out;
    }
</style>