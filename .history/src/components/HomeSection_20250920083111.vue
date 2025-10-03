<script setup>
import { BContainer, BRow, BCol, BButton } from 'bootstrap-vue-next'
</script>
<template>
  <section class="home">
    <BContainer>
      <BRow>
        <BCol md="6" class="home__content">
          <!-- Title with highlighted name -->
          <h1 class="home__title">Hi, I'm <span class="home__highlight">Emmanuel Odili</span></h1>

          <!-- Subtitle -->
          <h3 class="home__subtitle">Software Engineer</h3>

          <!-- Description -->
          <p class="home__description">
            As a Lagos-based Full-Stack web developer, I specialize in crafting engaging digital
            solutions and pushing the boundaries of innovative design
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
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  text-align: center;
  background: url('/hero.jpg') no-repeat center center/cover;
  color: #fff;

  &__title {
    font-size: 56px;
    font-weight: 700;
    color: white;
    animation: fadeUp 0.6s ease forwards;
    animation-delay: 0.2s; /* staggers the animations so elements appear one by one. */

    @media (max-width: 768px) {
      font-size: 36px;
    }
    @media (max-width: 430px) {
      font-size: 28px;
    }
  }
  &__subtitle {
    font-size: 32px;
    font-weight: 700;
    margin: 1rem 0;
    animation: fadeUp 0.6s ease forwards;
    animation-delay: 0.4s;

    @media (max-width: 768px) {
      font-size: 24px;
    }

    @media (max-width: 430px) {
      font-size: 18px;
    }
  }
  &__description {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    animation: fadeIn 0.8s ease forwards;
    animation-delay: 0.6s;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 430px) {
      font-size: 0.9rem;
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
