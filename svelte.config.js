import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: { 
		adapter: adapter(),
		paths: {
			base: prosses.env.ENV_MODE === "production"?"/sveltekit-github-pages":"",
		}
	 }
};

export default config;
