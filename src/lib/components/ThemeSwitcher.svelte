<script lang="ts">
    import { getTheme } from "$lib/stores/themeStore.svelte";
    let { children = null, theme = "", ...props } = $props();
    let currentTheme = getTheme();
    let prevousTheme = currentTheme;

    const changeTheme = (selected: string, prev = false) => {
        $prevousTheme = $currentTheme;
        console.info("selected theme: ", selected);
        setDataTheme(selected, prev);
    };

    const setCookie = (cookie: string, maxAge: string, path: string) => {
        document.cookie = `${cookie}; maxAge=${maxAge}; path=${path}`;
    };

    const setDataTheme = (theme: string, prev = false) => {
        if (prev) {
            document?.firstElementChild?.setAttribute("data-theme", theme);
        } else {
            document?.firstElementChild?.setAttribute("data-theme", theme);
            setCookie(`lauhard.dev-data-theme=${theme}`, "60*60*24*365", "/");
            $currentTheme = theme.toString();
        }
    };

    $effect(() => {
        if ($currentTheme == "") {
            if (
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
            ) {
                setDataTheme("dark");
            } else {
                setDataTheme("light");
            }
        }
    });
</script>

<!-- Dropdown -->
<details class="dropdown" onchange={() => changeTheme($currentTheme)}>
    <!-- svelte-ignore a11y_no_redundant_roles -->
    <summary>
        {$currentTheme}
    </summary>
    <ul>
        <li>
            <!-- svelte-ignore a11y_mouse_events_have_key_events -->
            <input
                type="button"
                class="option dark"
                onclick={() => changeTheme("dark")}
                aria-label="Dark"
                value="dark"
            />
        </li>
        <li>
            <!-- svelte-ignore a11y_mouse_events_have_key_events -->
            <input
                type="button"
                class="option light"
                onclick={() => changeTheme("light")}
                aria-label="Light"
                value="light"
            />
        </li>
    </ul>
</details>

<style lang="scss">
    details {
        summary {
            margin: 0 !important;
            padding: 0 !important;
            padding-inline: 0.5rem !important;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        ul {
            margin: 0 !important;
            padding: 0 !important;
            margin-top: 0.5rem !important;
            border-radius: 10px !important;
            overflow: hidden !important;
            li {
                margin: 0 !important;
                padding: 0 !important;
                list-style: none !important;
            }
        }
    }
    .dark,
    .light {
        border: none;
        box-shadow: none;
    }
    .light:hover {
        background-color: var(--surface-2-light);
        color: var(--text-2-light);
    }
    .dark:hover {
        background-color: var(--surface-2-dark);
        color: var(--text-2-dark);
    }
</style>
