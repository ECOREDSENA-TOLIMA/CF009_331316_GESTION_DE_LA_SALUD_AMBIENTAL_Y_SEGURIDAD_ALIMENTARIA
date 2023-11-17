<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p(data-aos="fade-right").mb-5 Los procesos salud y enfermedad se ven influenciados por un sinnúmero de variables, las cuales obedecen a las interacciones que se dan entre el hombre y el medio que lo rodea, sea este medio natural, construido o social. A través del estudio de la forma como el entorno incide en la salud y en la calidad de vida de la población es posible diseñar estrategias que permitan reducir los impactos del ambiente en la salud y, al mismo tiempo, idear respuestas para asegurar el desarrollo integral de las comunidades sin poner en riesgo la disponibilidad de recursos para las generaciones futuras, aspectos que se visualizarán en el siguiente video:

    figure
      .video 
        iframe(width="560" height="315" src="https://www.youtube.com/embed/xEyJ1M0Hj5s?si=TdzIQkCUPn4LBLzq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen)




</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
