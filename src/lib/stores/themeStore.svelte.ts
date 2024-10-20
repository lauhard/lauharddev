import { getContext, setContext } from "svelte";
import { type Writable, writable } from "svelte/store";

const CONTEXT = 'THEME_CTX';

export const setTheme = (theme: string) => {
    const _theme = writable(theme);
    setContext(CONTEXT, _theme);
    return _theme;
}

export const getTheme = () => getContext<Writable<string>>(CONTEXT);
