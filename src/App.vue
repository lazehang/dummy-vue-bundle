<template>
  <div id="app">
    <Customizer/>
  </div>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
