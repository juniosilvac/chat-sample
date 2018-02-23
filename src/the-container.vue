<template>
  <div id="app">
    <div class="container">
    <router-view/>
    </div>
    <the-inputmessage></the-inputmessage>
  </div>
</template>

<script>
import TheInputmessage from './the-inputmessage'
export default {
  components: {
    TheInputmessage
  }
}
</script>

<style lang="sass" src="./assets/sass/app.scss">
</style>
