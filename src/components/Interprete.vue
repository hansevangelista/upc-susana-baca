<script setup>
import { useRouter } from 'vue-router'; // Import useRouter from vue-router

import img_11 from '../assets/sec1/11.png';

import img_21 from '../assets/sec1/21.png';
import img_22 from '../assets/sec1/22.png';
import img_23 from '../assets/sec1/23.png';

import img_31 from '../assets/sec1/31.png';

import img_41 from '../assets/sec1/41.png';
import img_42 from '../assets/sec1/42.png';

import img_51 from '../assets/sec1/51.png';

import img_61 from '../assets/sec1/61.png';
import img_62 from '../assets/sec1/62.png';

import img_71 from '../assets/sec1/71.png';
import img_72 from '../assets/sec1/72.png';

import img_81 from '../assets/sec1/81.png';
import img_82 from '../assets/sec1/82.png';
import img_83 from '../assets/sec1/83.png';

const router = useRouter(); // Initialize the router

AOS.init()

function goBack() {
    router.push('/'); // Navigate back to the previous page
}
function goNext() {
    router.push('/investigadora'); // Navigate back to the previous page
}
</script>

<style scoped>
.grid {
    /* display: grid; */
    grid-template-columns: repeat(2, 1fr);
    /* gap: 16px; */ /* Se ha eliminado el espacio entre columnas */
    min-height: 100vh; /* Establece la altura del grid al 100% de la ventana */
    overflow: hidden
}

@media (min-width: 1024px) {
  .grid {
    display: grid;
  }
}

.column-right {
    background-color: #111; /* Fondo negro para la columna derecha */
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
    /* height: 100%; Asegurar que ocupe toda la altura */
    padding: 120px 100px 120px 32px;
}

.column-right img {
    /* height: 479px; Establecer la altura de la imagen a 479 píxeles */
    /* filter: grayscale(100%);  Aplicar filtro de escala de grises */
    max-height: 600px;
    max-width: 100%;
    padding: 4px;
}

.title {
    font-size: 40px; /* Establecer el tamaño de la fuente del título a 60 píxeles */
}

.subTitle {
    font-size: 17px; /* Establecer el tamaño de la fuente del subtítulo a 40 píxeles */
    background-color: #111; /* Fondo negro para el subtítulo */
    color: white; /* Color de texto blanco para el subtítulo */
    /* padding: 12px 16px;  Espaciado interno para el subtítulo */
    font-family: "Instrument Sans", sans-serif;
    line-height: 1.75;
    padding: 6px;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    display: inline;
}

.year {
    position: fixed; /* Fix the position */
    top: 81px; /* Adjust the distance from the top */
    z-index: 1000; /* Ensure it appears above other elements */
    font-size: 20px; /* Optional: adjust font size */
    font-family: "Onest", sans-serif;
    background: white;
    display: flex;
    align-items: center;
}

.year .line {
    width: 40px; /* Set the width to 57 pixels */
    height: 18px; /* Set the height to 27 pixels */
    background-color: #111; /* Set the background color to black */
    display: inline-block;
    margin-right: 8px;
}

.back-button {
    position: fixed; /* Fix the position */
    top: 81px; /* Adjust the distance from the top */
    right: 20px; /* Adjust the distance from the right */
    background-color: white; /* Background color */
    color: black; /* Text color */
    border: none; /* No border */
    padding: 10px 15px; /* Padding for the button */
    cursor: pointer; /* Pointer cursor on hover */
    font-family: "Onest", sans-serif; /* Font family */
}

.next-button {
    position: fixed; /* Fix the position */
    bottom: 81px; /* Adjust the distance from the top */
    right: 20px; /* Adjust the distance from the right */
    background-color: white; /* Background color */
    color: black; /* Text color */
    border: none; /* No border */
    padding: 10px 15px; /* Padding for the button */
    cursor: pointer; /* Pointer cursor on hover */
    font-family: "Onest", sans-serif; /* Font family */
}
</style>

