<script setup>
import { BContainer, BRow, BCol } from 'bootstrap-vue-next'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXTwitter, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/free-brands-svg-icons'
</script>
<template>
  <section id="contact" class="contact">
    <BContainer>
      <BRow>
        <BCol md-6 class="d-flex flex-column gap-4 text-center">
          <div class="contact__content">
            <p class="contact__title">
              Got a cool idea or a big dream? Don't hesistate to hit me up. Let's turn it into
              reality! You can reach me at:
            </p>
            <a href="mailto:odiliosezua@gmail.com" class="contact__mail">odiliosezua@gmail.com</a>
            <p class="contact__subtitle">
              You could also
              <span
                ><a href="/public/Emmanuel_odili_osezua.pdf" download class="contact__resume-link"
                  >read my resume</a
                ></span
              >, or find me on these platforms :
            </p>
          </div>
          <div class="contact__social-links">
            <a href="https://x.com/IamOsezua" target="_blank"
              ><FontAwesomeIcon :icon="faXTwitter"
            /></a>
            <a href="https://github.com/Manny1294" target="_blank"
              ><FontAwesomeIcon :icon="faGithub"
            /></a>
            <a href="https://linkedin.com/in/yourusername" target="_blank">
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
  padding-top: 20px;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__title {
    margin: 0;
  }
  &__subtitle {
    margin: 0;
  }
  &__mail {
    color: #00abf0;

    @media (min-width: 768px) {
      font-size: 38px;
    }
  }

  &__resume-link {
    color: #00abf0;
  }

  &__social-links {
    display: flex;
    gap: 20px;
    font-size: 1.5rem;
    align-items: center;
    justify-content: center;

    a {
      color: #00abf0;

      &:hover {
        color: #fff; // hover color
        transform: scale(1.2); // pop-up effect
      }
    }
  }
}
</style>
