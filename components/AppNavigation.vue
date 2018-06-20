<template lang="pug">
  header.header(role="banner")
    h1.header_logo Site Name
    nav.header_nav
      .header_list
        nuxt-link(exact to="/")
          .header_item top
        nuxt-link(to="/about")
          .header_item about
        nuxt-link(to="/category")
          .header_item category
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['page'])
}
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 55px;
  border-bottom: 1px solid $color-border;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;

  &_list {
    display: flex;
  }

  &_item {
    padding: 0 10px;
  }
}
</style>
