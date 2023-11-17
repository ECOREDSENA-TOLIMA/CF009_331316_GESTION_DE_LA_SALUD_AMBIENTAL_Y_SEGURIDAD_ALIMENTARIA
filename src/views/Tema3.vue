<template lang="pug">
.curso-main-container.pb-3.tema3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Evaluación del riesgo

    p(data-aos="fade-right") Los procesos de evaluación de riesgos ambientales están enfocados en identificar los elementos que puedan generar afectaciones para la salud de las personas, en establecer las consecuencias de que esas amenazas se materialicen y en caracterizar los riesgos existentes, todo esto con el fin de sentar las bases para el diseño de las acciones que permitan la gestión efectiva de los riesgos.   
    p(data-aos="fade-right").mb-5 Para la evaluación de los riesgos ambientales existen diferentes herramientas y metodologías, pero en términos generales, los pasos para desarrollar un proceso de evaluación de riesgos son:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 16.] <em>Criterios para la evaluación de riesgos ambientales</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema3/1.svg', alt='En la figura 16 se muestra los criterios para la evaluación de riesgos ambientales contenidos en evaluación, caracterización y análisis.')
        figcaption Nota. Guía de evaluación de riesgos ambientales. (2010). 

    .row.justify-content-center.align-items-center.mb-5
      .col-10.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 16.] <em>Criterios para la evaluación de riesgos ambientales</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema3/1-m.svg', alt='En la figura 16 se muestra los criterios para la evaluación de riesgos ambientales contenidos en evaluación, caracterización y análisis.')
        figcaption Nota. Guía de evaluación de riesgos ambientales. (2010). 

    p(data-aos="fade-right").mb-5 La evaluación de riesgos es un proceso complejo que requiere del acopio de un volumen importante de información, su procesamiento y la estimación de resultados, teniendo como base el contexto particular del territorio, sus características y, las condiciones sociodemográficas y ambientales. Las etapas que conlleva la evaluación de riesgos son:

    .row.justify-content-center.align-items-center.mb-5
      .col-8
        ul.lista-ul
          li 
            i.lista-ul__vineta
            | #[b Identificación de peligros:] esta primera etapa del proceso abarca el acopio de información primaria, para lo cual se puede recurrir a múltiples herramientas de diagnóstico como encuestas, estudios de campo, visitas y recorridos. Igualmente, es importante identificar actores territoriales e instituciones presentes en el territorio con las cuales se pueda, posteriormente, coordinar la respuesta. 
          li 
            i.lista-ul__vineta
            | #[b Determinación de escenarios:] los escenarios hacen referencia a las posibles afectaciones que en determinado momento se pudiesen llegar a presentar y que constituyen un riesgo para la población. Para esto es necesario establecer, entre otras cosas, las características de la zona de estudio, el entorno físico, los recursos disponibles, las amenazas identificadas, las zonas afectadas y el tipo de gestión ambiental que se desarrolla en la zona. 
          li 
            i.lista-ul__vineta
            | #[b Análisis de escenarios:] en esta etapa se identifican y se definen las causas de los peligros identificados, ya que estos tienen un origen y es sobre este que se deben diseñar las respectivas respuestas. El análisis de escenarios abarca el estudio de los factores que pueden dañar los entornos naturales, humanos y económicos. 
      .col-4
        img(src='@/assets/curso/temas/tema3/2.png')
    
    ul.lista-ul.mb-5
      li 
        i.lista-ul__vineta
        | #[b Estimación de la gravedad:] esta parte del proceso consiste en la identificación de las posibles consecuencias que puede tener determinada acción sobre el entorno natural, humano o económico. Para determinar la gravedad de determinada acción o factor, es necesario evaluar los siguientes elementos:

    .row.justify-content-center.mb-5
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta.color-primario1.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema3/3.svg' alt='AvatarTop')
          h3 Cantidad o exposición
          p Estimado del volumen al que se expone la población al agente o sustancia contaminante.
          p Algunas sustancias, como los productos químicos, requieren de periodos muy cortos de exposición o cantidades muy pequeñas para causar efectos graves en la salud. Por el contrario, la contaminación atmosférica presenta afectaciones en la salud de las personas tras periodos prolongados de exposición. 

        .tarjeta.color-primario1.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema3/4.svg' alt='AvatarTop')
          h3 Peligrosidad
          p Propiedad que tiene la sustancia o el factor analizado de producir daño. También se puede estimar como la severidad de la afectación que puede ocasionar, potencialmente, el agente contaminante.


        .tarjeta.color-primario1.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema3/5.svg' alt='AvatarTop')
          h3 Extensión
          p Área que puede verse afectada por la acción de la sustancia o factor de riesgo.
          p En ocasiones, se define como el nivel de afectación dependiendo de la escala en la que se presente la problemática: afectación local, regional, global.


        .tarjeta.color-primario1.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema3/6.svg' alt='AvatarTop')
          h3 Calidad del medio
          p Se analiza la posible reversibilidad en caso de que se presente un evento que afecte el medio.

        .tarjeta.color-primario1.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema3/7.svg' alt='AvatarTop')
          h3 Población afectada
          p Número de personas que pueden verse afectadas por determinada situación.


        .tarjeta.color-primario1.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema3/8.svg' alt='AvatarTop')
          h3 Patrimonio y capital productivo
          p Indica la valoración del capital económico y social que se puede ver afectado por el factor de riesgo.

        .tarjeta.color-primario1.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema3/9.svg' alt='AvatarTop')
          h3 Frecuencia
          p Periodicidad con que se presenta la afectación (ocurrencia).
          p Algunos tienen alta capacidad de afectación, pero frecuencia de ocurrencia baja; otros generan menor afectación, como ruido o malas prácticas agrícolas; pero alta periodicidad (mayores impactos a mediano y largo plazo).

    p(data-aos="fade-right").mb-5 Con base en los criterios antes analizados es posible establecer escalas que indican la gravedad de los episodios que se puedan presentar. Por ejemplo, un factor de riesgo que tenga una baja peligrosidad, que afecte un área limitada, que tenga una alta capacidad de reversibilidad, que no afecte a un grupo muy alto de personas y que no repercuta en el capital social o productivo obtendrá un puntaje de peligrosidad muy bajo comparado con uno que tenga valores mucho más altos en cada uno de esos ítems. 

    .row.justify-content-center.align-items-center.mb-5
      .col-7
        ul.lista-ul
          li 
            i.lista-ul__vineta
            | #[b Caracterización del riesgo:] en esta etapa del proceso se integra la información concerniente a la exposición al riesgo y los efectos que dicha exposición puede llegar a generar. Igualmente, se describen las fuentes de incertidumbre y se evalúa el impacto de las posibles afectaciones sobre el entorno. En esta fase del proceso, se puede obtener información cuantitativa (es decir datos, información numérica, mediciones, cifras) o información cualitativa (descripciones, escalas, referencias, comparaciones). 
            br
            br
            | La importancia de esta fase radica en que a partir de la información que allí se genera se toman decisiones sobre las acciones que se deben tomar durante la gestión de riesgos. Los dos momentos en los que se divide la fase de caracterización son estimación del riesgo y descripción del riesgo (CENMA, 2014). 
          li 
            i.lista-ul__vineta
            | #[b Estimación del riesgo:] para establecer el riesgo es necesario multiplicar la peligrosidad (consecuencia) del factor analizado por la probabilidad de que este se presente. Con base en los valores obtenidos, se estimará si el riesgo es leve, moderado o significativo (ver tabla). 

      .col-5
        img(src='@/assets/curso/temas/tema3/10.png')

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-11(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Tabla 4.] <em>Matriz para estimar el riesgo.</em>
        .tabla-a.color-acento-contenido
          table.text-center
            caption Nota. Lineamientos Metodológicos Para La Evaluación De Riesgo Ecológico (2014). 
            thead
              tr
                th Riesgo
                th(colspan="6") Consecuencia (C)
            tbody
              tr
                td(rowspan="6") #[b Probabilidad (P)]
                td 
                td #[b 1]
                td #[b 2]
                td #[b 3]
                td #[b 4]
                td #[b 5]
              tr
                td #[b 1]
                td 
                td 
                td 
                td 
                td 
              tr
                td #[b 2]
                td
                td
                td(style="background-color:#DEE4F0")
                td(style="background-color:#DEE4F0")
                td(style="background-color:#DEE4F0")
              tr
                td #[b 3]
                td(style="background-color:#DEE4F0")
                td(style="background-color:#DEE4F0")
                td(style="background-color:#DEE4F0")
                td(style="background-color:#DEE4F0")
                td(style="background-color:#DEE4F0")
              tr
                td #[b 4]
                td(style="background-color:#DEE4F0")
                td(style="background-color:#DEE4F0")
                td(style="background-color:#DEE4F0")
                td(style="background-color:#F9BCAB")
                td(style="background-color:#F9BCAB")
              tr
                td #[b 5]
                td(style="background-color:#DEE4F0")
                td(style="background-color:#DEE4F0")
                td(style="background-color:#DEE4F0")
                td(style="background-color:#F9BCAB")
                td(style="background-color:#F9BCAB")
              tr
                td(colspan="2") #[b Color]
                td(colspan="3") #[b Significado]
                td(colspan="2") #[b R=PXC]
              tr
                td(colspan="2") 
                td(colspan="3") Leve
                td(colspan="2") 1 – 5
              tr
                td(colspan="2")(style="background-color:#DEE4F0") 
                td(colspan="3") Moderado
                td(colspan="2") 6 – 15
              tr
                td(colspan="2")(style="background-color:#F9BCAB") 
                td(colspan="3") Significativo
                td(colspan="2") 16 – 25
              tr
                td(colspan="2") #[b Nivel]
                td(colspan="5") #[b Significado]
              tr
                td(colspan="2") 1
                td(colspan="5") Muy bajo
                tr
                td(colspan="2") 2
                td(colspan="5") bajo
                tr
                td(colspan="2") 3
                td(colspan="5") Medio
                tr
                td(colspan="2") 4
                td(colspan="5") Alto
              tr
                td(colspan="2") 5
                td(colspan="5") Muy alto

    p(data-aos="fade-right").mb-5 De acuerdo con la matriz, los factores que tengan altos puntajes en las variables de consecuencia (C), es decir que su ocurrencia tenga consecuencias de alto impacto, y probabilidad (P) se califican como significativos. Por su parte, los factores que tengan bajos puntajes en consecuencia y en probabilidad tendrán, así mismo, serán considerados como leves o de bajo impacto. 

    .row.justify-content-center.align-items-center.mb-5
      .col-7
        ul.lista-ul
          li 
            i.lista-ul__vineta
            | #[b Descripción del riesgo:] esta es la segunda parte de la caracterización del riesgo y se caracteriza por incluir el diagnóstico de los riesgos (es decir la estimación de los riesgos, el análisis de la incertidumbre y evaluación de la confianza en las estimaciones de riesgo) junto con la descripción de la magnitud de los riesgos identificados en el proceso de evaluación. 
        p La gestión de riesgos es una disciplina que trata sobre la identificación y evaluación de los riesgos que se pueden dar al interior de una unidad productiva, un proceso, una empresa o una comunidad y que tiene como objetivo definir las estrategias que permitan tomar decisiones sobre cada tipo de riesgo y de esta forma planificar acciones para reducirlos, eliminarlos o mitigarlos. 
        p Por su parte la gestión de riesgos en la salud pública (Gestión Integral del Riesgo en Salud, GIRS) es una estrategia transversal que involucra a todos los agentes del sistema de salud, además de otros sectores, para identificar, evaluar, medir intervenir y llevar a cabo el seguimiento y monitoreo de los riesgos para la salud de las personas, familias y comunidades. Para conseguir una adecuada gestión del riesgo es necesario identificar y entender los factores que influyen en el proceso salud, enfermedad tanto en lo individual como en lo colectivo (Ministerio de Salud y Protección Social, 2018).

      .col-5
        img(src='@/assets/curso/temas/tema3/11.png')

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Caracterización del riesgo 

    p(data-aos="fade-right").mb-5 Para realizar una correcta gestión de riesgos que sea efectiva y que esté enfocada en la atención de las problemáticas identificadas en el territorio, es necesario desarrollar un proceso de evaluación de riesgos, para lo cual deben seguirse con suficiencia cada una de sus etapas:

    .row.justify-content-center.align-items-center.mb-5
      .col-8
        .tarjeta(style="background-color:#F3F9FF").p-4
          .row.justify-content-center.align-items-center
            .col-6
              img(src='@/assets/curso/temas/tema3/12.svg')
            .col-5
              ul.lista-ul--color
                li 
                  i.fas.fa-circle(style="color:#005D95")
                  | Identificación de peligros.
                li 
                  i.fas.fa-circle(style="color:#005D95")
                  | Determinación de escenarios.
                li 
                  i.fas.fa-circle(style="color:#005D95")
                  | Análisis de escenarios.
                li 
                  i.fas.fa-circle(style="color:#005D95")
                  | Estimación de la gravedad.
                li 
                  i.fas.fa-circle(style="color:#005D95")
                  | Estimación de riesgos.
                li 
                  i.fas.fa-circle(style="color:#005D95")
                  | Caracterización del riesgo.

    .row.justify-content-center.align-items-center.mb-5
      .col-10
        p(data-aos="fade-right").mb-5 Con base en la caracterización del riesgo, es posible profundizar en el estudio de los factores que inciden en él a través de la identificación de variables cuantitativas y cualitativas:

    AcordionA(tipo="a" clase-tarjeta="tarjeta color-secundario2")(data-aos="flip-up").mb-5 
      .row(titulo="Variables cuantitativas")
        .col-md-6.mb-4.mb-md-0
          p Se expresan en términos numéricos y los valores deben corresponder con mediciones precisas realizadas en el terreno. Por lo general el acopio de información numérica precisa y confiable, es uno de los mayores retos al momento de evaluar este tipo de variables.
      
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/13.png', alt='Texto que describa la imagen')

      .row(titulo="Variables cuantitativas - ejemplos")
        .col-md-6.mb-4.mb-md-0
          p Algunos ejemplos que pueden dar una idea general sobre alguna situación de riesgo son:
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Aumento del cauce de un río.
            li 
              i.lista-ul__vineta
              | Área deforestada en una región.
            li 
              i.lista-ul__vineta
              | Concentración de metales pesados en una muestra de agua.
            li 
              i.lista-ul__vineta
              | Presencia de trazas de pesticidas en un cuerpo de agua.
            li 
              i.lista-ul__vineta
              | Contenidos de material particulado presentes en una zona de la ciudad.

      
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/14.png', alt='Texto que describa la imagen')

      .row(titulo="Variables cualitativas")
        .col-md-6.mb-4.mb-md-0
          p Se relacionan con variables que obedecen sobre todo a percepciones por lo que adquieren un carácter subjetivo. Sin embargo, es posible diseñar instrumentos que reduzcan los márgenes de error y que faciliten la captura de información confiable en el terreno.
      
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/15.png', alt='Texto que describa la imagen')

      .row(titulo="Variables cualitativas – ejemplos")
        .col-md-6.mb-4.mb-md-0
          p Algunos ejemplos de estas variables son las escalas que se emplean para determinar los impactos de algún factor en especial sobre la población, donde se solicita al encuestado que califique con cierto puntaje sus apreciaciones sobre un fenómeno en particular, como, por ejemplo:

          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Probabilidad de ocurrencia de un evento.
            li 
              i.lista-ul__vineta
              | Posibles efectos que este podría tener.
            li 
              i.lista-ul__vineta
              | Causas probables.

      
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/16.png', alt='Texto que describa la imagen')
      
    p(data-aos="fade-right").mb-5 Una vez se tienen identificados y valorados los riesgos, así como sus posibles efectos en la salud de las personas, es necesario establecer un análisis de riesgos, es decir, frente a cuáles de ellos se tiene una mayor vulnerabilidad, cuáles representan una mayor amenaza y qué consecuencias o qué daños pueden llegar a producir en determinadas circunstancias. Para ello, es necesario tener en cuenta lo siguiente:

    .BGIMG01.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Identificar la naturaleza, extensión, intensidad y magnitud de las amenazas.
            p Consiste en la identificación detallada de las amenazas en un área geográfica específica. Definir las causas de la amenaza, así como los factores que inciden en ella y que pueden aumentar sus efectos sobre la población.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/17.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Determinar la existencia y grado de vulnerabilidad. 
            p Reconocer las vulnerabilidades frente a determinadas amenazas para a partir de allí estimar qué se requiere para afrontarlas de la mejor manera.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/18.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Identificar las medidas y recursos disponibles. 
            p Elaborar un mapa de actores y recursos disponibles con el fin de articular una respuesta integral frente a determinado tipo de amenazas.


          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/19.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Construir escenarios de riesgo probables. 
            p Analizar las causas y los efectos de las amenazas con el fin de simular condiciones reales en las cuales se evidencien sus impactos sobre la población. 


          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/20.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Determinar niveles aceptables de riesgo. 
            p Establecer qué riesgos se pueden correr y cuáles definitivamente no, esto con base en la información recopilada a partir de las evaluaciones de riesgos.  

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/21.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Fijar prioridades
            p Establecer qué aspectos se atenderán, en orden de importancia, con base en los recursos disponibles y las posibles afectaciones identificadas en el análisis de riesgos.


          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/22.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Diseñar sistemas de administración efectivos y apropiados. 
            p A partir de las prioridades establecidas gestionar equipos de trabajo acordes con las necesidades y los objetivos propuestos.  

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/23.png', alt='Texto que describa la imagen')

    .d-flex.flex-wrap.align-items-center(data-aos="fade-right").mb-5
      img(src='@/assets/curso/temas/icono.svg' style="max-width: 30px;")
      .h3.col-auto.pb-2.mb-0.ms-2(style=" color: #455B2D;") Toma de decisiones

    p(data-aos="fade-right") El objetivo del análisis de riesgos, así como de sus causas y sus posibles consecuencias es facilitar la toma de decisiones en las instancias encargadas de su gestión y administración. Entre más información se tenga respecto a la naturaleza del fenómeno, sus causas y posibles consecuencias mayor será la profundidad de los análisis que se realicen para tomar decisiones que permitan afrontar la situación de la mejor manera.
    p(data-aos="fade-right").mb-5 Un esquema que podría utilizarse para la gestión de riesgos es como el que se muestra en la siguiente figura:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 17.] <em>Esquema para la gestión de riesgos</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema3/24.svg', alt='En la figura 17 se muestra un flujograma para la gestión de riesgos que inicia en un riesgo identificado y concluye en las medidas de administración que pueden ser de prevención o protección.')

    .row.justify-content-center.align-items-center.mb-5
      .col-10.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 17.] <em>Esquema para la gestión de riesgos</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema3/24-m.svg', alt='En la figura 17 se muestra un flujograma para la gestión de riesgos que inicia en un riesgo identificado y concluye en las medidas de administración que pueden ser de prevención o protección.')

    .tarjeta.color-primario1.p-4.col-ipad.mb-5(style="border-radius:0")
      .row.justify-content-center.align-items-center
        .col-7
          p De acuerdo con el anterior esquema, es evidente que cuando se tiene identificado un riesgo existen en primera instancia, tres acciones que se pueden realizar. La primera de ellas es aceptar el riesgo, es decir, que es un riesgo que se puede tomar teniendo en cuenta su posible impacto y las afectaciones que de él se deriven. Una segunda opción es eliminarlo, lo cual se logra mediante la implementación de alguna medida en particular. En tercer lugar, se tiene la posibilidad de gestionarlo. 
          p La gestión del riesgo empieza con la toma de alguna medida de administración, es decir, con la toma de decisiones que permitan actuar frente al riesgo identificado. Las medidas de administración permiten dos posibilidades. La primera es la prevención, a partir de la cual se derivan los planes y acciones tendientes a prevenir la aparición de un riesgo en particular. La segunda instancia es la protección, es decir, tomar alguna medida que pueda proteger a la población, frente al riesgo identificado. Para desarrollar las medidas de protección también se tiene la posibilidad de desarrollar planes y acciones, en primera instancia, transferir el riesgo o retenerlo. La transferencia de riesgos hace referencia a una alternativa de financiación en la cual el riesgo se transfiere a una compañía de seguros, la cual responde en caso de que la situación se presente. Por su parte, la retención es la aceptación del riesgo soportando las pérdidas que se llegasen a presentar en caso de materializarse. 
        .col-5
          img(src='@/assets/curso/temas/tema3/25.png')

    p(data-aos="fade-right").mb-5 Cualquiera que sea el manejo que se dé a los riesgos es necesario tener pleno conocimiento de sus causas, de sus posibles consecuencias, de sus afectaciones y del grado de vulnerabilidad que se tiene frente a este. Una correcta gestión de los riesgos permitirá afrontar las situaciones que se presenten y adoptar medidas que redunden en el mantenimiento de la calidad de vida y la salud de la población. 

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Mapas de riesgo

    p(data-aos="fade-right") Un mapa de riesgo es una herramienta que permite presentar la información sobre los riesgos a los cuales está expuesta una organización y visualizar su magnitud con el fin de entregar los insumos necesarios para su correcta gestión y manejo. Esta información se puede presentar de manera gráfica o por medio de datos, los cuales dan una lectura integral del tipo de riesgos, su calificación, los controles a los que se someten o los controles que se llevan a cabo para administrarlos. 
    p(data-aos="fade-right").mb-5 Por lo general, un mapa de riesgos se diseña como una matriz que contiene información sobre un riesgo en particular, o una serie de riesgos, a los cuales se les asigna unos atributos que permiten su calificación, evaluación y plan de manejo. Los componentes del mapa de riesgos son los siguientes:

    .row(data-aos="fade-left").mb-5
      .col-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4(style='height:100%')
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/30.svg', alt='Texto que describa la imagen')

          h3.text-center Identificación del riesgo
          p Se establece en primer lugar el riesgo. Posteriormente se definen sus causas, efectos y controles. 

      .col-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4(style='height:100%')
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/31.svg', alt='Texto que describa la imagen')

          h3.text-center Evaluación
          p Corresponde con la evaluación del riesgo indicando su valoración (probabilidad de que ocurra, impacto y calificación).
          p De acuerdo con los valores obtenidos se define un puntaje para el riesgo. Con base en este dato se define su prioridad. 

      .col-4.mb-4.mb-sm-0
        .tarjeta--boton.color-secundario.p-4(style='height:100%')
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/32.svg', alt='Texto que describa la imagen')

          h3 Plan de manejo
          p Se incluyen datos como la política de manejo, las acciones de mitigación, los responsables, el cronograma de actividades y el indicador.

    p(data-aos="fade-right").mb-5 Para ilustrar los componentes del mapa de riesgos se presenta el siguiente ejemplo (ver tabla):

    .row.justify-content-center.align-items-center.mb-5
      .col(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Tabla 5.] <em>Esquema general de un mapa de riesgos</em>
        .tabla-a.color-acento-contenido
          table.text-center
            caption  Nota. Restrepo G. y González J. (2010). 
            thead
              tr
                th(colspan="4") Identificación del riesgo
                th(colspan="3") Evaluación
                th(colspan="6") Plan de manejo
            tbody.text-small
              tr
                td Riesgo
                td Causas
                td Efectos
                td Controles
                td(colspan="3") Valoración
                td Zona de valoración del riesgo	
                td Política de manejo
                td Acciones de mitigación	
                td Responsable
                td Cronograma	
                td Indicador
              tr
                td(colspan="4")
                td Probabilidad 
                td Impacto 
                td Calificación 
                td
                td
                td
                td
                td
                td
              tr
                td(colspan="4") #[b Riesgo 1]
                td 
                td 
                td 
                td
                td
                td
                td
                td
                td
              tr
                td(colspan="4") #[b Riesgo 2]
                td 
                td 
                td 
                td
                td
                td
                td
                td
                td
	
    p(data-aos="fade-right") Las filas correspondientes se deben diligenciar para cada uno de los riesgos identificados al interior de la organización de acuerdo con su nivel de prioridad. En algunas organizaciones se incluye una primera columna, en la cual se diligencia la información correspondiente al proceso en el cual se identifican los riesgos. 
    p(data-aos="fade-right").mb-5 El mapa de riesgos requiere un constante proceso de revisión, evaluación y ajuste, ya que las actividades que allí se plantean se deben realizar en los tiempos señalados. La periodicidad con la que se hace seguimiento al mapa de riesgos es definida por cada organización, pero generalmente se realiza de manera anual. En el proceso de evaluación, se analiza la efectividad de cada uno de los controles propuestos y se elabora un informe donde se da cuenta de las gestiones adelantadas. 

    .d-flex.flex-wrap.align-items-center(data-aos="fade-right").mb-5
      img(src='@/assets/curso/temas/icono.svg' style="max-width: 30px;")
      .h3.col-auto.pb-2.mb-0.ms-2(style=" color: #455B2D;") Acciones de respuesta

    p(data-aos="fade-right").mb-5 El resultado final del proceso de gestión de riesgos es el diseño de acciones encaminadas a evitar que los riesgos causen traumatismos a la organización o a la población. De acuerdo con el portal #[b #[em ISO Tools Excellence] (2016)], las medidas de manejo del riesgo pueden ser las siguientes:

    .row(data-aos="fade-left").mb-5
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4(style='height:100%')
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/26.svg', alt='Texto que describa la imagen')

          h3.text-center Reducción del riesgo
          p Esta es una de las opciones más empleadas en la gestión de riesgos y consiste en la implementación de medidas que contribuyan a reducir el riesgo. Es básicamente aplicar controles de seguridad. 

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4(style='height:100%')
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/27.svg', alt='Texto que describa la imagen')

          h3.text-center Compartir o transferir el riesgo
          p Generalmente, esto se consigue con la suscripción de una póliza de seguros con cobertura para el riesgo que se desea compartir. 

      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta--boton.color-secundario.p-4(style='height:100%')
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/28.svg', alt='Texto que describa la imagen')

          h3.text-center Eliminar el riesgo
          p Esto se consigue eliminando una actividad, un procedimiento o un proceso que puede ser la causa del incidente. 

      .col-sm-6.col-lg-3
        .tarjeta--boton.color-primario.p-4(style='height:100%')
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/29.svg', alt='Texto que describa la imagen')

          h3.text-center Aceptar el riesgo
          p Esto se realiza cuando las acciones necesarias para eliminar un riesgo tienen un costo muy alto (superior a las consecuencias previstas de la ocurrencia del incidente). En ese caso se toma la decisión de “convivir” con el riesgo. 

    p(data-aos="fade-right").mb-5 Cualquiera que sea la decisión que se tome respecto al manejo y gestión del riesgo es importante que haya una evidencia de todo el proceso, por lo que se recomienda dejar registro de los procedimientos, anotaciones y evaluaciones del riesgo con el fin de facilitar la trazabilidad. La estimación de los riesgos y la definición de las medidas para manejarlo son grandes responsabilidades que acarrean un conocimiento minucioso de las situaciones y una revisión detallada de los procedimientos existentes para la toma consciente de decisiones. 
</template>

<script>
export default {
  name: 'Tema3',
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
