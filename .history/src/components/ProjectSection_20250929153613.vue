<script setup>
import { BContainer, BRow, BCol, BCard, BCardText } from 'bootstrap-vue-next'
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
    title: 'Taskify',
    desc: 'A productivity app that helps users organize tasks, mark progress, and stay on track with a fullstack architecture.',
    image: '/todo-app.png',
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
      <BRow class="g-4">
        <BCol cols="12" md="6" lg="4" v-for="(project, i) in projects" :key="i">
          <BCard class="project__card">
            <!-- Background image -->
            <img :src="project.image" alt="project screenshot" class="project__bg" />
            <!-- Overlay -->
            <div class="project__overlay"></div>
            <!-- Content -->
            <div class="project__content">
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
    text-align: center;
  }
}

.project__card {
  position: relative;
  border: none;
  border-radius: 12px;
  overflow: hidden;
  height: 250px;
  display: flex;
  align-items: flex-end;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
}

.project__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  z-index: 1;

  .project__card:hover & {
    transform: scale(1.05);
  }
}

.project__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2));
  transition: background 0.3s ease;
  z-index: 2;

  .project__card:hover & {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1));
  }
}

.project__content {
  position: relative;
  z-index: 3;
  color: white;
  padding: 20px;
  text-align: center;
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
</style>
