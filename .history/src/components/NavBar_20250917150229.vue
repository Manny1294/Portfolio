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
</script>

<template>
  <BNavbar toggleable="md" class="py-3 nav-bar">
    <BContainer class="d-flex align-items-center justify-content-between">
      <!-- Brand -->
      <BNavbarBrand>
        <router-link to="/" class="logo">Manny.</router-link>
      </BNavbarBrand>

      <!-- Toggle Button (Mobile) -->
      <BNavbarToggle target="nav-collapse" />

      <!-- Collapsible Nav Links -->
      <BCollapse id="nav-collapse" is-nav>
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
</template>

<style>
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 10px;
  background: yellowgreen;
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
  color: red !important;
  font-weight: bold;
}

.navbar-nav .nav-link:hover {
  color: #00abf0 !important;
}
</style>
