import path from "node:path";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SabaccUI",
  titleTemplate: ":title - SabaccUI",
  description:
    "Discover SabaccUI: A collection of stunning, animated Vue.js components. Copy, paste, and customize to create unique, high-performance web interfaces. Open-source and accessible.",
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  sitemap: {
    hostname: "https://ui.coderscantina.com",
    transformItems(items) {
      return items.filter((item) => !item.url.includes("migration"));
    },
  },

  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Animated UI component library for Vue Engineers' }],
    ['meta', { property: 'og:description', content: 'Discover SabaccUI: A collection of stunning, animated Vue.js components. Copy, paste, and customize to create unique, high-performance web interfaces. Open-source and accessible.' }],
    ['meta', { property: 'og:site_name', content: 'SabaccUI' }],
    ['meta', { property: 'og:image', content: 'https://ui.coderscantina.com/sabaccui-og.png' }],
    ['meta', { property: 'og:url', content: 'https://ui.coderscantina.com/' }],
    ['meta', { name: 'twitter:type', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: 'https://ui.coderscantina.com/sabaccui-og.png' }],
    ['meta', { name: 'twitter:description', content: 'Discover SabaccUI: A collection of stunning, animated Vue.js components. Copy, paste, and customize to create unique, high-performance web interfaces. Open-source and accessible.' }],
  ],

  srcDir: path.resolve(__dirname, "../docs"),

  themeConfig: {
    logo: { src: "/logo.svg", width: 24, height: 24 },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Getting Started", link: "/docs/introduction" },
      { text: "Components", link: "/components/marquee" },
    ],

    search: {
      provider: "local",
    },

    editLink: {
      pattern: "https://github.com/coderscantina/ui/tree/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    sidebar: [
      {
        text: "Getting Started",
        collapsed: false,
        items: [
          { text: "Introduction", link: "/docs/introduction" },
          { text: "About", link: "/docs/about" },
          { text: "Contribution", link: "/docs/contribution" },
          { text: "Changelog", link: "/docs/changelog" },
        ],
      },
      {
        text: "Components",
        collapsed: false,
        items: [
          { text: "Gradient Text", link: "/components/gradient-text" },
          { text: "Marquee", link: "/components/marquee" },
          { text: "Reveal Text", link: "/components/reveal-text" },
          {
            text: "Scroll By Container",
            link: "/components/scroll-by-container",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/coderscantina/ui" },
      { icon: "discord", link: "https://discord.gg/quHDFpkbwE" },
    ],

    footer: {
      message:
        'Released under the <a target="_blank" href="https://github.com/coderscantina/ui/blob/main/LICENSE.md">MIT License</a>.',
      copyright:
        '© 2024 <a target="_blank" href="https://coderscantina.com">Coder\'s Cantina</a>. All rights reserved.',
    },
  },
});
