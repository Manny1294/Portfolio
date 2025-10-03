<template>
  <section class="py-5">
    <BContainer>
      <BRow align-v="center">
        <!-- Left column: Image -->
        <BCol md="6" class="text-center">
          <img
            src="https://via.placeholder.com/300"
            alt="Profile"
            class="img-fluid rounded-circle"
          />
        </BCol>

        <!-- Right column: Text -->
        <BCol md="6" class="text-md-start text-center">
          <h1 class="text-light">Hi, I'm Manny</h1>
          <h2 class="text-warning">Fullstack Developer</h2>
          <p class="text-light">
            I build responsive and modern web applications with Vue, Node.js, and MongoDB.
          </p>
          <div class="mt-3">
            <router-link to="/portfolio" class="btn btn-primary me-2"> View My Work </router-link>
            <router-link to="/contact" class="btn btn-outline-light"> Contact Me </router-link>
          </div>
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>

<script setup>
import { BContainer, BRow, BCol } from 'bootstrap-vue-next'
</script>

<style scoped>
section {
  min-height: 100vh; /* full screen height */
  display: flex;
  align-items: center; /* center vertically */
}
</style>
