// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova';
import starlightNextjsTheme from 'starlight-nextjs-theme'
import starlightGiscus from 'starlight-giscus'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			lastUpdated: true,
			editLink: {
				baseUrl: 'https://github.com/TC321-MAX/doc/tree/main/'
			},
			locales:{
				root:{
					label: '简体中文',
					lang:'zh-cn'
				}
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			plugins: [
				// starlightThemeNova(),
				starlightNextjsTheme(),
				starlightGiscus({
					repo: 'TC321-MAX/doc',
					repoId: 'R_kgDOPI_igw',
					category: 'Announcements',
					categoryId: 'DIC_kwDOPI_ig84Cspar'
				})
			],
		}),
	],
});
