<script setup>
import { BContainer, BRow, BCol, BButton } from 'bootstrap-vue-next'
</script>

<template>
  <section class="home">
    <BContainer>
      <BRow>
        <BCol class="d-flex flex-column text-center align-items-center">
          <!-- Texts wrapper -->
          <div class="d-flex flex-column gap-3 text-center">
            <h1 class="home__title">Hi, I'm <span class="home__highlight">Emmanuel Odili</span></h1>
            <h3 class="home__subtitle">Software Engineer</h3>
            <p class="home__description">
              As a Lagos-based <i class="text-emphasis">full-Stack</i> web developer, I specialize
              in crafting engaging digital experiences and solving intricate design problems
            </p>
          </div>

          <!-- Buttons wrapper -->
          <div class="d-flex gap-4 justify-content-center mt-5">
            <BButton class="home__button">Hire Me</BButton>
            <BButton class="home__button">Portfolio</BButton>
          </div>
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
    margin: 0;
    // text-align: center;
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
    background-color: #00abf0;
    border: none;
    font-weight: 600;
    padding: 12px 28px;
    border-radius: 6px;
    color: #fff;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &:hover {
      background-color: #081b29;
      transform: translateY(-2px);
    }
    &:active {
      transform: translateY(0);
    }
    // pulse effect
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background: #4e12a8; // pulse color
      z-index: -1;
      animation: pulse 1.5s ease infinite;
    }
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
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.7;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.3;
    }
    100% {
      transform: scale(1);
      opacity: 0.7;
    }
  }
}
</style>
