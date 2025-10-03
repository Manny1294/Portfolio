<script setup>
import {
  BContainer,
  BNavbar,
  BNavbarBrand,
  BNavbarToggle,
  BCollapse,
  BNavbarNav,
  BNavItem,
} from 'bootstrap-vue-next'

import { ref } from 'vue'

//state to track if the menu is open or closed
const isMenuOpen = ref(false)

//function to open the menu overlay
const openMenu = () => {
  isMenuOpen.value = true
}

//function to close the menu overlay
const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <BNavbar toggleable="md" class="py-3 nav-bar">
    <BContainer class="d-flex align-items-center justify-content-between">
      <!-- Brand -->
      <BNavbarBrand>
        <router-link to="/" class="logo">Manny.</router-link>
      </BNavbarBrand>

      <!-- Toggle Button (Mobile) -->
      <BNavbarToggle target="nav-collapse" class="custom-toggle">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#ededed">
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </BNavbarToggle>

      <!-- Collapsible Nav Links -->
      <BCollapse id="nav-collapse" is-nav class="mobile-overlay-nav">
        <BNavbarNav class="ms-auto">
          <BNavItem>
            <router-link to="/" class="nav-link" exact-active-class="active">Home</router-link>
          </BNavItem>
          <BNavItem>
            <router-link to="/about" class="nav-link" exact-active-class="active"
              >About</router-link
            >
          </BNavItem>
          <BNavItem>
            <router-link to="/services" class="nav-link" exact-active-class="active"
              >Services</router-link
            >
          </BNavItem>
          <BNavItem>
            <router-link to="/portfolio" class="nav-link" exact-active-class="active"
              >Portfolio</router-link
            >
          </BNavItem>
          <BNavItem>
            <router-link to="/contact" class="nav-link" exact-active-class="active"
              >Contact</router-link
            >
          </BNavItem>
        </BNavbarNav>
      </BCollapse>
    </BContainer>
  </BNavbar>

  <!-- Full screen overlay (Mobile Menu) -->
  <transition name="slide-overlay">
    <div v-if="isMenuOpen" class="mobile-overlay">
      <!-- Close Button  -->
      <button class="close-btn" @click="closeMenu">
        <i class="bi bi-arrow-left-short"></i>
      </button>

      <!-- Overlay Navigation Links (Mobile)-->
      <nav class="overlay-nav-links">
        <router-link to="/" class="overlay-link" @click="closeMenu">Home</router-link>
        <router-link to="/about" class="overlay-link" @click="closeMenu">Shop</router-link>
        <router-link to="/services" class="overlay-link" @click="closeMenu">About</router-link>
        <router-link to="/portfolio" class="overlay-link" @click="closeMenu">Contact</router-link>
        <router-link to="/contact" class="overlay-link" @click="closeMenu">Contact</router-link>
      </nav>
    </div>
  </transition>
</template>

<style scoped>
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 10px;
  background: #081b29;
}

.logo {
  font-size: 25px;
  color: #ededed;
  text-decoration: none;
  font-weight: 600;
}
.navbar-nav .nav-link {
  font-size: 18px;
  color: #ededed !important;
  transition: color 0.3s ease;
}

.navbar-nav .nav-link.active {
  color: #00abf0 !important;
  font-weight: bold;
}

.navbar-nav .nav-link:hover {
  color: #00abf0 !important;
}

/* OVERLAY MENU */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
/* CLOSE  BUTTON */
.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  color: black;
  cursor: pointer;
}

/* LINKS IN OVERLAY */
.overlay-nav-links {
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
}

.overlay-link {
  text-decoration: none;
  font-size: 20px;
  color: black;
  font-weight: bold;
}
.overlay-link:hover {
  color: rgba(220, 170, 60, 1);
}
/* Slide-in transition for overlay */
.slide-overlay-enter-active,
.slide-overlay-leave-active {
  transition: all 0.3s ease;
}

.slide-overlay-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-overlay-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-overlay-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.slide-overlay-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* Animate each overlay link */
.overlay-nav-links {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;
  padding: 0 20px;
}

.overlay-link {
  opacity: 0;
  transform: translateY(20px);
  animation: slideFadeIn 0.4s ease forwards;
}

/* Individual delays for staggered effect */
.overlay-link:nth-child(1) {
  animation-delay: 0.3s;
}
.overlay-link:nth-child(2) {
  animation-delay: 0.4s;
}
.overlay-link:nth-child(3) {
  animation-delay: 0.5s;
}
.overlay-link:nth-child(4) {
  animation-delay: 0.6s;
}

/* Keyframes */
@keyframes slideFadeIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
