<script setup>
import {
  BContainer,
  BNavbar,
  BNavbarBrand,
  BNavbarToggle,
  BNavbarNav,
  BNavItem,
} from 'bootstrap-vue-next'

import { ref, onMounted, onUnmounted } from 'vue'

// Track mobile menu open/close
const isMenuOpen = ref(false)

// Track active section
const activeSection = ref('home')

// Open menu
const openMenu = () => {
  isMenuOpen.value = true
}

// Close menu
const closeMenu = () => {
  isMenuOpen.value = false
}

// Handle scroll to update active section
const handleScroll = () => {
  const sections = [
    { id: 'home', element: document.querySelector('.home') },
    { id: 'about', element: document.getElementById('about') },
    { id: 'service', element: document.getElementById('service') },
    { id: 'projects', element: document.getElementById('projects') },
    { id: 'contact', element: document.getElementById('contact') },
  ]

  // Check which section is currently in view
  for (const section of sections) {
    if (section.element) {
      const rect = section.element.getBoundingClientRect()
      // Section is considered active if its top is within viewport
      if (rect.top <= 150 && rect.bottom >= 10) {
        activeSection.value = section.id
        break
      }
    }
  }

  // Default to home if at the top
  if (window.scrollY < 100) {
    activeSection.value = 'home'
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Check initial state
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <BNavbar toggleable="lg" fixed="top" class="py-3 nav-bar">
    <BContainer class="d-flex align-items-center justify-content-between">
      <!-- Logo -->
      <BNavbarBrand>
        <a href="#home" class="logo">Manny.</a>
      </BNavbarBrand>

      <!-- Hamburger (mobile) -->
      <BNavbarToggle @click="openMenu" class="custom-toggle">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#ededed">
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </BNavbarToggle>

      <!-- Desktop Nav -->
      <BNavbarNav class="d-none d-lg-flex">
        <BNavItem>
          <a href="#home" class="nav-link" :class="{ active: activeSection === 'home' }">Home</a>
        </BNavItem>
        <BNavItem>
          <a href="#about" class="nav-link" :class="{ active: activeSection === 'about' }">About</a>
        </BNavItem>
        <BNavItem>
          <a href="#service" class="nav-link" :class="{ active: activeSection === 'service' }"
            >Services</a
          >
        </BNavItem>
        <BNavItem>
          <a href="#projects" class="nav-link" :class="{ active: activeSection === 'projects' }"
            >Projects</a
          >
        </BNavItem>
        <BNavItem>
          <a href="#contact" class="nav-link" :class="{ active: activeSection === 'contact' }"
            >Contact</a
          >
        </BNavItem>
      </BNavbarNav>
    </BContainer>
  </BNavbar>

  <!-- Mobile Fullscreen Menu Overlay -->
  <transition name="slide-overlay">
    <div v-if="isMenuOpen" class="mobile-overlay">
      <!-- Close button -->
      <button class="close-btn" @click="closeMenu">
        <i class="bi bi-arrow-left-short"></i>
      </button>

      <!-- Mobile Nav Links -->
      <nav class="overlay-nav-links">
        <a
          href="#home"
          class="overlay-link"
          :class="{ active: activeSection === 'home' }"
          @click="closeMenu"
          >Home</a
        >
        <a
          href="#about"
          class="overlay-link"
          :class="{ active: activeSection === 'about' }"
          @click="closeMenu"
          >About</a
        >
        <a
          href="#service"
          class="overlay-link"
          :class="{ active: activeSection === 'service' }"
          @click="closeMenu"
          >Services</a
        >
        <a
          href="#projects"
          class="overlay-link"
          :class="{ active: activeSection === 'projects' }"
          @click="closeMenu"
          >Projects</a
        >
        <a
          href="#contact"
          class="overlay-link"
          :class="{ active: activeSection === 'contact' }"
          @click="closeMenu"
          >Contact</a
        >
      </nav>
    </div>
  </transition>
</template>

<style scoped>
/* Navbar styling */
.nav-bar {
  background: #081b29;
}
.nav-bar.scrolled {
  background-color: red;
}
/* Logo */
.logo {
  font-size: 25px;
  color: #ededed;
  text-decoration: none;
  font-weight: 600;
}

/* Desktop nav links */
.nav-link {
  font-size: 18px;
  color: #ededed !important;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link.active {
  color: #00abf0 !important;
  font-weight: bold;
}

.nav-link:hover {
  color: #00abf0 !important;
}

/* Hamburger (custom toggle) */
.custom-toggle {
  background: none;
  border: none;
  padding: 0;
  margin-left: auto;
  z-index: 1100;
}

/* Overlay menu (mobile) */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #081b29;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Close button */
.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 32px;
  color: #ededed;
  background: none;
  border: none;
  cursor: pointer;
}

/* Overlay links */
.overlay-nav-links {
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: center;
}

.overlay-link {
  font-size: 28px;
  color: #ededed;
  text-decoration: none;
  opacity: 0;
  transform: translateY(20px);
  animation: slideFadeIn 0.4s ease forwards;
}

.overlay-link.active {
  color: #00abf0 !important;
}

.overlay-link:hover {
  color: #00abf0;
}

/* Staggered animation */
.overlay-link:nth-child(1) {
  animation-delay: 0.2s;
}
.overlay-link:nth-child(2) {
  animation-delay: 0.3s;
}
.overlay-link:nth-child(3) {
  animation-delay: 0.4s;
}
.overlay-link:nth-child(4) {
  animation-delay: 0.5s;
}
.overlay-link:nth-child(5) {
  animation-delay: 0.6s;
}

@keyframes slideFadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Transition animation for the overlay */
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
</style>
