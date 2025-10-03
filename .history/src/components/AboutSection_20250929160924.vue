<script setup>
import { BContainer, BRow, BCol, BCard } from 'bootstrap-vue-next'

// Example tech stack data
const skills = [
  { name: 'Vue.js', icon: '/icons/vue.svg' },
  { name: 'Node.js', icon: '/icons/node.svg' },
  { name: 'MongoDB', icon: '/icons/mongo.svg' },
  { name: 'JavaScript', icon: '/icons/js.svg' },
  { name: 'HTML5', icon: '/icons/html.svg' },
  { name: 'CSS3', icon: '/icons/css.svg' },
]
</script>

<template>
  <section id="about" class="about">
    <BContainer>
      <h2 class="about__title mb-5">About Me</h2>
      <BRow class="align-items-center mb-5">
        <BCol cols="12" md="8" class="mx-auto text-center">
          <p class="about__text">
            I’m Emmanuel Odili, a software engineer who transitioned from a background in
            <span class="about__highlight">medical science</span> to tech. My passion lies in
            solving problems and crafting digital products that make people’s lives easier.
          </p>
          <p class="about__text">
            I enjoy working across the full stack — from building intuitive frontends to creating
            robust backends. Collaboration, continuous learning, and curiosity drive the way I
            approach every project.
          </p>
        </BCol>
      </BRow>

      <!-- Tech Stack Section -->
      <h3 class="about__subtitle mb-4 text-center">Tech Stack</h3>
      <BRow class="g-4 justify-content-center">
        <BCol cols="6" sm="4" md="3" lg="2" v-for="(skill, i) in skills" :key="i">
          <BCard class="about__skill-card text-center">
            <img :src="skill.icon" :alt="skill.name" class="about__skill-icon mb-2" />
            <p class="about__skill-name">{{ skill.name }}</p>
          </BCard>
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>

<style lang="scss" scoped>
.about {
  background: #081b29;
  color: white;
  padding: 60px 0;

  &__title {
    font-size: 32px;
    color: #00abf0;
    font-weight: 600;
    text-align: center;
  }

  &__subtitle {
    font-size: 24px;
    font-weight: 600;
    color: #00abf0;
  }

  &__text {
    font-size: 16px;
    color: #ddd;
    line-height: 1.7;
    margin-bottom: 15px;

    .about__highlight {
      color: #00abf0;
      font-weight: 600;
    }
  }

  &__skill-card {
    background: #0a2238;
    border: none;
    border-radius: 12px;
    padding: 20px;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }
  }

  &__skill-icon {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }

  &__skill-name {
    font-size: 14px;
    color: #fff;
    margin: 0;
    font-weight: 500;
  }
}
</style>
