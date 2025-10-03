<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <!-- Navbar always visible -->
  <NavBar />

  <!-- Main content changes with routes -->
  <RouterView />
</template>

<style>
/* Import Google Font */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

/* Reset basic styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%; /* Make sure body fills viewport */
  overflow-x: hidden; /* Prevent horizontal scroll */
  font-family: 'Montserrat', sans-serif;
  background: #081b29; /* Dark background */
  color: #ededed; /* Light text for contrast */
}

/* Main container (so every page has some breathing space) */
#app {
  min-height: 100vh; /* Always full screen height */
  display: flex;
  flex-direction: column;
}
</style>
