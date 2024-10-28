<script>
import { useRouter } from 'vue-router'; // Importar useRouter
import back from '../assets/back.webp';
import logo from '../assets/logo.png';
import logo_big from '../assets/logo_big.png';
import Main from '../layouts/Layout.vue';

export default {
  components: { Main },

  setup() {
    const router = useRouter(); // Inicializar el router
    return { router };
  },
  data() {
    return {
      currentSection: 0,
      sections: ['Sección 1', 'Sección 2', 'Sección 3'],
      clickCount: 0, // Contador de clics
      back,
      logo,
      logo_big,
    };
  },
  methods: {
    nextSection() {
      this.currentSection = (this.currentSection + 1) % this.sections.length;
      this.clickCount++; // Incrementar el contador de clics
      
      // Redireccionar a '/' después de 2 segundos si se han simulado 2 clics
      if (this.clickCount >= 2) {
        setTimeout(() => {
          this.router.push('/'); // Redireccionar a la ruta '/'
        }, 2000); // 2 segundos
      }
    },
    beforeEnter(el) {
      el.style.opacity = 0; // Establecer la opacidad a 0 antes de entrar
    },
    enter(el, done) {
      el.offsetHeight; // Forzar el reflujo
      el.style.transition = 'opacity 0.5s';
      el.style.opacity = 1; // Cambiar la opacidad a 1
      done(); // Llamar a done cuando la transición haya terminado
    },
    leave(el, done) {
      el.style.transition = 'opacity 0.5s';
      el.style.opacity = 0; // Cambiar la opacidad a 0 al salir
      done(); // Llamar a done cuando la transición haya terminado
    },
  },
  mounted() {
    const interval = setInterval(() => {
      if (this.clickCount < 2) { // Verificar si se han simulado 2 clics
        this.nextSection(); // Simular clic en el botón
      } else {
        clearInterval(interval); // Detener el intervalo después de 2 clics
      }
    }, 3000); // Cada 5 segundos
  },
};
</script>

<template>
  <Main>

  <div>
    <transition 
      name="fade" 
      @before-enter="beforeEnter" 
      @enter="enter" 
      @leave="leave"
    >
      <section v-if="currentSection === 0" class="section-black">
        <div style="text-align: center;">
          <p style="font-size: 60px;">Cargando</p>
          <img :src="logo" width="100"/>
        </div>
      </section>
      <section v-else-if="currentSection === 1">
        <img :src="back" alt="Descripción de la imagen" />
      </section>
      <section v-else-if="currentSection === 2" class="section-black">
        <div style="text-align: center;">
          <img :src="logo_big" width="180"/>
          <p style="font-size: 60px; text-align: center;">
            SUSANA BACA <br>
            Trinidad Artística
          </p>
        </div>
      </section>
    </transition>
    <button v-bind:style="{ display: 'none' }" @click="nextSection">Siguiente</button> <!-- Hacer el botón invisible -->
  </div>

  </Main>
</template>

<style>

.section-black {
  background-color: black; /* Fondo negro */
  color: white; /* Texto blanco */
}

section {
  background-color: black; /* Fondo negro */
  color: white; /* Texto blanco */
  height: 100vh; /* Asegurarse de que ocupe toda la altura de la sección */
  width: 100%; /* Asegurarse de que ocupe todo el ancho de la pantalla */
  display: flex; /* Usar flexbox para centrar el contenido */
  justify-content: center; /* Centrar horizontalmente */
  align-items: center; /* Centrar verticalmente */
  font-size: 2em; /* Aumentar el tamaño de la fuente */
  overflow: hidden;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active en <2.1.8 */ {
  opacity: 0;
}
img {
  object-fit: cover;
}
</style>
