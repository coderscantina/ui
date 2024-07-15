import path from 'node:path'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Sabacc UI',
  titleTemplate: ':title - Sabacc UI',
  description: 'UI library for VueJS Engineers',
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  sitemap: {
    hostname: 'https://ui.coderscantina.com',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    },
  },

  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'SabaccUI | Vite & Vue Powered Static Site Generator' }],
    ['meta', { property: 'og:site_name', content: 'SabaccUI' }],
    ['meta', { property: 'og:image', content: 'https://ui.coderscantina.com/sabacc-og.jpg' }],
    ['meta', { property: 'og:url', content: 'https://ui.coderscantina.com/' }],
  ],

  srcDir: path.resolve(__dirname, '../docs'),

  themeConfig: {
    logo: { src: '/logo.svg', width: 24, height: 24 },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Getting Started', link: '/docs/introduction' },
      { text: 'Components', link: '/components/marquee' },
    ],

    search: {
      provider: 'local',
    },

    editLink: {
      pattern: 'https://github.com/coderscantina/ui/tree/dev/web/src/:path',
      text: 'Edit this page on GitHub',
    },

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/docs/introduction' },
          { text: 'Changelog', link: '/docs/changelog' },
          { text: 'About', link: '/docs/about' },
          { text: 'Contribution', link: '/docs/contribution' },
        ],
      },
      {
        text: 'Installation',
        collapsed: false,
        items: [
          { text: 'Vite', link: '/docs/installation/vite' },
          { text: 'Nuxt', link: '/docs/installation/nuxt' },
        ],
      },
      {
        text: 'Components',
        collapsed: false,
        items: [{ text: 'Marquee', link: '/components/marquee', label: 'New' }],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/coderscantina/ui' }],
  },
})
