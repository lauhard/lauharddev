// src/lib/shiki.js
import { createHighlighter, codeToHtml } from 'shiki';
let highlighter;

const shiki_langs = ['javascript', 'html', 'rust', 'typescript', 'json', 'yaml', 'css', 'scss', 'svelte', 'sql', 'bat'];
const shiki_themes = ['monokai', 'min-light', 'dracula', 'synthwave-84', 'material-theme', 'laserwave', 'vitesse-dark', 'everforest-dark', 'dark-plus', 'nord', 'dracula-soft', 'andromeeda', 'github-dark-dimmed', 'poimandres', 'solarized-dark'];

const themes = {
    dark: 'everforest-dark',
    light: 'min-light',
}

async function initHighlighter() {
    if (!highlighter) {
        highlighter = await createHighlighter({
            themes: shiki_themes,
            langs: shiki_langs
        });
    }
}

function appendLanguage(code, lang) {
    return `
        <div class="copy-button-wrapper">
            <button
                class="copy-button btn btn-square"
                aria-label="copy-codeblock"
                aria-live="polite"
                title="copy codeblock"
                type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-clipboard-check">
                    <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>
                </svg>
            </button>
            <span class="language-description">${lang}</span>
        </div>
        ${code}
    `
}

function replaceRgbWithVar(code) {
    const regex = /#F8F8F2/g;
    // Replace each occurrence with 'var(--shiki-color)'
    const resultString = code.replace(regex, 'var(--shiki-color)');
    return resultString;
}

export async function highlightCode(code, lang = 'javascript') {
    if (!code) {
        //throw new Error('Code must be provided to highlight.');
        code = "js"
    }
    await initHighlighter();
    let highlighted = await codeToHtml(code, {
        lang: lang,
        themes: themes,
        // optional customizations
        cssVariablePrefix: '--shiki-',
    });
    let _code = replaceRgbWithVar(highlighted)
    let highlightedWithLang = appendLanguage(_code, lang);
    return highlightedWithLang;
}
