<script setup>
import { BContainer, BRow, BCol, BCard, BCardText, BButton } from 'bootstrap-vue-next'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

// Example project data
const projects = [
  {
    title: 'Furniro',
    desc: 'Fullstack online store with checkout, authentication, and admin dashboard.',
    image: '/hero.jpg',
    github: 'https://github.com/MannyLighthaus/ecommerce-frontend',
    live: 'https://furniro-oi61.onrender.com/',
  },
  {
    title: 'Portfolio Website',
    desc: 'Personal portfolio built with Vue & Nuxt showcasing skills and projects.',
    image: '/projects/portfolio.png',
    github: 'https://github.com/yourname/portfolio',
    live: 'https://yourportfolio.com',
  },
  {
    title: 'Chat Application',
    desc: 'Real-time chat app using Node.js, Socket.IO, and MongoDB.',
    image: '/projects/chatapp.png',
    github: 'https://github.com/yourname/chatapp',
    live: 'https://chatapp-demo.com',
  },
]
</script>

<template>
  <section id="projects" class="projects">
    <BContainer>
      <h2 class="projects__title mb-5">Featured Projects</h2>
      <BRow g-3>
        <BCol cols="12" md="6" lg="4" v-for="(project, i) in projects" :key="i">
          <BCard class="h-100 project__card">
            <img :src="project.image" alt="project screenshot" class="project__image" />
            <div class="p-3 text-center">
              <h5 class="project__card-title">{{ project.title }}</h5>
              <BCardText class="project__card-desc">
                {{ project.desc }}
              </BCardText>
              <div class="d-flex justify-content-center gap-3 mt-3">
                <a :href="project.github" target="_blank" class="project__link">
                  <FontAwesomeIcon :icon="faGithub" /> Code
                </a>
                <a :href="project.live" target="_blank" class="project__link">
                  <FontAwesomeIcon :icon="faExternalLinkAlt" /> Live
                </a>
              </div>
            </div>
          </BCard>
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>

<style lang="scss" scoped>
.projects {
  background: #081b29;
  color: white;
  padding: 60px 0;

  &__title {
    font-size: 32px;
    color: #00abf0;
    font-weight: 600;
  }

  .project__card {
    background: #0a2238;
    border: none;
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }
  }

  .project__image {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  .project__card-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .project__card-desc {
    font-size: 14px;
    color: #ddd;
  }

  .project__link {
    color: #00abf0;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      color: white;
    }
  }
}
</style>
