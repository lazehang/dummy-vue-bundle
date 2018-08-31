<template>

    <Customizer />

</template>

<script>
import Customizer from './components/Customizer'
import 'bootstrap'

export default {
  name: 'App',
  components: {
    Customizer
  }
}
</script>

<style>
@font-face {
  font-family: titillium_semibold;
  src: url(./assets/font/Titillium-Semibold.otf)
}
@font-face {
    font-family: big_noodle_titling;
    src: url(./assets/font/big_noodle_titling.ttf);
}

</style>
