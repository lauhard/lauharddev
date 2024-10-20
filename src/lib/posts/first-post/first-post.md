---
title: Build A Simple Markdown Blog (in SvelteKit)
excerpt: This is a descrpition about my first post. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
created: 'Aug 19, 2024'
updated: 'Oct 20, 2024'
author: 'Andreas Lauhard'
categories:
    - blog
    - svelte
published: true
---

## 2. Prerequisites

**Check if Node.js is installed**  

```bash
node -v
```

**Check if npm is installed**  

```bash
npm -v
```

## 3. Install SvelteKit

<https://kit.svelte.dev/>  

```bash
npm create-svelte@next <projectname>
```

**1. Setup SvelteKit**  

```bash
-> follow the prompts to create a new SvelteKit project
-> use typescript  
-> use playwright 
-> use vitetest
-> use svelte5  
```

When the setup is complete, navigate into the project folder  

```bash
cd <projectname>
npm install
npm run dev -- --open
```

**2. Create `app.scss` file inside `src` folder**

```bash
touch src/app.scss
```

**3. Create `+layout.svelte` file inside `src/routes` folder**

```bash
touch src/routes/+layout.svelte
```

Inside the `+layout.svelte` file, add the following code at the top of the file

```js
//src/routes/+layout.svelte
<script lang="ts">
    import '../app.scss';
    let {children} = $props();
</script>
```

To make child pages (page.svelte) files visible, add the following code to the `+layout.svelte` file add the followin code below the script tag.  
Since we use svelte5 we can use `runes` to render the children.  

```html
<!-- src/routes/+layout.svelte -->
<main>
    {@render children()}
</main>
```

**4. Create `hooks.server.ts` file inside `src` folder**

```bash
touch src/hooks.server.ts
```  

Add the following code to the `hooks.server.ts` file  

```ts
//src/hooks.server.ts
import { redirect, type Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
     const response = await resolve(event);
     return response;
};
```  

## 4. Install Dependencies  

We need  few dependencies for our markdown blog.  

### Install Tailwind CSS

We install Tailwind for Sveltekit  
Tailwind has guides for most framewokrs  
<https://tailwindcss.com/docs/guides/sveltekit>

```bash
npm install -D svelte-preprocess tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```

**1. Configure Tailwind CSS in `svelte.config.js`**

```javascript
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit')} */
const config = {
    kit: {
        adapter: adapter()
    },
    preprocess: vitePreprocess(
        {
            postcss: true
        }
    )
};       
export default config;
```

**2. Create / Configure `tailwind.config.js`**

```js
import tailwindcss from "tailwindcss"
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {}
    },
    plugins: []
};
```  

**3. Add Tailwind CSS to `app.scss`**

