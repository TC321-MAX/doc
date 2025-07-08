// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova';
import starlightNextjsTheme from 'starlight-nextjs-theme'
import starlightGiscus from 'starlight-giscus'
import starlightCoolerCredit from 'starlight-cooler-credit'
import liveCode from 'astro-live-code'

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
	site: 'https://tc321-max.github.io',
	base: 'doc',
	integrations: [
		starlight({
			title: 'My Docs',
			social: [
				{ icon: 'codeberg', label: 'Codeberg', href: 'https://codeberg.org/knut' },
				{ icon: 'discord', label: 'Discord', href: 'https://astro.build/chat' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro' },
				{ icon: 'gitlab', label: 'GitLab', href: 'https://gitlab.com/delucis' },
				{ icon: 'mastodon', label: 'Mastodon', href: 'https://m.webtoo.ls/@astro' },
			],
			lastUpdated: true,
			editLink: {
				baseUrl: 'https://github.com/TC321-MAX/doc/tree/main/'
			},
			markdown: {
				// 禁用 Starlight 的可点击标题锚点链接。
				headingLinks: false,
			},
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN'
				}
			},
			sidebar: [
				{
					label: '总则',
					autogenerate: { directory: '总则' },
				},
				{
					label: 'OA系统的使用',
					autogenerate: { directory: 'OA系统的使用' },
				},
				{
					label: '开发人员规范',
					autogenerate: { directory: '开发人员规范' },
				},
			],
			customCss: [
				// 你的自定义 CSS 文件的相对路径
				'./src/styles/custom.css',
			],
			plugins: [
				// starlightThemeNova(),
				starlightNextjsTheme(), // 主题
				starlightCoolerCredit({
					credit: {
						title: 'Built with Astro',
						href: 'https://tc321-max.github.io',
						description: 'TC321-MAX 是一个基于 Next.js 的文档平台，由 TC321-MAX 团队开发。'
					}
				}), // 自定义版权信息
				starlightGiscus({
					repo: 'TC321-MAX/doc',
					repoId: 'R_kgDOPI_igw',
					category: 'Announcements',
					categoryId: 'DIC_kwDOPI_ig84Cspar',
					inputPosition: 'top',
					lazy: true
				})
			],
		}),
		vue(),
		liveCode({
			defaultProps: {
				'client:load': true
			},
		})
	],
});