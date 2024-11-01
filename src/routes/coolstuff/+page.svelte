<script lang="ts">
    import { coolStuff, categroies } from "$lib/coolstuff";
    import { description } from "$lib/project.config";

    interface CoolStuff {
        title: string;
        description: string;
        link: string;
        category: string;
    }
    interface CoolStuffByCategory {
        [key: string]: CoolStuff[];
    }

    interface Item {
        category: string;
        description: string;
        title: string;
        url: string;
        tags: string;
        // add other fields here if needed
    }

    // create an iterable object of coolStuff categorized by category
    const coolStuffByCategory: Record<string, Item[]> = coolStuff.reduce(
        (acc, item) => {
            // Split categories by comma and trim whitespace
            const categories = item.category
                .split(",")
                .map((cat) => cat.trim());

            categories.forEach((category) => {
                if (!acc[category]) {
                    acc[category] = [];
                }
                //check if item with same url already exists
                if (
                    !acc[category].find(
                        (i) =>
                            i.url.includes(item.url) ||
                            item.url.includes(i.url),
                    )
                )
                    acc[category].push(item);
            });
            return acc;
        },
        {} as Record<string, Item[]>,
    );
</script>

<h2>Cool Stuff</h2>
<div class="cool-stuff-grid">
    {#each Object.entries(coolStuffByCategory) as [category, items]}
        <h3>{category}</h3>
        <ul class="categories">
            {#each items as item}
                <li>
                    <div class="card">
                        <a target="_blank" href={item.url}>{item.title}</a>
                        <p>{item.description}</p>
                        <div>
                            {#each item?.tags?.split(",") as tag}
                                <span class="tag">{tag}</span>
                            {/each}
                        </div>
                    </div>
                </li>
            {/each}
        </ul>
    {/each}
</div>

<style lang="scss">
    .cool-stuff-grid {
        display: grid;
        gap: 1rem;

        h3 {
            text-transform: uppercase;
        }
        .categories {
            display: grid;
            gap: 1rem;
            grid-auto-flow: dense;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        }
        .card {
            display: flex;
            flex-direction: column;
            border: 1px solid #ccc;
            padding: 1rem;
            border-radius: 5px;
            transition: all var(--animation-time) ease-in-out;
            &:hover {
                //outer glow
                box-shadow: 0 0 5px var(--accent);
                border: 1px solid var(--accent);
                transform: scale(1.02);
                transition: all var(--animation-time) ease-in-out;
            }
            .tag {
                margin: 0;
                padding: 0;
                background-color: var(--primary);
                padding: 0rem 0.6rem;
                border-radius: 0.7rem;
                margin-right: 0.3rem;
                font-weight: bold;
                font-size: 0.6rem;
                line-height: 0.6rem;
                text-align: center;
                display: inline-flex;
                align-items: center;
                height: 1.3rem;
                color: var(--text-2-light);
                color: var(--surface-3);
                text-transform: uppercase;
            }
        }
    }

    @media (max-width: 575.98px) {
        .categories {
            grid-template-columns: 1fr !important;
        }
    }
</style>
