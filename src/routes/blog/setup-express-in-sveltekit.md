---
title: 'Setup Express in Sveltekit'
published: '2023-03-26'
author: 'Andreas Lauhard'
img: ''
excerpt: 'Configure Sveltekit with Adapter Node and Express middleware.'
categories: 
 - sveltekit
 - express
 - nodejs
---

<script>
    import Codeblock from '$lib/components/Codeblock.svelte';
</script>

**Prequisits:**
to follow along, <a class="animated" target="_blank" href="https://nodejs.org/en"> Node.js </a> has to be installed on your maschine.

To setup express in Sveltekit you need to change the <a class="animated" target="_blank" href="https://kit.svelte.dev/docs/adapters"> Adapter </a> in your `svelte.config.js` file from `adapter-auto` to `adapter-node`.

Sveltekit supports a lot of Adapters for deployment plattforms.  
In our case we want to use the adapter for a node.js server.


## Install adapter-node

Before we can change the adapter we need to install it with the following command `npm i -D @sveltejs/adapter-node`.
Now open the svelte.config.js file in the root of your project and change the adapter.
<Codeblock language="svelte.config.js">

```js
// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-node';
```
</Codeblock>

## Deploy the project

To setup our node server we need access to the `handler.js` file.
The file will be generated in the build folder when running `npm run build`.

<Codeblock language="filesystem">

```fs
📦project
 ┣ 📂build <---
 ┃ ┣ 📂server
 ┃ ┣ 📂client
 ┃ ┣ 📜env.js
 ┃ ┣ 📜handler.js 
 ┃ ┣ 📜index.js
 ┃ ┗ 📜shims.js
 ┣ 📂node_modules
 ┣ 📂src
...
```
</Codeblock>

## Create the Node server

Now, we can create a new folder `server` with an `index.js` file in the root of our project.

<Codeblock language="filesystem">

```fs
📦project
 ┣ 📂build 
 ┃ ┣ 📂server
 ┃ ┣ 📂client
 ┃ ┣ 📜env.js
 ┃ ┣ 📜handler.js 
 ┃ ┣ 📜index.js
 ┃ ┗ 📜shims.js
 ┣ 📂node_modules
 ┣ 📂server <---
 ┃ ┗ 📜index.js
 ┣ 📂src
...
```
</Codeblock>

Open the index.js to setup the node.js server.
Lets import the `handler.js` from the build folder. This file takes care of the communication between the sveltekit and our server.
Next, lets create a basic node server to check that everything works.

<Codeblock language="basic node server">

```js 
import { handler } from '../build/handler.js';
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
</Codeblock>

## Create express middleware



<!-- import { handler } from '../build/handler.js';
import express from 'express';

const app = express();
const port = 4994;

app.use(handler);

app.listen(port, ()=> {
    console.log(`listen on port ${port}`);
}) -->



// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-node';