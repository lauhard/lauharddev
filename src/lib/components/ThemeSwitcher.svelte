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
            setCookie(`data-theme=${theme}`, "60*60*24*365", "/");
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
                onmouseover={() => changeTheme("dark", true)}
                onmouseleave={() => changeTheme($prevousTheme, true)}
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
                onmouseover={() => changeTheme("light", true)}
                onmouseleave={() => changeTheme($prevousTheme)}
                onclick={() => changeTheme("light")}
                aria-label="Light"
                value="light"
            />
        </li>
    </ul>
</details>

<style lang="scss">
    summary {
        min-width: 7rem;
        text-align: center;
        display: flex;
        justify-content: space-around;
        align-items: space-between;
        text-transform: capitalize;
        color: var(--text-3);
    }

    ul,
    li,
    input {
        width: 100%;
        text-transform: capitalize;
    }
    input {
        background-color: transparent;
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
