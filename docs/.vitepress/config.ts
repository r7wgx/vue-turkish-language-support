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
          { text: 'Giriş', link: '/start/introduction' },
          { text: 'Hızlı Başlangıç', link: '/start/quick-start' },
          // ...
        ],
      },
      {
        text: 'Temeller',
        items: [
          { text: 'Bir Uygulama Oluşturma', link: '/' },
          { text: 'Şablon Sözdizimi', link: '/' },
          { text: 'Reaktivite Temelleri', link: '/' },
          { text: 'Hesaplanmış Özellikler', link: '/' },
          { text: 'Sınıf ve Stil Bağlamaları', link: '/' },
          { text: 'Koşullu Rendering', link: '/' },
          { text: 'Liste Oluşturma', link: '/' },
          { text: 'Olay İşleme', link: '/' },
          { text: 'Form Giriş Bağlamaları', link: '/' },
          { text: 'Yaşam Döngüsü Kancaları', link: '/' },
          { text: 'Form Giriş Bağlamaları', link: '/' },
          { text: 'Şablon Referansları', link: '/' },
          { text: 'Bileşenlerin Temelleri', link: '/' },
          // ...
        ],
      },
    ],
  },
});








