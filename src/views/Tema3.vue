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

        


    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Mapas de riesgo

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
