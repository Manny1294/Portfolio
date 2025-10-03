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
  <BNavbar toggleable="md" class="app-nav-bar py-2">
    <BContainer class="nav-container">
      <!-- Top Section: Hamburger, Brand Logo/Name , Icons (all inline) -->
      <div class="d-flex">
        <!-- Left side: Hamburger + Brand -->
        <div class="toggle-brand">
          <!-- Hamburger(only on mobile) -->

          <!--  Logo/Brand -->
          <BNavbarBrand>
            <router-link to="/" class="brand-logo-link">
              <span> Furniro</span>
            </router-link>
          </BNavbarBrand>
        </div>

        <!-- Right Side:  Icons (mobile  only) -->
        <div class="nav-icons">
          <i class="bi bi-person-exclamation"></i>
          <i class="bi bi-heart"></i>
          <!-- cart icon with  link to cart summary page -->
          <router-link to="/cart" class="cart-icon-wrapper">
            <i class="bi bi-cart"></i>
            <!-- only show if greater than 0 -->
            <span class="cart-count-badge" v-if="cartCount > 0">{{ cartCount }}</span>
          </router-link>
        </div>
      </div>

      <!-- Desktop nav-links -->
      <BCollapse id="nav-collapse" is-nav class="mobile-overlay-collapse">
        <BNavbarNav class="justify-content-center w-100">
          <BNavItem>
            <router-link to="/" class="nav-link">Home</router-link>
          </BNavItem>
          <BNavItem>
            <router-link to="/shop" class="nav-link">Shop</router-link>
          </BNavItem>
          <BNavItem>
            <router-link to="/about" class="nav-link">About</router-link>
          </BNavItem>
          <BNavItem>
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </BNavItem>
        </BNavbarNav>
      </BCollapse>
    </BContainer>
  </BNavbar>
</template>
