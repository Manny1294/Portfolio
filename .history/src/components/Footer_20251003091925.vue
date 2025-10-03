<script setup></script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <p class="mb-0">&copy; 2025 Manny. All rights reserved.</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: #081b29; /* Same dark background */
  color: #ededed; /* Light text */
  padding: 20px 0;
  margin-top: auto; /* Push footer to bottom when content is short */
  border-top: 1px solid #1e2e3e; /* Subtle divider */
  font-size: 12px;

  @media (min-width: 769px) {
    font-size: 16px;
  }

  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
