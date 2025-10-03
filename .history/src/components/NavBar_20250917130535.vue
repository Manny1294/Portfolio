<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/AboutView">About</router-link></li>
    </ul>
  </nav>
</template>

<script setup></script>

<style scoped>
nav {
  background: transparent;
  padding: 1rem;
}
ul {
  display: flex;
  list-style: none;
  gap: 1rem;
  margin: 0;
  padding: 0;
}
li a {
  color: white;
  text-decoration: none;
}
</style>
