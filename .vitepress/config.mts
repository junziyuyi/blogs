import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "君子于義的博客",
  description: "A VitePress Site",
  srcDir: './src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '前端', items:[
        {text:'前端基础',link:'/web/base/es6'},
        {text:'问题记录',link:'/web/record/event-loop'},
      ]}
    ],

    sidebar: [
      {
        text:"前端基础",
        items:[
          {text:'ES6有哪些新特性',link:'/web/base/es6'}
        ]
      },
      {
        text: '问题记录',
        items: [
          { text: 'JS事件循环', link: '/web/record/event-loop' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
