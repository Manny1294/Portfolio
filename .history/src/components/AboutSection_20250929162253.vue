<template>
  <section id="about" class="about">
    <div class="container text-center">
      <h2 class="mb-4">About Me</h2>
      <p class="about__text mb-5">
        I'm a full-stack developer passionate about building user-friendly and scalable web
        applications. I work with modern technologies and enjoy collaborating on impactful projects.
      </p>

      <!-- Tech stack icons -->
      <div class="d-flex flex-wrap justify-content-center gap-4">
        <!-- <img src="/icons/html5.svg" alt="HTML5" class="tech-icon" />
        <img src="/icons/css3.svg" alt="CSS3" class="tech-icon" />
        <img src="/icons/javascript.svg" alt="JavaScript" class="tech-icon" />
        <img src="/icons/vuejs.svg" alt="Vue.js" class="tech-icon" />
        <img src="/icons/nodejs.svg" alt="Node.js" class="tech-icon" />
        <img src="/icons/mongodb.svg" alt="MongoDB" class="tech-icon" /> -->
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: #081b29;
  color: #fff;
  padding: 60px 0;
}

.about__text {
  font-size: 16px;
  max-width: 700px;
  margin: 0 auto;
  color: #ddd;
}

.tech-icon {
  width: 60px;
  height: 60px;
  transition: transform 0.3s ease;
}

.tech-icon:hover {
  transform: scale(1.1);
}
</style>
