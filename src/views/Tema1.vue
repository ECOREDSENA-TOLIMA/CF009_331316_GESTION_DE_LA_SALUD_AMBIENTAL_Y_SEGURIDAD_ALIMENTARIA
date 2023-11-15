<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Factores de riesgo en la gestión de la salud ambiental y la seguridad sanitaria

    p(data-aos="fade-right") Para abordar el concepto de salud ambiental es necesario, en primera instancia, tener claridad sobre qué es la salud y qué es el ambiente. El concepto de ambiente ha tenido varias transformaciones a lo largo de la historia y de acuerdo con los contextos en los cuales se ha utilizado.
    p(data-aos="fade-right").mb-5 Sin embargo, una de las definiciones más difundidas, se muestra en la siguiente figura:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 1.] <em>Representación gráfica de la definición de ambiente según Payne-Sturges y Gee</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/1.svg', alt='En la figura uno se muestra la representación gráfica de la definición de ambiente según Payne-Sturges y Gee, incluye el mundo social, el construido y el natural.')
          figcaption Nota. Adaptado de Referentes conceptuales y abordajes sobre determinantes ambientales. Ministerio de Salud y Protección Social, Organización Panamericana de la Salud (2014).

    .row.justify-content-center.align-items-center.mb-5
      .col-10.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 1.] <em>Representación gráfica de la definición de ambiente según Payne-Sturges y Gee</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/1-m.svg', alt='En la figura uno se muestra la representación gráfica de la definición de ambiente según Payne-Sturges y Gee, incluye el mundo social, el construido y el natural.')
          figcaption Nota. Adaptado de Referentes conceptuales y abordajes sobre determinantes ambientales. Ministerio de Salud y Protección Social, Organización Panamericana de la Salud (2014).

    p(data-aos="fade-right") Además de los factores físicos, químicos o biológicos del entorno, involucra también a los estresores sociales, entre los que se encuentran:

    ul.lista-ul
      li 
        i.lista-ul__vineta
        | Pobreza.
      li 
        i.lista-ul__vineta
        | Institucionalidad.
      li 
        i.lista-ul__vineta
        | Políticas públicas.
      li 
        i.lista-ul__vineta
        | Capital social.

    p(data-aos="fade-right") El otro elemento que se debe tener en cuenta para el abordaje de la salud ambiental es el de salud.  Una de las definiciones más conocidas fue la que se dio por parte de la Organización Mundial de la Salud (OMS) en 1946 que la reconocía como un “estado de completo bienestar físico, mental y social, y no solamente la ausencia de afecciones o enfermedades”.

    p(data-aos="fade-right").mb-5 Posteriormente, el concepto incorporó nuevos elementos como los factores externos y las interacciones de las condiciones sociales, ambientales y políticas, así como la forma en que estas generan efectos en la salud. En este orden de ideas, “El análisis de la salud, esencialmente, debe indagar la influencia de los determinantes sociales que generan brechas de desigualdad en toda la población, excediéndose del abordaje tradicionalista de la fracción de población que demanda servicios del sistema de salud” (Guía conceptual y metodológica para la construcción del ASIS de las Entidades Territoriales, 2014).

    .row.justify-content-center.mb-5
      .col
        .tarjeta.color-secundario2.p-5(style='border-radius:0px')
          .row.justify-content-center.align-items-center
            .col-7
              p En esa aproximación a las definiciones tanto de ambiente como de salud, es posible evidenciar algunos aspectos que se relacionan estrechamente con el concepto de salud ambiental, el cual de acuerdo con el CONPES 3550 se define como “el resultado de la interacción de factores que operan en distintos niveles de agregación y en el marco de procesos complejos, que van más allá de los componentes tradicionales biológicos, físicos y químicos del medio ambiente”.
              p Igualmente, de acuerdo con este concepto, para entender la salud ambiental es necesario utilizar como referencia los determinantes estructurales en salud, los cuales se relacionan con una serie de factores sociales, económicos, políticos, ambientales, tecnológicos y de la biología humana que al interactuar entre ellos y con el medio, dan lugar a su vez a factores intermedios los cuales tienen una incidencia directa sobre la esperanza de vida de la población. 
            .col-5
              img(src='@/assets/curso/temas/tema1/2.svg', alt='Texto que describa la imagen')

    p(data-aos="fade-right").mb-5 De acuerdo con lo observado, se puede concluir que el entorno en el que las personas habitan tiene un impacto significativo en la calidad de vida y la salud de la población. Esto se debe a la presencia de factores físicos, químicos y biológicos externos a las personas, así como a factores socioeconómicos que influyen en los procesos de salud y enfermedad.

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Factores de riesgo

    p(data-aos="fade-right").mb-5 Conforme a lo expuesto por la OPS, un factor de riesgo se asocia con una característica o atributo cuya presencia en el individuo se relaciona con un aumento en la probabilidad de padecer daño, desarrollar o estar expuesto a una enfermedad. Dentro de los factores de riesgo se encuentran diversas categorías las cuales se definen con base en su naturaleza como se presenta a continuación:

    .tarjeta.color-primario1.p-4.mb-5
      PasosB.color-primario
        .row(titulo="Paso 1")
          .col-md-6.mb-4.mb-md-0
            h2 Conducta
            p Se relacionan con las acciones que las personas desarrollan en su cotidianidad y que reflejan sus estilos de vida. En este grupo se encuentran situaciones como uso de equipos de protección personal en el trabajo, alimentación saludable, rutina de ejercicio y técnicas para el manejo del estrés, entre otras.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/3.png', alt='Texto que describa la imagen')

        .row(titulo="Paso 2")
          .col-md-6.mb-4.mb-md-0
            h2 Fisiológicos
            p Estos tienen que ver con la biología de la persona en combinación con factores como los estilos de vida y la genética. En este grupo se encuentran factores como la hipertensión arterial, los niveles de glucosa en sangre, colesterol, triglicéridos u obesidad, por mencionar algunos. 
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/4.png', alt='Texto que describa la imagen')

        .row(titulo="Paso 3")
          .col-md-6.mb-4.mb-md-0
            h2 Demográficos
            p Los factores demográficos tienen que ver con las características de la población en general. En esta categoría se encuentran aspectos como edad, género, ocupación, nivel de ingresos, nivel socioeconómico o región en la que habita.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/5.png', alt='Texto que describa la imagen')

        .row(titulo="Paso 4")
          .col-md-6.mb-4.mb-md-0
            h2 Genéticos
            p Tienen cierta similitud con los factores fisiológicos, pues están ligados a la genética de los individuos, es decir que tienen un fuerte componente hereditario, el cual al combinarse con factores ambientales puede desencadenar enfermedades. Dentro de esta división existen enfermedades como el asma, la anemia falciforme, la diabetes o la fibrosis quística, entre otras.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/6.png', alt='Texto que describa la imagen')

        .row(titulo="Paso 5")
          .col-md-6.mb-4.mb-md-0
            h2 Medioambientales
            p Dentro de esta categoría se encuentran una amplia gama de elementos que inciden en la salud de las personas relacionados con factores económicos, políticos, culturales y sociales. Igualmente confluyen procesos químicos, biológicos y físicos. En este grupo están, por ejemplo, el acceso al agua potable, el saneamiento básico y la calidad del aire.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/7.png', alt='Texto que describa la imagen')

    p(data-aos="fade-right") Para entender el enfoque de riesgo hace falta también analizar el concepto de peligro ya que estos dos elementos se correlacionan permanentemente:

    ul.lista-ul
      li 
        i.lista-ul__vineta
        | #[b Riesgo:] se asocia con la probabilidad de que una situación genere un daño o una enfermedad.
      li 
        i.lista-ul__vineta
        | #[b Peligro:] se relaciona con el potencial que tiene cualquier elemento de causar un daño a la salud.

    p(data-aos="fade-right").mb-5 A modo de ejemplo, un peligro podría ser la radiación solar, mientras que el factor de riesgo, en ese caso, sería el no uso de protector solar o la constante exposición al sol en regiones con altos niveles de radiación. A continuación, en la figura se ejemplifican estos conceptos:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 2.] <em>Riesgos y peligros</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/8.svg', alt='En la figura dos se muestra por medio de un gráfico las definiciones de peligro y riesgo.')
          figcaption Nota. Adaptado de Organización Panamericana de la Salud (2009).

    .row.justify-content-center.align-items-center.mb-5
      .col-10.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 2.] <em>Riesgos y peligros</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/8-m.svg', alt='En la figura dos se muestra por medio de un gráfico las definiciones de peligro y riesgo.')
          figcaption Nota. Adaptado de Organización Panamericana de la Salud (2009).

    p(data-aos="fade-right") Dentro de los factores de riesgo ambientales, los cuales poseen una amplia variedad de riesgos, se pueden identificar por lo menos cinco categorías, las cuales tienen el potencial de afectar la salud de las personas. 

    p(data-aos="fade-right").mb-5 A continuación, se describen cuáles son estos tipos de riesgo y cuáles son sus posibles causas desde el punto de vista socioambiental:

    .row.justify-content-center.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-4.mb-4.mb-md-0
            h3 Riesgos químicos: 
            p están asociados al uso y manipulación de sustancias químicas que ofrecen algún tipo de riesgo para la salud humana, pudiendo causar irritación, reacciones alérgicas, asfixia, efectos narcóticos o intoxicaciones sistémicas.
            p Dentro de ellas se encuentran agroquímicos, combustibles, productos para la industria o reactivos. Cuando la exposición es prolongada y frecuente, incluso pueden tener efectos cancerígenos.

            p #[b #[em Posibles causas socioambientales:]] uso indiscriminado de agroquímicos, falta de controles a vertimientos de la industria, mala disposición de residuos sólidos y líquidos.   

          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/9.svg', alt='Texto que describa la imagen')

        .row
          .col-md-4.mb-4.mb-md-0
            h3 Riesgos biológicos: 
            p se asocian a la presencia de organismos que pueden significar un peligro para la salud de las personas. En esta categoría se encuentran, virus, hongos y bacterias. Estos microorganismos suelen propagarse con gran rapidez y se transmiten al ser humano por contacto directo con el agua, animales, tierra, materias primas, contacto con otras personas o con sus fluidos corporales.
            p #[b #[em Posibles causas socioambientales:]]  uso indiscriminado de agroquímicos, falta de controles a vertimientos de la industria, mala disposición de residuos sólidos y líquidos.   

          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/10.svg', alt='Texto que describa la imagen')

        .row
          .col-md-4.mb-4.mb-md-0
            h3 Riesgos físicos: 
            p hace referencia a los daños que se pueden dar a la persona atribuidos única y exclusivamente a las propiedades físicas de algún elemento en particular. Dentro de los principales riesgos físicos se encuentran ruido, vibración, radiación ionizante y no ionizante y temperatura, entre otras. 
            p #[b #[em Posibles causas socioambientales:]] construcciones en zonas de alto riesgo, fallas en infraestructura, malas prácticas en procesos productivos.  

          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/11.svg', alt='Texto que describa la imagen')

        .row
          .col-md-4.mb-4.mb-md-0
            h3 Riesgos mecánicos: 
            p se relacionan con la interacción de las personas con herramientas o equipos que pueden significar algún peligro para su integridad física. Dentro de las afectaciones que se pueden dar por efecto de un riesgo mecánico se encuentran cortes, abrasiones, punciones, contusiones, golpes, atrapamientos, aplastamientos o quemaduras, entre otros. 
            p #[b #[em Posibles causas socioambientales:]] falta de controles para manipulación y operación de equipos, falta de capacitación en operación de equipos, falta de mantenimiento de equipos. 

          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/12.svg', alt='Texto que describa la imagen')

        .row
          .col-md-4.mb-4.mb-md-0
            h3 Riesgos asociados al consumo: 
            p están asociados a los efectos que los bienes que consume la población pueden tener sobre su calidad de vida y salud. Estos son diversos y de diferente procedencia, y es necesario tener su trazabilidad para hacer un seguimiento adecuado a los procesos de manufactura y distribución. 
            p #[b #[em Posibles causas socioambientales:]] falta de controles de autoridades sanitarias, falta de seguimiento a procesos de manufactura, mala calidad de materias primas e insumos, informalidad en distribución y comercialización de productos.

          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/13.svg', alt='Texto que describa la imagen')



    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Aspectos sociodemográficos

    p(data-aos="fade-right") Desde el enfoque de los determinantes de la salud, se encuentra que una gran parte de los factores que afectan la salud de la población se relacionan con aspectos sociodemográficos, es decir, aquellos concernientes a las características generales y al tamaño de un grupo poblacional, pues es evidente que muchos de los factores relacionados con la manera como las comunidades se organizan tienen que ver, directamente, con la calidad de vida de las personas.
    p(data-aos="fade-right").mb-5 Entre los principales elementos que se tienen en cuenta en el análisis de aspectos sociodemográficos están los siguientes:

    .BGIMG01.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Población
            p El diferencial de población se utiliza, sobre todo, para identificar grupos poblacionales especialmente vulnerables a cierto tipo de problemáticas. Por ejemplo, la población infantil, resulta más vulnerable a la falta de saneamiento básico o el acceso a agua potable. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/14.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Actividad económica y empleo
            p Este aspecto permite identificar, por ejemplo, los niveles de ingresos de la población, por medio de lo cual es posible analizar, igualmente, oportunidad en el acceso a servicios de salud, calidad en la prestación o barreras de acceso.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/15.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Educación
            p Este aspecto también es, por lo general, un indicador de los niveles de acceso de la población a los servicios de salud. La población desescolarizada a menudo tiene dificultades para la atención en salud. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/16.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Servicios públicos
            p La falta de acceso a los servicios públicos puede estar relacionada, por ejemplo, con la poca disponibilidad de agua potable, lo cual representa un riesgo para la población.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/17.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Servicios de salud
            p Esta situación refleja, directamente, cómo está la situación en salud de la población, qué factores inciden en la prestación y qué barreras de acceso se pueden encontrar.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/18.png', alt='Texto que describa la imagen')

    p(data-aos="fade-right") Con base en los aspectos observados anteriormente se consigue una visión general de las características sociodemográficas de una población, sin embargo, su estudio se debe realizar de forma desagregada por lo que es importante identificar y analizar cada elemento por separado.

    p(data-aos="fade-right").mb-5 A continuación, se presentan en la tabla los principales aspectos sociodemográficos que dan cuenta de la situación particular en bienestar y salud de una comunidad:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-11(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Tabla 1.] <em>Aspectos sociodemográficos de bienestar y salud en la comunidad</em>
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr
                th Aspecto
                th Descripción
            tbody
              tr
                td #[b Edad]
                td Este es uno de los principales rasgos de una población y desde el punto de vista de la salud es un factor que influye en la prevalencia o no de ciertos grupos de enfermedades.
              tr
                td #[b Género]
                td Desde el punto de vista de la salud, existen algunos riesgos asociados con el género de la población, por lo que es importante establecer este elemento dentro del análisis sociodemográfico.
              tr
                td #[b Actividad laboral]
                td Muchos de los riesgos y las afecciones en salud se relacionan directamente con la actividad laboral de las personas. En el caso de personas que trabajan en construcción, por ejemplo, hay mayor probabilidad de padecer problemas auditivos por su exposición permanente al ruido.
              tr
                td #[b Nivel de ingresos]
                td La relación entre el nivel de ingresos y el acceso a los servicios de salud es más que evidente. En muchos países un bajo nivel de ingresos impone barreras a la población para acceder a los servicios esenciales y a los tratamientos para los problemas de salud. 
              tr
                td #[b Lugar de residencia]
                td Este elemento incide directamente sobre la salud de las personas y se relaciona, principalmente, con el entorno en que habitan y con los riesgos a los que se exponen. Las personas que habitan en zonas rurales, por ejemplo, están expuestas a peligros muy diferentes a los que enfrentan las personas que habitan áreas urbanas o metropolitanas.
              tr
                td #[b Nivel educativo]
                td El nivel educativo de la población generalmente se relaciona con su calidad de vida y el acceso a otros servicios esenciales.
              tr
                td #[b Estado civil]
                td Este es otro de los temas que se pueden considerar cuando se realiza un análisis sociodemográfico, ya que da una idea sobre la estructura de los grupos familiares. 
              tr
                td #[b Servicios esenciales]
                td El análisis de la información relacionada con el acceso a servicios esenciales como agua, alcantarillado, energía eléctrica, gas o infraestructura vial son indicador de los niveles de calidad de vida de la población y, por lo tanto, de los factores que pueden incidir en su salud y bienestar.
              tr
                td #[b Equipamiento]
                td Esto hace referencia a la infraestructura básica con la que cuenta un territorio para atender las necesidades de la población en materia de acceso a servicios esenciales, incluidos los sanitarios, recreación, deporte y educación.
              tr
                td #[b Costumbres]
                td Dentro de los análisis demográficos es necesario evaluar los usos y costumbres de la población, pues esto se relaciona directamente con la forma como las personas perciben su calidad de vida y estiman las afectaciones que ofrece el entorno. 
              tr
                td #[b Sistemas de creencias]
                td Este tema se relaciona totalmente con los factores culturales de la población y es necesario incluirlo en el análisis sociodemográfico porque de él se desprenden elementos que perfectamente se pueden integrar a los procesos de prevención y atención de la enfermedad, como son el conocimiento popular y la medicina ancestral, solo por mencionar algunos ejemplos.
              tr
                td #[b Factores psicológicos]
                td Estos se relacionan con los elementos que inciden en la salud y el bienestar mental de las personas. A menudo, muchos factores sociales, como empleo, nivel de ingresos o acceso a servicios, se convierten en estresores de la condición de salud mental de la población.

    p(data-aos="fade-right").mb-5 Además de estos elementos, en los estudios sociodemográficos se pueden incluir otras variables que contribuyan a la identificación de los factores de riesgo de la población, pero esto depende de las dinámicas propias de cada territorio. En el caso de Colombia, por ejemplo, dentro de los estudios sociodemográficos tienen un gran peso elementos como los niveles de seguridad de la población, la exposición a actores armados o a situaciones de conflicto, ya que todos estos elementos inciden en la calidad y oportunidad de la prestación de los servicios de salud. 

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Aspectos socioambientales del territorio

    .row.justify-content-center.mb-5
      .col-8
        p La relación entre el ser humano y el ambiente es tan antigua como su propia existencia y abarca una serie de interacciones basadas, principalmente, en la provisión de recursos del medio natural para la satisfacción de sus necesidades esenciales. Con el paso de los años la humanidad encontró nuevos usos para los recursos naturales y, al mismo tiempo, descubrió nuevas necesidades, lo cual, inevitablemente, generó un aumento en la demanda de recursos y, por lo tanto, una mayor presión de la población sobre su ambiente. 
        p Actualmente, la demanda de alimentos, energía, materias primas y demás recursos va en aumento como resultado del crecimiento demográfico que se ha presentado en las últimas décadas. Incluso, algunos grupos de científicos estiman que la humanidad está llegando a un punto de no retorno desde el punto de vista ambiental, en el cual la demanda está comprometiendo recursos de las futuras generaciones.
        p En vista de la necesidad que existe de desarrollar prácticas más sostenibles desde la perspectiva ambiental, se hace necesario evaluar los aspectos sociales que inciden en el ambiente y, al mismo tiempo, revisar qué aspectos de lo ambiental inciden en lo social, ya que esta es una relación de reciprocidad que se da en ambos sentidos, tal como se presenta en la siguiente figura:
      .col-4 
        img(src='@/assets/curso/temas/tema1/19.svg')

    .row.justify-content-center.align-items-center.mb-5
      .col.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 3.] <em>Definición del ámbito de lo socioambiental</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/20.svg', alt='En la figura tres se muestra la definición del ámbito de los socioambiental, incluye el ámbito de lo social, el ámbito de intersección y el de lo ambiental.')
          figcaption Nota: Adaptado de Cepal, (2004). 

    .row.justify-content-center.align-items-center.mb-5
      .col.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 3.] <em>Definición del ámbito de lo socioambiental</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/20-m.svg', alt='En la figura tres se muestra la definición del ámbito de los socioambiental, incluye el ámbito de lo social, el ámbito de intersección y el de lo ambiental.')
          figcaption Nota: Adaptado de Cepal, (2004). 

    .row.justify-content-center.align-items-center.mb-5
      .col-10
        p(data-aos="fade-right") De acuerdo con el anterior planteamiento es claro que los aspectos socioambientales se dan como resultado de las interacciones entre los procesos sociales y el entorno, tanto natural como el transformado por el hombre, por lo que, para analizar los aspectos socioambientales, es importante observar las relaciones que se dan entre la población y el ambiente desde dos perspectivas. La primera, se da desde la influencia que tienen los factores ambientales sobre las poblaciones y la segunda, desde la incidencia que tienen los asentamientos humanos sobre su entorno natural.
        p(data-aos="fade-right").mb-5 Entre los principales aspectos que se deben tener en cuenta para el análisis de las condiciones socioambientales de un territorio se encuentran:

    .row.justify-content-center.mb-4
      .col-9
        ol.lista-ol--cuadro.mb-5
          li 
            .lista-ol--cuadro__vineta
              span(style="color:#000 !important") <strong>a</strong>
            | #[b Disponibilidad de recursos:] este primer aspecto considera la disponibilidad de recursos con que cuenta la población para la satisfacción de sus necesidades esenciales. Muchos de los conflictos socioambientales surgen por disputas entre grupos poblacionales por el acceso a los recursos naturales, como agua, madera, servicios ecosistémicos, materias primas, minerales y recursos del subsuelo, entre otros. Al momento de analizar las condiciones socioambientales de un territorio en especial, es importante identificar si la demanda de recursos está acorde con la oferta ambiental, teniendo en cuenta que existe una relación directa entre los aspectos demográficos (tamaño de la población) y los impactos sobre el ambiente. 

          li 
            .lista-ol--cuadro__vineta
              span(style="color:#000 !important") <strong>b</strong>
            | #[b Áreas protegidas:] otro de los aspectos que se debe tener en cuenta en el análisis socioambiental es el de la presencia de áreas protegidas ya que, en Colombia, y en el mundo entero, conscientes de la importancia de los recursos naturales para el bienestar y la salud se han declarado diversos sitios de interés general por su importancia desde el punto de vista ambiental. La presencia de estas áreas protegidas ha generado fenómenos sociales relacionados con el desplazamiento de la frontera agrícola, cambio en los hábitos productivos, reconversión tecnológica y reajuste de los medios de subsistencia de la población rural. 
      .col-3
          img(src='@/assets/curso/temas/tema1/21.svg')
      .col
        ol.lista-ol--cuadro.mb-5
          li 
            .lista-ol--cuadro__vineta
              span(style="color:#000 !important") <strong>c</strong>
            | #[b Actividades productivas:] las actividades productivas llevadas a cabo por la población tienen una estrecha relación con los aspectos socioambientales, ya que de ello se derivan muchas de las maneras como las personas se relacionan con su entorno. Así como existen actividades productivas que tienen una baja incidencia sobre la estructura del entorno natural, existen otras que definitivamente alteran los ciclos naturales y afectan el ambiente considerablemente, como es el caso de la minería ilegal, la industria extractiva, los monocultivos a gran escala y los procesos urbanísticos, por mencionar algunos ejemplos. El grado de deterioro de una actividad sobre el ambiente es lo que comúnmente se conoce como impacto, y su medición, así como las medidas para reducirlo son fundamentales para el desarrollo de proyectos de diferente índole. 

          li 
            .lista-ol--cuadro__vineta
              span(style="color:#000 !important") <strong>d</strong>
            | #[b Medidas de adaptación al cambio climático:] en el análisis socioambiental es importante identificar qué medidas de adaptación al cambio climático llevan a cabo las comunidades y, en caso de no desarrollar ninguna, es preciso identificar cuáles de ellas se podrían implementar, esto con el fin de disminuir los impactos que el calentamiento global pudiese llegar a tener sobre los asentamientos humanos. En la actualidad, muchos de los conflictos socioambientales se relacionan con los efectos del cambio climático en el entorno natural.
 
          li 
            .lista-ol--cuadro__vineta
              span(style="color:#000 !important") <strong>e</strong>
            | #[b Riesgos y amenazas en el contexto territorial:] en este grupo de factores que inciden en la salud de las personas se incluyen aquellos relacionados con el contexto en que estas habitan y tienen que ver básicamente con la localización, las características físicas del territorio, así como los riesgos y las amenazas geográficas. Cuando se habla de riesgos desde el punto de vista territorial se hace referencia a aquellos que tienen estrecha relación con las características físicas de la región en la que habitan las personas y que suponen ciertas vulnerabilidades frente a fenómenos de diferente índole. Entre los fenómenos que representan riesgos para la población relacionados con las características del territorio y que se debe tener en cuenta para el análisis socioambiental se tienen:

    .BGIMG01.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Inundaciones
            p Se producen principalmente por un gran volumen de precipitaciones en áreas con un drenaje natural o artificial que resulta insuficiente.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/22.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Sequías prolongadas
            p Suceden por cambios en el comportamiento natural de los ciclos de lluvia en determinadas regiones del mundo. Se atribuye esta variación, principalmente, al cambio climático originado por las emisiones de gases de efecto invernadero.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/23.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Erosión
            p Se relaciona con la pérdida de las capas más superficiales del suelo debido a malas prácticas de cultivo, principalmente. Se puede dar por efecto del movimiento del agua sobre la superficie (erosión hídrica) o por efecto del viento (erosión eólica).

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/24.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Desertificación
            p Este término hace referencia al aumento en las áreas de desierto a nivel global. Se estima que en el mundo entero hay un total de 6.100 millones de hectáreas en desierto, las cuales están en aumento.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/25.png', alt='Texto que describa la imagen')

    ol.lista-ol--cuadro.mb-5
      li 
        .lista-ol--cuadro__vineta
          span(style="color:#000 !important") <strong>f</strong>
        | #[b Contexto político – administrativo:] para complementar el análisis socioambiental es fundamental indicar el contexto político – administrativo en que se desarrollan las acciones en lo local, pues de él se desprenden elementos como los planes de desarrollo, las políticas ambientales y los procesos de planeación a escala territorial. Al observar la forma como desde la política se da respuesta a las necesidades de la población es posible entender muchas de las dinámicas que se dan al interior de las comunidades. 
      li 
        .lista-ol--cuadro__vineta
          span(style="color:#000 !important") <strong>g</strong>
        | #[b Capacidad de respuesta:] este contexto se relaciona con la capacidad de respuesta de los organismos gubernamentales y las autoridades competentes frente a las situaciones de vulnerabilidad que puede presentar la población en determinado momento respecto a las problemáticas ambientales. Infortunadamente, muchos países en vías de desarrollo carecen de mecanismos adecuados para la respuesta eficiente a este tipo de circunstancias y se ven frecuentemente expuestos a situaciones que constantemente vulneran sus derechos a un ambiente sano.

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Peligros

    p(data-aos="fade-right").mb-5 Un peligro ambiental se define como el potencial que tiene un agente ambiental para afectar la salud (Saneamiento rural y salud – OPS, 2009). Igualmente, en el mismo documento, se añade que los efectos que pueden llegar a producir estos peligros sobre la salud de las personas varían de tipo, intensidad y magnitud, como se muestra a continuación:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 4.] <em>Factores que inciden en los efectos de los peligros sobre la salud</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/26.svg', alt='En la figura cuatro se muestran los factores que inciden en los efectos de los peligros sobre la salud.')
          figcaption Nota. Adaptado de Organización Panamericana de la Salud (2009).

    .row.justify-content-center.align-items-center.mb-5
      .col-10.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 4.] <em>Factores que inciden en los efectos de los peligros sobre la salud</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/26-m.svg', alt='En la figura cuatro se muestran los factores que inciden en los efectos de los peligros sobre la salud.')
          figcaption Nota. Adaptado de Organización Panamericana de la Salud (2009).

    p(data-aos="fade-right") Con el fin de analizar un poco más la dinámica de los peligros ambientales, la Organización Panamericana de la Salud propone una división general entre peligros tradicionales, que se relacionan más con situaciones de pobreza y desarrollo insuficiente, y los peligros modernos, los cuales se ligan a un desarrollo rápido y a un consumo insostenible de los recursos naturales.
    p(data-aos="fade-right").mb-5 Algunos ejemplos de peligros tradicionales y modernos son:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/27.svg', alt='Texto que describa la imagen')
        h3.text-center Peligros tradicionales
        ul.lista-ul
          li 
            i.lista-ul__vineta
            | Falta de acceso al agua potable.
          li 
            i.lista-ul__vineta
            | Saneamiento básico insuficiente. 
          li 
            i.lista-ul__vineta
            | Contaminación de alimentos. 
          li 
            i.lista-ul__vineta
            | Contaminación del aire. 
          li 
            i.lista-ul__vineta
            | Disposición inadecuada de residuos sólidos. 
          li 
            i.lista-ul__vineta
            | Accidentes laborales. 
          li 
            i.lista-ul__vineta
            | Catástrofes naturales. 
          li 
            i.lista-ul__vineta
            | Presencia de vectores
          li 
            i.lista-ul__vineta
            | Vivienda insalubre. 
          li 
            i.lista-ul__vineta
            | Agentes infecciosos. 
          li 
            i.lista-ul__vineta
            | Deficiencias dietarías. 
      .col-md.tarjeta.color-secundario2.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/28.svg', alt='Texto que describa la imagen')
        h3.text-center Peligros modernos
        ul.lista-ul
          li 
            i.lista-ul__vineta
            | Contaminación del agua por núcleos de población. 
          li 
            i.lista-ul__vineta
            | Emisiones por fuentes móviles y fijas. 
          li 
            i.lista-ul__vineta
            | Residuos sólidos y peligrosos. 
          li 
            i.lista-ul__vineta
            | Riesgos químicos y por radiación. 
          li 
            i.lista-ul__vineta
            | Nuevas enfermedades infecciosas. 
          li 
            i.lista-ul__vineta
            | Deforestación y degradación del suelo. 
          li 
            i.lista-ul__vineta
            | Cambio climático. 
          li 
            i.lista-ul__vineta
            | Humo de tabaco y alcohol. 
          li 
            i.lista-ul__vineta
            | Peligros de transporte. 
          li 
            i.lista-ul__vineta
            | Riesgos ocupacionales. 
          li 
            i.lista-ul__vineta
            | Dieta desbalanceada. 

    .row.justify-content-center.mb-4
      .col-7
        ol.lista-ol--cuadro.mb-5
          p A pesar de que la mirada sobre los problemas ambientales se centra, generalmente, sobre los factores bióticos y abióticos, es inevitable reconocer que los aspectos sociales han tenido un papel fundamental en la manera como el ser humano ha transformado su ambiente y, en ocasiones, ha conseguido que este, incluso, le represente un peligro. Por tanto, cuando se analizan los problemas ambientales desde una perspectiva que involucra también a la población y a las comunidades y que, además, expresa los riesgos para la salud ligados a estos, es necesario hablar de factores socioambientales. Igualmente, al momento de analizar los efectos que tienen los peligros para la salud de las personas es importante considerar tres aspectos fundamentales; la naturaleza del peligro, el nivel de exposición y el número de afectados. 
      .col-5
          img(src='@/assets/curso/temas/tema1/29.png')

    .d-flex.flex-wrap.align-items-center(data-aos="fade-right").mb-5
      img(src='@/assets/curso/temas/icono.svg' style="max-width: 30px;")
      .h3.col-auto.pb-2.mb-0.ms-2(style=" color: #455B2D;") Naturaleza de los peligros

    p(data-aos="fade-right").mb-5 La naturaleza del peligro hace referencia a su origen y a sus características particulares. Dependiendo de su naturaleza algunos peligros pueden tener un mayor nivel de letalidad que otros, por lo que es importante conocerla y estudiarla a fin de prevenir daños a la salud. Con base en esta información se define la tipología del peligro. La clasificación de los peligros respecto a su naturaleza es:

    .BGIMG01.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-4.mb-4.mb-md-0
            h3 Peligros biológicos
            p En este grupo se encuentran los hongos, virus y bacterias principalmente. También entran en esta clasificación algunas toxinas naturales, toxinas generadas por algunos tipos de microbios y algunos metabolitos tóxicos de origen microbiano.

          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema1/31.png', alt='Texto que describa la imagen')

        .row
          .col-md-4.mb-4.mb-md-0
            h3 Peligros químicos
            p A esta clasificación pertenecen los productos agroquímicos, contaminantes tóxicos inorgánicos, algunas clases de antibióticos, promotores de crecimiento, aditivos alimentarios que pueden resultar tóxicos, lubricantes, tintas, desinfectantes, micotoxinas (toxinas asociadas a tipos de hongos) y ficotoxinas (toxinas producidas por algunas especies de algas). 

          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema1/32.png', alt='Texto que describa la imagen')

        .row
          .col-md-4.mb-4.mb-md-0
            h3 Peligros físicos
            p En esta categoría se incluyen todos los objetos del ámbito físico que tengan potencial para afectar la salud de las personas (objetos contundentes, objetos cortopunzantes, objetos que puedan obstruir vías respiratorias, alturas, objetos que puedan causar quemaduras, iluminación deficiente, radiaciones ionizantes y no ionizantes, etc.).  

          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema1/33.png', alt='Texto que describa la imagen')

        .row
          .col-md-4.mb-4.mb-md-0
            h3 Peligros mecánicos
            p Son los que se relacionan con equipos, herramientas o maquinaria de cualquier tipo que tenga el potencial para causar una lesión. Se relacionan directamente con el tipo de ocupación que desempeña la persona.  

          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema1/34.png', alt='Texto que describa la imagen')

        .row
          .col-md-4.mb-4.mb-md-0
            h3 Peligros biomecánicos
            p Levantamiento de cargas pesadas, movimientos con esfuerzo, postura prolongada, postura inadecuada, movimientos repetitivos. 

          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema1/35.png', alt='Texto que describa la imagen')

        .row
          .col-md-4.mb-4.mb-md-0
            h3 Peligros públicos
            p Delincuencia, explosiones, incendios, accidentes de tránsito, trabajos en altura. 

          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema1/36.png', alt='Texto que describa la imagen')

        .row
          .col-md-4.mb-4.mb-md-0
            h3 Peligros naturales
            p Tiene que ver con los fenómenos naturales que pueden afectar la salud de las personas, como sismos, inundaciones, tormentas eléctricas, vendavales, etc. 

          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema1/37.png', alt='Texto que describa la imagen')
        
        .row
          .col-md-4.mb-4.mb-md-0
            h3 Psicosocial
            p Son los peligros atribuidos a situaciones particulares de estrés a las cuales se puede ver sometida la persona. Situaciones como rupturas amorosas, exceso de trabajo, desempleo, reducción en el nivel de ingresos y discriminación son solo algunos de los ejemplos que pueden existir en este ámbito. 

          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema1/38.png', alt='Texto que describa la imagen')


    p(data-aos="fade-right").mb-5 El conocimiento de la naturaleza del peligro es fundamental para idear estrategias que permitan reducir sus impactos en la salud de las personas y diseñar espacios seguros en los diferentes ámbitos de la vida cotidiana, como la escuela, el trabajo o el hogar. 

    .d-flex.flex-wrap.align-items-center(data-aos="fade-right").mb-5
      img(src='@/assets/curso/temas/icono.svg' style="max-width: 30px;")
      .h3.col-auto.pb-2.mb-0.ms-2(style=" color: #455B2D;") Nivel de exposición

    p(data-aos="fade-right") El nivel de exposición hace referencia al tiempo que una persona permanece en una situación que acarree cierto nivel de peligro, bien sea esta de manera frecuente o por periodos prolongados. Algunos peligros pueden afectar en mayor o menor medida dependiendo del tiempo de exposición, pero generalmente existe una relación directamente proporcional entre el tiempo que la persona se expone al peligro y la probabilidad de enfermedad. Con base en esta relación se establece si un peligro tiene una alta intensidad (es decir que puede causar mucho daño incluso con bajos niveles de exposición) o baja intensidad (no genera mucho daño con altos niveles de exposición). 

    p(data-aos="fade-right").mb-5 De acuerdo con la guía para la identificación de peligros, valoración de riesgos y determinación de controles, presentada por el Ministerio de Salud en el 2021, la estimación del nivel de exposición, en el caso de los entornos laborales, se realiza con base en si esta es continua, frecuente, ocasional o esporádica, de acuerdo con la siguiente tabla:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-11(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Tabla 2.] <em>Determinación del nivel de exposición</em>
        .tabla-a.color-acento-contenido.mb-5
          table
            caption  Nota. Tomado de Ministerio de Salud (2021). 
            thead
              tr
                th Nivel de exposición
                th Valor de NE (Nivel de exposición)
                th Significado
            tbody
              tr
                td Continua (EC)
                td 4
                td La situación de exposición se presenta sin interrupción o varias veces con tiempo prolongado durante la jornada laboral.
              tr 
                td Frecuente (EF)
                td 3 
                td La situación de exposición se presenta varias veces durante la jornada laboral por tiempos cortos.
              tr
                td Ocasional (EO)
                td 2 
                td La situación de exposición alguna vez durante la jornada laboral y por un periodo de tiempo corto.
              tr
                td Esporádica (EE)
                td 1 
                td La situación de exposición se presenta de manera eventual.

    .row.justify-content-center.align-items-center.mb-5
      .col-7
        p.mb-5 Para los peligros que se encuentran en otros ámbitos, como la escuela o el hogar, si bien no se aplica una metodología para estimar el nivel de exposición, el principio es el mismo; a mayor exposición mayor riesgo de sufrir lesión o enfermedad. 
        .cajon.color-secundario.p-4
          p De acuerdo con el Plan Decenal de Salud Pública el riesgo en salud se define como “la probabilidad de ocurrencia de un evento no deseado, evitable y negativo para la salud del individuo, que puede ser también el empeoramiento de una condición previa o la necesidad de requerir más consumo de bienes y servicios que hubiera podido evitarse”. La identificación de los peligros y los riesgos a los que se expone una comunidad son el principio de la búsqueda de alternativas para proteger a la población y diseñar las estrategias necesarias para garantizar su bienestar.
          p Para la estimación del nivel de exposición se han diseñado diversas herramientas.
      .col-5
        img(src='@/assets/curso/temas/tema1/30.svg')

    .d-flex.flex-wrap.align-items-center(data-aos="fade-right").mb-5
      img(src='@/assets/curso/temas/icono.svg' style="max-width: 30px;")
      .h3.col-auto.pb-2.mb-0.ms-2(style=" color: #455B2D;") Número de afectados

    p(data-aos="fade-right") Existen peligros que tienen un alto potencial para afectar a un gran número de personas por lo que se consideran extremadamente nocivos. Algunos casos concretos son, por ejemplo, los que se relacionan con los virus, donde la rápida propagación de estos agentes patógenos tiene consecuencias nefastas para la salud de las personas y en muy poco tiempo se puede obtener un alto número de personas afectadas. Igualmente ocurre con algunos tipos de peligros físicos (como los desastres naturales), peligros químicos (contaminación del aire o el agua) o peligros psicológicos (estrés o depresión). Dependiendo de la cantidad de personas que afecte determinado peligro se le asigna una calificación que se denomina magnitud. 

    p(data-aos="fade-right").mb-5 Con base en estas tres variables (tipo de peligro, nivel de exposición y magnitud) es posible hacer una clasificación inicial de los peligros y evaluar sus posibles impactos al interior de una comunidad. Por ejemplo, los peligros que por su naturaleza no se puedan prevenir, que presenten alta exposición y que además tengan influencia sobre un gran número de personas (gran magnitud) deberían ser prioritarios para los organismos de salud. Por el contrario, los peligros que por su naturaleza sean prevenibles, que tengan bajos niveles de exposición y que tengan baja magnitud ameritaría otro tipo de contingencias. 



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
