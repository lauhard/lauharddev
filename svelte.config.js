// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svx', '.md'],
			rehypePlugins: [
				rehypeSlug,
				rehypeAutolinkHeadings,
			],
			// smartypants:  {
			// 	quotes:  false,
			// 	ellipses: true,
			// 	backticks: 'all',
			// 	dashes: 'oldschool'
			// },
			highlight: {
			}
		}),
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
