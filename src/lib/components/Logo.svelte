<script>
    export let cls = "reset";
</script>

<a class={cls === "reset" ? "reset" : "sticky-header"} href="/" >
    <h1>
        <div class="greeter">
            <span class="name">lauhard</span>
            <span class="domain">.dev</span>
        </div>
    </h1>
</a>

<style lang="scss">
a {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    h1 {
        font-size: var(--font-size);
        letter-spacing: 1.1px;
        margin: 0;
        padding: 0;
        font-family: 'Lobster';
        font-weight: 100;
        .greeter {
            display: flex;
            width:inherit;
            height: inherit;
            .name,
            .domain {
                display: flex;
                padding: 2px 10px;
                position: relative;
                text-transform: none;
                font-weight: bolder;
            }
            .domain {
                background-color: var(
                    --domainname__domain-background-color
                );
                color: var(--domainname__domain-color);
                border-radius: 0px 5px 5px 0px;
            }
            .name {
                border-top: 1px solid var(--domainname__name-border-color);
                border-left: 1px solid var(--domainname__name-border-color);
                color: var(--domainname__name-color);
                border-radius: 5px 0px 0px 10px;
                background-color: var(--main-background-color);
            }
        }
    }
}
</style>
