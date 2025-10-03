<script setup>
import { BContainer, BRow, BCol } from 'bootstrap-vue-next'
</script>
<template>
  <section id="contact" class="contact">
    <BContainer>
      <BRow class="text-center">
        <BCol md-6 class="contact__content">
          <p class="contact__title">
            Got a cool idea or a big dream? Don't hesistate to hit me up. Let's turn it into
            reality! You can reach me at:
          </p>
          <a href="mailto:odiliosezua@gmail.com" class="contact__mail">odiliosezua@gmail.com</a>
          <p class="contact__subtitle">
            You could also
            <span class="contact__highlight"
              ><a href="/public/Emmanuel_odili_osezua.pdf" download class="resume-link"
                >read my resume</a
              ></span
            >, or find me on these platforms :
          </p>
        </BCol></BRow
      >
    </BContainer>
  </section>
</template>
<style lang="scss" scoped>
.contact {
  background: #081b29;
  color: white;
  padding-top: 20px;

  &__mail {
    color: #00abf0;

    @media (min-width: 768px) {
      font-size: 38px;
    }
  }

  &__highlight {
    color: #00abf0;
  }
}
</style>
