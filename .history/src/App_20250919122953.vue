<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <NavBar />

  <RouterView />
  <!-- <Footer /> -->
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
body {
  font-family: 'Montserrat', sans-serif;
  margin: 0 auto;
  padding: 0;
}
html,
body {
  overflow-x: hidden;
  background: #081b29;
}
</style>
