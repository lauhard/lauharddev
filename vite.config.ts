import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    optimizeDeps: {
        include: ['remark-math', 'rehype-katex', 'rehype-katex-svelte'],
    },
    plugins: [enhancedImages(), sveltekit()],
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    }
});
