<script setup>
import {
  BNavbar,
  BNavbarBrand,
  BNavbarToggle,
  BCollapse,
  BNavbarNav,
  BNavItem,
} from 'bootstrap-vue-next'
</script>

<template>
  <BNavbar toggleable="lg" variant="light" fixed="top" class="custom-navbar">
    <BNavbarBrand href="#">Emmanuel</BNavbarBrand>

    <!-- Toggler shows on mobile/tablet -->
    <BNavbarToggle target="nav-collapse" />

    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav class="ms-auto">
        <BNavItem href="#home">Home</BNavItem>
        <BNavItem href="#about">About</BNavItem>
        <BNavItem href="#projects">Projects</BNavItem>
        <BNavItem href="#contact">Contact</BNavItem>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>

<style scoped>
.custom-navbar {
  background: transparent;
  transition: background-color 0.3s ease;
}
.custom-navbar.scrolled {
  background-color: #111; /* change to what you like */
}
</style>
