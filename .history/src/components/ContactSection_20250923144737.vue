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
            <span
              ><a href="/public/Emmanuel_odili_osezua.pdf" download class="contact__resume-link"
                >read my resume</a
              ></span
            >, or find me on these platforms :
          </p>
          <div class="social-links">
            <a href="https://wa.me/2349051775119" target="_blank">X</a>
            <a href="https://github.com/yourusername" target="_blank">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" target="_blank"
              ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <!--!Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                <path
                  d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z"
                /></svg
            ></a>
            <a href="mailto:odiliosezua@gmail.com">Email</a>
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

  &__mail {
    color: #00abf0;

    @media (min-width: 768px) {
      font-size: 38px;
    }
  }

  &__resume-link {
    color: #00abf0;
  }
}
</style>
