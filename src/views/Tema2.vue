<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Análisis de la situación de salud (ASIS)

    .row.justify-content-center.align-items-center.mb-5
      .col-8
        p De acuerdo con la Organización Mundial de la Salud, “el derecho a la salud incluye el acceso oportuno, aceptable y asequible a servicios de atención de salud de calidad suficiente” es decir que ninguna persona por motivos relacionados con su nivel de ingresos, raza, filiación religiosa, sector político u orientación sexual puede ser excluida de los servicios de salud. Sin embargo, a pesar de los esfuerzos que se han hecho a nivel mundial para garantizar el ejercicio de este derecho, se estima que la mitad de la población mundial carece de acceso integral a los servicios básicos de salud. 
        p En Colombia, por fortuna, el panorama es más alentador, y el abordaje del aseguramiento en salud desde la perspectiva de la política pública ha tenido efectos muy positivos como son el aumento en la cobertura universal, el acceso a servicios de salud de calidad y la consolidación de un esquema sanitario sólido, especialmente desde el punto de vista financiero. 
        p.mb-5 El éxito de los sistemas de salud depende, en gran medida, de la capacidad que tengan los Estados para diseñar políticas e intervenciones que respondan a las necesidades reales de la población para lo cual es necesario contar con información confiable que permita analizar el contexto en el que se da la relación salud – enfermedad desde una perspectiva general. En respuesta a esta necesidad de información se dio origen a los Análisis de la Situación de Salud (ASIS) los cuales se definen como un proceso que tiene el fin de caracterizar, medir y explicar el perfil de salud, enfermedad de una población incluyendo los daños y problemas de salud, así como sus determinantes. (Ministerio de Salud y Protección Social). 
      .col-4
        img(src='@/assets/curso/temas/tema2/1.svg')

    p(data-aos="fade-right").mb-5 #[b Normatividad:] el marco normativo que regula los aspectos relacionados con los ASIS (análisis de la situación de salud) incluye diversos elementos entre los cuales se destacan los siguientes:

    PasosA.color-primario.mb-5(tipo="n")
      .row
        .col-md-6.mb-4.mb-md-0
          h3 Decreto 3518 de 2006: 
          p Encarga al Ministerio de Salud y Protección Social realizar el análisis de la situación de la salud del país.
  
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/2.png', alt='Texto que describa la imagen')

      .row
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema2/3.png', alt='Texto que describa la imagen')
        .col-md-6
          h3 La Ley 1122 de 2007: 
          p En su artículo 33, creó el Plan Nacional de Salud Pública expresado en el Plan Nacional de Desarrollo. Allí se estableció la necesidad de contar con un perfil epidemiológico en el que se identifiquen los factores protectores, de riesgo y determinantes, entre otros elementos.


      .row
        .col-md-6.mb-4.mb-md-0
          h3 Decreto 3039 de 2007: 
          p Reglamenta la adopción del Plan Nacional de Salud Pública y resalta la importancia del Análisis de la Situación de Salud como herramienta de planificación.


        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/4.png', alt='Texto que describa la imagen')
            
      .row
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema2/5.png', alt='Texto que describa la imagen')
        .col-md-6
          h3 Resolución 425 de 2008: 
          p En esta se define la metodología para la elaboración, ejecución, seguimiento, evaluación y control del Plan de Salud Territorial.

      .row
        .col-md-6.mb-4.mb-md-0
          h3 Decreto 4107 de 2011: 
          p Determina los objetivos y la estructura del Ministerio de la Salud y Protección Social y le asigna a este la elaboración del estudio de la situación de la salud. 
 
      
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/6.png', alt='Texto que describa la imagen')

      .row
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema2/7.png', alt='Texto que describa la imagen')
        .col-md-6
          h3 Resolución 1035 de 2022: 
          p Por la cual se adopta el Plan Decenal de Salud Pública 2022 – 2031. Se menciona el ASIS como insumo primordial para la formulación de este plan.  

    p(data-aos="fade-right").mb-5 De acuerdo con la normativa vigente, es posible evidenciar la importancia que tiene el ASIS en la generación de información para la gestión eficiente de las acciones en salud y el diseño de políticas encaminadas hacia el ejercicio efectivo de este derecho. 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/8.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 #[b Descripción de la metodología:] en términos generales, el análisis de fuentes de información en salud, permite la recopilación y procesamiento de diversas fuentes de datos de todo tipo, como se ilustra en la figura siguiente, con el propósito de obtener información confiable y precisa. Esto, a su vez, facilita la toma de decisiones por parte de los organismos encargados del diseño de políticas e intervenciones en salud.

    .row.justify-content-center.align-items-center.mb-5
      .col.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 5.] <em>Proceso metodológico para la estructuración del análisis de fuentes de información</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/9.svg', alt='En la figura cinco se muestra el proceso metodológico para la estructuración del ASIS, que va desde la entrada de insumos (censo), hasta la difusión por medio de la página web y otros.')
          figcaption Nota. Adaptado de la Guía conceptual y metodológica para la construcción del ASIS de las Entidades Territoriales (2014). 

    .row.justify-content-center.align-items-center.mb-5
      .col.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 5.] <em>Proceso metodológico para la estructuración del análisis de fuentes de información</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/9-m.svg', alt='En la figura cinco se muestra el proceso metodológico para la estructuración del ASIS, que va desde la entrada de insumos (censo), hasta la difusión por medio de la página web y otros.')
          figcaption Nota. Adaptado de la Guía conceptual y metodológica para la construcción del ASIS de las Entidades Territoriales (2014). 

    p(data-aos="fade-right") La información generada a partir de los ASIS puede ser empleada para diversos fines, la mayoría de ellos relacionados con el diseño de políticas públicas, planes de intervención o proyectos. Igualmente, los documentos de ASIS se utilizan en acciones de monitoreo y evaluación de las políticas públicas en salud. 

    p(data-aos="fade-right") #[b Objetivos del Análisis de la Situación de Salud:] éste análisis resulta de suma utilidad al momento de diseñar políticas, proyectos o intervenciones en el área de la salud, por lo que su consulta debe darse de manera ágil y oportuna. A través de la observación de los resultados del ASIS además de conocer el estado de salud de la población, se consigue evidenciar la influencia de sus determinantes, la importancia relativa según grupos poblacionales y la medición del efecto de las intervenciones. 

    p(data-aos="fade-right").mb-5 Adicionalmente, como se muestra en la siguiente figura, el ASIS es fundamental para:

    .row.justify-content-center.align-items-center.mb-5
      .col.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 6.] <em>Principales objetivos del Análisis de la Situación en Salud- ASIS</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/10.svg', alt='En la figura seis se muestran los siete principales objetivos del análisis de la situación en salud.')
          figcaption Nota. Adaptado de la Guía conceptual y metodológica para la construcción del ASIS de las Entidades Territoriales (2014). 

    .row.justify-content-center.align-items-center.mb-5
      .col.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 6.] <em>Principales objetivos del Análisis de la Situación en Salud- ASIS</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/10-m.svg', alt='En la figura seis se muestran los siete principales objetivos del análisis de la situación en salud.')
          figcaption Nota. Adaptado de la Guía conceptual y metodológica para la construcción del ASIS de las Entidades Territoriales (2014). 

    .row.justify-content-center.align-items-center.mb-5
      .col-8
        p #[b Algunos elementos conceptuales:] los ASIS se definen como procesos analíticos sintéticos que abarcan diferentes tipos de análisis. Estos ofrecen la posibilidad de estudiar los fenómenos salud, enfermedad desde una óptica integral en la cual convergen varias miradas, que van más allá del ámbito de la prestación de los servicios, basado en el enfoque por determinantes, en el marco del cual se observan los factores que influyen en la salud, sean éstos, competencia o no del sector. 
        p A diferencia de los diagnósticos en salud, los ASIS recogen información multisectorial la cual sirve de insumo para la generación de informes que dan una visión más amplia de los fenómenos que inciden en los procesos de salud, enfermedad. Por tanto, ambos tipos de diagnósticos no son excluyentes, sino que, por el contrario, son complementarios. 
        p.mb-5 El ASIS provee los insumos para el desarrollo del #[b Plan decenal de salud pública (PDSP)], ya que la información que se provee allí es clave para su formulación y estructuración. El PDSP se construye con el fin de avanzar hacia la búsqueda de la equidad en salud, a través del goce efectivo de este derecho por parte de la población, el mejoramiento de las condiciones de vida y procurar cero tolerancia frente a la mortalidad, la morbilidad y la discapacidad evitable. Este, además, enmarca todas las intervenciones en salud y ofrece un ordenamiento para la garantía de este derecho. Las dimensiones prioritarias sobre las cuales se basa el PDSP se pueden revisar en la siguiente figura:
      .col-4
        img(src='@/assets/curso/temas/tema2/11.png')

    .row.justify-content-center.align-items-center.mb-5
      .col.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 7.] <em>Dimensiones del Plan Decenal de Salud Pública</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/12.svg', alt='En la figura siete se muestran las ocho dimensiones del plan decenal de salud pública.')
          figcaption Nota. Adaptada de Guía conceptual y metodológica para la construcción del ASIS de las Entidades Territoriales (2014). 

    .row.justify-content-center.align-items-center.mb-5
      .col.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 7.] <em>Dimensiones del Plan Decenal de Salud Pública</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/12-m.svg', alt='En la figura siete se muestran las ocho dimensiones del plan decenal de salud pública.')
          figcaption Nota. Adaptada de Guía conceptual y metodológica para la construcción del ASIS de las Entidades Territoriales (2014). 


    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Articulación con salud ambiental

    .row.justify-content-center.align-items-center.mb-5
      .col-7
        p Dentro de los fundamentos del ASIS se habla de los determinantes sociales de la salud y los definen como las circunstancias en que las personas nacen, crecen, viven, trabajan y envejecen, incluido el sistema de salud, las cuales son el resultado de la distribución del dinero, el poder, y los recursos en los ámbitos mundial, nacional y local, que depende a su vez de las políticas adoptadas (Guía conceptual y metodológica para la construcción del ASIS de las Entidades Territoriales, 2014). 
        p Además de los determinantes sociales, para la construcción del ASIS se tienen en cuenta también los determinantes intermedios los cuales se relacionan con las condiciones que pueden ser modificadas y ponen en desventaja a las personas que las poseen frente a los demás, con lo cual presentan mayor vulnerabilidad.  
        p.mb-5 Necesariamente, el ASIS debe incorporar elementos de la salud ambiental dentro de sus contenidos, ya que a través del estudio de los factores que rodean al individuo es posible identificar cuáles de estos tienen relación directa con su calidad de vida y su bienestar o, por el contrario, pueden ser la causa de alguna situación que tenga efectos negativos en su salud o en la de la población. En ese orden de ideas, el aporte que hace la salud ambiental al ASIS es bastante importante, pues amplía la visión sobre los aspectos que rodean al individuo y permite la lectura del contexto, con lo cual se pueden explicar mejor las causas de la enfermedad y, posteriormente, actuar para superarlas.
      .col-5
        img(src='@/assets/curso/temas/tema2/13.png')

    .d-flex.flex-wrap.align-items-center(data-aos="fade-right").mb-5
      img(src='@/assets/curso/temas/icono.svg' style="max-width: 30px;")
      .h3.col-auto.pb-2.mb-0.ms-2(style=" color: #455B2D;") Elementos de la salud ambiental en el ASIS

    p(data-aos="fade-right").mb-5 Algunos de los elementos que guardan relación con la salud ambiental y que se consideran dentro del ASIS son:

    .BGIMG01.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Características físicas del territorio
            p De estas dependen factores que pueden afectar o favorecer la salud.
            p Aspectos como la ubicación de los asentamientos humanos, orografía, relieve, tipo de coberturas vegetales y usos del suelo son solo algunas de las características que pueden influir en la salud de la población.
            p Por ejemplo, donde existen grandes áreas de monocultivo es más factible que se presenten problemas de contaminación de aguas por agroquímicos, que en áreas donde se tengan usos recreativos o de conservación. 


          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/14.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Características climatológicas del territorio
            p Los picos de enfermedades respiratorias se presentan en temporadas invernales, así como en zonas cálidas donde existe alta incidencia de enfermedades transmitidas por vectores, como el dengue.
            p “El clima del país es posible identificarlo por la temperatura media del aire, de la precipitación, de la humedad del aire y de los vientos, variables climatológicas, que muestran una variabilidad en la distribución espaciotemporal y se relacionan con los procesos biológicos, de salud, ecosistémicos y socioeconómicos” (Ministerio de Salud y Protección Social, 2021). 


          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/15.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Amenazas de origen natural
            p Los picos de lluvias producen inundaciones, que, de tener un costo en vidas humanas, generan pérdida de bienes, disminución del ingreso e inseguridad alimentaria.
            p Existen amenazas de tipo volcánico, sísmico, remociones en masa, erosión del suelo y sequías, que generan diversos tipos de afectación para la población, sus efectos son más perjudiciales cuando su acción se combina con elementos del ámbito social como bajos ingresos, falta de servicios públicos o construcción en zonas de alto riesgo. 


          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/16.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Circunstancias materiales: hogares y servicios públicos
            p Contempla características de las viviendas en que habita la población, sus sistemas de abastecimiento de agua, fuentes de agua para el consumo humano y acceso a los servicios de saneamiento básico, los cuales tienen una estrecha relación con la presencia de algunas enfermedades en las comunidades.
            p También se analiza en detalle el acceso a otros servicios que, igualmente, están ligados a la calidad de vida y la salud, como energía eléctrica y gas domiciliario. 


          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/17.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Condiciones laborales
            p En el documento se presentan algunos indicadores que evidencian la influencia que la accidentabilidad laboral tiene sobre la población.
            p Es evidente que los entornos de trabajo guardan una estrecha relación con la cantidad de accidentes laborales por lo que el desarrollo de estrategias que permitan realizar las actividades de una manera segura es una obligación tanto de empleados como de empleadores. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/18.png', alt='Texto que describa la imagen')

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Conceptos básicos de epidemiología y estadística

    .row.justify-content-center.align-items-center.mb-5
      .col-8
        p Los análisis de la situación en salud se basan en la observación de múltiples fuentes de información por medio de las cuales se identifican los factores que inciden en la calidad de vida de la población. Para establecer las relaciones entre esos factores y los procesos salud, enfermedad, es necesario acudir los modelos matemáticos por medio de los cuales se analiza la influencia de determinados elementos teniendo en cuenta las características de cada población, su entorno y los hábitos, entre otras variables. 
        p La ciencia que estudia estas relaciones, así como las características de los grupos que resultan afectados, su distribución geográfica, la frecuencia con que se presentan las enfermedades y las causas o los factores asociados es lo que se conoce como epidemiología. 
        p La epidemiología tiene un fundamento netamente estadístico, pues recoge datos de la población, conocidos como variables, para analizarlos, procesarlos y finalmente, hacer recomendaciones sobre el manejo que se debe dar a determinadas situaciones problemáticas. La epidemiología es una ciencia multidisciplinaria que integra conceptos de medicina, estadística, demografía, sociología y salud ambiental. 
        p.mb-5 De acuerdo con González J., Restrepo G. (2010). en su texto “Libro de biometría comunitaria”, la epidemiología es el uso del método científico en el estudio de la enfermedad y la salud de la población, buscando la causa para, así entender, qué se puede hacer en beneficio del hombre. Allí, citan además algunas definiciones que vale la pena analizar para entender un poco más qué implica esta disciplina:
      .col-4
        img(src='@/assets/curso/temas/tema2/19.svg')

    .row.justify-content-center.align-items-center.mb-5
      .col-10
        .cajon.color-secundario.p-4
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Es el estudio de la distribución y de los determinantes de los estados o acontecimientos relacionados con la salud de las poblaciones específicas y las aplicaciones de este estudio al control de los problemas sanitarios (Last J). 
            li 
              i.lista-ul__vineta
              | Es el estudio de la distribución de una enfermedad o una condición en una población y de aquellos factores que influencian su distribución (Lilienfild). 
            li 
              i.lista-ul__vineta
              | El estudio de la enfermedad y cómo ocurre en la naturaleza (Gordon). 
            li 
              i.lista-ul__vineta
              | El estudio de la distribución y de los determinantes de la frecuencia de la enfermedad en el hombre (Mac Mahon y Pugh). 

    .d-flex.flex-wrap.align-items-center(data-aos="fade-right").mb-5
      img(src='@/assets/curso/temas/icono.svg' style="max-width: 30px;")
      .h3.col-auto.pb-2.mb-0.ms-2(style=" color: #455B2D;") Objetivos de la epidemiología

    p(data-aos="fade-right").mb-5 La epidemiología es una disciplina que se encarga de estudiar cómo se da la salud y la enfermedad en las poblaciones, y a partir de ello proponer acciones que procuren el beneficio de las personas. Esto es posible a partir de los siguientes objetivos que se pueden revisar en la siguiente figura:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 8.] <em>Objetivos de la epidemiología</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/20.svg', alt='En la figura 8 se muestran los objetivos de la epidemiología, se pueden resaltar la identificación de los patrones de enfermedades y factores de riesgo en poblaciones, comprender su impacto en la salud pública y proporcionar información para el desarrollo de políticas y programas de prevención y control de enfermedades.')
          figcaption Nota. Restrepo G. y González J. (2010). 

    .row.justify-content-center.align-items-center.mb-5
      .col-10.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 8.] <em>Objetivos de la epidemiología</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/20-m.svg', alt='En la figura 8 se muestran los objetivos de la epidemiología, se pueden resaltar la identificación de los patrones de enfermedades y factores de riesgo en poblaciones, comprender su impacto en la salud pública y proporcionar información para el desarrollo de políticas y programas de prevención y control de enfermedades.')
          figcaption Nota. Restrepo G. y González J. (2010). 

    .d-flex.flex-wrap.align-items-center(data-aos="fade-right").mb-5
      img(src='@/assets/curso/temas/icono.svg' style="max-width: 30px;")
      .h3.col-auto.pb-2.mb-0.ms-2(style=" color: #455B2D;") Herramientas empleadas por la epidemiología

    p(data-aos="fade-right").mb-5 La epidemiología, al igual que ocurre con otras ramas del saber se vale de herramientas que al articularse de forma correcta generan impactos muy positivos en la forma como se entienden los procesos salud – enfermedad; tanto que puede llegar a predecir situaciones e, incluso, allanar el camino para la búsqueda de soluciones a problemáticas complejas. Algunas de estas herramientas son:

    .BGIMG01.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Observación
            p La importancia de esta herramienta radica en la posibilidad que ofrece de analizar la situación, de identificar sus particularidades, establecer correlaciones y, finalmente, plantear un problema, al cual se le buscan respuestas y se le idean soluciones.


          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/21.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Descripción
            p A partir del conocimiento acumulado se empieza a mencionar lo que se ve con base en referentes para lo cual es necesario, en primera instancia, ordenar la información y luego clasificarla. Esta herramienta permite describir la enfermedad en detalle para facilitar su entendimiento y comprensión. 


          .col-md-6 
            figure
              img(src='@/assets/curso/temas/tema2/22.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Bioestadística
            p “La estadística es el conocimiento que permite recoger, resumir y analizar datos sujetos a variaciones aleatorias. El término aleatorio proviene del azar o que depende de algún evento fortuito. Por ende, la estadística a través de los números pretende hacer entender por qué suceden las cosas” (Restrepo G. y González J., 2010).
            p Por ejemplo, para analizar la mortalidad de una enfermedad, se observa cuántos pacientes murieron en determinado tiempo. Utilizando el promedio de mortalidad (pacientes enfermos vs pacientes muertos).


          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/23.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Comparación
            p Una de las principales herramientas para aprender sobre algún tema es la comparación. En la epidemiología, la comparación permite observar los fenómenos asociados a la enfermedad y analizarlos a la luz de la información disponible para, a partir de allí, generar conclusiones. Por ejemplo, para analizar una enfermedad en especial se deben observar las personas afectadas y comparar qué aspectos son diferentes a los de las personas sanas, con lo cual es posible plantearse preguntas y formular hipótesis. 


          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/24.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Intervención
            p La intervención es lograr que la población sea sometida a una acción determinada, de manera consciente, para conseguir un resultado sobre alguna situación en particular. Estas acciones pueden ser preventivas (para que no se presente la situación) o pueden ser correctivas (para que los efectos de la situación sean menos nocivos). Un ejemplo clásico de intervención es el caso de las vacunas. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/25.png', alt='Texto que describa la imagen')

    p(data-aos="fade-right") Uno de los capítulos del ASIS, está relacionado directamente con el análisis de la situación epidemiológica del país. En este aparte se analizan aspectos relacionados con el comportamiento de las enfermedades y su incidencia en los diversos grupos poblacionales, pero para entender un poco más lo que significan estas cifras es necesario adentrarse un poco más en lo que significa en sí la epidemiología. 
    p(data-aos="fade-right").mb-5 Algunos conceptos que resultan absolutamente necesarios para ahondar en temas epidemiológicos, se pueden observar en la siguiente figura:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 9.] <em>Algunos conceptos importantes en epidemiología</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/26.svg', alt='En la figura nueve se muestran conceptos importantes en epidemiología como frecuencia, etiología, enfermedad entre otros.')
          figcaption Nota. Restrepo G. y González J. (2010). 

    .row.justify-content-center.align-items-center.mb-5
      .col-10.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 9.] <em>Algunos conceptos importantes en epidemiología</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/26-m.svg', alt='En la figura nueve se muestran conceptos importantes en epidemiología como frecuencia, etiología, enfermedad entre otros.')
          figcaption Nota. Restrepo G. y González J. (2010). 

    .d-flex.flex-wrap.align-items-center(data-aos="fade-right").mb-5
      img(src='@/assets/curso/temas/icono.svg' style="max-width: 30px;")
      .h3.col-auto.pb-2.mb-0.ms-2(style=" color: #455B2D;") Estadística y epidemiología

    p(data-aos="fade-right").mb-5 La estadística es un área del conocimiento que se encarga del estudio de los datos, para a través de su análisis y descripción, establecer correlaciones, identificar tendencias, explicar el comportamiento de los fenómenos y hacer predicciones. Dependiendo de su naturaleza existen varios tipos de estadística (ver figura):

    .row.justify-content-center.align-items-center.mb-5
      .col-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 10.] <em>Tipos de estadística utilizados en epidemiología</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/27.svg', alt='En la figura diez se muestran los tipos de estadística utilizados en epidemiología como descriptiva, analítica e inferencial.')
          figcaption Nota. Restrepo G. y González J. (2010). 

    .row.justify-content-center.align-items-center.mb-5
      .col-10.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 10.] <em>Tipos de estadística utilizados en epidemiología</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/27-m.svg', alt='En la figura diez se muestran los tipos de estadística utilizados en epidemiología como descriptiva, analítica e inferencial.')
          figcaption Nota. Restrepo G. y González J. (2010). 

    p(data-aos="fade-right") La estadística, además, se ocupa del estudio de los datos. Un dato, a su vez, es la respuesta probable a una variable. Por ejemplo: si se hace una pregunta sobre cuántos casos de COVID-19 se presentan en un municipio se obtiene una respuesta: un número (1.000 casos). Ese número es el dato. Sin embargo, esta pregunta (en esta oportunidad llamada variable) se puede contestar de diversas formas, como, por ejemplo, a través de una proporción por cada 100 habitantes (10 % de la población está afectada por COVID-19). Al obtener la respuesta de esta forma (como un porcentaje) la información es mucho más comprensible para quien la recibe.
    p(data-aos="fade-right").mb-5 A continuación, se describen los tipos de datos utilizados en estadística, de acuerdo a su tipo (ver figura) 

    .row.justify-content-center.align-items-center.mb-5
      .col.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 11.] <em>Tipos de datos analizados en estadística</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/28.svg', alt='En la figura once se muestra los tipos de datos analizados en estadística, que son cualitativos y cuantitativos, y se describen sus características.')

    .row.justify-content-center.align-items-center.mb-5
      .col.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 11.] <em>Tipos de datos analizados en estadística</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/28-m.svg', alt='En la figura once se muestra los tipos de datos analizados en estadística, que son cualitativos y cuantitativos, y se describen sus características.')

    p(data-aos="fade-right").mb-5 Los datos, por su lado, pueden ser de tipo cuantitativo (numéricos) o cualitativos (se presentan utilizando palabras).

    ul.lista-ul
      li 
        i.lista-ul__vineta
        | #[b Cuantitativos:] pueden ser discretos o continuos. Los discretos corresponden a número enteros, es decir, que no permiten subdivisiones, como, por ejemplo, el número de personas infectadas con COVID-19 o el número de personas que conforman una familia. Los continuos corresponden a respuestas que pueden variar de acuerdo con el instrumento de medición.
      li 
        i.lista-ul__vineta
        | #[b Cualitativos:] en lugar de presentar cifras dan a entender características del objeto observado que facilitan el proceso descriptivo. Estos pueden ser nominales, ordinales, interválicos o proporcionales. 

    .d-flex.flex-wrap.align-items-center(data-aos="fade-right").mb-5
      img(src='@/assets/curso/temas/icono.svg' style="max-width: 30px;")
      .h3.col-auto.pb-2.mb-0.ms-2(style=" color: #455B2D;") Herramientas estadísticas

    p(data-aos="fade-right").mb-5 Para el análisis de los datos la estadística se vale de múltiples herramientas las cuales facilitan la observación de los datos para a partir de ellos establecer hipótesis y hacer una lectura de los elementos presentes en determinada población en un momento específico. Para ello, a través de la estadística se pueden hacer mediciones de tres tipos:

    .row.justify-content-center.align-items-center.mb-5
      .col-10
        ol.lista-ol--cuadro.mb-5
          li 
            .lista-ol--cuadro__vineta
              span(style="color:#000 !important") <strong>1</strong>
            | #[b Mediciones de frecuencia.] Estas son empleadas para describir los fenómenos que se presentan en una población y son comunes en casi todas las investigaciones epidemiológicas. Las mediciones de frecuencia se realizan a través de: 

    ul.lista-ul.mb-5
      li 
        i.lista-ul__vineta
        | #[b Número absoluto:] expresa un dato específico sobre un tema: “en la ciudad se han registrado 450 casos de COVID-19”. 
      li 
        i.lista-ul__vineta
        | #[b Tasa:]  expresa un dato con referencia a cierto número de habitantes (generalmente por 100.000 habitantes) mediante una regla de tres: “se han presentado 900 casos por cada 100.000 habitantes”. 
      li 
        i.lista-ul__vineta
        | #[b Proporción:] se expresa determinada situación mediante una proporción; generalmente se da en porcentaje: “0,1 % de los habitantes no tiene acceso al agua potable”. 
      li 
        i.lista-ul__vineta
        | #[b Razón:] expresa el número de determinada variable en proporción a una fracción de la población. En las razones siempre el resultado se compara como referente con uno (1): “en la ciudad hay un puesto de salud por cada 5.000 habitantes”. 

    p(data-aos="fade-right").mb-5 Las mediciones de frecuencia a menudo se emplean como indicadores, los cuales se constituyen en una medida que permite ser comparada como un referente que estima la realidad de una situación determinada (Restrepo G. y González J., 2010).

    .row.justify-content-center.align-items-center.mb-5
      .col-10
        ol.lista-ol--cuadro.mb-5
          li 
            .lista-ol--cuadro__vineta
              span(style="color:#000 !important") <strong>2</strong>
            | #[b Medidas de asociación.] A través de las medidas de asociación se establecen las relaciones entre causa y efecto, para lo cual una de las herramientas más empleadas es la tabla de contingencia. En la tabla de contingencia se toma una variable independiente (aquella que corresponde al factor que se está estudiando y que no sufre modificaciones durante la experimentación) y se cruza con una variable dependiente (es decir, la que es inestable y susceptible de ser modificada).

        p Por ejemplo, si se desea establecer si los jóvenes presentan más casos de intoxicación etílica la variable independiente será la edad de las personas y la variable dependiente el número de intoxicaciones, como se presenta en la siguiente figura:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 12.] <em>Relación entre variables independientes y dependientes</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/29.svg', alt='En la figura doce se muestra  un ejemplo de la relación entre variables, como variable independiente esta la edad de las personas y como dependiente los casos de intoxicación y coinciden en el área de convergencia.')

    .row.justify-content-center.align-items-center.mb-5
      .col-10.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 12.] <em>Relación entre variables independientes y dependientes</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/29-m.svg', alt='En la figura doce se muestra  un ejemplo de la relación entre variables, como variable independiente esta la edad de las personas y como dependiente los casos de intoxicación y coinciden en el área de convergencia.')
 
    p(data-aos="fade-right").mb-5 En este caso, entre más grande sea el área de convergencia mayor será la relación existente entre las dos variables analizadas. 

    .row.justify-content-center.align-items-center
      .col-10
        ol.lista-ol--cuadro.mb-5
          li 
            .lista-ol--cuadro__vineta
              span(style="color:#000 !important") <strong>3</strong>
            | #[b Medidas de impacto.] Básicamente son dos tipos de medidas. La primera se denomina riesgo atribuible y establece el grado de responsabilidad de la exposición en el surgimiento del evento adverso. La segunda medida se denomina fracción prevenible y es la que mide el impacto que tiene una acción protectora. 

    p(data-aos="fade-right") #[b Estadística descriptiva:] se ocupa de los métodos y procedimientos para recoger, clasificar, resumir, hallar regularidades y analizar los datos, siempre y cuando la variabilidad e incertidumbre sean una causa intrínseca de los mismos; así como de realizar inferencias a partir de ellos, con la finalidad de ayudar a la toma de decisiones y, en su caso, formular predicciones (Restrepo G. y González J., 2010).

    p(data-aos="fade-right").mb-5 #[b Tablas de frecuencia:] se utiliza para ordenar los datos para obtener una mejor visión de estos y por lo tanto observar tendencias, relaciones o qué datos se repiten más número de veces en el estudio, lo que se conoce como frecuencia. En el siguiente ejemplo se presenta una tabla de frecuencias de calificaciones en un curso de investigación. 

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-11(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Tabla 3.] <em>Ejemplo de tabla de frecuencias</em>
        .tabla-a.color-acento-contenido
          table
            caption  Nota. Restrepo G. y González J. (2010). 
            thead 
              tr
                th(colspan="7").text-center Tabla de frecuencias de calificaciones en un curso de investigación.
            thead
              tr
                th Clases
                th Frecuencias
                th Frecuencia acumulada
                th % de frecuencia
                th % de frecuencia acumulada
                th Marca de clase
                th Marca con frecuencia
            tbody
              tr
                td #[b De 1,5 a 1,9]
                td 1
                td 1
                td 1
                td 1
                td 1,7
                td 1,7
              tr 
                td #[b De 2,0 a 2,4]
                td 18
                td 19
                td 10
                td 10
                td 2,2
                td 39,6
              tr
                td #[b De 2,5 a 2,9]
                td 36 
                td 55
                td 20
                td 30
                td 2,7
                td 97,2
              tr
                td #[b De 3,0 a 3,4]
                td 87
                td 142
                td 48
                td 78
                td 3,2
                td 278,4
              tr
                td #[b De 3,5 a 3,9]
                td 35
                td 177
                td 19
                td 97
                td 3,7
                td 129,5
              tr
                td #[b De 4,0 a 4,4]
                td 4
                td 181
                td 2
                td 99
                td 4,2
                td 16,8
              tr
                td #[b De 4,5 a 4,9]
                td 1
                td 182
                td 1
                td 100
                td 4,7
                td 4,7
              tr
                td #[b Totales]
                td #[b 182]
                td
                td #[b 100]
                td
                td
                td

    p(data-aos="fade-right") En el ejemplo anterior se observa, entre otras cosas, que 87 de las 182 calificaciones (es decir, el 48 %) se ubicaron en rangos que estuvieron entre 3,0 y 3,4 lo que indica que la mayoría de los estudiantes obtuvieron una calificación aceptable. Por el contrario, las calificaciones en un rango de 4,5 a 4,9 obtuvieron una muy baja frecuencia, pues solo un dato estuvo dentro de ese rango (clase). 
    p(data-aos="fade-right") #[b Gráficas:] estas son tal vez una de las máximas expresiones de la estadística. Corresponden a representaciones gráficas de las frecuencias de los eventos y tienen una gran utilidad para hacer entender qué particularidades posee un determinado grupo de datos.
    p(data-aos="fade-right").mb-5 En el siguiente ejemplo se observan varias maneras de presentar la información relacionada con los casos de COVID-19 reportados en las principales ciudades de Colombia. Arriba a la izquierda se observa un gráfico de barras verticales, también conocido como histograma. Arriba a la derecha se presenta un gráfico circular o tipo “pastel”. Abajo a la izquierda se presenta un gráfico de barras horizontales y abajo a la derecha una tabla de datos. 

    .row.justify-content-center.align-items-center.mb-5
      .col.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 13.] <em>Tipos de gráficos empleados en estadística</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/30.svg', alt='En la figura trece se muestran los tipos de gráficos empleados en estadística que son histograma, circular, barras horizontales y tabla de datos.')

    .row.justify-content-center.align-items-center.mb-5
      .col.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 13.] <em>Tipos de gráficos empleados en estadística</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/30-m.svg', alt='En la figura trece se muestran los tipos de gráficos empleados en estadística que son histograma, circular, barras horizontales y tabla de datos.')

    p(data-aos="fade-right") Actualmente, existen herramientas informáticas que permiten crear diversos tipos de gráficos que facilitan la interpretación de cientos de datos al mismo tiempo, como:

    ul.lista-ul
      li 
        i.lista-ul__vineta
        | Gráficos de dispersión.
      li 
        i.lista-ul__vineta
        | Líneas de tendencia.
      li 
        i.lista-ul__vineta
        | Mapas.
      li  
        i.lista-ul__vineta
        | Gráficos de superficie.
      li 
        i.lista-ul__vineta
        | Radiales.
      li 
        i.lista-ul__vineta
        | Combinados.

    p(data-aos="fade-right").mb-5 Igualmente, otras herramientas que resultan muy útiles para analizar grandes cantidades de información son las infografías, las cuales mezclan información estadística con información gráfica, tal como se presenta a continuación:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 14.] <em>Ejemplo de infografía</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/31.svg', alt='En la figura catorce se muestra un ejemplo de una infografía.')

    .row.justify-content-center.align-items-center.mb-5
      .col-10.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 14.] <em>Ejemplo de infografía</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/31-m.svg', alt='En la figura catorce se muestra un ejemplo de una infografía.')

    .row.justify-content-center.align-items-center.mb-5
      .col-8
        p #[b Media o promedio:] la media aritmética o promedio es el dato que se ubica justo en medio del rango. Para obtener la media se suman todos los datos y este total se divide por el número de datos. Esta es una de las medidas que más se utiliza como referente, aunque en su interpretación se debe tener en cuenta el contexto y otros datos adicionales que ayuden a tener una interpretación más acertada de la realidad. 
        p Por ejemplo, se puede hacer un cálculo promedio de las edades de las personas que se atendieron en consulta durante un día. Este dato arrojó un promedio de 43 años. Esto se puede asimilar como que la mayoría de las personas que fueron atendidas ese día en particular estuvieron alrededor de ese rango de edad. 
        p #[b Moda:] da a entender qué datos son los que más se repiten al interior de una población o un universo de estudio. La moda en la salud es de suma importancia, pues a partir de este dato se pueden obtener los perfiles epidemiológicos. 
        p #[b Mediana:] es una medida de referenciación de la población que usa el dato que divide a la población en dos mitades a diferencia de la media que divide los datos en dos mitades. Ambas se expresan a través del dato, pero reflejan dos aspectos muy diferentes (Restrepo G. y González J., 2010).   
        p.mb-5 #[b Medidas de dispersión:] indican que tanto se agrupan o se alejan (dispersan) los datos con respecto a su media aritmética.
      .col-4
        img(src='@/assets/curso/temas/tema2/32.png')

    .row.justify-content-center.align-items-center.mb-5
      .col-10
        .cajon.color-secundario.p-4
          p Las medidas de dispersión muestran si una variable se mueve más o menos con respecto a otra que se quiera analizar. Estas ayudan a entender los conjuntos de datos, facilitan la comparación entre grupos, ayudan a evitar conclusiones equivocadas sobre un fenómeno y contribuyen a controlar la variabilidad de los datos.  Pueden ser:

    .row.justify-content-center.mb-5
      .col-4
        img(src='@/assets/curso/temas/tema2/33.svg').mb-5
        h3 Rango
        p Este valor numérico indica la diferencia entre el valor máximo y el valor mínimo dentro de un universo de datos. 
      .col-4
        img(src='@/assets/curso/temas/tema2/34.svg').mb-5
        h3 Desviación estándar
        p La desviación estándar o típica es una medida que ofrece información sobre la dispersión media de una variable.
    .row.justify-content-center.mb-5
      .col-4
        img(src='@/assets/curso/temas/tema2/35.svg').mb-5
        h3 Desviación media
        p Es la diferencia entre cada valor y la media aritmética entre el número de datos.
      .col-4
        img(src='@/assets/curso/temas/tema2/36.svg').mb-5
        h3 Varianza
        p Es el promedio (aproximado) de las desviaciones al cuadrado de los valores a partir de la media.

    p(data-aos="fade-right") #[b Curva de distribución:] cuando se analizan los datos recopilados de una población y se aglutinan alrededor de la media estos se van distribuyendo a su alrededor de tal manera que terminan formando una curva, la cual se denomina “curva de distribución normal”. La forma, altura o ancho de esta “curva” es una referencia clave para ser comparada cuando se estudian frecuencias en distintas poblaciones.   
    p(data-aos="fade-right").mb-5 A continuación, se presenta un ejemplo de curva de distribución con sus componentes (ver figura):

    .row.justify-content-center.align-items-center.mb-5
      .col-8.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 15.] <em>Ejemplo de curva de distribución normal</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/37.svg', alt='En la figura quince se muestra un ejemplo de curva de distribución normal en un plano cartesiano.')

    .row.justify-content-center.align-items-center.mb-5
      .col-8.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 15.] <em>Ejemplo de curva de distribución normal</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/37-m.svg', alt='En la figura quince se muestra un ejemplo de curva de distribución normal en un plano cartesiano.')
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
