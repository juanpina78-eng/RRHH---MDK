import { Role } from '../types';

export const roles: Role[] = [
  {
    puesto: "Project Director (José Casanova)",
    mision: "Dirigir y gestionar la planificación y ejecución del proyecto de reestructuración de Marketing (Mondraker x Casanova), asegurando el cumplimiento de objetivos estratégicos, la gestión eficiente de los recursos y la calidad del entregable.",
    reportaA: "Director General / CEO (Dada la naturaleza crítica del \"reinicio\" de MK, el Director del Proyecto de la agencia debe reportar al Vértice Estratégico de Mondraker para garantizar el apoyo directivo y la aprobación del plan).",
    supervisaA: "Personal asignado al Proyecto (incluyendo Strategy Director y Chief Coordinator), ya que debe coordinar, planificar y administrar los proyectos asignados.",
    responsibilities: [
      {
        name: "R1. Liderar la Planificación y Organización Estratégica del Proyecto. Asegurar que el proyecto esté alineado con los objetivos de negocio de Mondraker, definiendo el enfoque y los procedimientos a seguir.",
        tasks: [
          "T1. Planificar el proceso de inicio de cada proyecto, definiendo políticas e inducción.",
          "T2. Organizar las prioridades de cada actividad clave del proyecto.",
          "T3. Revisar y aprobar los planes de trabajo propuestos por los directores de área (Estrategia, Contenido).",
          "T4. Elaborar los procedimientos y políticas de trabajo para cada una de las fases del proyecto."
        ]
      },
      {
        name: "R2. Administrar y Controlar el Presupuesto y Recursos. Asegurar el buen manejo del personal y los recursos financieros asignados a la ejecución del proyecto.",
        tasks: [
          "T1. Estimar y desglosar el presupuesto y el requerimiento de recursos para cada fase del proyecto.",
          "T2. Manejar el presupuesto de cada proyecto individualmente.",
          "T3. Controlar los costos y los egresos relacionados con el proyecto, realizando los informes correspondientes.",
          "T4. Coordinar con otras áreas (Finanzas/RRHH) para la provisión de recursos."
        ]
      },
      {
        name: "R3. Monitorear el Rendimiento y el Manejo de Riesgos. Analizar los avances y las actividades realizadas, identificando y mitigando posibles riesgos y desviaciones para garantizar el cumplimiento de los plazos.",
        tasks: [
          "T1. Analizar y manejar un rango aceptable de riesgo dentro de las actividades del proyecto.",
          "T2. Elaborar reportes de rendimiento del proyecto y del personal.",
          "T3. Realizar reuniones semanales de seguimiento con el equipo gerencial del proyecto.",
          "T4. Implementar objetivos para el área de investigación y desarrollo."
        ]
      },
      {
        name: "R4. Gestionar el Equipo y la Comunicación de la Estrategia. Asegurar que el personal asignado al proyecto esté entrenado y motivado y que las decisiones de gestión sean comunicadas eficazmente.",
        tasks: [
          "T1. Entrenar constantemente al personal involucrado en cada proyecto.",
          "T2. Organizar y motivar a los colaboradores para el cumplimiento de metas y tiempos.",
          "T3. Velar por el cumplimiento de las condiciones laborales en cada uno de los proyectos.",
          "T4. Participar en las decisiones de gestión."
        ]
      }
    ],
    tipo: "Agencia",
    area: "Dirección"
  },
  {
    puesto: "Strategy Director (Oscar Saenz)",
    mision: "Definir la dirección estratégica y los marcos de actuación del marketing y comunicación de la marca, desarrollando planes a largo plazo para garantizar que todas las iniciativas estén alineadas con el posicionamiento global deseado (New DNA) y los objetivos de negocio.",
    reportaA: "Project Director (Jose Casanova), dado que la estrategia general de Casanova para Mondraker se enmarca en este proyecto específico.",
    supervisaA: "No cuenta con personal a su cargo de forma directa, pero ejerce liderazgo funcional sobre el Content and Production Director y el Strategy Specialist.",
    responsibilities: [
      {
        name: "R1. Formular la Estrategia Global de Marketing. Diseñar el plan estratégico para cumplir los objetivos trazados desde la dirección, basándose en un análisis profundo del mercado.",
        tasks: [
          "T1. Determinar las fortalezas y debilidades del mercado a atacar.",
          "T2. Crear el análisis FODA de la compañía (o del área).",
          "T3. Formular las estrategias a seguir para el posicionamiento global de la marca.",
          "T4. Elaborar los planes de trabajo a seguir para realizar las mejoras."
        ]
      },
      {
        name: "R2. Planificar Objetivos y Proyecciones de Crecimiento. Establecer metas claras, realistas y medibles para la organización.",
        tasks: [
          "T1. Analizar los resultados a corto plazo y proyectar los resultados a largo plazo.",
          "T2. Determinar los objetivos a alcanzar, asegurando que sean claros y específicos.",
          "T3. Revisar los planes de mercadeo para cada canal establecido."
        ]
      },
      {
        name: "R3. Garantizar la Coherencia de la Marca (Brand DNA). Definir los lineamientos de la marca y la visión creativa para asegurar que todo el output de comunicación se adhiera a la nueva identidad.",
        tasks: [
          "T1. Revisar y aprobar los conceptos de diseño propuestos por el Art Director y Content Director.",
          "T2. Coordinar las campañas y pautas establecidas con las agencias publicitarias (Casanova)."
        ]
      },
      {
        name: "R4. Investigar y Analizar el Comportamiento del Mercado. Mantener el conocimiento sobre el mercado, las tendencias y el comportamiento de la competencia.",
        tasks: [
          "T1. Estudiar e investigar los estudios de mercado para la industria.",
          "T2. Analizar la información para realizar los reportes de resultados, proponiendo alternativas y mejoras."
        ]
      }
    ],
    tipo: "Agencia",
    area: "Estrategia"
  },
  {
    puesto: "Content and Production Director (Guille Sánchez)",
    mision: "Liderar y supervisar la creación de contenido y la producción multimedia de la marca, garantizando que el tono, la narrativa y la calidad visual reflejen el nuevo ADN de Mondraker, potencien el brand awareness y estén alineados con la estrategia always-on.",
    reportaA: "Project Director (Jose Casanova), o funcionalmente al Strategy Director (Oscar Saenz), dado que su trabajo es la ejecución visual y narrativa de la estrategia definida. Se establece al Project Director como jefe directo por su rol en Casanova.",
    supervisaA: "Art Director (Ulises Vidal), Marketing Photographer (Iván Marruecos), Marketing Videographer (Javier García), Alexis Vázquez",
    responsibilities: [
        {
            name: "R1. Dirigir la Producción de Contenido Multimedia y Campañas. Supervisar la creación de material audiovisual y gráfico, velando por el cumplimiento de los conceptos definidos con Marketing.",
            tasks: [
                "T1. Determinar el concepto a graficar junto con el departamento de mercadeo.",
                "T2. Lanzar las sesiones de grabación de videos corporativos y shooting, recogiendo el mensaje a transmitir.",
                "T3. Supervisar al personal a cargo y coordinar con ellos el calendario de funciones.",
                "T4. Coordinar con el equipo la asistencia publicitaria para cada canal de producto asignado."
            ]
        },
        {
            name: "R2. Establecer y Garantizar los Estándares de Calidad Visual. Asegurar la coherencia de la imagen y la aplicación correcta de la marca en todos los soportes.",
            tasks: [
                "T1. Definir las guías de estilo audiovisual y técnico para todos los proyectos (junto al Digital Media Producer, si existiera).",
                "T2. Verificar el impacto de las imágenes y slogans utilizados en la campaña."
            ]
        },
        {
            name: "R3. Gestionar el Flujo de Trabajo y la Eficiencia del Equipo Creativo. Optimizar los procesos de producción para maximizar la eficacia y el rendimiento.",
            tasks: [
                "T1. Elaborar los reportes de actividades y de resultados, dándoles el seguimiento correspondiente.",
                "T2. Realizar los reportes de desperdicio, devoluciones o errores de producción.",
                "T3. Elaborar planes de contingencia en caso de que la campaña no esté funcionando, basándolo en el plan original."
            ]
        }
    ],
    tipo: "Agencia",
    area: "Contenido"
  },
  {
    puesto: "Strategy Specialist (Jaume Ros)",
    mision: "Apoyar la implementación de los planes estratégicos de marketing y asistir en la recopilación y análisis de datos clave de mercado, para asegurar que las decisiones operativas se basen en información sólida y contribuyan al crecimiento y posicionamiento de la marca.",
    reportaA: "Strategy Director (Oscar Saenz). Actúa como apoyo en la implementación y análisis de la estrategia.",
    supervisaA: "No cuenta con personal a su cargo.",
    responsibilities: [
        {
            name: "R1. Recopilar y Consolidar Información Estratégica. Obtener los datos cualitativos y cuantitativos necesarios para la toma de decisiones del Director de Estrategia.",
            tasks: [
                "T1. Buscar y recopilar datos de cotizaciones, precios de mercado y ofertas de proveedores.",
                "T2. Analizar las cotizaciones y ofertas recibidas, proporcionando las respuestas a cada proveedor.",
                "T3. Obtener y revisar información sobre los resultados de las campañas y el rendimiento del producto.",
                "T4. Revisar los reportes de resultados de la operación."
            ]
        },
        {
            name: "R2. Asistir en la Elaboración de Documentos Estratégicos. Apoyar en la creación de planes, análisis financieros y presentaciones clave para la dirección.",
            tasks: [
                "T1. Asistir en la elaboración de contratos de arrendamiento o venta.",
                "T2. Elaborar reportes semanales y mensuales de los ingresos y salidas de producto (inventario).",
                "T3. Asistir en la preparación de reuniones de presentación a altos mandos."
            ]
        }
    ],
    tipo: "Agencia",
    area: "Estrategia"
  },
  {
    puesto: "Chief Coordinator (David Galiana)",
    mision: "Orquestar las operaciones diarias del proyecto Casanova, facilitando la comunicación fluida, la gestión de flujos de trabajo y la consecución de tareas entre la agencia y los equipos internos de Mondraker.",
    reportaA: "Project Director (Jose Casanova), como coordinador operativo del proyecto Casanova.",
    supervisaA: "Trabaja en coordinación con todos los equipos operativos (Mondraker y Casanova).",
    responsibilities: [
        {
            name: "R1. Coordinar y Administrar el Flujo de Trabajo Operativo. Gestionar la planificación de tareas y los plazos, asegurando que todos los miembros del equipo cumplan con las asignaciones.",
            tasks: [
                "T1. Coordinar con las personas involucradas la recolección de la información y documentos necesarios para la elaboración de los reportes.",
                "T2. Organizar la documentación para ser remitida a las personas correspondientes.",
                "T3. Mantener la bitácora de reuniones al día, como respaldo de los cambios estipulados.",
                "T4. Coordinar las diferentes áreas de la empresa."
            ]
        },
        {
            name: "R2. Asegurar la Comunicación y el Soporte Interno. Facilitar la interacción entre los diferentes departamentos y la agencia para resolver dudas y evitar cuellos de botella.",
            tasks: [
                "T1. Elaborar los comunicados internos para el departamento o sucursal.",
                "T2. Direccionar a las visitas (o llamadas internas) que lleguen durante el día a la empresa.",
                "T3. Asistir al jefe directo en la preparación de reuniones o actividades para el desarrollo de la buena y asertiva comunicación.",
                "T4. Asistir a los compañeros en las funciones cotidianas y proyectos temporales."
            ]
        },
        {
            name: "R3. Gestionar los Tiempos y la Logística Operacional. Velar por el cumplimiento de los cronogramas y asegurar que los recursos (espacios, agendas) estén disponibles.",
            tasks: [
                "T1. Organizar la agenda de uso de las salas de reuniones.",
                "T2. Revisar la agenda diaria del Project Director e informar de las actividades del día.",
                "T3. Revisar la bitácora de seguridad diaria y reportar anomalías."
            ]
        }
    ],
    tipo: "Agencia",
    area: "Coordinación"
  },
  {
    puesto: "Racing team coordinator (Guille Sánchez)",
    mision: "Coordinar las comunicaciones de los equipos de competición (DH y XC), maximizando la visibilidad de la marca y posicionando a los equipos como activos de marketing clave.",
    reportaA: "Chief Coordinator (David Galiana). (Asegurando la coordinación operativa entre Casanova y los equipos Mondraker).",
    supervisaA: "No cuenta con personal a su cargo. Ejerce coordinación funcional con los Racing Managers (XC y DH).",
    responsibilities: [
        {
            name: "R1. Soportar la Creación de Contenido de Carreras. Facilitar las oportunidades de shooting y grabación en el contexto de las competiciones para el equipo de Contenido/Producción.",
            tasks: [
                "T1. Coordinar con el Content and Production Director el calendario de contenido específico para carreras.",
                "T2. Recopilar información y resultados de las carreras de DH y XC para su difusión inmediata.",
                "T3. Gestionar las relaciones in-situ con prensa y media acreditados por la agencia."
            ]
        },
        {
            name: "R2. Controlar la Activación de posibles Patrocinios y Branding. Asegurar que todas las obligaciones contractuales con los sponsors y los requisitos de branding de la marca se cumplen en los eventos.",
            tasks: [
                "T1. Verificar la correcta exhibición de los logotipos y marcas de los sponsors en stands, vestimenta y materiales de comunicación.",
                "T2. Monitorear el uso de la identidad visual de la marca Mondraker y sus productos en las transmisiones y plataformas de medios.",
                "T3. Elaborar un informe post-carrera detallando el cumplimiento de las activaciones de patrocinio."
            ]
        }
    ],
    tipo: "Agencia",
    area: "Racing"
  },
  {
    puesto: "Marketing Events and Operations Manager (Almudena García)",
    mision: "Planificar y ejecutar la logística de eventos promocionales, lanzamientos y ferias y gestionar las operaciones de marketing vinculadas a estos, para asegurar la realización eficiente y exitosa de las iniciativas de brand experience.",
    reportaA: "Chief Coordinator (David Galiana). (Asegurando la coordinación operativa entre Casanova y los equipos Mondraker).",
    supervisaA: "Staff de mecánicos de MK y colaboradores puntuales en eventos.",
    responsibilities: [
        {
            name: "R1. Planificar y Ejecutar Grandes Eventos de Marca. Liderar la ejecución logística de lanzamientos clave y eventos corporativos (ej. 25 Aniversario).",
            tasks: [
                "T1. Desarrollar planes logísticos detallados, incluyendo ubicación, staffing y cronograma de montaje/desmontaje.",
                "T2. Gestionar la relación y la contratación de proveedores externos (caterings, transporte, set design).",
                "T3. Coordinar la participación de riders, influencers y prensa en los eventos.",
                "T4. Elaborar el presupuesto detallado para cada evento y realizar el control de costos (R2. Controlar la Administración de Presupuestos)."
            ]
        },
        {
            name: "R2. Coordinar la Gestión de la flota bicis test.",
            tasks: [
                "T1. Creación de artículos y dar alta en SAP.",
                "T2. Garantizar el correcto mantenimiento y puesta a punto de la flota, gestionando el equipo de mecánicos, así como el stock necesario para su reparación.",
                "T3. Dar servicio al cliente externo de las necesidades de flota test (embajadores, equipos, repres, tiendas, medios...)",
                "T4. Reportar periódicamente sobre el estado de situación de la flota, manteniendo los niveles de inventario marcados por dirección (almacenes 03, 03R y 03F)."
            ]
        },
        {
            name: "R3. Gestionar las Operaciones de Marketing (Inventario y POS). Administrar los recursos físicos de marketing, asegurando que los materiales promocionales y de apoyo estén disponibles y bien gestionados.",
            tasks: [
                "T1. Controlar el inventario de merchandising, gift bags y material de POS utilizado en eventos y retail.",
                "T2. Colaborar con el equipo de Diseño Gráfico (Retail/Mobiliario) en la producción y distribución de materiales.",
                "T3. Garantizar que los requerimientos logísticos de demostración y test de producto se coordinen con el Demo and Event Coordinator Central Europe."
            ]
        },
        {
            name: "R4. Seguimiento presupuestario del área.",
            tasks: [
                "T1. Control del presupuesto del área y actualización mensual de la contabilidad.",
                "T2. Solicitud y revisión de facturas a proveedores.",
                "T3. Gestión de la contabilidad integral del área junto con el área de Contabilidad.",
                "T4. Resolución de incidencias con el área de Contabilidad."
            ]
        }
    ],
    tipo: "Mondraker",
    area: "Operaciones"
  },
  {
    puesto: "International Marketing Coordination Manager (José Alix)",
    mision: "Garantizar la correcta recogida y aplicación del feedback de los Country Marketing Managers de cada país (Italia, Francia, Alemania, USA, España e Inglaterra), asegurando que las campañas y los mensajes de marketing sean pertinentes y adaptados a cada mercado. Asimismo, ordenar los recursos y prioridades del plan de marketing internacional, manteniendo al equipo unido, alineado y coordinar operaciones ligadas al retail marketing, medios y eventos tanto internos como externos.",
    reportaA: "Chief Coordinator (David Galiana). (Asegurando la coordinación operativa entre Casanova y los equipos Mondraker), Oscar Sáenz como Strategy Director.",
    supervisaA: "Country Marketing Managers (Italia, Francia, UK, USA, Alemania, España) y el equipo de Operaciones de Marketing.",
    responsibilities: [
        {
            name: "R1. Dirigir la Planificación y Coordinación Internacional. Consolidar el plan de marketing internacional, asegurando la cohesión entre los objetivos globales y las necesidades locales.",
            tasks: [
                "T1. Definir las prioridades y recursos asignados a cada mercado internacional (Italia, Francia, UK, USA).",
                "T2. Liderar reuniones periódicas (semanales/quincenales) con los Country Marketing Managers para asegurar la alineación.",
                "T3. Desarrollar un sistema estructurado para la recogida y aplicación de feedback local."
            ]
        },
        {
            name: "R2. Asegurar la Coherencia Global de Marca (Branding y Tono). Servir de filtro para garantizar que la adaptación de las campañas respete la coherencia visual y el tono global del New Brand DNA.",
            tasks: [
                "T1. Revisar y aprobar las campañas de marketing específicas para cada país antes de su lanzamiento.",
                "T2. Actuar como el principal punto de contacto entre el equipo central (Casanova/HQ) y los equipos locales en asuntos de branding.",
                "T3. Auditar la aplicación del tono y lenguaje de marca (Visual y Audaz) en las comunicaciones locales."
            ]
        },
        {
            name: "R3. Optimizar el Flujo Operacional y la Eficiencia de Recursos. Racionalizar los procesos de trabajo y la asignación de presupuestos a nivel internacional.",
            tasks: [
                "T1. Colaborar con el Project Director y Strategy Director para integrar la ejecución local en la estrategia global.",
                "T2. Supervisar la planificación y ejecución de las operaciones de retail marketing, eventos y POS a nivel internacional.",
                "T3. Realizar informes de seguimiento sobre el rendimiento de las inversiones de marketing por mercado."
            ]
        },
        {
            name: "R4. Gestionar España como Country Marketing Manager",
            tasks: [
                "T1. Desarrollar y ejecutar estrategias de marketing específicas para el mercado español.",
                "T2. Coordinar con agencias y socios locales para la implementación táctica de campañas.",
                "T3. Supervisar el desempeño de ventas y acciones de marketing en España.",
                "T4. Adaptar el contenido global a las particularidades del mercado español.",
                "T5. Reportar resultados y necesidades específicas de España al equipo internacional y dirección."
            ]
        }
    ],
    tipo: "Mondraker",
    area: "Internacional"
  },
  {
    puesto: "XC Racing Manager (Sergio Mantecón)",
    mision: "Dirigir y gestionar el equipo de competición de Cross Country (XC), enfocando su actividad en el posicionamiento de la marca en el desarrollo de productos técnicos y el apoyo a la comunicación estratégica.",
    reportaA: "Racing team coordinator (Guille Sánchez)",
    supervisaA: "Riders y personal de apoyo del equipo oficial XC.",
    responsibilities: [
      {
        name: "R1. Gestión de Alto Rendimiento del Equipo XC. Liderar la planificación deportiva, el entrenamiento y la logística de competición para maximizar los resultados.",
        tasks: [
          "T1. Negociar y gestionar los contratos de los riders y el staff técnico del equipo, previa aprobación del área de RRHH.",
          "T2. Planificar la asistencia a las pruebas clave del calendario UCI XC.",
          "T3. Controlar el rendimiento deportivo y el cumplimiento de los programas de entrenamiento.",
          "T4. Coordinar con el Racing team coordinator (Guille Sánchez) para planificar la comunicación y las acciones de MK vinculadas con la competición."
        ]
      },
      {
        name: "R2. Integración y Soporte al Desarrollo de Producto. Servir como tester de élite y canalizar el feedback técnico a los departamentos de Producto e Ingeniería.",
        tasks: [
          "T1. Probar y evaluar prototipos de bicicletas y componentes XC durante la temporada de competición.",
          "T2. Documentar detalladamente el rendimiento, la geometría y las suspensiones para informar a I+D.",
          "T3. Colaborar en la mejora continua de los modelos de XC."
        ]
      },
      {
        name: "R3. Activación de Contenido y Comunicación de Marca. Posicionar al equipo y a sus riders como activos de comunicación para fortalecer la imagen de la marca.",
        tasks: [
          "T1. Colaborar con el Content Director y Racing team coordinator para generar historias y narrativas sobre la competición.",
          "T2. Representar a Mondraker en medios especializados y eventos, articulando la excelencia técnica.",
          "T3. Asegurar que las publicaciones en redes sociales reflejen el brand DNA de Mondraker."
        ]
      }
    ],
    tipo: "Mondraker",
    area: "Racing"
  },
  {
    puesto: "DH Racing Manager (Jorge García)",
    mision: "Dirigir y gestionar el equipo de competición de Downhill (DH), utilizando esta disciplina como un banco de pruebas exigente para testar el futuro de los diseños de Mondraker y como un activo clave de comunicación de la herencia técnica.",
    reportaA: "Racing team coordinator (Guille Sánchez)",
    supervisaA: "Riders y personal de apoyo del DH Factory Team.",
    responsibilities: [
      {
        name: "R1. Gestión de Alto Rendimiento del Equipo DH. Liderar el equipo de Downhill para asegurar resultados en competiciones de máximo nivel (UCI DH).",
        tasks: [
          "T1. Negociar y gestionar los contratos de los riders y el staff técnico del equipo, previa aprobación del área de RRHH.",
          "T2. Planificar la asistencia a las pruebas clave del calendario UCI XC.",
          "T3. Controlar el rendimiento deportivo y el cumplimiento de los programas de entrenamiento.",
          "T4. Coordinar con el Racing team coordinator (Guille Sánchez) para planificar la comunicación y las acciones de MK vinculadas con la competición."
        ]
      },
      {
        name: "R2. Activación de Contenido y Comunicación de Marca. Posicionar al equipo y a sus riders como activos de comunicación para fortalecer la imagen de la marca.",
        tasks: [
          "T1. Supervisar la fase de prueba del NEW SUMMUM DH durante los dos años previos al lanzamiento en competición.",
          "T2. Proporcionar informes detallados de la durabilidad y funcionalidad de los componentes y cuadros DH a I+D.",
          "T3. Colaborar en la definición de especificaciones técnicas para futuros modelos."
        ]
      },
      {
        name: "R3. Refuerzo de la Herencia Técnica y el Brand Storytelling. Posicionar el DH como el pilar de la innovación y la audacia tecnológica de Mondraker.",
        tasks: [
          "T1. Colaborar con el Content Director y Racing team coordinator para generar historias y narrativas sobre la competición.",
          "T2. Representar a Mondraker en medios especializados y eventos, articulando la excelencia técnica.",
          "T3. Asegurar que las publicaciones en redes sociales reflejen el brand DNA de Mondraker."
        ]
      }
    ],
    tipo: "Mondraker",
    area: "Racing"
  },
  {
    puesto: "Italian Marketing Manager (Marco Cislagui)",
    mision: "Adaptar y ejecutar la estrategia de marketing global en el mercado italiano, actuando como enlace con el HQ para asegurar la relevancia de la marca localmente y proporcionar feedback clave del mercado.",
    reportaA: "International Marketing Coordination Manager (José Alix).",
    supervisaA: "No cuenta con personal a su cargo, pero ejerce coordinación funcional sobre agencias y colaboradores locales.",
    responsibilities: [
      {
        name: "R1. Ejecutar el Plan de Marketing Local y Gestionar Presupuesto. Desarrollar el calendario de marketing para Italia y administrar los recursos económicos asignados para garantizar la eficacia de las campañas.",
        tasks: [
          "T1. Recoger feedback de las tendencias del mercado italiano para adaptarlo a la estrategia global.",
          "T2. Administrar el presupuesto local, controlando los costos y egresos del área.",
          "T3. Revisar y validar la traducción y adaptación de los mensajes de marca al idioma y tono local.",
          "T4. Realizar reportes de efectividad de las campañas y el gasto local."
        ]
      },
      {
        name: "R2. Coordinar la Relación con Dealers y Medios Locales. Actuar como principal punto de contacto en Italia para distribuidores, retailers y prensa, asegurando la comunicación oportuna.",
        tasks: [
          "T1. Coordinar la asistencia de dealers y prensa italianos a eventos y lanzamientos globales.",
          "T2. Garantizar que los dealers dispongan del material de retail y POS necesario, coordinando con el Global Retail Specialist.",
          "T3. Gestionar las relaciones con la prensa especializada italiana y media local."
        ]
      },
      {
        name: "R3. Supervisar la Presencia y la Integridad de Marca en Italia. Asegurar que todas las actividades y soportes de comunicación en el país respeten el nuevo ADN de Mondraker.",
        tasks: [
          "T1. Auditar la aplicación correcta de la identidad visual en puntos de venta y comunicaciones online.",
          "T2. Proporcionar soporte a las estrategias de ventas y distribución locales.",
          "T3. Comunicar cualquier incidencia o desviación de la estrategia al International Marketing Coordination Manager."
        ]
      }
    ],
    tipo: "Mondraker",
    area: "Internacional"
  },
  {
    puesto: "France Marketing Manager (Marc Lancelot)",
    mision: "Adaptar y ejecutar la estrategia de marketing global en el mercado francés, actuando como enlace con el HQ para asegurar la relevancia de la marca localmente y proporcionar feedback clave del mercado.",
    reportaA: "International Marketing Coordination Manager (José Alix).",
    supervisaA: "No cuenta con personal a su cargo, pero ejerce coordinación funcional sobre agencias y colaboradores locales.",
    responsibilities: [
      {
        name: "R1. Ejecutar el Plan de Marketing Local y Controlar el Presupuesto. Implementar el plan de acción de marketing en Francia y gestionar los recursos financieros para optimizar el retorno de inversión (ROI).",
        tasks: [
          "T1. Administrar el presupuesto de marketing asignado para Francia.",
          "T2. Evaluar y reportar la efectividad de las campañas específicas en el mercado francés.",
          "T3. Coordinar la ejecución de eventos y demos locales con el Marketing Events and Operations Manager."
        ]
      },
      {
        name: "R2. Canalizar el Feedback Local y la Adaptación del Mensaje. Actuar como puente entre el HQ y el mercado francés para asegurar que la comunicación sea culturalmente relevante.",
        tasks: [
          "T1. Traducir y adaptar los mensajes y textos de producto para el mercado local.",
          "T2. Recopilar información sobre las tendencias de consumo y las actividades de la competencia en Francia.",
          "T3. Participar en reuniones de coordinación con el International Marketing Coordination Manager (José Alix)."
        ]
      }
    ],
    tipo: "Mondraker",
    area: "Internacional"
  },
  {
    puesto: "UK Marketing Manager (Pete Drew)",
    mision: "Adaptar y ejecutar la estrategia de marketing global en el mercado británico, actuando como enlace con el HQ para asegurar la relevancia de la marca localmente y proporcionar feedback clave del mercado.",
    reportaA: "International Marketing Coordination Manager (José Alix).",
    supervisaA: "No cuenta con personal a su cargo, pero ejerce coordinación funcional sobre agencias y colaboradores locales.",
    responsibilities: [
      {
        name: "R1. Ejecutar el Plan de Marketing Local y Supervisar el Gasto. Implementar las campañas y promociones en el mercado de Reino Unido, manteniendo un control estricto del presupuesto.",
        tasks: [
          "T1. Administrar los recursos financieros asignados al mercado británico.",
          "T2. Revisar los planes de mercadeo para cada canal establecido en UK.",
          "T3. Analizar los resultados de las activaciones locales."
        ]
      },
      {
        name: "R2. Coordinar la Presencia en Eventos y Canales Británicos. Asegurar la participación en ferias, demos y eventos especializados en UK.",
        tasks: [
          "T1. Identificar ferias y dealer events importantes en UK.",
          "T2. Colaborar con el Global Retail Specialist para asegurar materiales de POS relevantes.",
          "T3. Mantener la comunicación fluida con los dealers y la red de ventas británica."
        ]
      },
      {
        name: "R3. Proporcionar Información de Mercado a HQ. Canalizar la inteligencia de mercado (competencia, consumidor) hacia el equipo de Estrategia y Coordinación.",
        tasks: [
          "T1. Recoger datos sobre la competencia y las preferencias del consumidor británico.",
          "T2. Elaborar reportes de resultados para su entrega al International Marketing Coordination Manager."
        ]
      }
    ],
    tipo: "Mondraker",
    area: "Internacional"
  },
  {
    puesto: "Demo and Event Coordinator Central Europe (Justin Brodbeck)",
    mision: "Coordinar y ejecutar demostraciones de producto y eventos de marketing en Europa Central (Alemania), para fortalecer la relación con dealers y la presencia de marca adaptada localmente.",
    reportaA: "International Marketing Coordination Manager (José Alix).",
    supervisaA: "No cuenta con personal a su cargo.",
    responsibilities: [
      {
        name: "R1. Planificar y Organizar la Logística de Demos y Test Rides. Asegurar que las bicicletas de prueba, el personal y los recursos estén listos para los eventos.",
        tasks: [
          "T1. Coordinar el envío y recepción de las bicicletas de demostración.",
          "T2. Gestionar el calendario de demos en Europa Central (Alemania).",
          "T3. Realizar el mantenimiento preventivo y ajustes técnicos de las bicicletas de prueba.",
          "T4. Elaborar el reporte de gastos por cada evento (combustible, viáticos, etc.)."
        ]
      },
      {
        name: "R2. Ejecutar Eventos y Demostraciones de Producto. Representar a la marca en el campo, asegurando una experiencia positiva del producto para dealers y consumidores.",
        tasks: [
          "T1. Atender a los clientes y dealers en los eventos, asesorando sobre las características técnicas de los productos.",
          "T2. Documentar el éxito y las incidencias de cada demostración.",
          "T3. Proporcionar feedback técnico sobre el rendimiento del producto a HQ."
        ]
      }
    ],
    tipo: "Mondraker",
    area: "Eventos"
  },
  {
    puesto: "Marketing Director, USA (Eric Richter)",
    mision: "Liderar la estrategia de marketing, comunicación y crecimiento de la marca en el mercado de Estados Unidos, gestionando recursos y operaciones para responder a las necesidades específicas de este territorio clave y garantizar la coherencia global.",
    reportaA: "International Marketing Coordination Manager (José Alix). (Dada la importancia del mercado USA, será alto el nivel de reporte).",
    supervisaA: "Personal de marketing local en USA (Sam Zimberoff). Ejerce liderazgo funcional sobre agencias y partners locales.",
    responsibilities: [
      {
        name: "R1. Definición y Liderazgo de la Estrategia USA. Desarrollar el plan de crecimiento y posicionamiento de Mondraker en Norteamérica.",
        tasks: [
          "T1. Formular las estrategias de posicionamiento específicas para el mercado estadounidense.",
          "T2. Liderar la planificación y gestión del presupuesto de marketing en USA.",
          "T3. Analizar la demanda de producto, la competencia y los brand territories en USA."
        ]
      },
      {
        name: "R2. Gestión Operativa y Coordinación de Equipos. Asegurar la implementación fluida de las campañas globales en el contexto local.",
        tasks: [
          "T1. Supervisar la adaptación del contenido digital y print para el consumidor de EE. UU.",
          "T2. Controlar los resultados y el rendimiento de las inversiones de marketing.",
          "T3. Coordinar con el International Marketing Coordination Manager el calendario de lanzamientos."
        ]
      },
      {
        name: "R3. Desarrollar Alianzas Estratégicas y Relaciones Públicas. Representar a Mondraker ante socios, media y influencers en USA.",
        tasks: [
          "T1. Establecer relaciones clave con distribuidores y medios de comunicación estadounidenses.",
          "T2. Participar en reuniones gerenciales para exponer resultados y colaborar en la planificación estratégica."
        ]
      }
    ],
    tipo: "Mondraker",
    area: "Internacional"
  },
  {
    puesto: "Global Retail & Activation Specialist (Paul Berckholtz)",
    mision: "Liderar la estrategia global de retail marketing y la activación en puntos de venta (POS), garantizando la correcta implementación de materiales, la formación técnica (activation) y el soporte estratégico a los dealers para optimizar la rentabilidad por metro cuadrado y fortalecer la alianza marca-tienda a nivel mundial.",
    reportaA: "International Marketing Coordination Manager (José Alix).",
    supervisaA: "No cuenta con personal a su cargo.",
    responsibilities: [
      {
        name: "R1. Desarrollar la Estrategia de Retail Marketing (POS). Diseñar los lineamientos de visual merchandising y experiencia de marca en el punto de venta a nivel global.",
        tasks: [
          "T1. Definir las necesidades de displays, mobiliario y material promocional (PLV) para tiendas.",
          "T2. Coordinar con el equipo de diseño gráfico (Guille Sánchez) la creación de los materiales de retail.",
          "T3. Colaborar con el área de Ventas/Logística para la distribución eficiente del material de POS."
        ]
      },
      {
        name: "R2. Implementar Programas de Formación y Activation. Gestionar la transferencia de conocimiento técnico y de marca a la red de dealers y equipos de venta.",
        tasks: [
          "T1. Diseñar el contenido y argumentario de venta (formación técnica).",
          "T2. Organizar las sesiones de formación (webinars o presenciales) sobre nuevos productos y tecnologías.",
          "T3. Crear materiales de apoyo para la activación en tienda."
        ]
      },
      {
        name: "R3. Medir el Rendimiento y la Coherencia de Retail. Analizar la efectividad del visual merchandising y la implementación de la marca en tiendas.",
        tasks: [
          "T1. Recopilar información sobre la tipología y características de los actuales puntos de venta.",
          "T2. Realizar revisiones periódicas (virtuales o in situ) del cumplimiento de los estándares de retail.",
          "T3. Proponer mejoras de procesos para optimizar la rentabilidad del espacio de venta."
        ]
      }
    ],
    tipo: "Mondraker",
    area: "Retail"
  },
  {
    puesto: "Content and Production Coordinator (Ulises Vidal)",
    mision: "Coordinar de manera eficiente y transversal el equipo creativo y de producción de contenido, asegurando el cumplimiento de los plazos y la alineación con la estrategia de marketing, producto y ventas, manteniendo un contacto directo con la dirección de MK para lograr resultados tangibles y coherentes con los objetivos de la organización.",
    reportaA: "Content and Production Director (Guille Sánchez) a nivel functional - Chief Coordinator (David Galiana). (Asegurando la coordinación operativa entre Casanova y los equipos Mondraker).",
    supervisaA: "Liderazgo funcional sobre el equipo de diseño gráfico y producción de contenido (fotógrafo, videógrafo) en aspectos visuales.",
    responsibilities: [
      {
        name: "R1. Coordinación de equipo.",
        tasks: [
          "T1. Supervisar la colaboración fluida entre diseñadores gráficos, director de arte, copy y equipo de producción audiovisual.",
          "T2. Facilitar la comunicación entre los distintos roles para asegurar la creatividad y calidad técnica del contenido producido."
        ]
      },
      {
        name: "R2. Gestión de proyectos y plazos",
        tasks: [
          "T1. Planificar y controlar los calendarios de producción para cumplir con los hitos establecidos.",
          "T2. Monitorizar el avance de los proyectos y anticipar riesgos o necesidades de ajustes para evitar retrasos."
        ]
      },
      {
        name: "R3. Colaboración transversal",
        tasks: [
          "T1. Trabajar estrechamente con otras áreas del marketing, producto y ventas para alinear mensajes y esfuerzos.",
          "T2. Mantener comunicación constante con las áreas de dirección, estrategia y contenidos para garantizar coherencia y eficacia."
        ]
      },
      {
        name: "R4. Producción y supervisión de contenidos",
        tasks: [
          "T1. Apoyar en la supervisión de la producción audiovisual y gráfica para cumplir estándares de calidad y briefing.",
          "T2. Revisar y aprobar materiales antes de su publicación o envío, garantizando la adecuación a la estrategia de marca."
        ]
      },
      {
        name: "R5. Reportes y mejoras",
        tasks: [
          "T1. Elaborar informes periódicos sobre el estado de los proyectos, resultados alcanzados y posibles mejoras.",
          "T2. Proponer optimizaciones en procesos internos para incrementar la eficiencia y calidad."
        ]
      }
    ],
    tipo: "Agencia",
    area: "Contenido"
  },
  {
    puesto: "Art Director (Alexis Vázquez)",
    mision: "Liderar y gestionar el equipo interno de diseño gráfico/audiovisual de Mondraker, supervisando la creación de todos los materiales visuales y asegurando que la aplicación gráfica de la marca sea consistente y mantenga la calidad en todos los puntos de contacto.",
    reportaA: "Ulises Vidal (Content and Production Coordinator) - Content and Production Director (Guille Sánchez) - Chief Coordinator (David Galiana). (Asegurando la coordinación operativa entre Casanova y los equipos Mondraker).",
    supervisaA: "Graphic Designer y Audiovisual (Alberto Antón, Miguel López, Iván Marruecos y Javier Juan).",
    responsibilities: [
      {
        name: "R1. Liderazgo y Gestión del Equipo de Diseño. Organizar las funciones y responsabilidades del equipo de diseñadores, manteniendo el clima y la eficiencia operativa.",
        tasks: [
          "T1. Distribuir las funciones y tareas del equipo de diseñadores.",
          "T2. Mantener un alto nivel de motivación e implicación en el objetivo final.",
          "T3. Crear el clima de trabajo más favorable con todos los colaboradores."
        ]
      },
      {
        name: "R2. Definir la Estética Visual de la Marca. Establecer los lineamientos de color, composición y tipografía para el contenido global.",
        tasks: [
          "T1. Diseñar y elaborar los manuales de dirección de arte de la marca.",
          "T2. Revisar y aprobar los bocetos y conceptos visuales propuestos por los diseñadores.",
          "T3. Asegurar que la línea estética sea coherente con la estrategia Digital y de Contenido, en estrecha colaboración con Ulises Vidal y Guille Sánchez."
        ]
      },
      {
        name: "R3. Liderar la Dirección de Arte en Producción Audiovisual/Gráfica. Supervisar que el resultado final de las sesiones de shooting y grabación cumpla con los estándares artísticos.",
        tasks: [
          "T1. Aportar la dirección visual en las sesiones de grabación de videos corporativos y shooting.",
          "T2. Coordinar con el equipo interno la aplicación de la dirección de arte en los materiales finales.",
          "T3. Realizar la revisión de la aplicación del branding en todos los soportes publicitarios."
        ]
      }
    ],
    tipo: "Mondraker",
    area: "Diseño"
  },
  {
    puesto: "Marketing Photographer (Iván Marruecos)",
    mision: "Producir contenido fotográfico de alta calidad para campañas, redes y soportes promocionales, y organizar el archivo visual, para construir la narrativa de marca y apoyar la estrategia always-on.",
    reportaA: "Content and Production Director (Guille Sánchez) - Chief Coordinator (David Galiana). (Asegurando la coordinación operativa entre Casanova y los equipos Mondraker).",
    supervisaA: "No cuenta con personal a su cargo.",
    responsibilities: [
      {
        name: "R1. Captura de Imagen y Fotografía de Producto. Realizar sesiones fotográficas siguiendo las directrices del Art Director y las necesidades de Marketing.",
        tasks: [
          "T1. Planificar las sesiones fotográficas (lugares, modelos, riders, bicicletas).",
          "T2. Configurar el equipo fotográfico (iluminación, lentes, set-up).",
          "T3. Capturar imágenes de producto, estilo de vida (lifestyle) y competición (DH/XC)."
        ]
      },
      {
        name: "R2. Post-Producción y Edición de Imagen. Procesar, editar y retocar las imágenes para garantizar el cumplimiento de los estándares de marca.",
        tasks: [
          "T1. Manipular y arreglar las fotografías tomadas utilizando software profesional.",
          "T2. Asegurar la coherencia de color y tono en toda la biblioteca de imágenes."
        ]
      },
      {
        name: "R3. Gestión y Archivo de Activos Visuales. Mantener la biblioteca de imágenes clasificada, etiquetada y accesible para su uso global.",
        tasks: [
          "T1. Organizar y catalogar los archivos de fotografía en el servidor o base de datos.",
          "T2. Proveer acceso al equipo de diseño y coordinación de marketing para la utilización del material."
        ]
      }
    ],
    tipo: "Mondraker",
    area: "Contenido"
  },
  {
    puesto: "Marketing Videographer (Javier García)",
    mision: "Producir contenido audiovisual profesional (grabación, recopilación y edición) para la web, redes sociales y eventos, con el fin de dar vida a la marca mediante narrativas cautivadoras que refuercen su identidad.",
    reportaA: "Content and Production Director (Guille Sánchez) - Chief Coordinator (David Galiana). (Asegurando la coordinación operativa entre Casanova y los equipos Mondraker).",
    supervisaA: "No cuenta con personal a su cargo.",
    responsibilities: [
      {
        name: "R1. Producción y Grabación de Video. Capturar metraje en diversos entornos (competición, lifestyle, lanzamientos) según los guiones aprobados.",
        tasks: [
          "T1. Participar en la planificación de guiones de video junto al equipo de Contenido.",
          "T2. Realizar la grabación en las localizaciones asignadas, asegurando la calidad técnica (sonido, iluminación).",
          "T3. Atender las directrices del Art Director y del Content and Production Director."
        ]
      },
      {
        name: "R2. Post-Producción, Edición y Montaje. Transformar el metraje crudo en piezas de comunicación terminadas.",
        tasks: [
          "T1. Manipular y editar el material de video, utilizando los programas de cómputo para tal fin.",
          "T2. Elaborar los deliverables finales en diferentes formatos y resoluciones según el canal (Web, YouTube, Reels, TikTok).",
          "T3. Revisar la inclusión de gráficos, animaciones y música que cumplan con la línea de marca."
        ]
      },
      {
        name: "R3. Mantenimiento de Equipos y Archivos. Conservar los equipos audiovisuales en buen estado y gestionar los archivos de metraje.",
        tasks: [
          "T1. Realizar la revisión diaria de los equipos de grabación.",
          "T2. Coordinar las reparaciones y el mantenimiento de las herramientas de trabajo.",
          "T3. Archivar el metraje de manera ordenada y accesible."
        ]
      }
    ],
    tipo: "Mondraker",
    area: "Contenido"
  },
  {
    puesto: "Graphic Designer (Alberto Antón)",
    mision: "Crear y desarrollar piezas de diseño gráfico para soportes digitales, impresos y de retail, siguiendo la línea gráfica de la marca para asegurar la comunicación visual de los mensajes de marketing.",
    reportaA: "Design Manager (Alexis Vázquez).",
    supervisaA: "No cuenta con personal a su cargo.",
    responsibilities: [
      {
        name: "R1. Diseño y Producción de Materiales Promocionales. Ejecutar las tareas de diseño gráfico para el canal digital y el retail.",
        tasks: [
          "T1. Generar diseños para anuncios digitales (Meta, TikTok), newsletters y banners web.",
          "T2. Diseñar materiales para retail (PLV, displays).",
          "T3. Crear diseños para softgoods y packaging (si aplica)."
        ]
      },
      {
        name: "R2. Mantenimiento de la Coherencia Visual. Asegurar la aplicación estricta de las directrices del Art Director y el Design Manager.",
        tasks: [
          "T1. Trabajar bajo los manuales de dirección de arte establecidos.",
          "T2. Revisar y corregir los diseños hasta obtener la aprobación del Design Manager.",
          "T3. Aplicar la línea gráfica de la marca para asegurar la comunicación visual."
        ]
      },
      {
        name: "R3. Preparación de Archivos y Soporte a Producción Externa. Preparar los outputs para su correcto uso en imprenta o canales digitales.",
        tasks: [
          "T1. Preparar los archivos finales para su envío a proveedores de impresión o fabricación (ej. softgoods).",
          "T2. Revisar las pruebas de impresión o materiales para detectar errores.",
          "T3. Cumplir con la entrega de materiales gráficos en tiempo y forma."
        ]
      }
    ],
    tipo: "Mondraker",
    area: "Diseño"
  },
  {
    puesto: "Graphic Designer (Miguel López)",
    mision: "Crear y desarrollar piezas de diseño gráfico para soportes digitales, impresos y de retail, siguiendo la línea gráfica de la marca para asegurar la comunicación visual de los mensajes de marketing.",
    reportaA: "Design Manager (Alexis Vázquez).",
    supervisaA: "No cuenta con personal a su cargo.",
    responsibilities: [
      {
        name: "R1. Diseño y Producción de Materiales Promocionales. Ejecutar las tareas de diseño gráfico para el canal digital y el retail.",
        tasks: [
          "T1. Generar diseños para anuncios digitales (Meta, TikTok), newsletters y banners web.",
          "T2. Diseñar materiales para retail (PLV, displays).",
          "T3. Crear diseños para softgoods y packaging (si aplica)."
        ]
      },
      {
        name: "R2. Mantenimiento de la Coherencia Visual. Asegurar la aplicación estricta de las directrices del Art Director y el Design Manager.",
        tasks: [
          "T1. Trabajar bajo los manuales de dirección de arte establecidos.",
          "T2. Revisar y corregir los diseños hasta obtener la aprobación del Design Manager.",
          "T3. Aplicar la línea gráfica de la marca para asegurar la comunicación visual."
        ]
      },
      {
        name: "R3. Preparación de Archivos y Soporte a Producción Externa. Preparar los outputs para su correcto uso en imprenta o canales digitales.",
        tasks: [
          "T1. Preparar los archivos finales para su envío a proveedores de impresión o fabricación (ej. softgoods).",
          "T2. Revisar las pruebas de impresión o materiales para detectar errores.",
          "T3. Cumplir con la entrega de materiales gráficos en tiempo y forma."
        ]
      }
    ],
    tipo: "Mondraker",
    area: "Diseño"
  },
  {
    puesto: "Head of Digital Strategy & Performance (Rocio Rodríguez)",
    mision: "Dirigir la estrategia integral de crecimiento digital (Growth Strategy) y la operación de performance marketing, incluyendo la gestión de redes sociales y publicidad pagada (ADS/PPC), y liderando el equipo de especialistas para maximizar el alcance, la notoriedad y la conversión de la marca en el ecosistema digital.",
    reportaA: "Chief Coordinator (David Galiana). (Asegurando la coordinación operativa entre Casanova y los equipos Mondraker).",
    supervisaA: "CRM & Data Management Specialist (Priscila Rubio). Ejerce liderazgo funcional sobre el E-Business Coordinator (Paco Hilario) y el Community Manager",
    responsibilities: [
      {
        name: "R1. Dirigir la Estrategia de Performance y Medición Digital. Diseñar la planificación, el boosting de contenido y la medición, estableciendo KPIs de rendimiento.",
        tasks: [
          "T1. Optimizar la planificación, selección de objetivos y medición, estableciendo KPIs claros que permitan comparar rendimientos.",
          "T2. Definir e implementar un sistema de reporting unificado (orgánico y paid media).",
          "T3. Coordinar campañas always-on de branding en META y TikTok con Priscila.",
          "T4. Realizar análisis de resultados y optimización de audiencias."
        ]
      },
      {
        name: "R2. Liderar la Gestión y Contenido de Redes Sociales Globales. Dirigir la centralización de perfiles y la línea editorial en canales clave (Meta, TikTok, YouTube).",
        tasks: [
          "T1. Centralizar perfiles sociales en cuentas globales.",
          "T2. Definir tono, territorios y calendario editorial global.",
          "T3. Configurar entornos business (Meta y TikTok).",
          "T4. Coordinar con el Content Director (Guille Sánchez) la implementación de nuevas tipologías de contenido."
        ]
      },
      {
        name: "R3. Gestión de la Estrategia de Equipo y Relación con Clientes. Liderar al personal bajo su cargo (Priscila) y asegurar una comunicación fluida con la dirección de Mondraker.",
        tasks: [
          "T1. Supervisar el trabajo del CRM & Data Management Specialist (Priscila).",
          "T2. Asistir a reuniones con el Project Director y Strategy Director para exponer resultados.",
          "T3. Coordinar con el E-Business Coordinator (Paco Hilario) la optimización de las plataformas web."
        ]
      }
    ],
    tipo: "Agencia",
    area: "Digital"
  },
  {
    puesto: "E-Business Coordinator (Paco Hilario)",
    mision: "Supervisar la correcta gestión de las plataformas web y el ecosistema digital (optimización), y colaborar en la ejecución operativa de campañas digitales, para optimizar la eficiencia y competitividad online de la marca.",
    reportaA: "Head of Digital Strategy & Performance (Rocio Rodríguez) y Chief Coordinator (David Galiana). (Asegurando la coordinación operativa entre Casanova y los equipos Mondraker).",
    supervisaA: "No cuenta con personal a su cargo. Soporte operativo a la Head of Digital Strategy.",
    responsibilities: [
      {
        name: "R1. Soporte Operativo y Gestión de Cuentas Digitales. Asegurar la funcionalidad técnica de las plataformas y el acceso a los activos digitales.",
        tasks: [
          "T1. Realizar la parte operativa para solicitar accesos a cuentas y perfiles en redes sociales.",
          "T2. Revisar la configuración técnica del ecosistema social.",
          "T3. Colaborar con Casanova en la configuración de entornos business (Meta/TikTok)."
        ]
      },
      {
        name: "R2. Optimización Técnica Web (SEO/Plataformas). Supervisar el correcto funcionamiento de las propiedades web de Mondraker / B2B y su rendimiento orgánico.",
        tasks: [
          "T1. Gestionar las plataformas web y el ecosistema digital (SEO, optimización).",
          "T2. Asegurar que los píxeles de seguimiento se revisen y configuren correctamente.",
          "T3. Asistir a Marketing en la actualización de contenido y productos en la web."
        ]
      },
      {
        name: "R3. Control de Inversiones y Tareas Operativas. Recopilar y organizar la información financiera y de inversión del área digital.",
        tasks: [
          "T1. Realizar la operativa para solicitar accesos a las inversiones realizadas a través de Meta/TikTok.",
          "T2. Estructurar flujos de trabajo y el sistema de reporting interno.",
          "T3. Elaborar reportes de la información recopilada."
        ]
      }
    ],
    tipo: "Mondraker",
    area: "Digital"
  },
  {
    puesto: "CRM & Data Management Specialist (Priscila Rubio)",
    mision: "Diseñar, gestionar y ejecutar la estrategia de Bases de Datos y Customer Relationship Management (CRM) bajo la dirección del Head of Digital Strategy, asegurando la segmentación y la integridad de los datos de usuario. Gestionar la inversión y activación de campañas en redes sociales, y medir los resultados de news, redes y la analítica digital, impulsando estrategias de fidelización que apoyen el crecimiento digital de la marca.",
    reportaA: "Head of Digital Strategy & Performance (Rocio Rodríguez).",
    supervisaA: "No cuenta con personal a su cargo.",
    responsibilities: [
      {
        name: "R1. Diseño y Mantenimiento del Sistema CRM y Bases de Datos. Garantizar la integridad, calidad y seguridad de los datos de los clientes.",
        tasks: [
          "T1. Gestionar las bases de datos de clientes y usuarios.",
          "T2. Implementar sistemas de control para asegurar la integridad de los datos de usuario.",
          "T3. Diseñar el funnel de conversión y las estrategias de adquisición de leads."
        ]
      },
      {
        name: "R2. Ejecución de Estrategias de Retención y Fidelización. Utilizar el CRM para segmentar a los usuarios y lanzar campañas de email marketing y fidelización.",
        tasks: [
          "T1. Realizar la segmentación de los clientes según su comportamiento y tipología de compra.",
          "T2. Crear los flujos de comunicación automatizada (CRM journeys).",
          "T3. Activación de campañas.",
          "T4. Colaborar en el desarrollo de ideas para el e-mail marketing."
        ]
      },
      {
        name: "R3. Análisis de Datos para la Toma de Decisiones Estratégicas. Proveer información cuantitativa sobre el comportamiento del cliente a los equipos de Estrategia y Performance.",
        tasks: [
          "T1. Analizar los datos de usuario para determinar el valor y la rentabilidad de las audiencias.",
          "T2. Colaborar en la configuración del sistema global de medición y tracking.",
          "T3. Elaborar informes sobre la efectividad de las campañas de retención y la salud de la base de datos."
        ]
      }
    ],
    tipo: "Agencia",
    area: "Digital"
  },
  {
    puesto: "Retail & Apparel Concept Developer (Salud García)",
    mision: "Conceptualizar y coordinar el desarrollo de productos de retail, apparel y merchandising de la marca Mondraker, definiendo briefings creativos, aportando ideas y orientación estratégica, y validando propuestas estéticas para asegurar coherencia con la identidad de marca y las necesidades del mercado, en estrecha colaboración con el Content and Production Director.",
    reportaA: "Content and Production Director (Guille Sánchez)",
    supervisaA: "Colabora estrechamente con Miguel López (ejecución de diseño), Alexis Vázquez y Alberto Antón del equipo de Contenido.",
    responsibilities: [
      {
        name: "R1. Conceptualización de Producto.",
        tasks: [
          "T1. Desarrollar conceptos creativos para espacios retail, displays y elementos de punto de venta",
          "T2. Generar ideas para colecciones de apparel y productos de merchandising (gorras, ropa casual, accesorios)",
          "T3. Definir briefings iniciales con directrices claras para el equipo de diseño"
        ]
      },
      {
        name: "R2. Coordinación y Orientación Creativa.",
        tasks: [
          "T1. Revisar y aportar feedback sobre propuestas de diseño antes de su ejecución",
          "T2. Orientar a Miguel López en la materialización de conceptos creativos",
          "T3. Validar que las soluciones finales cumplan con los objetivos del briefing y la identidad de marca"
        ]
      },
      {
        name: "R3. Colaboración Estratégica.",
        tasks: [
          "T1. Trabajar en colaboración con el Strategy Director (Oscar Saenz) para alinear conceptos con la estrategia de marca.",
          "T2. Colaborar con el equipo de Contenido para mantener coherencia visual en todos los productos.",
          "T3. Coordinar con David Galiana las prioridades e identificar necesidades y oportunidades de producto."
        ]
      }
    ],
    tipo: "Mondraker",
    area: "Retail"
  },
  {
    puesto: "Brand Copywriter",
    mision: "Crear y mantener la voz de la marca mediante la redacción de contenido escrito de alta calidad, persuasivo y optimizado, asegurando la coherencia narrativa y la excelencia comunicativa en todas las plataformas digitales de E-Business y promoviendo el posicionamiento y diferencial de la marca Mondraker.",
    reportaA: "Content and Production Coordinator (Ulises Vidal)",
    supervisaA: "Colabora estrechamente con el equipo de Contenido y Digital.",
    responsibilities: [
      {
        name: "R1. Redacción de Contenido Digital.",
        tasks: [
          "T1. Redactar descripciones de producto para catálogos online de bicis, apparel, onoff y spare parts.",
          "T2. Revisar y actualizar periódicamente los textos según lanzamientos o renovaciones de gama.",
          "T3. Elaborar contenido técnico y emocional adaptado a las distintas categorías y targets.",
          "T4. Gestionar la carga de los textos y comprobar su publicación final correcta en la web corporativa."
        ]
      },
      {
        name: "R2. Soporte web y B2B.",
        tasks: [
          "T1. Redactar fichas de producto optimizadas para venta en la plataforma e-commerce y herramienta B2B.",
          "T2. Colaborar con los equipos de producto y ventas para obtener la información clave de cada modelo (GTM).",
          "T3. Elaborar mensajes y notificaciones sobre promociones, lanzamientos o disponibilidad para todos los canales."
        ]
      },
      {
        name: "R3. Desarrollo de Newsletters.",
        tasks: [
          "T1. Crear el contenido principal de las newsletters en base a briefings de marketing.",
          "T2. Adaptar textos y formatos a diferentes audiencias (retailers, usuarios finales, prensa especializada, etc.).",
          "T3. Coordinar revisiones y aprobaciones, y acompañar el lanzamiento asegurando calidad y timing."
        ]
      },
      {
        name: "R4. Apoyo en Campañas Pagadas (Paid Media).",
        tasks: [
          "T1. Redactar copys y llamadas a la acción para campañas PPC y Ads en colaboración con los responsables de campañas digitales.",
          "T2. Ajustar mensajes a diferentes públicos objetivo y soportes digitales (display, social media, SEM).",
          "T3. Probar variantes y analizar resultados de efectividad textual."
        ]
      },
      {
        name: "R5. Generación de Notas y Comunicados.",
        tasks: [
          "T1. Elaborar notas de prensa, comunicados internos y externos alineados con el tono Mondraker.",
          "T2. Colaborar estrechamente con el Departamento de Producto para asegurar el rigor técnico y la coherencia.",
          "T3. Gestionar la distribución de estas comunicaciones a prensa, stakeholders y canales internos."
        ]
      },
      {
        name: "R6. Optimización de Contenido.",
        tasks: [
          "T1. Aplicar técnicas de SEO semántico y estructural en todos los textos digitales.",
          "T2. Monitorizar y ajustar el contenido existente de acuerdo con resultados de búsqueda y cambios de tendencia.",
          "T3. Emplear herramientas de análisis web para mejorar la visibilidad y competitividad."
        ]
      },
      {
        name: "R7. Gestión Documental.",
        tasks: [
          "T1. Gestionar y organizar todos los archivos de textos y traducciones en el DAM, en coordinación con el Coordinador de E-Business.",
          "T2. Asegurar la correcta versionado de documentos y el fácil acceso por parte del equipo."
        ]
      }
    ],
    tipo: "Agencia",
    area: "Contenido"
  },
  {
    puesto: "Community Manager (Daniel Pérez)",
    mision: "Gestionar la presencia diaria y el engagement en las redes sociales de la marca, traduciendo la identidad y los valores de Mondraker en una narrativa potente y visualmente coherente para la comunidad digital, bajo la dirección estética del Director de Arte, asegurando el crecimiento sostenible de la comunidad y la reputación online.",
    reportaA: "Head of Digital Strategy & Performance (Rocio Rodríguez).",
    supervisaA: "Colabora estrechamente con el equipo de Contenido y Digital.",
    responsibilities: [
      {
        name: "R1. Gestión de Redes Sociales.",
        tasks: [
          "T1. Administrar diariamente todas las cuentas de redes sociales globales y específicas (Facebook, Instagram, TikTok, etc.).",
          "T2. Programar y publicar contenido adaptado según la estrategia y el calendario editorial.",
          "T3. Supervisar la interacción y responder comentarios para fomentar el engagement y el crecimiento de seguidores."
        ]
      },
      {
        name: "R2. Edición y Adaptación de Contenido.",
        tasks: [
          "T1. Editar y adaptar assets visuales y audiovisuales (imágenes, vídeos, reels, historias) para adecuarlos a la línea estética definida por el Director de Arte.",
          "T2. Coordinar la correcta programación y publicación de materiales en base a las especificaciones de cada red social.",
          "T3. Asegurar la calidad y el cumplimiento de los formatos y creatividades requeridas."
        ]
      },
      {
        name: "R3. Creación de Textos Sociales.",
        tasks: [
          "T1. Redactar textos para publicaciones, stories, y eventos en redes sociales.",
          "T2. Coordinar con el Brand Copywriter y el equipo de marketing la coherencia y adecuación del mensaje según público objetivo.",
          "T3. Adaptar el tono y estilo según la red y el tipo de audiencia."
        ]
      },
      {
        name: "R4. Construcción de Comunidad.",
        tasks: [
          "T1. Fomentar una comunidad activa mediante la interacción constante con los seguidores.",
          "T2. Responder consultas, gestionar incidencias y derivarlas de forma eficiente.",
          "T3. Potenciar la influencia orgánica de la marca a través de dinámicas y acciones participativas."
        ]
      },
      {
        name: "R5. Planificación Editorial.",
        tasks: [
          "T1. Colaborar en la creación, gestión y seguimiento del calendario editorial de posts.",
          "T2. Coordinar la adjudicación de materiales visuales (fotografías, vídeos) para cada publicación.",
          "T3. Compartir el cronograma de publicaciones y fechas relevantes con el equipo de marketing."
        ]
      },
      {
        name: "R6. Soporte a Contenido Local.",
        tasks: [
          "T1. Crear y adaptar contenido específico para Country Marketing Managers y perfiles deportivos especializados (DH / XC).",
          "T2. Proveer assets y guías para campañas locales y posts en redes de mercados específicos.",
          "T3. Coordinar la integración de testimonios y contenidos locales en las cuentas globales."
        ]
      },
      {
        name: "R7. Monitoreo y Reporte.",
        tasks: [
          "T1. Analizar métricas diarias/semanales (engagement, crecimiento, alcance) en redes globales y España.",
          "T2. Elaborar informes regulares de rendimiento y KPIs para evaluar el impacto de acciones realizadas.",
          "T3. Proponer mejoras y reajustes en base a datos monitorizados."
        ]
      }
    ],
    tipo: "Mondraker",
    area: "Digital"
  }
];
