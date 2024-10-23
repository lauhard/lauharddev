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
    .dropdown,
    summary {
        outline: none !important;
        border: none !important;
        box-shadow: none !important;
        height: auto !important;
        margin: 0 !important;
        text-transform: uppercase !important;
        ::after {
            font-size: 14px !important;
            font-size: 0.77rem; //14px;
            height: 20px !important;
            height: 1.05rem !important;
        }
    }
    summary {
        display: flex;
        align-items: space-between !important;
        color: var(--pico-primary) !important;
        padding-inline: 0rem !important;
        background-color: inherit !important;
        font-weight: bold;
    }

    ul,
    li,
    input {
        width: 100%;
        outline: none !important;
        border: none !important;
        box-shadow: none !important;
        padding: 0 !important;
        margin: 0 !important;
        text-transform: uppercase;
    }
    ul {
        background-color: var(--surface-3) !important;
        border-radius: 0.7rem !important;
        overflow: hidden;
    }
    input {
        background-color: transparent;
        font-size: 13px;
        font-size: 0.73rem;
        font-weight: bold;
    }
    li,
    input {
        height: 2.2rem !important;
        display: block !important;
    }
    ul {
        margin-top: 0.2rem !important;
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
