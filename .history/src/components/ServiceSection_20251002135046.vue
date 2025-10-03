<script setup>
import { BContainer, BRow, BCol, BCard, BCardText } from 'bootstrap-vue-next'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faGlobe,
  faCode,
  faServer,
  faDatabase,
  faPlug,
  faPalette,
} from '@fortawesome/free-solid-svg-icons'

const services = [
  {
    icon: faGlobe,
    title: 'Web Development',
    desc: 'Building responsive and high-performance websites tailored to user needs.',
  },
  {
    icon: faCode,
    title: 'Frontend Engineering',
    desc: 'Creating interactive, user-friendly interfaces with modern frameworks.',
  },
  {
    icon: faServer,
    title: 'Backend Development',
    desc: 'Designing and implementing scalable server-side logic and APIs.',
  },
  {
    icon: faDatabase,
    title: 'Database Design',
    desc: 'Structuring and managing data with efficiency and security in mind.',
  },
  {
    icon: faPlug,
    title: 'API Integration',
    desc: 'Connecting applications with third-party services for extended functionality.',
  },
  {
    icon: faPalette,
    title: 'UI/UX Optimization',
    desc: 'Enhancing usability and aesthetics to improve user experience.',
  },
]
</script>

<template>
  <section id="service" class="service">
    <BContainer>
      <h2 class="service__title text-center mb-5">My Services</h2>
      <BRow class="g-3">
        <BCol cols="12" md="6" lg="4" v-for="(service, index) in services" :key="index">
          <BCard class="h-100 text-center p-4 service__card">
            <div class="service__icon-wrap mb-3">
              <FontAwesomeIcon :icon="service.icon" class="service__icon" />
            </div>
            <h5 class="service__card-title">{{ service.title }}</h5>
            <BCardText class="service__card-desc">
              {{ service.desc }}
            </BCardText>
          </BCard>
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>

<style lang="scss" scoped>
.service {
  background: #081b29;
  padding: 80px 0;
  padding-top: 100px;
  padding-bottom: 50px;

  &__title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color: #fff;
  }

  &__card {
    background: #0d2a3f;
    border: none;
    border-radius: 10px;
    transition: all 0.3s ease;
    color: #fff;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
    }
  }

  &__icon-wrap {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: rgba(0, 171, 240, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  &__icon {
    font-size: 1.5rem;
    color: #00abf0;
  }

  &__card-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    margin-top: 15px;
    margin-bottom: 10px;
  }

  &__card-desc {
    font-family: 'Public Sans', sans-serif;
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.85);
  }
}
</style>
