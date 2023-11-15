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
        download: 'downloads/CFA.zip',
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
      tema: '1. Participación social ',
      referencia:
        'Ley 1757 de 06 de julio de 2015. Por la cual se dictan disposiciones en materia de promoción y protección del derecho a la participación democrática. Julio 6 de 2015. D.O. No. 49.565.',
      tipo: 'Documento legal',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=65335',
    },
    {
      tema: '1. Participación social',
      referencia:
        'Resolución 2063 de 09 de junio de 2017 [Ministerio de Salud y Protección Social]. Por la cual se adopta la Política de Participación Social en Salud. Junio 9 de 2017.',
      tipo: 'Documento legal',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%202063%20de%202017.pdf',
    },
    {
      tema: '1. Participación social ',
      referencia:
        'Ministerio de Salud y Protección Social. (2017). Lineamientos de participación social, comunitaria y ciudadana con enfoque diferencial que aporte desde los componentes de la Política Integral de Salud Ambiental – PISA, con intervenciones y/o acciones para los diferentes entornos, de la Ruta de Atención Integral de Promoción y Mantenimiento de la Salud.',
      tipo: 'Cartilla',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/15documento-salud-ambiental-participacion-social.pdf',
    },
    {
      tema: '1. Participación social',
      referencia:
        'Ministerio De Salud y Protección Social. (2018). Procesos de articulación entre la Política de Participación Social en Salud-PPSS- (Resolución 2063 de 2017) y los componentes de salud ambiental de la Política Integral de Salud Ambiental. Fase I.',
      tipo: 'Cartilla',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/16articulacion-ppss-componentes-salud-ambiental.pdf',
    },
    {
      tema: '2. Planeación en el desarrollo de las actividades.',
      referencia:
        'Ministerio de Salud y Protección Social. (2018).  ABECÉ de la política de participación social en salud- PPSS hacia los componentes ambientales de la política integral de salud ambiental – PISA.',
      tipo: 'Cartilla',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/abc-ppss-pisa.pdf',
    },
    {
      tema: '2. Planeación en el desarrollo de las actividades.',
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). Plan Decenal de Salud Pública. Dimensión Salud Ambiental. 2012-2021.',
      tipo: 'Cartilla',
      link:
        'https://www.minsalud.gov.co/plandecenal/Documents/dimensiones/dimension-saludambiental.pdf',
    },
    {
      tema: '2. Planeación en el desarrollo de las actividades.',
      referencia:
        'Documento CONPES  3550 [Consejo Nacional de Política Económica y Social]. Lineamientos para la formulación de la política integral de salud ambiental con énfasis en los componentes de calidad de aire, calidad de agua y seguridad química. Noviembre 24 de 2008.',
      tipo: 'Libro',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3550.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Administración local',
      significado:
        'Son entidades autónomas a nivel territorial, que extienden sus competencias a nivel municipal y están más cercanas a la ciudadanía. (Procuraduría General de la Nación, 2011)',
    },
    {
      termino: 'Agenda Local',
      significado:
        'Es el proceso de tipo participativo creado para la información, el debate y la decisión sobre el desarrollo de planes y programas municipales. (CEPAL, 2015)',
    },
    {
      termino: 'Consejos Sectoriales',
      significado:
        'Órganos de participación ciudadana en los que la participación de las entidades se hace por representación, pudiendo participar solo parte del total de los colectivos. (Ley 1757 de 2015)',
    },
    {
      termino: 'COE',
      significado:
        'El Centro de Operaciones de Emergencia en Salud Pública (COE), es una estrategia adaptada por el Instituto Nacional de Salud (INS) que tiene como finalidad la organización en momentos de alarma, brote o ante cualquier evento que sea considerado una amenaza en salud pública para el país. (INS, 2018)',
    },
    {
      termino: 'COVE',
      significado:
        'El Comité de Vigilancia Epidemiológica, es un espacio de análisis que tiene como objetivo crear herramientas e insumos para la toma de decisiones determinantes, que direccionen hacia acciones trascendentales para controlar situaciones que ponen en riesgo la salud de la población en las diferentes zonas del territorio. (Minsalud, 2019)',
    },
    {
      termino: 'Democratización',
      significado:
        'Se refiere a los procesos para el fortalecimiento de los mecanismos planteados, y tiene como objetivo el de involucrar a los ciudadanos y las organizaciones de la sociedad civil en la creación, ejecución, control y evaluación de la gestión pública, y generar transparencia en el ejercicio de la función administrativa. (DNP, s. f.)',
    },
    {
      termino: 'Democracia inclusiva',
      significado:
        'Es un modelo de democracia donde se fomenta y se da la posibilidad de participación de las personas y entidades en los sectores sociales excluidos o en riesgo de exclusión, logrando habilitar los espacios para que ellos sean actores activos, que decidan sus propios cambios. (OEA, 2006)',
    },
    {
      termino: 'Democracia participativa',
      significado:
        'Es la democracia basada en la participación directa de los ciudadanos y ciudadanas en la toma de decisiones, ejecución y control, con incidencia en el gobierno que dirige la colectividad. (Wikipedia, s. f.)',
    },
    {
      termino: 'Descentralización de servicios',
      significado:
        'Es el proceso por medio del cual se acercan los servicios de la administración a los ciudadanos y ciudadanas. (CEPAL, 2009)',
    },
    {
      termino: 'Eficacia',
      significado:
        'Se refiere a los resultados en función del cumplimiento de objetivos y metas. Para contar con eficiencia, se deben tener las tareas priorizadas y ordenadas para llegar al mejor resultado posible. (CEF, s. f.)',
    },
    {
      termino: 'Empoderamiento',
      significado:
        'Es la adquisición de poder e independencia por parte de una persona o grupo social poco favorecido para mejorar su situación. (UNTREF, 2015)',
    },
    {
      termino: 'Gobernabilidad',
      significado:
        'Se refiere a la relación que se manifiesta cuando se genera un estado de equilibrio en el ejercicio del poder político, que se deriva de la solución a las demandas de tipo social y las cuales son atendidas de manera eficaz, estable y legítima. (Diccionario de política 2000)',
    },
    {
      termino: 'Gobernanza',
      significado:
        'Es una forma de gobierno que se basa en la interrelación equilibrada del Estado, la sociedad civil y el mercado, para alcanzar un desarrollo estable a nivel económico, social e institucional. (CEPAL, 2000)',
    },
    {
      termino: 'UAIRAC',
      significado:
        'Consiste en la Unidad de Atención de Enfermedades Respiratorias Agudas Comunitaria (UAEAC), también es conocida como Unidad de Atención de Infecciones Respiratorias Agudas (UAIRAC), la cual es una casa de la comunidad, donde una persona toma el rol de agente comunitario voluntario de salud y cuenta con la capacidad para atender y filtrar personas con sintomatología y direccionados según se requiera. (OPS, 2012) ',
    },
  ],
  referencias: [
    {
      referencia:
        'Crespo, P., De Rham, P., Gonzáles, G., Iturralde, P., Jaramillo, B., Mancero, L., Moncada, M., Pérez, A. y Soria, C. (2007). Empoderamiento: conceptos y orientaciones. Asocam. ',
      link:
        'https://www.shareweb.ch/site/Poverty-Wellbeing/resources/Archive%20files/Empoderamiento%20-%20Conceptos%20y%20Orientaciones%202007.pdf',
    },
    {
      referencia:
        'Decreto 1298 de 1994 [Ministerio de Salud]. Por el cual se expide el Estatuto Orgánico del Sistema General de Seguridad Social en Salud. Junio 22 de 1994. D.O. No. 41.402. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=72019 ',
    },
    {
      referencia:
        'Decreto 1757 de 1994 [Ministerio de Salud]. Por el cual se organizan y se establecen las modalidades y formas de participación social en la prestación de servicios de salud, conforme a lo dispuesto en el numeral 1 del artículo 4º del Decreto Ley 1298 de 1994. Agosto 3 de 1994. D.O. No. 41.477. ',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%201757%20de%201994.pdf ',
    },
    {
      referencia:
        'Ley 850 de 2003 [Ministerio del Interior y de Justicia]. Por medio de la cual se reglamentan las veedurías ciudadanas. Noviembre 18 de 2003. D.O. No. 45.376. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=10570',
    },
    {
      referencia:
        'Ley Estatutaria 1751 de 2015. Por medio de la cual se regula el derecho fundamental a la salud y se dictan otras disposiciones. Febrero 16 de 2015. D.O. No. 49.427. ',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Ley%201751%20de%202015.pdf ',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2016). Salud Ambiental.',
      link:
        'https://www.minambiente.gov.co/asuntos-ambientales-sectorial-y-urbana/salud-ambiental/#:~:text=Qu%C3%A9%20es%20la%20PISA%3F,el%20marco%20de%20la%20CONASA',
    },
    {
      referencia:
        'Mosquera, M. (2002). Comunicación en salud: conceptos, teorías y experiencias. The Communication Initiative Network. ',
      link:
        'https://www.comminit.com/content/comunicaci%C3%B3n-en-salud-conceptos-teor%C3%ADas-y-experiencias#:~:text=De%20acuerdo%20con%20un%20documento,comunitarias%20que%20mejoren%20la%20salud. ',
    },
    {
      referencia:
        'Peña-Varón, J., Marín-Velásquez, P. y Mosquera-Becerra, J. (2020). Papel de la sistematización de experiencias en los procesos de evaluación de intervenciones de salud pública en la Comuna Saludable por la Paz, Cali – Colombia. Prospectiva, (31), p. 299-313. ',
      link: 'https://www.redalyc.org/journal/5742/574266888016/html/ ',
    },
    {
      referencia:
        'Resolución 429 de 2016 [Ministerio de Salud y Protección Social]. Por medio de la cual se adopta la Política de Atención Integral en Salud. Febrero 17 de 2016. D.O.  No. 49.794. ',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%200429%20de%202016.pdf',
    },
    {
      referencia:
        'Retos Directivos. (2022). Cómo desarrollar tus habilidades comunicativas. El blog de retos para ser directivo. ',
      link:
        'https://retos-directivos.eae.es/como-desarrollar-habilidades-comunicativas/#:~:text=Escucha.,dice%20para%20garantizar%20la%20comprensi%C3%B3n',
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
