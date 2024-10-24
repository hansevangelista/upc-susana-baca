<script setup>
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

const bg1 = '#000000';
const bg2 = '#E2643C';
const bg3 = '#E7E8EA';
</script>

<template>
  <div style="height: 100vh; display: flex; flex-direction: column;">
    <div style="height: 61px;"></div>
    <div class="grid-container" style="flex: 1;">
      <RouterLink to="/intro" class="intro-button">Ver Intro</RouterLink>
      <RouterLink to="/interprete" class="grid-item" :style="{ backgroundColor: bg1 }">
        <h2 class="grid-title">La Intreprete</h2>
        <img :src="image1" alt="Imagen 1" class="grid-image" />
      </RouterLink>
      <RouterLink to="/investigadora" class="grid-item" :style="{ backgroundColor: bg2 }">
        <h2 class="grid-title">La Investigadora</h2>
        <img :src="image2" alt="Imagen 2" class="grid-image" />
      </RouterLink>
      <RouterLink to="/gestora" class="grid-item" :style="{ backgroundColor: bg3 }">
        <h2 class="grid-title" style="color: black;">La Gestora</h2>
        <img :src="image3" alt="Imagen 3" class="grid-image" />
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0; /* Se eliminó el espacio entre columnas */
  /* height: 100vh; Altura del grid al 100% de la ventana */
  overflow: hidden; /* Asegúrate de que el contenedor no se desborde */
  position: relative;
}

.grid-item {
  display: flex;
  flex-direction: column; /* Cambiar la dirección del flex a columna */
  justify-content: space-between; /* Espacio entre el título y la imagen */
  padding: 0; /* Se eliminó el padding interno */
  transition: transform 0.2s; /* Transición suave para el zoom */
  overflow: hidden; /* Asegura que el contenido no se desborde */
  box-sizing: border-box; /* Asegura que el padding y el borde se incluyan en el ancho y alto total */
  cursor: pointer; /* Se añadió cursor tipo pointer */
}

.grid-title {
  margin-top: 100px; /* Aumentar margen superior */
  margin-left: 0; 
  margin-right: 0; 
  margin-bottom: 0; 
  color: white; 
  text-align: center; 
  font-size: 40px; /* Cambiado a tamaño de fuente de 40px */
  font-weight: 400; 
}

.grid-image {
  width: 100%; /* Ancho completo del contenedor */
  height: auto; /* Mantener la proporción de la imagen */
  object-fit: cover; /* Recortar la imagen para que llene el contenedor */
}

.grid-item:hover {
  transform: scale(1.1); /* Efecto de zoom al pasar el ratón */
  z-index: 1; /* Asegura que el elemento en zoom esté por encima de los demás */
}

.intro-button {
  position: absolute; /* Posicionamiento absoluto */
  top: 20px; /* Espacio desde la parte superior */
  right: 20px; /* Espacio desde la derecha */
  background-color: #E2643C; /* Color de fondo del botón */
  color: white; /* Color del texto */
  border: none; /* Sin borde */
  padding: 10px 20px; /* Espaciado interno */
  font-size: 16px; /* Tamaño de fuente */
  cursor: pointer; /* Cursor tipo pointer */
  z-index: 10; /* Asegura que el botón esté por encima de otros elementos */
  text-decoration: none; /* Sin subrayado */
  text-align: center; /* Centrar texto */
}
</style>
