<script setup>
import { BContainer, BRow, BCol, BButton, BImg } from 'bootstrap-vue-next'
import heroImage from '@/assets/hero.jpeg'
</script>
<template>
  <section class="home">
    <BContainer>
      <BRow class="justify-content-center text-center">
        <!-- Text -->
        <BCol md="6" class="home__content">
          <h1 class="home__title">Hi, I'm Emmanuel Odili</h1>
          <h3 class="home__subtitle">Full-Stack Software Engineer</h3>
          <p class="home__description">
            I’m a full-stack software engineer passionate about building responsive, user-friendly
            applications. I work with modern tools like Vue.js, Node.js, and MongoDB to create
            solutions that are fast, scalable, and meaningful. I enjoy turning ideas into functional
            digital products that make an impact.
          </p>
          <BButton variant="primary" class="home__button">Hire Me</BButton>
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>

<style lang="scss" scoped>
.home {
  min-height: 100vh; /* full screen height */
  display: flex;
  align-items: center;
  background: url url(v-bind(heroImage)) no-repeat center center/cover; /* ✅ */
  color: #fff; /* make text visible on dark image */

  &__title {
    font-size: 56px;
    font-weight: 700;
    color: white;
  }
  &__subtitle {
    font-size: 32px;
    font-weight: 700;
    color: #00abf0;
  }
  &__description {
    color: white;
  }
}
</style>
