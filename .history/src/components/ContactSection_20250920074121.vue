<script setup>
import { BContainer, BRow, BCol } from 'bootstrap-vue-next'
</script>
<template>
  <section id="contact" class="contact">
    <BContainer>
      <BRow>
        <BCol>
          <p class="contact__title">
            Got a cool idea or a big dream? Don't hesistate to hit me up. Let's turn it into
            reality! You can reach me at:
          </p>
          <a href="mailto:odiliosezua@gmail.com">odiliosezua@gmail.com</a>
          <p>
            You could also
            <span
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
  text-align: center;
  color: white;
  padding-top: 20px;
}
</style>
