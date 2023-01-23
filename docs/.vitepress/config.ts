import { defineConfig } from 'vitepress';

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  lang: 'en-US',
  title: 'Vue.Js',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: [
      { text: 'Giriş', link: '/introduction' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        text: 'Başlangıç',
        items: [
          { text: 'Giriş', link: '/introduction' },
          { text: 'home', link: '/' },
          { text: 'Hızlı Başlangıç', link: '/quick-start' },
          // ...
        ],
      },
      {
        text: 'Temeller',
        items: [
          { text: 'Hızlı Başlangıç', link: '/quick-start' },
          // ...
        ],
      },
    ],
  },
});
