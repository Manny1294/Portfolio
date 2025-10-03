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
  // HTML5
  `<svg class="tech-icon" viewBox="0 0 128 128">
    <path fill="#E44D26" d="M19 0l9 101 36 10 36-10 9-101z"/>
    <path fill="#F16529" d="M64 117l29-8 8-90H64z"/>
    <path fill="#EBEBEB" d="M64 66H47l-1-11h18V44H36l3 34h25z"/>
    <path fill="#fff" d="M64 66v11l15 4 1-15H64z"/>
  </svg>`,

  // CSS3
  `<svg class="tech-icon" viewBox="0 0 128 128">
    <path fill="#1572B6" d="M19 0l9 101 36 10 36-10 9-101z"/>
    <path fill="#33A9DC" d="M64 117l29-8 8-90H64z"/>
    <path fill="#EBEBEB" d="M64 66H47l-1-11h18V44H36l3 34h25z"/>
    <path fill="#fff" d="M64 66v11l15 4 1-15H64z"/>
  </svg>`,

  // JavaScript
  `<svg class="tech-icon" viewBox="0 0 256 256">
    <path fill="#f7df1e" d="M0 0h256v256H0z"/>
  </svg>`,

  // Vue.js
  `<svg class="tech-icon" viewBox="0 0 128 128">
    <path d="M0 8.934l49.854.158 14.167 24.47 14.432-24.47L128 8.935l-63.834 110.14z" fill="#41b883"/>
    <path d="M25.997 9.393l23.002.009L64.035 34.36 79.018 9.404 102 9.398 64.15 75.053z" fill="#35495e"/>
  </svg>`,

  // Nuxt
  `<svg class="tech-icon" viewBox="0 0 400 400">
    <path fill="#00C58E" d="M200 50L375 350H25z"/>
    <path fill="#2F495E" d="M200 100L325 325H75z"/>
  </svg>`,

  // Node.js
  `<svg class="tech-icon" viewBox="0 0 256 289">
    <path fill="#68A063" d="M128 0l128 74v141l-128 74L0 215V74z"/>
  </svg>`,

  // Bootstrap
  `<svg class="tech-icon" viewBox="0 0 512 408">
    <path fill="#563d7c" d="M0 0h512v408H0z"/>
    <path fill="#fff" d="M163 330V80h133c45 0 79 25 79 67 0 30-21 52-49 58v2c36 4 61 28 61 64 0 47-37 79-94 79H163z"/>
  </svg>`,

  // Tailwind
  `<svg class="tech-icon" viewBox="0 0 256 154">
    <path fill="#38B2AC" d="M128 0C93 0 71 18 61 54c12-18 26-24 44-18 9 3 15 10 22 19 11 14 24 21 42 21 34 0 56-18 66-54-12 18-26 24-44 18-9-3-15-10-22-19-11-14-24-21-41-21z"/>
  </svg>`,

  // Git
  `<svg class="tech-icon" viewBox="0 0 97 97">
    <path fill="#F05033" d="M92.7 44.4L52.6 4.3c-2.9-2.9-7.7-2.9-10.6 0L36 10.3l13.3 13.3c3-1 6.5-.3 8.9 2.1 2.4 2.4 3 6 2 8.9l13 13c3-1 6.5-.3 8.9 2.1 3.1 3 3.1 8 0 11z"/>
  </svg>`,

  // MongoDB
  `<svg class="tech-icon" viewBox="0 0 256 512">
    <path fill="#4DB33D" d="M127.6 0s-22.9 182.6 0 512c128-189.6 128-512 128-512z"/>
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
  animation: scroll 25s linear infinite;
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
