export default {
  global: {
    componenteFormativo:
      'Factores de riesgo en gestión de la salud ambiental y la seguridad sanitaria',
    descripcionCurso:
      'La salud es un estado de completo bienestar físico, mental y social, resultado de interacciones complejas influenciadas por el entorno y las características biológicas individuales. Por tanto, estudiar el contexto en que transcurre la vida de las personas y analizar los riesgos a los que están expuestas, resulta clave para prevenir la enfermedad y disminuir sus impactos en la población.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Factores de riesgo en la gestión de la salud ambiental y la seguridad sanitaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Factores de riesgo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Aspectos sociodemográficos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Aspectos socioambientales del territorio',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Peligros',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Análisis de la situación de salud (ASIS)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Articulación con salud ambiental',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Conceptos básicos de epidemiología y estadística',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Evaluación del riesgo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Caracterización del riesgo',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Mapas de riesgo',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_09_331316.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        '1.	Factores de riesgo en la gestión de la salud ambiental y la seguridad sanitaria',
      referencia:
        'Ministerio de Salud y Protección Social (2022). Salud ambiental.',
      tipo: 'Página web',
      link:
        'https://www.minsalud.gov.co/salud/publica/ambiental/Paginas/Salud-ambiental.aspx',
    },
    {
      tema:
        '1.	Factores de riesgo en la gestión de la salud ambiental y la seguridad sanitaria',
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible (2022). Salud Ambiental. ',
      tipo: 'Página web',
      link:
        'https://www.minambiente.gov.co/asuntos-ambientales-sectorial-y-urbana/salud-ambiental/',
    },
    {
      tema:
        '1.	Factores de riesgo en la gestión de la salud ambiental y la seguridad sanitaria',
      referencia:
        'Diseño de un sistema de indicadores socio ambientales para el Distrito Capital de Bogotá. (Cepal, 004) ',
      tipo: 'Pdf',
      link:
        'https://repositorio.cepal.org/bitstream/handle/11362/4800/1/S044210_es.pdf',
    },
    {
      tema:
        '1.	Factores de riesgo en la gestión de la salud ambiental y la seguridad sanitaria',
      referencia:
        'Decreto 596 de 2011. [Alcaldía Mayor de Bogotá. Política Distrital de Salud Ambiental para Bogotá D.C. 2011 – 2023. 19 de diciembre de 2011. ',
      tipo: 'Decreto Alcaldía Mayor de Bogotá',
      link:
        'http://www.saludcapital.gov.co/DocumentosPoliticasEnSalud/POL%C3%8D.%20SALUD%20AMBIENTAL.%20DECRETO%20NO%20596%20DE%202011.PDF',
    },
    {
      tema: '3.Evaluación del riesgo',
      referencia:
        'Instituto Colombiano de Normas Técnicas. (2016). Perspectiva de la Gestión del Riesgo en la Acreditación en Salud. ',
      tipo: 'Documento PDF',
      link:
        'http://acreditacionensalud.org.co/wp-content/uploads/2020/07/Gestion-del-riesgo-en-la-Acreditacion-en-Salud.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Consecuencia',
      significado: 'Resultado de un evento que afecta los objetivos.',
    },
    {
      termino: 'Esperanza de vida',
      significado:
        'Es una estimación del número promedio de años de vida adicionales que una persona esperaría vivir si las tasas de mortalidad por edad específica para un año determinado permanecieran durante el resto de su vida.',
    },
    {
      termino: 'Incertidumbre',
      significado:
        'Es un grado de desconocimiento o falta de información respecto a un tema en especial.  ',
    },
    {
      termino: 'Magnitud',
      significado:
        'Estimación cuantitativa del riesgo, expresada por la combinación de valores de la Probabilidad y Consecuencia de ocurrencia de un evento.',
    },
    {
      termino: 'Nivel de riesgo',
      significado:
        'Magnitud de un riesgo expresada en términos de la combinación de las consecuencias y sus probabilidades.',
    },
    {
      termino: 'OPS',
      significado: 'Organización internacional de salud pública.',
    },
    {
      termino: 'Probabilidad',
      significado:
        'Oportunidad de que algo suceda esté o no definido, medido, determinado objetiva o subjetivamente, cualitativa o cuantitativamente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alcaldía de Medellín – Distrito de Ciencia, Tecnología e Innovación. Secretaría de Salud. Programa de Salud Ambiental. ',
      link:
        'https://www.medellin.gov.co/es/secretaria-de-salud/subsecretaria-de-salud-publica/salud-ambiental/',
    },
    {
      referencia:
        'Cepal – Pnud. (2004). Diseño de un sistema de indicadores socioambientales para el Distrito Capital de Bogotá. ',
      link:
        'https://blogs.iadb.org/sostenibilidad/es/que-nos-puede-decir-un-mapa-sobre-los-aspectos-socioambientales-de-un-proyecto-de-desarrollo/',
    },
    {
      referencia:
        'Consejo Nacional de Política Económica y Social CONPES. (2008). CONPES 3550. Lineamientos para la formulación de la política integral de salud ambiental con énfasis en los componentes de calidad de aire, calidad de agua y seguridad química.  ',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3550.pdf',
    },
    {
      referencia: 'Economipedia. (2019). Medidas de dispersión. ',
      link: 'https://economipedia.com/definiciones/medidas-de-dispersion.html',
    },
    {
      referencia:
        'Gobierno de Chile. Ministerio del Medio Ambiente. (2014). Lineamientos metodológicos para la evaluación de riesgo ecológico. ',
      link:
        'https://sqi.mma.gob.cl/wp-content/uploads/2018/07/g2-Guia-Metodologica-Evaluacion-Riesgo-Ambiental.pdf',
    },
    {
      referencia:
        'González J., Restrepo G. (2010). Biometría comunitaria. Introducción al pensamiento científico en la salud del individuo y la comunidad.',
      link:
        'https://noticias.juanncorpas.edu.co/uploads/media/Libro_de_Biometria_Comunitaria.pdf',
    },
    {
      referencia:
        'ISOTools Colombia. (2016, 12 de abril). ISO 27001: Evaluación y tratamiento de riesgos en 6 pasos. Isotools.us. ',
      link:
        'https://co.isotools.us/iso-27001-evaluacion-tratamiento-riesgos-6-pasos/',
    },
    {
      referencia:
        'Ministerio de Ambiente del Perú. (2010). Guía de evaluación de riesgos ambientales. ',
      link:
        'https://www.minam.gob.pe/calidadambiental/wp-content/uploads/sites/22/2013/10/guia_riesgos_ambientales.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2014). Guía conceptual y metodológica para la construcción del ASIS de las Entidades Territoriales.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/ED/PSP/Guia%20ASIS%2028112013.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2018). Gestión integral del riesgo en salud. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VP/DOA/girs-prespectiva-desde-aseguramiento.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2021). Análisis de la Situación en Salud.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/ED/PSP/analisis-situacion-salud-colombia-2021.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social – Organización Panamericana de la Salud. (2014). Referentes conceptuales y abordajes sobre Determinantes Ambientales.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/06/Referentes_Conceptuales_y_Abordajes_sobre_Determinantes_Ambientales.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2011). Plan Decenal de Salud Pública 2011 – 2021. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/ED/PSP/PDSP.pdf',
    },
    {
      referencia:
        'Naranjo E. (2014). ¿Cómo se gestiona el riesgo? Gestión Integral 3. ',
      link:
        'http://gestionempresasintegrales.blogspot.com/p/gestion-del-riesgo.html',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (2009). Saneamiento rural y salud, Guía para acciones a nivel local. ',
      link: 'https://iris.paho.org/handle/10665.2/52823',
    },
    {
      referencia:
        'Secretaría para Asuntos de Vulnerabilidad, República de El Salvador. (2013). Conceptos básicos de gestión de riesgos. ',
      link:
        'https://dipecholac.net/docs/herramientas-proyecto-dipecho/el-salvador/C1-CONCEPTOS-BASICOS-DE-GRD.pdf',
    },
    {
      referencia:
        'Universidad EAFIT. (s.f.). Consultorio Contable. Boletín Mapa de Riesgos. ',
      link:
        'https://www.eafit.edu.co/escuelas/administracion/consultorio-contable/Documents/A%20Mapas%20de%20riesgos.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Luz Adriana Cárdenas González',
          cargo: 'Experta Temática',
          centro: 'Regional Antioquia - Centro de Servicios de Salud',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Iván Uribe Ortiz',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Davison Gaitán Escobar',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard de Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador ',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
