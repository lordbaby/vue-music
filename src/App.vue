<template>
  <div id="app">
    <tab />
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
export default {
  name: 'app',
  components: {
    Tab
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
