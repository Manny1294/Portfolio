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
            <h1 class="home__title">
              Hi, I'm
              <span class="home__highlight">
                <span>E</span><span>m</span><span>m</span><span>a</span><span>n</span><span>u</span
                ><span>e</span><span>l</span>
                <span class="space"> </span>
                <span>O</span><span>d</span><span>i</span><span>l</span><span>i</span>
              </span>
            </h1>
            <h3 class="home__subtitle">Software Engineer</h3>
            <p class="home__description">
              As a Lagos-based <i class="home__description-emphasis">full-Stack</i> software
              engineer, I specialize in crafting engaging digital experiences and solving intricate
              design problems.
            </p>
          </div>

          <!-- Buttons wrapper -->
          <div class="d-flex gap-4 justify-content-center mt-5">
            <BButton class="home__button" href="#portfolio">see works</BButton>
            <BButton class="home__button" href="#contact">contact me</BButton>
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
    font-size: 30px;
    font-weight: 600;
    color: white;
    margin: 0;
    animation: fadeUp 0.6s ease forwards;
    animation-delay: 0.2s; /* staggers the animations so elements appear one by one. */

    @media (min-width: 769px) {
      font-size: 56px;
    }
  }
  &__subtitle {
    font-size: 24px;
    font-weight: 500;
    margin: 0;
    animation: fadeUp 0.6s ease forwards;
    animation-delay: 0.4s;

    @media (min-width: 769px) {
      font-size: 48px;
    }
  }
  &__description {
    font-size: 20px;
    margin: 0;

    animation: fadeIn 0.8s ease forwards;
    animation-delay: 0.6s;

    @media (min-width: 769px) {
      font-size: 32px;
    }
    &-emphasis {
      color: #00abf0;
      font-weight: 600;
    }
  }
  &__highlight {
    color: #00abf0; /* name highlight */

    .space {
      display: inline-flex;
      width: 0.5rem; //keeps a visible space
    }

    span {
      display: inline-block;
      opacity: 0;
      transform: translateY(20px);
      animation: fadeUp 0.5s forwards;
    }
    span:nth-child(1) {
      animation-delay: 0.1s;
    }
    span:nth-child(2) {
      animation-delay: 0.2s;
    }
    span:nth-child(3) {
      animation-delay: 0.3s;
    }
    span:nth-child(4) {
      animation-delay: 0.4s;
    }
    span:nth-child(5) {
      animation-delay: 0.5s;
    }
    span:nth-child(6) {
      animation-delay: 0.6s;
    }
    span:nth-child(7) {
      animation-delay: 0.7s;
    }
    span:nth-child(8) {
      animation-delay: 0.8s;
    }
    span:nth-child(9) {
      animation-delay: 0.9s;
    }
    span:nth-child(10) {
      animation-delay: 1s;
    }
    span:nth-child(11) {
      animation-delay: 1.1s;
    }
    span:nth-child(12) {
      animation-delay: 1.2s;
    }
    span:nth-child(13) {
      animation-delay: 1.3s;
    }
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
