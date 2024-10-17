<script setup>
import { useRouter } from 'vue-router'; // Import useRouter from vue-router
import image1 from '../assets/img1.png';
import image2 from '../assets/img2.png';
import image3 from '../assets/img3.png';

import img_11 from '../assets/sec1/11.png';
import img_12 from '../assets/sec1/12.png';

import img_21 from '../assets/sec1/21.jpeg';
import img_22 from '../assets/sec1/22.jpg';


const router = useRouter(); // Initialize the router

AOS.init()

function goBack() {
    router.go(-1); // Navigate back to the previous page
}
</script>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* gap: 16px; */ /* Se ha eliminado el espacio entre columnas */
    min-height: 100vh; /* Establece la altura del grid al 100% de la ventana */
}

.column-right {
    background-color: black; /* Fondo negro para la columna derecha */
    color: white; /* Color de texto blanco para mejor contraste */
    display: flex; /* Usar flexbox para centrar el contenido */
    justify-content: center; /* Centrar horizontalmente */
    align-items: center; /* Centrar verticalmente */
    padding: 10px;
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
    /* filter: grayscale(100%);  Aplicar filtro de escala de grises */
    max-height: 600px;
    max-width: 100%;
}

.title {
    font-size: 50px; /* Establecer el tamaño de la fuente del título a 60 píxeles */
}

.subTitle {
    font-size: 18px; /* Establecer el tamaño de la fuente del subtítulo a 40 píxeles */
    background-color: black; /* Fondo negro para el subtítulo */
    color: white; /* Color de texto blanco para el subtítulo */
    padding: 12px 16px; /* Espaciado interno para el subtítulo */
    font-family: "Instrument Sans", sans-serif;
    line-height: 1.5;
}

.year {
    position: fixed; /* Fix the position */
    top: 20px; /* Adjust the distance from the top */
    z-index: 1000; /* Ensure it appears above other elements */
    font-size: 24px; /* Optional: adjust font size */
    font-family: "Onest", sans-serif;
    background: white;
    display: flex;
    align-items: center;
}

.year .line {
    width: 40px; /* Set the width to 57 pixels */
    height: 20px; /* Set the height to 27 pixels */
    background-color: black; /* Set the background color to black */
    display: inline-block;
    margin-right: 8px;
}

.back-button {
    position: fixed; /* Fix the position */
    top: 20px; /* Adjust the distance from the top */
    right: 20px; /* Adjust the distance from the right */
    background-color: black; /* Background color */
    color: white; /* Text color */
    border: none; /* No border */
    padding: 10px 15px; /* Padding for the button */
    cursor: pointer; /* Pointer cursor on hover */
    font-family: "Onest", sans-serif; /* Font family */
}
</style>

<template>
  <div class="year">
    <span class="line"></span> 1950
    {{ edit_1 }} <!-- Added back button -->
  </div>

  <div class="grid">
    <div class="column-left">
      <div data-aos="fade-right" data-aos-duration="1000">
        <p class="title">
          La fiesta desde la cuna
        </p> <br>
        <p class="subTitle">
          Susana Baca recuerda que en su casa siempre había música, ya sea por una celebración, cumpleaños o por el simple hecho de reunirse en familia. Cada encuentro era suficiente razón para empezar a celebrar. En medio de ese ambiente comenzó a vincularse con los ritmos peruanos. Así, su infancia estuvo marcada por una profunda conexión con la música y la cultura afroperuana, sobre todo gracias a su familia materna, quienes eran artistas y mantenían vivas las tradiciones musicales y danzarias, lo que los llevó a crear el grupo Perú Negro.
          Conforme fue creciendo, Susana Baca se interesó por la música folclórica peruana, especialmente por los ritmos y canciones de la costa peruana, como el festejo y el landó. Su exposición a esta rica herencia cultural la inspiró a convertirse en una de las principales voces de la música afroperuana y una defensora de la preservación de la cultura afrodescendiente en Perú. Su pasión y dedicación la llevaron a convertirse en una figura emblemática de la música peruana y a ser reconocida internacionalmente por su contribución a la promoción de la diversidad cultural.
        </p>
      </div>
    </div>
    <div data-aos="fade-left" data-aos-duration="1000" class="column-right">
      <img :src="img_11" style="max-height: 479px;" />
      <img :src="img_12" style="max-height: 479px;" />
    </div>
  </div>

  <div class="grid">
    <div class="column-left">
      <div data-aos="fade-right" data-aos-duration="1000">
        <p class="title">
          El despertar de una vocación
        </p> <br>
        <p class="subTitle">
          La Lima de la juventud de Susana Baca era muy diferente a la actual. Eran los tiempos de las radios en vivo, de incipientes movimientos hippies y de la llegada de la primera oleada migrante a la capital. En ese contexto, cuando Susana tenía solo 15 años, acompañó a su hermana a una presentación en una radio local. Antes, esos conciertos eran transmitidos en vivo, con público presente, sin ediciones ni manipulaciones. Lo que ocurría era lo que se escuchaba.
          Susana recuerda haber visto a su hermana parada en el escenario, cantando y al público aplaudiéndola. Ese fue su evento canónico, ese fue el instante en que se encendió una llama en el pecho de Susana que nunca más se apagaría. Ella decidió que quería eso para toda su vida, estar en un escenario y sentir la conexión con el público entre canción y canción.
        </p>
      </div>
    </div>
    <div data-aos="fade-left" data-aos-duration="1000" class="column-right">
      <div>
        <img :src="img_21" style="max-height: 300px;"/>
        <img :src="img_22" style="max-height: 300px;"/>
      </div>
    </div>
  </div>


  <div class="grid">
    <div class="column-left">
      <div data-aos="fade-right" data-aos-duration="1000">
        <p class="title">Inicios en la música</p> <br>
        <p class="subTitle">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
      </div>
    </div>
    <div data-aos="fade-left" data-aos-duration="1000" class="column-right">
      <img :src="image1" alt="Descripción de la imagen" style="max-height: 479px;" />
    </div>
  </div>
  <div class="grid">
    <div class="column-left">
      <div data-aos="fade-right" data-aos-duration="1000">
        <p class="title">Inicios en la música</p> <br>
        <p class="subTitle">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
      </div>
    </div>
    <div data-aos="fade-left" data-aos-duration="1000" class="column-right">
      <img :src="image2" alt="Descripción de la imagen" />
    </div>
  </div>
  <div class="grid">
    <div class="column-left">
      <div data-aos="fade-right" data-aos-duration="1000">
        <p class="title">Inicios en la música</p> <br>
        <p class="subTitle">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
      </div>
    </div>
    <div data-aos="fade-left" data-aos-duration="1000" class="column-right">
      <img :src="image3" alt="Descripción de la imagen" />
    </div>
  </div>
  <!-- Back button implementation -->
  <button class="back-button" @click="goBack">Volver</button>
</template>
