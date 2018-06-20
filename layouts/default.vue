<template lang="pug">
  .wrapper
    app-navigation
    nuxt
    app-footer
</template>

<script>
import AppNavigation from '~/components/AppNavigation.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppNavigation,
    AppFooter
  }
}
</script>

<style lang="scss">
*,
::before,
::after {
  box-sizing: border-box;
}

html {
  text-size-adjust: 100%;
  font-size: $size-font-html;
}

body {
  position: relative;
  width: 100%;
  height: 100%;
  min-width: $width-site;
  font-size: $size-font-base;
  font-weight: normal;
  color: $color-text;
  text-size-adjust: 100%;
  font-family: $font-family-base;
  word-wrap: break-word;
  overflow-wrap: break-word;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-smooth: always;
  line-height: $line-height-base;
}
</style>
