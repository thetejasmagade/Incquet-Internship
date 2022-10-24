<template>
  <div id="app">
    <Navbar @some-event="hello"/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "../src/components/Navbar.vue"

export default {
  components: {
    Navbar
  },
  methods: {
    hello(){
      console.log("HELLO")
    }
  }
}
</script>

<style>
* {
  font-size: 20px;
}
</style>
