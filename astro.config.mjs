// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://joseda-hg.github.io/astro-docs-template/',
	base: '/astro-docs-template/',
	integrations: [
		starlight({
			title: 'Docs',
			// Establece el inglés como el idioma predeterminado para este sitio.
			defaultLocale: 'root',
			locales: {
				// Documentación en inglés en `src/content/docs/en/`
				en: {
					label: 'English',
				},
				root: {
					label: 'Español',
					lang: 'es', // lang es obligatorio para los locales raíz
				  },
			},
			logo: {
				src: './src/assets/Logo-PG.png',
			},
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			// sidebar: [
			// 	{
			// 		label: 'Guides',
			// 		items: [
			// 			// Each item here is one entry in the navigation menu.
			// 			{ label: 'Example Guide', slug: 'guides/example' },
			// 		],
			// 	},
			// 	{
			// 		label: 'Reference',
			// 		autogenerate: { directory: 'reference' },
			// 	},
			// ],
		}),
	],
});
