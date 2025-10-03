<script setup>
import NavBar from './components/NavBar.vue'
import HomeSection from './components/HomeSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <NavBar />
  <HomeSection />
  <!-- <AboutSection /> -->
  <ContactSection />
  <Footer />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
body {
  margin: 0 auto;
  padding: 0;
}

html,
body {
  overflow-x: hidden;
  background: #081b29;
  font-family: 'Montserrat', sans-serif;
}

h1,
h2,
h3 {
  font-family: 'Montserrat', sans-serif;
}

p,
span,
li {
  font-family: 'Montserrat', sans-serif; /* paragraphs */
}
</style>
