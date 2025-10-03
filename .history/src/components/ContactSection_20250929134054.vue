<script setup>
import { BContainer, BRow, BCol } from 'bootstrap-vue-next'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXTwitter, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
</script>

<template>
  <section id="contact" class="contact">
    <BContainer>
      <BRow class="justify-content-center">
        <BCol md="8" class="d-flex flex-column gap-4 text-center">
          <!-- Text Content -->
          <div class="contact__content">
            <p class="contact__title">
              Got a cool idea or a big dream? Don’t hesitate to hit me up. Let’s turn it into
              reality! You can reach me at:
            </p>

            <a href="mailto:odiliosezua@gmail.com" class="contact__mail"> odiliosezua@gmail.com </a>

            <p class="contact__subtitle">
              You could also
              <a href="/public/Emmanuel_odili_osezua.pdf" download class="contact__resume-link">
                read my resume </a
              >, or find me on these platforms:
            </p>
          </div>

          <!-- Social Icons -->
          <div class="contact__social-links">
            <a href="https://x.com/IamOsezua" target="_blank" aria-label="Twitter">
              <FontAwesomeIcon :icon="faXTwitter" />
            </a>
            <a href="https://github.com/Manny1294" target="_blank" aria-label="GitHub">
              <FontAwesomeIcon :icon="faGithub" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" aria-label="LinkedIn">
              <FontAwesomeIcon :icon="faLinkedinIn" />
            </a>
          </div>
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  background: #081b29;
  color: white;
  padding: 80px 0;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-family: 'Public Sans', sans-serif;
  }

  &__title {
    margin: 0;
    font-size: 1.2rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.9);

    @media (min-width: 768px) {
      font-size: 1.4rem;
    }
  }

  &__mail {
    color: #00abf0;
    font-weight: 600;
    text-decoration: none;
    font-size: 1.3rem;
    transition: color 0.3s ease;

    &:hover {
      color: #fff;
    }

    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }

  &__subtitle {
    margin: 0;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.85);
  }

  &__resume-link {
    color: #00abf0;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      color: #fff;
    }
  }

  &__social-links {
    display: flex;
    justify-content: center;
    gap: 24px;
    font-size: 1.6rem;
    margin-top: 10px;

    a {
      color: #00abf0;
      transition: all 0.3s ease;

      &:hover {
        color: #fff;
        transform: scale(1.2);
      }
    }
  }
}
</style>
