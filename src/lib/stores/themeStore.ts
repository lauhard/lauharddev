import { browser } from '$app/environment';
import { writable } from 'svelte/store';
export const THEMES = {
    LIGHT: 'light',
    DARK: 'dark'
};

export const theme = writable(browser ? window.localStorage.getItem('theme') : THEMES.DARK);


 theme.subscribe(value => {
    console.log(value)
    if (browser && value) {
        window.localStorage.setItem('theme', value);
    }
});
