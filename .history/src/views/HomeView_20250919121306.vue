<script setup>
import { BContainer, BRow, BCol, BButton } from 'bootstrap-vue-next'
</script>
<template>
  <section class="home">
    <BContainer>
      <BRow class="home__row">
        <!-- Text (Left) -->
        <BCol md="6" class="home__content">
          <h1 class="home__title">Hi, I'm Emmanuel Odili</h1>
          <h3 class="home__subtitle">Full-Stack Software Engineer</h3>
          <p class="home__description">
            I build responsive and modern web applications with Vue, Node.js, and MongoDB.
          </p>
          <BButton variant="primary" class="home__button">Hire Me</BButton>
        </BCol>

        <!-- Image (Right) -->
        <BCol md="6" class="home__image-wrapper text-center">
          <BImg
            src="https://via.placeholder.com/400x400"
            fluid
            alt="My Portfolio Picture"
            class="home__image"
          />
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>

<style lang="scss" scoped></style>
