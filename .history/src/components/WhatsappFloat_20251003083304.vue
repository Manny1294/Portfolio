<script setup>
const whatsappNumber = '23489051775119'
const message = 'Hello! I would like to discuss a project.' // Default message

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
</script>

<template>
  <a
    :href="whatsappLink"
    target="_blank"
    rel="noopener noreferrer"
    class="whatsapp-float"
    aria-label="Chat on WhatsApp"
  >
    <i class="bi bi-whatsapp"></i>
  </a>
</template>

<style scoped>
.whatsapp-float {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background-color: #25d366; /* WhatsApp green */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition: all 0.3s ease;
  text-decoration: none;
}

.whatsapp-float:hover {
  background-color: #20ba5a;
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
}

.whatsapp-float i {
  line-height: 1;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .whatsapp-float {
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    font-size: 28px;
  }
}
</style>
