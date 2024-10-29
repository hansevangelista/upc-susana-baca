<script setup>
import { useRouter } from 'vue-router'; // Import useRouter from vue-router

import img_11 from '../assets/sec2/11.png';

import img_21 from '../assets/sec2/21.png';
import img_22 from '../assets/sec2/22.png';

import img_31 from '../assets/sec2/31.png';

import img_41 from '../assets/sec2/41.png';

import img_51 from '../assets/sec2/51.png';

import img_61 from '../assets/sec2/61.png';

import img_71 from '../assets/sec2/71.png';

import img_81 from '../assets/sec2/81.png';


const router = useRouter(); // Initialize the router

AOS.init()

function goBack() {
    router.push('/'); // Navigate back to the previous page
}
function goNext() {
    router.push('/gestora'); // Navigate back to the previous page
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
    <span class="line"></span> La Investigadora
    {{ edit_1 }} <!-- Added back button -->
  </div>
  
  <div style="height: 61px;"></div>

  <br/>
  <br/>
  <br/>

  <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1021765672?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="El ritmo de la curiosidad"></iframe></div>

  <div class="grid">
    <div class="column-left">
      <div data-aos="fade-right" data-aos-duration="1000">
        <p class="title">
          Susana en el aula
        </p> <br>
        <p class="subTitle">
          Pocos saben que Susana fue profesora de colegio, de hecho, estudió la carrera de Pedagogía en la Universidad La Cantuta y ejerció durante corto periodo esa profesión. A sus estudiantes, niños pequeños de primaria, les involucró en tareas artísticas y, sobre todo, en el canto. 
                </p>
        <br>
        <br>
        <p class="subTitle">
          Asimismo, desde hace más de dos décadas, Susana ha impartido clases de música y cultura peruana en diversas instituciones educativas. Su experiencia como profesora comenzó en la Universidad Nacional de Música del Perú, donde enseñó cursos de música folclórica y tradicional.
        </p>
        <br>
        <br>
        <p class="subTitle">
          En 2001, Baca fundó la Escuela de Música Tradicional Peruana "Chabuca Granda", en honor a la legendaria cantautora peruana. La escuela tiene como objetivo preservar y difundir la música tradicional peruana, y ofrece cursos y talleres para estudiantes de todas las edades.
        </p>
        <br>
        <br>
        <p class="subTitle">
          Baca también ha impartido clases y talleres en instituciones internacionales, como la Universidad de Nueva York y la Universidad de California en Los Ángeles. Su enfoque en la enseñanza se centra en la importancia de la cultura y la tradición en la música.
        </p>
        <br>
        <br>
        <p class="subTitle">
          "La música es una herramienta poderosa para conectar con nuestras raíces y nuestra identidad", afirma Baca. "Mi objetivo como profesora es inspirar a los estudiantes a descubrir y valorar la riqueza cultural de nuestro país".
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
          La curiosidad de Susana
        </p> <br>
        <p class="subTitle">
          Susana se reconoce como una persona curiosa. Siempre dice que más que investigadora, se trata de un alma con muchas preguntas, porque siempre está buscando respuestas. Eso la llevó a buscar los orígenes de las canciones, de los instrumentos, de las melodías, de las letras y de los sentires musicales. 
        </p>
        <br>  
        <br>  
        <p class="subTitle">
          Desde hace más de tres décadas, ha realizado investigaciones exhaustivas sobre la música peruana, enfocándose en la tradición musical afroperuana y la música folclórica de las diferentes regiones del país. Su trabajo ha llevado a la creación de una vasta colección de canciones, ritmos y tradiciones musicales que han sido rescatados y preservados gracias a su dedicación.
        </p>
        <br>  
        <br>  
        <p class="subTitle">
          "La música peruana es una riqueza cultural que debe ser preservada y difundida", afirma Baca. "Mi investigación busca descubrir y documentar la diversidad musical de nuestro país, y compartirlo con el mundo".
        </p>
        <br>  
        <br>  
        <p class="subTitle">
          Ha realizado investigaciones de campo en diferentes regiones del Perú, recopilando canciones, ritmos y tradiciones musicales que han sido pasadas de generación en generación. Ha trabajado con comunidades afroperuanas, indígenas y mestizas, documentando su música y su cultura.
        </p>
        <br>  
        <br>  
        <p class="subTitle">
          La investigación de Susana Baca es un testimonio de su dedicación y pasión por la música peruana. Su legado continúa inspirando a nuevos investigadores y artistas, y asegurando que la música peruana siga viva y floreciente.
        </p>
      </div>
    </div>
    <div data-aos="fade-left" data-aos-duration="1000" class="column-right">
      <div style="text-align: center;">
        <img :src="img_21" style="max-height: 400px;"/>
        <img :src="img_22" style="max-height: 400px;"/>
      </div>
    </div>
  </div>

  <div class="grid">
    <div class="column-left">
      <div data-aos="fade-right" data-aos-duration="1000">
        <p class="title">
          Viajes por la costa peruana
        </p> <br>
        <p class="subTitle">
          Susana ha realizado un trabajo exhaustivo en la búsqueda y documentación de la herencia africana en la costa peruana. Ella y su esposo Ricardo recorrieron más de 1.500 kilómetros de la costa peruana, desde el norte hasta el sur, en busca de las raíces africanas que han influido en la música, la danza y la cultura peruana. En su viaje, visitó comunidades afroperuanas en ciudades como Lima, Callao, Piura, Lambayeque y Chincha, donde recopiló historias, canciones y tradiciones que han sido pasadas de generación en generación.
        </p>
        <br>
        <br>
        <p class="subTitle">
          "Mi objetivo era descubrir y documentar la presencia africana en la costa peruana", afirma. "Quería mostrar cómo la cultura africana ha influido en la identidad peruana y cómo ha sido una parte fundamental de nuestra historia y nuestra cultura".
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
          El poder de conocer la historia
        </p> <br>
        <p class="subTitle">
          No es lo mismo cantar y desconocer lo que se canta, o pararse en un escenario e ignorar de dónde vienen esas notas musicales que están por sonar. Para Susana Baca, conocer la historia de su música le da un poder especial. “Es más fuerte en mí cuando sé de dónde viene la música, me nace algo que no sé explicar, pero que me llena y puedo transmitirlo en mis presentaciones”, afirma. 
        </p>
        <br>
        <br>
        <p class="subTitle">
          Ese poder que le da el conocer las historias de sus canciones se ve reflejado en cada una de sus presentaciones y es lo que la convierte en un ícono mundial. “Yo no sería la misma si no conociera lo que canto”, asegura. 
        </p>
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
          Compartir lo aprendido
        </p> <br>
        <p class="subTitle">
          La labor investigativa de Susana Baca ha sido extensa y valiosa. Entre las más destacadas se encuentran:
        </p>
        <br>
        <br>
        <p class="subTitle">
          - La Música Afroperuana: Una Tradición Viva (1995), un estudio sobre la música afroperuana y su influencia en la cultura peruana.
        </p>
        <br>
        <br>
        <p class="subTitle">
          - El Festejo: Una Tradición Musical Afroperuana (2001), un documento sobre la historia y la evolución del festejo, un ritmo tradicional afroperuano.
        </p>
        <br>
        <br>
        <p class="subTitle">
          - La Música Folklórica del Perú: Una Riqueza Cultural (2010), un estudio sobre la diversidad musical de las diferentes regiones del Perú.
        </p>
        <br>
        <br>
        <p class="subTitle">
          Baca ha compartido sus investigaciones en conferencias y talleres internacionales, y ha publicado artículos y libros sobre la música peruana. Su trabajo ha sido reconocido por instituciones culturales y académicas del Perú y del mundo.
        </p>
        <br>
        <br>
        <p class="subTitle">
          "La investigación es fundamental para entender y valorar nuestra cultura", afirma. "Mi objetivo es compartir mi conocimiento y mi pasión por la música peruana con el mundo, y asegurar que nuestra riqueza cultural sea preservada para las generaciones futuras".
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
          Lo africano en el Perú
        </p> <br>
        <p class="subTitle">
          El libro Lo Africano en el Perú es el resultado de esta investigación. En él, la autora presenta una visión detallada de la historia y la cultura afroperuana, desde la época de la esclavitud hasta la actualidad. El libro incluye canciones, poemas, historias y testimonios de personas que han vivido la experiencia afroperuana.
        </p>
        <br>
        <br>
        <p class="subTitle">
          Entre los hallazgos más destacados de la investigación de Baca se encuentran:
        </p>
        <br>
        <br>
        <p class="subTitle">
          - La influencia africana en la música peruana, particularmente en el festejo y el landó.
        </p>
        <br>
        <br>
        <p class="subTitle">
          - La importancia de la danza afroperuana, como el festejo y la zamacueca.
        </p>
        <br>
        <br>
        <p class="subTitle">
          - La presencia de comunidades afroperuanas en la costa peruana y su contribución a la economía y a la cultura del país.
        </p>
        <br>
        <br>
        <p class="subTitle">
          Lo Africano en el Perú ha sido reconocido como una obra fundamental para entender la cultura y la historia peruana. El libro ha sido utilizado como texto de referencia en universidades y centros de investigación del Perú y del extranjero.
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
          Reconocimientos académicos
        </p> <br>
        <p class="subTitle">
          Susana Baca ha sido reconocida por su contribución a la cultura y la música peruana a través de numerosos premios y reconocimientos académicos. A lo largo de su carrera, ha recibido más de 20 premios y reconocimientos por su trabajo en la investigación, la docencia y la promoción de la cultura peruana.
        </p>
        <br>
        <br>
        <p class="subTitle">
          Entre los reconocimientos más destacados se encuentran:
        </p>
        <br>
        <br>
        <p class="subTitle">
          - Premio Nacional de Cultura del Perú (2017) por su contribución a la preservación y difusión de la cultura peruana.
        </p>
        <br>
        <br>
        <p class="subTitle">
          - Premio Internacional de Música Latina de la Universidad de California en Los Ángeles (2015) por su trayectoria artística y académica.
        </p>
        <br>
        <br>
        <p class="subTitle">
          - Premio de la Academia Latina de Artes y Ciencias de la Grabación (2013) por su contribución a la música latina.
        </p>
        <br>
        <br>
        <p class="subTitle">
          - Premio de la Asociación de Estudios Latinoamericanos (2012) por su investigación sobre la música afroperuana.
        </p>
        <br>
        <br>
        <p class="subTitle">
          En el ámbito académico, ha recibido reconocimientos por su trabajo en la investigación y la docencia. Entre ellos se encuentran:
        </p>
        <br>
        <br>
        <p class="subTitle">
          - Doctorado Honoris Causa en Música de la Universidad Nacional de Música del Perú (2018).
        </p>
        <br>
        <br>
        <p class="subTitle">
          - Doctorado Honoris Causa en Letras de la Universidad de Lima (2015).
        </p>
        <br>
        <br>
        <p class="subTitle">
          - Premio a la Excelencia en la Investigación de la Universidad Nacional Mayor de San Marcos (2014).
        </p>
        <br>
        <br>
        <p class="subTitle">
          Susana, también, ha sido reconocida por su trabajo en la promoción de la cultura peruana a través de la música y la educación. Entre ellos se encuentran:
        </p>
        <br>
        <br>
        <p class="subTitle">
          - Premio de la Organización de Estados Americanos (OEA) por su contribución a la promoción de la cultura peruana en el extranjero (2016).
        </p>
        <br>
        <br>
        <p class="subTitle">
          - Premio de la Municipalidad de Lima por su contribución a la cultura limeña (2013).
        </p>
        <br>
        <br>
        <p class="subTitle">
          La cantautora e investigadora peruana ha expresado su gratitud por estos reconocimientos y ha destacado la importancia de la cultura y la música en la sociedad.
        </p>
        <br>
        <br>
        <p class="subTitle">
          "Es un honor recibir estos reconocimientos", afirma Baca. "Pero lo más importante es que nuestro trabajo sea reconocido y valorado por la sociedad. La cultura y la música son fundamentales para nuestra identidad y nuestra historia".
        </p>
      </div>
    </div>
    <div data-aos="fade-left" data-aos-duration="1000" class="column-right">
      <div style="text-align: center;">
        <img :src="img_71" style="max-height: 479px;"/>
      </div>
    </div>
  </div>

  <div class="grid">
    <div class="column-left">
      <div data-aos="fade-right" data-aos-duration="1000">
        <p class="title">
          Rescate del legado musical afroperuano
        </p> <br>
        <p class="subTitle">
          Susana Baca ha dedicado su vida a preservar y rescatar el legado afroperuano, una tarea que ha llevado a cabo con pasión y dedicación durante más de cuatro décadas. A través de su música, investigación y activismo, Baca ha sido fundamental en la recuperación y valorización de la cultura afroperuana.
        </p>
        <br>
        <br>
        <p class="subTitle">
          La cultura afroperuana, que se remonta a la época de la esclavitud en el Perú, había sido históricamente marginada y olvidada. Sin embargo, Baca ha trabajado incansablemente para cambiar esta realidad. A través de su música, ha rescatado y reinterpretado canciones y ritmos tradicionales afroperuanos, como el festejo y el landó.

        </p>
        <br>
        <br>
        <p class="subTitle">
          "Mi objetivo es mostrar la riqueza y diversidad de la cultura afroperuana", afirma. "Quiero que la gente conozca y valore nuestra historia y nuestra identidad".
        </p>
        <br>
        <br>
        <p class="subTitle">
          Además de su trabajo musical, ha realizado investigaciones exhaustivas sobre la historia y la cultura afroperuana. Ha publicado varios libros y artículos sobre el tema y ha colaborado con instituciones culturales y académicas para promover la educación y la conciencia sobre la cultura afroperuana.

        </p>
        <br>
        <br>
        <p class="subTitle">
          Entre sus logros más destacados se encuentran: La creación del Instituto de Investigación y Difusión de la Cultura Afroperuana (IIDCA), que se dedica a la investigación y promoción de la cultura afroperuana; la organización del Festival de Música Afroperuana, que se celebra anualmente en Lima y reúne a artistas y músicos afroperuanos de todo el país; y la publicación de varios libros y discos que rescatan y promueven la música y la cultura afroperuana.
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
    <source src="../assets/sec2/music.mp3" type="audio/mpeg"> <!-- Added background audio -->
    Your browser does not support the audio element.
  </audio>

</template>
