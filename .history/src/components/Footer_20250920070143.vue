<script setup></script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Left: Copyright -->
      <p class="mb-0">&copy; 2025 Manny. All rights reserved.</p>

      <!-- Right: Social links -->
      <div class="social-links">
        <a href="https://x.com/yourusername" target="_blank">X</a>
        <a href="https://github.com/yourusername" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a>
        <a href="mailto:odiliosezua@gmail.com">Email</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #081b29; /* Same dark background */
  color: #ededed; /* Light text */
  padding: 20px 0;
  margin-top: auto; /* Push footer to bottom when content is short */
  border-top: 1px solid #1e2e3e; /* Subtle divider */
  font-size: 14px;
}

.footer-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; /* Stack items on small screens */
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-links a {
  color: #ededed;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #00abf0; /* Accent color */
}
</style>
