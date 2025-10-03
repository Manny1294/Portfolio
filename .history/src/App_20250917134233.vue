<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar />

  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
body {
  font-family: 'Montserrat', sans-serif;
  margin: 0 auto;
  padding: 0;
  background: #081b29;
}
html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  background: #081b29;
  overflow-x: hidden;
  min-height: 100vh;
}
</style>
