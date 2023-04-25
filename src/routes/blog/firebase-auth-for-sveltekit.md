---
title: 'User Authentication with Firebase in Sveltekit'
published: '2023-03-26'
author: 'Andreas Lauhard'
img: ''
excerpt: 'We authenticate a user with email and passwort using firebase. After a successfull login, we are comsiumng custom claims and persist the session.'
categories: 
 - sveltekit
 - firebase
 - auth
---

<script>
    import Codeblock from '$lib/components/Codeblock.svelte';
    import ImageCard from '$lib/components/ImageCard.svelte';
</script>

In this tutorial, we want to create a User Management System with firebase in sveltekit.
We are using git as version control system.
For deployment we use github and vercel as deployment platform.

**Prequisits**  

Create or sign in at <a class="animated" target="_blank" href= "https://github.com/signup"> Github </a>  
Create or sign in at <a class="animated" target="_blank" href= "https://vercel.com/signup"> Vercel </a> with your Github account

## Setup the project

Create a sveltekit skeleton project 

<Codeblock language="create svelte project">

```bash
    npm create svelte@latest <projectName>
    ┌  Welcome to SvelteKit!
    │
    ◆  Which Svelte app template?
    │  ○ SvelteKit demo app
    │  ● Skeleton project (Barebones scaffolding for your new SvelteKit app)
    │  ○ Library project
    └
    ◆  Add type checking with TypeScript?
    │  ○ Yes, using JavaScript with JSDoc comments
    │  ● Yes, using TypeScript syntax
    │  ○ No
    └
    ◆  Select additional options (use arrow keys/space bar)
    │  ◼ Add ESLint for code linting
    │  ◻ Add Prettier for code formatting
    │  ◼ Add Playwright for browser testing
    │  ◼ Add Vitest for unit testing
    └

    cd <projectName>
    npm install
    npm run dev -- --open
```
</Codeblock>

Open your github account and create a new repository.  

Because sveltekit already created a `README.md` file for us, make sure you **do not** add a `README` file on github to avoid merge confilcts.
We want to use the plain empty repository and push our local commit.

<ImageCard src="https://res.cloudinary.com/dhx4yjj2m/image/upload/v1679904755/lauhard.dev/posts/create-repo-on-github_fy134d.png"></ImageCard>

## Push our project to Github

Now we have a local sveltekit project and an empty github repository.
Lets create our first commit.

<Codeblock language="push our project to github">

```bash
    git init
    git add -A
    git commit -m "first commit"
    git branch -M main
    git remote add origin git@github.com:<your account>/<your repository>.git
    git push -u origin main
```
</Codeblock>
ssd

## Deploy our project on vercel

Create a <a class="animated" target="_blank" href= "https://vercel.com/new"> new Project </a> at vercel.  
Choose the github repository you want to deploy on vercel and press import.  
Give the project a name or go with the default name and hit deploy.  

After a frew seconds the deployment process is finished and you will be navigated to you project page.
Hit the visit button and you will see your deployed sveltekit project.





