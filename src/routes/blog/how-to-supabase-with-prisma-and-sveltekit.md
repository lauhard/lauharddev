---
title: 'How to use Supabase with Prisma in SvelteKit'
published: '2023-04-15'
author: 'Andreas Lauhard'
excerpt: 'Setup a basic bookmarking app with Supabase and Prisma in SvelteKit'
categories: 
 - supabase
 - prisma
 - sveltekit
---

<script>
    import Codeblock from '$lib/components/Codeblock.svelte';
    import ImageCard from '$lib/components/ImageCard.svelte';
</script>


## Prequisits

A <a class="animated" target="_blank" href= "https://github.com/signup"> Github </a> Account  
A <a class="animated" target="_blank" href= "https://app.supabase.com/sign-in"> Supabase </a> Account


## Setup the dependencies

We create a new Sveltekit Project:

<Codeblock language="bash">

```bash
npm create svelte@latest <projectName>
cd <projectName>
npm install


```
</Codeblock>

