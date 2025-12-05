const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    router: { base: '/' }
  } : {}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: `Angus's Personal Website`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },

            // 這四行一定要寫在 nuxt.config.js 就夠了，強迫 WhatsApp 讀它
      // { property: 'og:type', content: 'website' },
      // { property: 'og:url', content: 'https://你的正式域名.com' },  // 一定要寫完整 https
      // { property: 'og:image', content: 'https://你的正式域名.com/og-preview.jpg' },
      { property: 'og:site_name', content: `Angus's Personal Website` },   // 這行最關鍵！
      
      // 下面這兩個可以讓各頁面再覆蓋
      { hid: 'og:title', property: 'og:title', content: '預設標題' },
      { hid: 'og:description', property: 'og:description', content: '預設描述' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/user.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lato&display=swap' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/translate'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },

 ...routerBase
}

