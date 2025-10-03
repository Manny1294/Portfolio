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
</script>

<template>
  <section id="service" class="service py-5">
    <BContainer>
      <h2 class="text-center mb-5">My Services</h2>
      <BRow class="g-4">
        <!-- Web Development -->
        <BCol cols="12" md="6" lg="4">
          <BCard class="h-100 text-center p-4 card-custom">
            <FontAwesomeIcon :icon="faGlobe" class="icon mb-3" />
            <h5>Web Development</h5>
            <BCardText>
              Building responsive and high-performance websites tailored to user needs.
            </BCardText>
          </BCard>
        </BCol>

        <!-- Frontend Engineering -->
        <BCol cols="12" md="6" lg="4">
          <BCard class="h-100 text-center p-4 card-custom">
            <FontAwesomeIcon :icon="faCode" class="icon mb-3" />
            <h5>Frontend Engineering</h5>
            <BCardText>
              Creating interactive, user-friendly interfaces with modern frameworks.
            </BCardText>
          </BCard>
        </BCol>

        <!-- Backend Development -->
        <BCol cols="12" md="6" lg="4">
          <BCard class="h-100 text-center p-4 card-custom">
            <FontAwesomeIcon :icon="faServer" class="icon mb-3" />
            <h5>Backend Development</h5>
            <BCardText> Designing and implementing scalable server-side logic and APIs. </BCardText>
          </BCard>
        </BCol>

        <!-- Database Design -->
        <BCol cols="12" md="6" lg="4">
          <BCard class="h-100 text-center p-4 card-custom">
            <FontAwesomeIcon :icon="faDatabase" class="icon mb-3" />
            <h5>Database Design</h5>
            <BCardText>
              Structuring and managing data with efficiency and security in mind.
            </BCardText>
          </BCard>
        </BCol>

        <!-- API Integration -->
        <BCol cols="12" md="6" lg="4">
          <BCard class="h-100 text-center p-4 card-custom">
            <FontAwesomeIcon :icon="faPlug" class="icon mb-3" />
            <h5>API Integration</h5>
            <BCardText>
              Connecting applications with third-party services for extended functionality.
            </BCardText>
          </BCard>
        </BCol>

        <!-- UI/UX Optimization -->
        <BCol cols="12" md="6" lg="4">
          <BCard class="h-100 text-center p-4 card-custom">
            <FontAwesomeIcon :icon="faPalette" class="icon mb-3" />
            <h5>UI/UX Optimization</h5>
            <BCardText> Enhancing usability and aesthetics to improve user experience. </BCardText>
          </BCard>
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>

<style lang="scss" scoped>
.service {
  background: #081b29;
  color: white;

  h2 {
    font-weight: bold;
  }

  .card-custom {
    background: #0d2a3f;
    border: none;
    border-radius: 12px;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    }

    .icon {
      font-size: 2rem;
      color: #00d4ff;
    }
  }
}
</style>
