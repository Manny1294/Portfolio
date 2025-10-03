<template>
  <section id="about" class="about">
    <div class="container text-center">
      <h2 class="mb-4">About Me</h2>
      <p class="about__text mb-5">
        I'm a full-stack developer passionate about building user-friendly and scalable web
        applications. I work with modern technologies and enjoy collaborating on impactful projects.
      </p>

      <!-- Sliding tech stack icons -->
      <div class="tech-slider">
        <div class="tech-track">
          <!-- icons -->
          <div class="tech-item" v-for="(icon, i) in techIcons" :key="i" v-html="icon"></div>
          <!-- duplicate for smooth infinite scroll -->
          <div
            class="tech-item"
            v-for="(icon, i) in techIcons"
            :key="'dup-' + i"
            v-html="icon"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const techIcons = [
  // Vue
  `<svg class="tech-icon" viewBox="0 0 128 128">
    <path d="M0 8.934l49.854.158 14.167 24.47 14.432-24.47L128 8.935l-63.834 110.14z" fill="#41b883"/>
    <path d="M25.997 9.393l23.002.009L64.035 34.36 79.018 9.404 102 9.398 64.15 75.053z" fill="#35495e"/>
  </svg>`,

  // Node.js
  `<svg class="tech-icon" viewBox="0 0 256 289">
    <path fill="#68A063" d="M128 0l128 74v141l-128 74L0 215V74z"/>
  </svg>`,

  // MongoDB
  `<svg class="tech-icon" viewBox="0 0 256 512">
    <path fill="#4DB33D" d="M127.6 0s-22.9 182.6 0 512c128-189.6 128-512 128-512z"/>
  </svg>`,

  // JavaScript
  `<svg class="tech-icon" viewBox="0 0 256 256">
    <path fill="#f7df1e" d="M0 0h256v256H0z"/>
  </svg>`,
]
</script>

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

/* Slider container */
.tech-slider {
  overflow: hidden;
  position: relative;
  width: 100%;
  margin-top: 40px;
}

/* Track that moves */
.tech-track {
  display: flex;
  width: max-content;
  animation: scroll 20s linear infinite;
}

/* Each icon */
.tech-item {
  flex: 0 0 auto;
  margin: 0 30px;
}

.tech-icon {
  width: 60px;
  height: 60px;
  transition: transform 0.3s ease;
}

.tech-icon:hover {
  transform: scale(1.1);
}

/* Animation */
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
