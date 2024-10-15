<script setup>
import image1 from '../assets/img1.png';
import image2 from '../assets/img2.png';
import image3 from '../assets/img3.png';

AOS.init()
</script>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* gap: 16px; */ /* Se ha eliminado el espacio entre columnas */
    height: 100vh; /* Establece la altura del grid al 100% de la ventana */
}

.column-right {
    background-color: black; /* Fondo negro para la columna derecha */
    color: white; /* Color de texto blanco para mejor contraste */
    display: flex; /* Usar flexbox para centrar el contenido */
    justify-content: center; /* Centrar horizontalmente */
    align-items: center; /* Centrar verticalmente */
}

.column-left {
    display: flex; /* Usar flexbox para centrar el contenido */
    justify-content: center; /* Centrar horizontalmente */
    align-items: center; /* Centrar verticalmente */
    height: 100%; /* Asegurar que ocupe toda la altura */
    padding: 0 100px 0 32px;
}

.column-right img {
    /* height: 479px; Establecer la altura de la imagen a 479 píxeles */
    filter: grayscale(100%); /* Aplicar filtro de escala de grises */
    max-height: 600px;
}

.title {
    font-size: 60px; /* Establecer el tamaño de la fuente del título a 60 píxeles */
}

.subTitle {
    font-size: 30px; /* Establecer el tamaño de la fuente del subtítulo a 40 píxeles */
    background-color: black; /* Fondo negro para el subtítulo */
    color: white; /* Color de texto blanco para el subtítulo */
    padding: 10px; /* Espaciado interno para el subtítulo */
    font-family: "Instrument Sans", sans-serif;
}
</style>

<template>
  <div class="grid">
    <div class="column-left">
      <div data-aos="fade-right" data-aos-duration="1000">
        <p class="title">Inicios en la música</p> <br>
        <p class="subTitle">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
      </div>
    </div>
    <div class="column-right">
      <img data-aos="fade-left" data-aos-duration="1000" :src="image1" alt="Descripción de la imagen" style="height: 479px;" />
    </div>
  </div>
  <div class="grid">
    <div class="column-left">
      <div data-aos="fade-right" data-aos-duration="1000">
        <p class="title">Inicios en la música</p> <br>
        <p class="subTitle">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
      </div>
    </div>
    <div class="column-right">
      <img data-aos="fade-left" data-aos-duration="1000" :src="image2" alt="Descripción de la imagen" />
    </div>
  </div>
  <div class="grid">
    <div class="column-left">
      <div data-aos="fade-right" data-aos-duration="1000">
        <p class="title">Inicios en la música</p> <br>
        <p class="subTitle">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
      </div>
    </div>
    <div class="column-right">
      <img data-aos="fade-left" data-aos-duration="1000" :src="image3" alt="Descripción de la imagen" />
    </div>
  </div>
</template>