<template>

  <button class="back-button" @click="goBack">Volver</button>
  <button class="next-button" @click="goNext">Siguiente</button>

  <div class="year">
    <span class="line"></span> La Intérprete
    {{ edit_1 }} <!-- Added back button -->
  </div>
  
  <div style="height: 61px;"></div>

  <br/>
  <br/>
  <br/>

  <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1021750817?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Percusiones de vida"></iframe></div>

  <div class="grid">
    <div class="column-left">
      <div data-aos="fade-right" data-aos-duration="1000">
        <p class="title">
          La fiesta desde la cuna
        </p> <br>
        <p class="subTitle">
          Susana Baca recuerda que en su casa siempre había música, ya sea por una celebración, cumpleaños o por el simple hecho de reunirse en familia. Cada encuentro era suficiente razón para empezar a celebrar. En medio de ese ambiente comenzó a vincularse con los ritmos peruanos. Así, su infancia estuvo marcada por una profunda conexión con la música y la cultura afroperuana, sobre todo gracias a su familia materna, quienes eran artistas y mantenían vivas las tradiciones musicales y danzarias, lo que los llevó a crear el grupo Perú Negro.
        </p>
        <br>
        <br>
        <p class="subTitle">
          Conforme fue creciendo, Susana Baca se interesó por la música folclórica peruana, especialmente por los ritmos y canciones de la costa peruana, como el festejo y el landó. Su exposición a esta rica herencia cultural la inspiró a convertirse en una de las principales voces de la música afroperuana y una defensora de la preservación de la cultura afrodescendiente en Perú. Su pasión y dedicación la llevaron a convertirse en una figura emblemática de la música peruana y a ser reconocida internacionalmente por su contribución a la promoción de la diversidad cultural.
        </p>
      </div>
    </div>
    <div data-aos="fade-left" data-aos-duration="1000" class="column-right">
      <img :src="img_11" style="max-height: 479px;" />
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
        </p>
        <br>  
        <br>  
        <p class="subTitle">
          Susana recuerda haber visto a su hermana parada en el escenario, cantando y al público aplaudiéndola. Ese fue su evento canónico, ese fue el instante en que se encendió una llama en el pecho de Susana que nunca más se apagaría. Ella decidió que quería eso para toda su vida, estar en un escenario y sentir la conexión con el público entre canción y canción.
        </p>
      </div>
    </div>
    <div data-aos="fade-left" data-aos-duration="1000" class="column-right">
      <div style="text-align: center;">
        <img :src="img_21" style="max-height: 300px;"/>
        <img :src="img_22" style="max-height: 300px;"/>
        <img :src="img_23" style="max-height: 300px;"/>
      </div>
    </div>
  </div>

  <div class="grid">
    <div class="column-left">
      <div data-aos="fade-right" data-aos-duration="1000">
        <p class="title">
          La influencia de Chabuca
        </p> <br>
        <p class="subTitle">
  Pocos saben que detrás de la exitosa carrera de Susana Baca se encuentra la figura influyente de Chabuca Granda. En la década de 1980, Susana Baca, entonces una joven cantante con un gran potencial, conoció a Chabuca Granda, quien se convirtió en su mentora y guía musical. Chabuca, impresionada por el talento y la pasión de Susana, decidió tomarla bajo su ala y compartir su experiencia y conocimientos.
        </p>
        <br>
        <br>
        <p class="subTitle">
  Bajo la tutela de Chabuca, Susana Baca aprendió los secretos del folclore peruano y la importancia de preservar la tradición musical del país. Chabuca le enseñó a valorar la autenticidad y la originalidad, y a encontrar su propia voz en la música.
        </p>
        <br>
        <br>
        <p class="subTitle">
  La colaboración entre ambas no se limitó a la mentoría. Susana grabó una versión muy personal del clásico "La Flor de la Canela". En ese sentido, la influencia de Chabuca en la carrera de Susana Baca es innegable. Ella ha reconocido, en varias ocasiones, la deuda que tiene con su mentora, a quien considera una figura fundamental en su desarrollo artístico.
        </p>
        <br>
        <br>
        <p class="subTitle">
  "Chabuca me enseñó a respetar la tradición y a innovar al mismo tiempo", ha dicho Susana Baca en entrevistas: "Ella me mostró que la música peruana podía ser universal sin perder su esencia".
        </p>
      </div>
    </div>
    <div data-aos="fade-left" data-aos-duration="1000" class="column-right">
      <img :src="img_31" style="max-height: 479px;"/>
    </div>
  </div>

  <div class="grid">
    <div class="column-left">
      <div data-aos="fade-right" data-aos-duration="1000">
        <p class="title">
          María Landó: un éxito instantáneo
        </p> <br>
        <p class="subTitle">
          En 1995, Luaka Bop, la discográfica de David Byrne, presentó un álbum recopilatorio que capturó la esencia de la música afroperuana, El alma del Perú Negro. En este trabajo, resaltó la voz de Susana Baca en "María Landó", una canción que marcó el inicio de su trayectoria hacia convertirse en la principal embajadora de la música afroperuana y una de las artistas folclóricas más destacadas de América Latina.       </p>
        <br>
        <br>
        <p class="subTitle">
          El disco es una oda a la tradición musical peruana, con canciones que fusionan el folclore con ritmos contemporáneos y arreglos innovadores. La voz de Baca, rica y expresiva, se convirtió en la embajadora perfecta de la música peruana en el mundo.      </p>
        <br>
        <br>
        <p class="subTitle">
          "María Landó" fue un éxito instantáneo. El disco recibió críticas elogiosas de la prensa especializada y fue nominado para el Premio Grammy en la categoría de Mejor Álbum de Música Mundial. La canción homónima, "María Landó", se convirtió en un himno en Perú y en un estándar de la música latinoamericana.      </p>
        <br>
        <br>
        <p class="subTitle">
          El éxito de "María Landó" llevó a Susana Baca a escenarios internacionales. Así, la cantante peruana se presentó en festivales como el Festival de Jazz de Montreux, el Festival de Música Mundial de WOMAD y el Festival de Jazz de Newport, compartiendo escenario con artistas como Caetano Veloso, Gilberto Gil y Youssou N'Dour.      </p>
      </div>
    </div>
    <div data-aos="fade-left" data-aos-duration="1000" class="column-right">
      <div style="text-align: center;">
        <img :src="img_41" style="max-height: 400px;"/>
        <img :src="img_42" style="max-height: 400px;"/>
      </div>
    </div>
  </div>

  <div class="grid">
    <div class="column-left">
      <div data-aos="fade-right" data-aos-duration="1000">
        <p class="title">
          El Alma del Perú Negro
        </p> <br>
        <p class="subTitle">
          El Alma del Perú Negro fue un proyecto ambicioso que buscaba rescatar y difundir la música tradicional afroperuana, que había sido históricamente marginada en el escenario musical nacional. David Byrne, quien había descubierto la música peruana durante una gira con Talking Heads, se enamoró de la riqueza rítmica y melódica de la música afroperuana y decidió producir un disco que la mostrara al mundo.
        </p>
        <br>
        <br>
        <p class="subTitle">
          La colaboración entre Byrne y Baca fue fundamental para el éxito del proyecto. Susana Baca, quien ya era una figura reconocida en la escena musical peruana, aportó su voz y su conocimiento de la tradición musical afroperuana. Byrne, por su parte, contribuyó con su experiencia como productor y su pasión por la música mundial.
              </p>
        <br>
        <br>
        <p class="subTitle">
          El disco incluye 14 canciones que reflejan la diversidad y complejidad de la música afroperuana, desde ritmos tradicionales como el festejo y el landó hasta fusiones innovadoras con el jazz y el rock. La voz de Susana Baca brilla en canciones como "María Landó" y "Yo Me Llamo Cumbamba", que se convirtieron en himnos de la música peruana.
              </p>
        <br>
        <br>
        <p class="subTitle">
          El Alma del Perú Negro fue un éxito crítico y comercial, y marcó un punto de inflexión en la carrera de Susana Baca. La cantante peruana se convirtió en una figura internacional, compartiendo escenario con artistas internacionales. 
              </p>
        <br>
        <br>
        <p class="subTitle">
          El legado de El Alma del Perú Negro es innegable. El disco ayudó a revitalizar la música tradicional peruana y a promover la diversidad cultural del país. Además, sentó las bases para la colaboración entre artistas peruanos y extranjeros, con lo cual abrió nuevas puertas para la música peruana en el mundo.
                    </p>
        <br>
        <br>
        <p class="subTitle">
          En palabras de David Byrne, El Alma del Perú Negro fue "un proyecto que buscaba mostrar la riqueza y la complejidad de la música afroperuana, y demostrar que la música tradicional puede ser innovadora y emocionante". Gracias a este disco, la música peruana nunca volvió a ser la misma.
                    </p>
      </div>
    </div>
    <div data-aos="fade-left" data-aos-duration="1000" class="column-right">
      <img :src="img_51" style="max-height: 479px;"/>
    </div>
  </div>

  <div class="grid">
    <div class="column-left">
      <div data-aos="fade-right" data-aos-duration="1000">
        <p class="title">
          Susana Mundial
        </p> <br>
        <p class="subTitle">
          La cantautora peruana Susana Baca ha consolidado su posición como una de las voces más destacadas de la música latinoamericana en el mundo. Con una trayectoria musical internacional que abarca más de cuatro décadas, Baca ha recorrido el planeta compartiendo su música y cultura con audiencias de todos los rincones del globo.
              </p>
        <br>
        <br>
        <p class="subTitle">
          Ha pisado algunos de los escenarios más emblemáticos del mundo. En 1997, se presentó en el legendario Festival de Jazz de Montreux, en Suiza, donde compartió escenario con el pianista brasileño Antonio Carlos Jobim. En 2001, fue la primera artista peruana en actuar en el prestigioso Festival de Música Mundial de WOMAD en Reino Unido.
        </p>
        <br>
        <br>
        <p class="subTitle">
          En 2003, Baca se presentó en el Carnegie Hall de Nueva York, considerado uno de los templos de la música clásica mundial. La prensa neoyorquina elogió su actuación, destacando su "voz poderosa y expresiva" (The New York Times).
        </p>
        <br>
        <br>
        <p class="subTitle">
          Asimismo, ha realizado varias giras mundiales, llevando su música a países como Estados Unidos, Canadá, Reino Unido, Francia, Alemania, Italia, España, Australia y Japón. En 2005, realizó una gira por América Latina, presentándose en festivales como el de Música de Cartagena, en Colombia, y en el Festival de Jazz de Buenos Aires, en Argentina.
        </p>
        <br>
        <br>
        <p class="subTitle">
          En 2010, Baca embarcó en una gira por Europa, actuando en ciudades como París, Londres, Berlín y Roma. La prensa europea destacó su "energía y pasión" en escena (Le Monde, Francia).
        </p>
        <br>
        <br>
        <p class="subTitle">
          Además, ha colaborado con artistas internacionales como David Byrne, Natalia Lafourcade, entre otros. La prensa internacional ha elogiado su música y su presencia en escena. "Susana Baca es una artista verdaderamente única, con una voz que puede evocar la emoción y la pasión de una cultura entera" (The Guardian, Reino Unido).
        </p>
      </div>
    </div>
    <div data-aos="fade-left" data-aos-duration="1000" class="column-right">
      <div style="text-align: center;">
        <img :src="img_61" style="max-height: 400px;"/>
        <img :src="img_62" style="max-height: 400px;"/>
      </div>
    </div>
  </div>

  <div class="grid">
    <div class="column-left">
      <div data-aos="fade-right" data-aos-duration="1000">
        <p class="title">
          La música contra la muerte
        </p> <br>
        <p class="subTitle">
          A finales del 2023, la salud de Susana Baca estuvo en jaque. Durante 5 meses estuvo en cuidados intensivos e intermedios y los pronósticos eran reservados. Sin embargo, hoy recuperada, recuerda que su esposo Ricardo le ponía música todos los días y eso la ayudaba a seguir con nosotros. 
                      </p>
        <br>
        <br>
        <p class="subTitle">
          No hay muerte donde hay música, porque la música ahuyenta la muerte y eso fue lo que experimentó Susana Baca. Todos los medios de comunicación peruanos y varios extranjeros estuvieron pendientes de su recuperación, demostrando lo valiosa que es su figura para el mundo artístico y cultural. 
        </p>
      </div>
    </div>
    <div data-aos="fade-left" data-aos-duration="1000" class="column-right">
      <div style="text-align: center;">
        <img :src="img_71" style="max-height: 300px;"/>
        <img :src="img_72" style="max-height: 300px;"/>
      </div>
    </div>
  </div>

  <div class="grid">
    <div class="column-left">
      <div data-aos="fade-right" data-aos-duration="1000">
        <p class="title">
          Colaboraciones y reconocimientos
        </p> <br>
        <p class="subTitle">
          La cantautora peruana ha construido una carrera artística destacada, marcada por colaboraciones innovadoras y reconocimientos internacionales. Con una trayectoria que abarca más de cuatro décadas, Baca ha demostrado su versatilidad y talento, fusionando la música tradicional peruana con ritmos contemporáneos. Susana ha compartido escenario y estudio con algunos de los artistas más influyentes del mundo. Entre sus colaboraciones más destacadas se encuentran:
                            </p>
        <br>
        <br>
        <p class="subTitle">
          - David Byrne: Productor y músico estadounidense, con quien grabó el álbum María Landó (1997).
  - Caetano Veloso: Cantautor brasileño, con quien grabó el álbum Escuelas de Vida (2002).
  - Youssou N'Dour: Cantante senegalés, con quien colaboró en el álbum África Live (2003).
  - Natalia Lafourcade: Cantautora mexicana, con quien grabó el álbum Homenaje a Chabuca Granda (2014).
        </p>
        <br>
        <br>
        <p class="subTitle">
          Asimismo, a lo largo de su carrera, Baca ha recibido numerosos premios y reconocimientos. Algunos de los más destacados incluyen:
        </p>
        <br>
        <br>
        <p class="subTitle">
          - Premio Grammy Latino al Mejor Álbum de Música Folklórica (2002) por Escuelas de Vida.
  - Premio Grammy Latino al Mejor Álbum de Música Tradicional (2011) por Afrodisía.
  - Premio Grammy Latino al Mejor Álbum de Música de Raíces (2018) por Palabras Urgentes.
  - Orden del Sol del Perú (2002), otorgada por el Gobierno del Perú por su contribución a la cultura nacional.
  - Medalla de la Ciudad de Lima (2014), otorgada por la Municipalidad de Lima por su trayectoria artística.
        </p>
        <br>
        <br>
        <p class="subTitle">
          Además, Susana Baca ha sido reconocida por su contribución a la música mundial. Algunos de los reconocimientos internacionales más destacados incluyen tres Grammys en 2002, 2011 y 2020, por Lamento Negro (Mejor Álbum Folklórico), “Latinoamérica” (Grabación del año) y A Capella (Mejor Álbum Folklórico); Premio BBC Radio 3 al Mejor Álbum de Música Mundial (2004) por Escuelas de Vida y Premio de la Crítica Musical Francesa al Mejor Álbum de Música Mundial (2012) por Afrodisía.
        </p>
      </div>
    </div>
    <div data-aos="fade-left" data-aos-duration="1000" class="column-right">
      <div style="text-align: center;">
        <img :src="img_81" style="max-height: 400px;"/>
        <img :src="img_82" style="max-height: 400px;"/>
        <img :src="img_83" style="max-height: 400px;"/>
      </div>
    </div>
  </div>

  <audio autoplay loop volume=0.2>
    <source src="../assets/sec1/music.mp3" type="audio/mpeg"> <!-- Added background audio -->
    Your browser does not support the audio element.
  </audio>

</template>


