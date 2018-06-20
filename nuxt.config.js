module.exports = {
  /*
  ** Headers of the page
  */
 head: {
   title: 'Nuxt site template',
   meta: [
     { charset: 'utf-8' },
     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
     { hid: 'description', name: 'description', content: 'Nuxt site template' }
   ],
   link: [
     { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
   ]
 },

 /*
 ** Customize the progress bar color
 */
 loading: '~/components/Loading.vue',

 router: {
   middleware: 'pages'
 },

 /*
 ** Build configuration
 */
 build: {
   extend (config, { isDev, isClient }) {
     if (isDev && isClient) {
       config.module.rules.push({
         enforce: 'pre',
         test: /\.(js|vue)$/,
         loader: 'eslint-loader',
         exclude: /(node_modules)/
       })
     }
   }
 },

 modules: [
   /*
   ** Sass resources loader
   */
   ['nuxt-sass-resources-loader', [
     '@/assets/sass/reset.scss',
     '@/assets/sass/foundation/variable.scss',
     '@/assets/sass/foundation/mixin.scss',
   ]]
 ]
}
