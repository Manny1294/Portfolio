<script setup>
import { BContainer, BRow, BCol, BCard } from 'bootstrap-vue-next'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

// Example project data
const projects = [
  {
    title: 'vizitly',
    desc: 'A flexible, customizable visitor management platform designed to streamline guest check-ins and enhance security.',
    image: '/furniro.png',
    github: null,
    live: 'https://furniro-oi61.onrender.com/',
  },
  {
    title: 'Furniro',
    desc: 'Fullstack online store with checkout, authentication, and admin dashboard.',
    image: '/furniro.png',
    github: 'https://github.com/MannyLighthaus/ecommerce-frontend',
    live: 'https://furniro-oi61.onrender.com/',
  },
  {
    title: 'Taskify',
    desc: 'A productivity app that helps users organize tasks, mark progress, and stay on track with a fullstack architecture.',
    image: '/todo.png',
    github: 'https://github.com/yourname/todo-app',
    live: 'https://magnificent-taffy-f46b6c.netlify.app',
  },
  {
    title: 'First Project (Early HTML/CSS Portfolio)',
    desc: 'My very first portfolio built with plain HTML and CSS — a simple project that marked the beginning of my web development journey.',
    image: 'portfolio.png',
    github: 'https://github.com/Manny1294/manny.portfolio',
    live: null,
  },
]
</script>

<template>
  <section id="projects" class="projects">
    <BContainer>
      <h2 class="projects__title mb-5">Featured Projects</h2>
      <BRow class="g-4">
        <BCol cols="12" md="6" lg="4" v-for="(project, i) in projects" :key="i">
          <BCard class="project__card h-100 text-center">
            <!-- Image at the top -->
            <img :src="project.image" alt="project screenshot" class="project__image" />
            <!-- Content -->
            <div class="p-3">
              <h5 class="project__card-title">{{ project.title }}</h5>
              <p class="project__card-desc">
                {{ project.desc }}
              </p>
              <div class="d-flex justify-content-center gap-3 mt-3">
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  class="project__link"
                >
                  <FontAwesomeIcon :icon="faGithub" /> Code
                </a>
                <a v-if="project.live" :href="project.live" target="_blank" class="project__link">
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
  padding-top: 100px;

  &__title {
    font-size: 32px;
    color: #00abf0;
    font-weight: 600;
    text-align: center;
  }
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
  color: #fff;
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
</style>
