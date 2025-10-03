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
  <BNavbar toggleable="md" type="dark" variant="dark" class="bg-dark py-3 app-nav-bar">
    <BContainer>
      <!-- Brand -->
      <BNavbarBrand>
        <router-link to="/" class="text-white text-decoration-none h4 mb-0">Manny</router-link>
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
