<script setup>
import {
  BContainer,
  BNavbar,
  BNavbarBrand,
  BCollapse,
  BNavbarNav,
  BNavItem,
} from 'bootstrap-vue-next'
</script>

<template>
  <BNavbar toggleable="md" class="app-nav-bar py-3">
    <BContainer class="nav-container">
      <!-- Top Section: Hamburger, Brand Logo/Name , Icons (all inline) -->
      <div class="d-flex">
        <!-- Left side: Hamburger + Brand -->
        <div class="toggle-brand">
          <!-- Hamburger(only on mobile) -->

          <!--  Brand -->
          <BNavbarBrand>
            <router-link to="/" class="brand-logo-link">
              <span> Manny</span>
            </router-link>
          </BNavbarBrand>
        </div>
      </div>

      <!-- Desktop nav-links -->
      <BCollapse id="nav-collapse" is-nav class="mobile-overlay-collapse">
        <BNavbarNav class="justify-content-center w-100">
          <BNavItem>
            <router-link to="/" class="nav-link">Home</router-link>
          </BNavItem>
          <BNavItem>
            <router-link to="/about" class="nav-link">About</router-link>
          </BNavItem>
          <BNavItem>
            <router-link to="/services" class="nav-link">Services</router-link>
          </BNavItem>
          <BNavItem>
            <router-link to="/portfolio" class="nav-link">Portfolio</router-link>
          </BNavItem>
          <BNavItem>
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </BNavItem>
        </BNavbarNav>
      </BCollapse>
    </BContainer>
  </BNavbar>
</template>
