---
title: Test some stuff
excerpt: Test some stuff  
created: 'Oct 20, 2024'
categories:
    - markdown
    - embedded
    - test
published: false
---

<script>
    import MyImage from './images/rasberry.png';
</script>

## 1. Test  

bla bla bla

### 1.1 Youtube Video  

<iframe class="video" width="100%" height="400px" src="https://www.youtube.com/embed/BBLQpiVEXko?si=djAKZoxGPwVnTiVb"
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
</iframe>  

### 1.2 Code Embedding  

<iframe class="codesandbox"
  src="https://codesandbox.io/embed/new?codemirror=1"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### 1.3 Website Embedding  

<iframe class="website"
  src="https://joyofcode.xyz/"
></iframe>

* Now our Theme switcher is ready. But the theme is not yet persistent.  
* We need to load the theme from cookies and change the `data-theme` in the head of the html file, before the page gets loaded.  
The `+hooks.server.ts` file is the right place to do this, because it runs on every request.  
Add the following code to the `+hooks.server.ts` file.  

![Text]({MyImage})  

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
