<script setup>
import { useRouter } from 'vue-router'; // Import useRouter from vue-router
import { onMounted } from 'vue'; // Import onMounted from Vue

import img_11 from '../assets/sec3/11.png';

import img_21 from '../assets/sec3/21.png';

import img_31 from '../assets/sec3/31.png';

import img_41 from '../assets/sec3/41.png';

import img_51 from '../assets/sec3/51.png';

import img_61 from '../assets/sec3/61.png';
import img_62 from '../assets/sec3/62.png';

import img_71 from '../assets/sec3/71.png';

import img_81 from '../assets/sec3/81.png';


const router = useRouter(); // Initialize the router

onMounted(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on load
});

AOS.init()

function goBack() {
    router.push('/'); // Navigate back to the previous page
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
</style>

<template>

  <button class="back-button" @click="goBack">Volver</button>

  <div class="year">
    <span class="line"></span> La Gestora
    {{ edit_1 }} <!-- Added back button -->
  </div>
  
  <div style="height: 61px;"></div>

  <br/>
  <br/>
  <br/>
  
  <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1021769771?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="La armonía del legado"></iframe></div>

  <div class="grid">
    <div class="column-left">
      <div data-aos="fade-right" data-aos-duration="1000">
        <p class="title">
          Instituto Negrocontinuo
        </p> <br>
        <p class="subTitle">
          El Instituto Negrocontinuo fue fundado por Susana Baca en 1995 con el objetivo de ser un espacio donde la comunidad afroperuana pueda expresarse, compartir su cultura y preservar su historia. El instituto ofrecía una variedad de programas y actividades que buscaban fomentar la conciencia y el orgullo sobre la identidad afroperuana.
        </p>
        <br>
        <br>
        <p class="subTitle">
          Entre los programas y actividades ofrecidos por el instituto se encontraban las siguientes actividades: clases de música y danza afroperuana, talleres de arte y artesanía, cursos de historia y cultura afroperuana, presentaciones de teatro y música, exposiciones de arte, y fotografía
        </p>
        <br>
        <br>
        <p class="subTitle">
          Estos recursos estaban disponibles para investigadores, estudiantes y el público en general. Además, el instituto desarrolló programas de educación y sensibilización para combatir la discriminación racial y promover la igualdad de oportunidades para la comunidad afroperuana.
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
          Centro Cultural y Artístico de la Memoria
        </p> <br>
        <p class="subTitle">
          En el distrito de Cañete, provincia de Lima, se encuentra el Centro Cultural y Artístico de la Memoria, un espacio fundado por Susana Baca. Este centro es un reflejo de la pasión y dedicación de Susana por la preservación y promoción de la cultura afroperuana y la memoria histórica de la región.
        </p>
        <br>  
        <br>  
        <p class="subTitle">
          El Centro Cultural y Artístico de la Memoria fue inaugurado en 2015 con el objetivo de crear un espacio donde la comunidad local pueda aprender, compartir y celebrar su cultura e historia. Al igual que el Instituto Negro Continuo, el centro ofrece una variedad de programas y actividades que buscan fomentar la conciencia y el orgullo sobre la identidad afroperuana y la memoria histórica de la región.
        </p>
        <br>  
        <br>  
        <p class="subTitle">
          "Queremos crear un espacio donde la gente pueda conectar con su pasado y su cultura", afirma Baca. "El Centro Cultural y Artístico de la Memoria es un lugar donde la comunidad puede encontrar su voz y su identidad".
        </p>
        <br>  
        <br>  
        <p class="subTitle">
          Entre los programas y actividades ofrecidos por el centro se encuentran: clases de música y danza afroperuana, talleres de arte y artesanía, cursos de historia y cultura afroperuana, presentaciones de teatro y música, exposiciones de arte y fotografía, investigaciones y documentación de la historia oral de la región
        </p>
        <br>  
        <br>  
        <p class="subTitle">
          El centro también cuenta con una biblioteca y un archivo que alberga una vasta colección de materiales sobre la historia y la cultura afroperuana de la región. Estos recursos están disponibles para investigadores, estudiantes y el público en general.
        </p>
        <br>  
        <br>  
        <p class="subTitle">
          "El Centro Cultural y Artístico de la Memoria es un espacio de resistencia y celebración", afirma Baca. "Queremos demostrar que la cultura afroperuana es rica y valiosa, y que merece ser reconocida y respetada".
        </p>
        <br>  
        <br>  
        <p class="subTitle">
          En el distrito de Cañete, provincia de Lima, se encuentra el Centro Cultural y Artístico de la Memoria, un espacio fundado por Susana Baca. Este centro es un reflejo de la pasión y dedicación de Susana por la preservación y promoción de la cultura afroperuana y la memoria histórica de la región.
        </p>
        <br>  
        <br>  
        <p class="subTitle">
          El Centro Cultural y Artístico de la Memoria fue inaugurado en 2015 con el objetivo de crear un espacio en donde la comunidad local pueda aprender, compartir y celebrar su cultura e historia. Al igual que el Instituto Negro Continuo, el centro ofrece una variedad de programas y actividades que buscan fomentar la conciencia y el orgullo sobre la identidad afroperuana y la memoria histórica de la región.
        </p>
        <br>  
        <br>  
        <p class="subTitle">
          "Queremos crear un espacio donde la gente pueda conectar con su pasado y su cultura", afirma Baca. "El Centro Cultural y Artístico de la Memoria es un lugar donde la comunidad puede encontrar su voz y su identidad".
        </p>
        <br>  
        <br>  
        <p class="subTitle">
          El centro ofrece diversos cursos y talleres. También, cuenta con una biblioteca y un archivo que alberga una vasta colección de materiales sobre la historia y la cultura afroperuana de la región. Estos recursos están disponibles para investigadores, estudiantes y el público en general.
        </p>
        <br>  
        <br>  
        <p class="subTitle">
          "El Centro Cultural y Artístico de la Memoria es un espacio de resistencia y celebración", afirma Baca. "Queremos demostrar que la cultura afroperuana es rica y valiosa, y que merece ser reconocida y respetada".
        </p>
        <br>  
        <br>  
        <p class="subTitle">
          El Centro Cultural y Artístico de la Memoria ha recibido reconocimientos y apoyo de instituciones culturales y educativas nacionales e internacionales. Su trabajo ha inspirado a nuevas generaciones de líderes y activistas afroperuanos que continúan la lucha por la igualdad y la justicia.
        </p>
      </div>
    </div>
    <div data-aos="fade-left" data-aos-duration="1000" class="column-right">
      <div style="text-align: center;">
        <img :src="img_21" style="max-height: 479px;"/>
      </div>
    </div>
  </div>

  <div class="grid">
    <div class="column-left">
      <div data-aos="fade-right" data-aos-duration="1000">
        <p class="title">
          Vínculo con los jóvenes
        </p> <br>
        <p class="subTitle">
          Susana Baca comenta que le agrada reunirse con jóvenes artistas, músicos que le confiesan que crecieron escuchando sus canciones y que hoy pueden tenerla cerca para guiarlos y aconsejarlos. “Me gusta rodearme de músicos jóvenes que me dicen que les gusta mi música y que me han escuchado con anterioridad”, indica. 
        </p>
        <br>
        <br>
        <p class="subTitle">
          Susana Baca comenta que le agrada reunirse con jóvenes artistas, músicos que le confiesan que crecieron escuchando sus canciones y que hoy pueden tenerla cerca para guiarlos y aconsejarlos. “Me gusta rodearme de músicos jóvenes que me dicen que les gusta mi música y que me han escuchado con anterioridad”, indica. “Mi labor con los jóvenes tiene que ver con ayudarlos a encontrar su música, orientarlos y aconsejarlos. Cada cierto tiempo tengo reuniones con ellos y es muy grato compartir lo que una ha podido aprender”, señala. 
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
          Susana ministerial
        </p> <br>
        <p class="subTitle">
          Entre 2011 y 2012, Susana Baca, se desempeñó como ministra de Cultura, convirtiéndose en la primera mujer afroperuana en ocupar este cargo. Durante su gestión, Baca impulsó una serie de políticas y programas destinados a promover la diversidad cultural y la inclusión en el país.
        </p>
        <br>
        <br>
        <p class="subTitle">
          Baca asumió el cargo de ministra de Cultura en un momento en que el Perú enfrentaba desafíos importantes en términos de desigualdad y exclusión social. Consciente de estos desafíos, Susana se comprometió a trabajar para garantizar que la cultura fuera un derecho fundamental para todos los peruanos, independientemente de su origen étnico, social o geográfico.
        </p>
        <br>
        <br>
        <p class="subTitle">
          Entre sus logros más destacados como ministra de Cultura se encuentran la creación del Programa Nacional de Cultura Afroperuana, destinado a promover la visibilidad y el reconocimiento de la cultura afroperuana en el país; la implementación del Plan Nacional de Cultura, que estableció objetivos y estrategias para promover la diversidad cultural y la inclusión en el Perú; la creación del Fondo de Desarrollo Cultural, que proporcionó financiamiento para proyectos culturales y artísticos en todo el país; y la promoción de la Ley de Patrimonio Cultural, que protege y preserva el patrimonio cultural del Perú.
        </p>
        <br>
        <br>
        <p class="subTitle">
          Baca también trabajó para fortalecer la relación entre la cultura y la educación, lanzando programas como "Cultura en la Escuela", que buscaba integrar la cultura en el currículo educativo nacional.
        </p>
        <br>
        <br>
        <p class="subTitle">
          Durante su gestión, Baca también enfrentó desafíos importantes, como la oposición de algunos sectores políticos y económicos que cuestionaban la importancia de la cultura en el desarrollo del país. Sin embargo, permaneció firme en su compromiso con la diversidad cultural y la inclusión.
        </p>
        <br>
        <br>
        <p class="subTitle">
          Aunque Baca dejó el cargo de ministra de Cultura en 2012, su legado continúa inspirando a nuevos líderes y activistas culturales en el Perú y en todo el mundo.
        </p>
      </div>
    </div>
    <div data-aos="fade-left" data-aos-duration="1000" class="column-right">
      <div style="text-align: center;">
        <img :src="img_41" style="max-height: 479px;"/>
      </div>
    </div>
  </div>

  <div class="grid">
    <div class="column-left">
      <div data-aos="fade-right" data-aos-duration="1000">
        <p class="title">
          Trabajo social con Aldeas Infantiles
        </p> <br>
        <p class="subTitle">
          Susana Baca ha sido una defensora incansable de los derechos de los niños y niñas en situación de vulnerabilidad. Su labor con Aldeas Infantiles, una organización que proporciona hogares y apoyo a niños y niñas huérfanos o abandonados, es un ejemplo de su compromiso con la infancia peruana.
        </p>
        <br>
        <br>
        <p class="subTitle">
          Desde hace más de una década, Baca ha trabajado estrechamente con Aldeas Infantiles, visitando regularmente los hogares y centros de la organización en todo el país. Su objetivo es brindar apoyo emocional y material a los niños y niñas que viven en estas instituciones.
        </p>
        <br>
        <br>
        <p class="subTitle">
          "Los niños son el futuro de nuestro país", afirma. "Es nuestro deber como sociedad garantizar que tengan acceso a educación, salud y oportunidades para crecer y desarrollarse de manera integral".
        </p>
        <br>
        <br>
        <p class="subTitle">
          Baca ha sido testigo del impacto que la pobreza y la violencia pueden tener en la vida de los niños y niñas. Por eso, ha trabajado incansablemente para recaudar fondos y concienciar a la sociedad sobre la importancia de proteger y apoyar a los más vulnerables. "La música es una herramienta poderosa para cambiar la vida de los niños", afirma Baca. "A través de la música, podemos transmitir mensajes de esperanza y resiliencia".
        </p>
        <br>
        <br>
        <p class="subTitle">
          En 2015, Baca lanzó el proyecto Canto por los Niños, un disco que reunió a artistas peruanos y latinoamericanos para recaudar fondos para Aldeas Infantiles. El proyecto fue un éxito rotundo y recaudó más de 100.000 dólares para la organización.
        </p>
        <br>
        <br>
        <p class="subTitle">
          Además de su labor musical, Baca ha trabajado intensamente con Aldeas Infantiles para desarrollar programas de educación y capacitación para los niños y niñas que viven en sus hogares.
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
          Declaraciones sobre la vida y la música
        </p> <br>
        <p class="subTitle">
          Susana Baca ha sido entrevistada por un gran número de medios de comunicación y ha dejado mensajes y frases que revelan su visión sobre el mundo del arte y la condición humana. A continuación, algunas de las citas más resaltantes. 
        </p>
        <br>
        <br>
        <p class="subTitle">
          - "La vida es un canto, un ritmo que nos lleva a encontrar nuestro lugar en el mundo." (Entrevista con ar, 2019)
        </p>
        <br>
        <br>
        <p class="subTitle">
          - "Soy una mujer afroperuana, y eso es una parte fundamental de mi identidad. Mi música es un reflejo de mi historia y mi cultura." (Entrevista con The New York Times, 2017)
        </p>
        <br>
        <br>
        <p class="subTitle">
          - "La identidad es un proceso de construcción, no es algo fijo. Es importante reconocer nuestras raíces y nuestra historia para entender quiénes somos." (Entrevista con La República, 2015)
        </p>
        <br>
        <br>
        <p class="subTitle">
          - "La música es un lenguaje universal que puede unir a las personas y trascender las fronteras." (Entrevista con BBC, 2018)
        </p>
        <br>
        <br>
        <p class="subTitle">
          - "El arte es una forma de resistencia, de lucha contra la opresión y la injusticia." (Entrevista con El Comercio, 2016)
        </p>
        <br>
        <br>
        <p class="subTitle">
          - "Mi música es un reflejo de mi alma, de mi corazón. Es una forma de expresar mis sentimientos y mis pensamientos." (Entrevista con Rolling Stone, 2014)
        </p>
        <br>
        <br>
        <p class="subTitle">
          - "La cultura afroperuana es rica y diversa, y merece ser reconocida y valorada." (Entrevista con Afroprensa, 2019)
        </p>
        <br>
        <br>
        <p class="subTitle">
          - "La historia de los afroperuanos es una historia de lucha y resistencia. Es importante recordar y celebrar nuestra historia." (Entrevista con La Primera, 2018)
        </p>
        <br>
        <br>
        <p class="subTitle">
          - "La cultura afroperuana es una parte fundamental de la identidad peruana. Es importante reconocer y valorar nuestra diversidad cultural." (Entrevista con El Peruano, 2017)
        </p>
        <br>
        <br>
        <p class="subTitle">
          - "La educación es la clave para cambiar el mundo. Es importante enseñar a los niños y jóvenes sobre la importancia de la diversidad cultural y la igualdad." (Entrevista con Unicef, 2019)
        </p>
        <br>
        <br>
        <p class="subTitle">
          - "La conciencia social es fundamental para crear un mundo más justo y equitativo." (Entrevista con Oxfam, 2018)
        </p>
        <br>
        <br>
        <p class="subTitle">
          - "Es importante enseñar a los niños y jóvenes a respetar y valorar la diversidad cultural y la identidad." (Entrevista con Ministerio de Educación del Perú, 2017)
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
          Los reflectores mundiales
        </p> <br>
        <p class="subTitle">
          Susana Baca ha merecido comentarios y opiniones de artistas y crítica especializada a lo largo de su carrera. Por ejemplo, otro ícono musical peruano, como Eva Ayllón, ha dicho que "Susana es una artista excepcional, su voz es un instrumento divino que nos hace sentir la esencia de la música afroperuana" (Entrevista con El Comercio, 2020).
        </p>
        <br>
        <br>
        <p class="subTitle">
          El músico y productor brasileño Sérgio Mendes ha destacado la importancia de Baca en la música latinoamericana: "Susana Baca es una de las voces más auténticas y poderosas de la música latinoamericana. Su trabajo es un testimonio de la riqueza cultural de Perú" (Entrevista con Rolling Stone, 2019).
        </p>
        <br>
        <br>
        <p class="subTitle">
          La cantautora española, Rosalía ha expresado su admiración por Baca: "Me encanta la música de Susana Baca, es una fuente de inspiración para mí. Su compromiso con la cultura afroperuana es verdaderamente admirable" (Entrevista con El País, 2020).
        </p>
        <br>
        <br>
        <p class="subTitle">
          El crítico musical Juan Carlos Cobián ha escrito sobre Baca: "Susana Baca es una artista que ha logrado fusionar la tradición con la innovación, creando un sonido único y emocionante" (Artículo en La Nación, 2018).
        </p>
        <br>
        <br>
        <p class="subTitle">
          El artista visual, Fernando de Szyszlo, dijo que: "Susana es una artista que va más allá de la música, es una embajadora de la cultura afroperuana y una defensora de los derechos humanos" (Entrevista con El Peruano, 2019).
        </p>
        <br>
        <br>
        <p class="subTitle">
          Y no podía faltar el aliado que le abrió las puertas a la internacionalización, David Byrne, quien en una entrevista con The New York Times, en 2002, dijo: "Susana Baca es una de las voces más increíbles que he escuchado en mi vida. Su música es una fusión de tradición e innovación, y su presencia en el escenario es electrizante". Además, en su libro Cómo funciona la música (2012), Byrne afirmó que: "Su música es un ejemplo perfecto de cómo la tradición puede ser reinventada y renovada. Su voz es una herramienta expresiva increíble".
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
          El legado de Susana
        </p> <br>
        <p class="subTitle">
          Sentada en la sala de su casa en Chorrillos, muy cerca del lugar donde se reúne con sus músicos a ensayar, Susana Baca reflexiona sobre cuál considera que es su legado. Su silencio evoca la sabiduría de sus años, de sus decenas de escenarios recorridos, de sus canciones, de sus presentaciones, de sus grabaciones, de sus miles de horas cantando e investigando. “Me gustaría que hagan una película de mi vida”, dice. 
        </p>
        <br>
        <br>
        <p class="subTitle">
          Y es que el legado de Susana Baca necesitaría una trilogía cinematográfica, varios tomos de libros, una serie de televisión con varias temporadas. Desde la música, desde la cultura, desde la academia, Susana Baca ha sabido construir, crear, imaginar y emocionar. Es una artista completa, una amante de la historia, una curiosa profesional, una defensora de la identidad, una escudera del arte, una profesora de la herencia cultural, una amiga de la tradición, una innovadora valiente: una mujer sin igual. 

        </p>
      </div>
    </div>
    <div data-aos="fade-left" data-aos-duration="1000" class="column-right">
      <div style="text-align: center;">
        <img :src="img_81" style="max-height: 479px;"/>
      </div>
    </div>
  </div>

  <audio autoplay loop volume=0.2>
    <source src="../assets/sec3/music.mp3" type="audio/mpeg"> <!-- Added background audio -->
    Your browser does not support the audio element.
  </audio>

</template>
