<script setup>
import { BContainer, BRow, BCol, BButton } from 'bootstrap-vue-next'
</script>
<template>
  <section class="home">
    <BContainer>
      <BRow>
        <BCol class="home__content d-flex flex-column gap-3">
          <!-- Title with highlighted name -->
          <h1 class="home__title">Hi, I'm <span class="home__highlight">Emmanuel Odili</span></h1>

          <!-- Subtitle -->
          <h3 class="home__subtitle">Software Engineer</h3>

          <!-- Description -->
          <p class="home__description">
            As a Lagos-based <i class="text-emphasis">full-Stack</i> web developer, I specialize in
            crafting engaging digital experiences and solving intricate design problems
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
  height: 100vh;
  display: flex;
  align-items: center;
  background: url('/hero.jpg') no-repeat center center/cover;
  color: #fff;
  padding: 80px 0;

  &__title {
    font-size: 32px;
    font-weight: 900;
    color: white;
    margin: 0;
    animation: fadeUp 0.6s ease forwards;
    animation-delay: 0.2s; /* staggers the animations so elements appear one by one. */

    @media (min-width: 769px) {
      font-size: 76px;
    }
  }
  &__subtitle {
    font-size: 32px;
    font-weight: 700;
    margin: 0;
    animation: fadeUp 0.6s ease forwards;
    animation-delay: 0.4s;

    @media (min-width: 769px) {
      font-size: 56px;
    }
  }
  &__description {
    font-size: 20px;
    animation: fadeIn 0.8s ease forwards;
    animation-delay: 0.6s;

    @media (min-width: 769px) {
      font-size: 32px;
    }
  }
  &__highlight {
    color: #00abf0; /* name highlight */
  }
  &__button {
    font-weight: 600;
    animation: popIn 0.5s ease forwards;
    animation-delay: 0.8s;
  }

  /* Keyframes */

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
