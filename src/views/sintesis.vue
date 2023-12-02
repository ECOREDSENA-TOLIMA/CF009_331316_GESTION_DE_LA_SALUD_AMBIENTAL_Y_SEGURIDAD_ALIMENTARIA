<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El análisis de riesgos se encarga de caracterizar los riesgos y las amenazas a los que está expuesta una organización, una empresa o una población; los analiza y estima su probabilidad de ocurrencia y sus posibles impactos a partir de la información estadística recopilada en el proceso de diagnóstico. Desde el punto de vista de la salud ambiental estos riesgos se relacionan con los factores que inciden en la calidad de vida de la población entre los cuales se encuentran los factores socioeconómicos, sociopolíticos y ambientales, lo cual guarda una estrecha relación con lo que se conoce como los determinantes en salud. 
    p Con base en el enfoque por determinantes se estudian los factores que afectan la salud y el bienestar de las personas entendiendo que los procesos salud, enfermedad no se relacionan únicamente con factores biológicos o físicos, sino que por el contrario interactúan con contextos mucho más amplios que abarcan el empleo, los servicios básicos, el saneamiento, la vivienda y la cobertura en salud. Por tanto, el análisis de riesgos debe analizar también estas dimensiones con el fin de cumplir con su cometido de aportar información valiosa para el diseño de políticas e intervenciones que den respuesta a las necesidades de la población en lo relacionado con su salud y su calidad de vida.
    p.mb-5 Partiendo de lo anterior y lo plasmado en este componente formativo, a continuación, se consolida su información a través del siguiente mapa conceptual: 

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente factores de riesgo en gestión de la salud ambiental y la seguridad sanitaria encontramos tres temas principales, salud ambiental, análisis de la situación y evaluación del riesgo.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