```scss
//src/app.scss
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Install Daisy UI  

Daisy UI is a component library on top of Tailwind CSS.  

```bash
npm i -D daisyui@latest
```

**Create `daisy.config.js` file in the root of the project folder**  

```bash
touch daisy.config.js
```

**1. Add the following code to the `daisy.config.js` file**  
This setup allows to customize the predefined themes in Daisy UI and add custom themes as well.

```js
import themes from 'daisyui/src/theming/themes'
export const daisyuiConfig={
    themes: [
        {
            light: {
                ...themes.light,
                "primary": '#77b6ba', // add custom primary color for light mode
                "primary-content": '#f3f4f6', //add custom primary content color for light mode
            },
            dark: {
                ...themes.dark,
                "primary": '#77b6ba', // add custom primary color for dark mode
                "primary-content": '#f3f4f6', // add custom primary content color for dark mode
            },
             cupcake: {
                ...themes.cupcake,
            },
            synthwave: {
                ...themes.synthwave,
            },
            custom: {
                "primary": "#77b6ba",
                "secondary": "#f6d860",
                "accent": "#37cdbe",
                "neutral": "#3d4451",
                "base-100": "#ffffff",

                "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
                "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
                "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
                "--animation-btn": "0.25s", // duration of animation when you click on button
                "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
                "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
                "--border-btn": "1px", // border width of buttons
                "--tab-border": "1px", // border width of tabs
                "--tab-radius": "0.5rem", // border radius of tabs
            },
        },
    ],
}
```

**2. Add `daisyui.config.js` to `tailwind.config.js`**  
Add the dependency and the config file to the `tailwind.config.js` file.

```js
import tailwindcss from "tailwindcss"  
import daisyui from "daisyui"  
import { daisyuiConfig } from "./daisy.config.js"
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {}
    },
    daisyui: daisyuiConfig,
    plugins: [tailwindcss, daisyui],
};
```  

**3. Setup Sveltekit for multi theme support**  
For multi theme support we just need to add a few lines of code in the +layout.svelte file.  

```js
//src/routes/+layout.svelte
<script lang="ts">
    import "../app.css";
    let {children, data} = $props();
    // We pass down the data prop from `+layout.server.ts` in case we want do have a classic dark/light mode switch with icons.
    let theme = $state(data.theme);

    //this function changes the theme on button click and sets a cookie `data-theme` with the selected theme for 1 year.
    const changeTheme = (e: Event) => {
        let _theme = (e.target as HTMLButtonElement).outerText.toLocaleLowerCase();
        document.cookie = `data-theme="${_theme}"; maxAge="60*60*24*365"; path="/"`;
        document?.firstElementChild?.setAttribute("data-theme", _theme);
        theme = _theme;
    };
</script>
```

Add the buttons to change the theme below the script tag in the `+layout.svelte` file.  

```html
<!-- src/routes/+layout.svelte -->
<button class:active={theme === "synthwave"} class="btn btn-outline" name="theme-synthwave" onclick="{(e)=>changeTheme(e)}">Synthwave</button>
<button class:active={theme == "cupcake"} class="btn btn-outline" name="theme-cupcake" onclick="{(e)=>changeTheme(e)}">Cupcake</button>
<button class:active={theme == "light"} class="btn btn-outline" name="theme-light" onclick="{(e)=>changeTheme(e)}">Light</button>
<button class:active={theme == "custom"} class="btn btn-outline" name="theme-custom" onclick="{(e)=>changeTheme(e)}">Custom</button>
<p>current theme: {theme}</p>

<main>
    {@render children()}
</main>
```

Add the css for the active class in the `app.scss` file.  

```scss
<style lang="scss">
    .active {
        // do something
    }
</style>
```

To access the `theme` from the data prop in the `+layout.svelte` file, we need to add the following code to the `+layout.server.ts` file.  

```ts
//src/routes/+layout.server.ts
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ cookies }) => {
    const _theme = cookies.get('data-theme') || "system color-scheme";
    return {
        theme: _theme
    }
}
```

* Now our Theme switcher is ready. But the theme is not yet persistent.  
* We need to load the theme from cookies and change the `data-theme` in the head of the html file, before the page gets loaded.  
The `+hooks.server.ts` file is the right place to do this, because it runs on every request.  
Add the following code to the `+hooks.server.ts` file.  

```ts
//src/hooks.server.ts
import { redirect, type Handle } from "@sveltejs/kit";

// handle runs on every request.
// the event object represents the request.
// the resolve function is a function that resolves the request.
// resolve can manipulate the response headers and body before it is sent to the client.
export const handle: Handle = async ({ event, resolve }) => {
    //get cookies
    const cookies = event.cookies.get('data-theme') || "";

    const resolveOptions = {
        // transformPageChunk is a function that allows to manipulate the html document.
        // It is a function inside an optional object that is passed to the resolve function.
        transformPageChunk: ({ html }: { html: string }) => {
            // manipulate the html document
            // change the theme based on the cookie
            // regex replace data-theme="anything" with data-theme from cookies
            return html.replace(/data-theme="[^"]*"/, `data-theme="${cookies}"`);
        }
    }

    // manipulate the response here
    const response = await resolve(event, resolveOptions);

    return response;
}
```  


