<script setup>
import { BContainer, BRow, BCol, BButton } from 'bootstrap-vue-next'
</script>
<template>
  <section class="home">
    <BContainer>
      <BRow class="justify-content-center text-center">
        <BCol md="6" class="home__content">
          <!-- Title with highlighted name -->
          <h1 class="home__title">Hi, I'm <span class="home__highlight">Emmanuel Odili</span></h1>

          <!-- Subtitle -->
          <h3 class="home__subtitle">Full-Stack Software Engineer</h3>

          <!-- Description -->
          <p class="home__description">
            I’m a full-stack software engineer passionate about building responsive, user-friendly
            applications. I work with modern tools like Vue.js, Node.js, and MongoDB to create
            solutions that are fast, scalable, and meaningful. I enjoy turning ideas into functional
            digital products that make an impact.
          </p>

          <!-- Call-to-action button -->
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
  background: url('/hero.jpg') no-repeat center center/cover;
  color: #fff;

  &__title {
    font-size: 56px;
    font-weight: 700;
    color: white;
    animation: fadeUp 0.6s ease forwards;
    animation-delay: 0.2s;
  }
  &__subtitle {
    font-size: 32px;
    font-weight: 700;
    margin: 1rem 0;
  }
  &__description {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
  &__highlight {
    color: #00abf0; /* name highlight */
  }
  &__button {
    font-weight: 600;
  }

  @keyframes fadeUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes popIn {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
}
</style>
