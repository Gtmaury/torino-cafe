// src/data/courses.ts
import type { Course } from '@/types';

export const COURSES: Course[] = [
  {
    id:          'basico',
    level:       'Nivel 1',
    title:       'Barista Básico',
    description: 'Fundamentos del café, espresso y técnicas esenciales. Introducción al mundo del café profesional con protocolo INEI.',
    image:       '/images/course_basico.png',
    alt:         'Latte art en taza — Barista Básico',
    href:        '/cursos/basico',
    duration:    '16 Horas (2 sesiones de 8 horas)',
    price:       '$450,000 COP',
    modality:    'Presencial (Teórico-Práctico)',
    certification: 'Certificación Barista Inicial - Torino Caffè Academy (Alineada con directrices INEI)',
    syllabus: [
      {
        moduleTitle: 'Módulo 1: Botánica y Origen del Café',
        topics: [
          'Historia y leyenda de la planta del café.',
          'Diferencias críticas entre Arábica y Robusta (cultivo, cafeína y sabor).',
          'Introducción a los procesos de beneficio: Lavado, Natural y Honey.',
        ],
      },
      {
        moduleTitle: 'Módulo 2: Calibración y el Molino',
        topics: [
          'Partes principales del molino de café y tipos de fresas.',
          'Cómo ajustar la molienda (macro y micro ajustes) en función del flujo.',
          'La importancia de la dosis, distribución y la presión de compactación (tamping).',
        ],
      },
      {
        moduleTitle: 'Módulo 3: El Espresso Perfecto',
        topics: [
          'Fórmulas y parámetros básicos de la extracción (ratio y tiempo).',
          'Cómo reconocer una sub-extracción y una sobre-extracción sensorialmente.',
          'Limpieza técnica diaria y mantenimiento preventivo de la máquina de espresso.',
        ],
      },
      {
        moduleTitle: 'Módulo 4: Emulsión de Leche y Latte Art',
        topics: [
          'Física y química de la leche: proteínas, grasas y su reacción al calor.',
          'Técnicas de texturización de la leche para crear microespuma sedosa.',
          'Vertidos básicos para Latte Art: Corazón y Tulipán.',
        ],
      },
    ],
  },
  {
    id:          'intermedio',
    level:       'Nivel 2',
    title:       'Barista Intermedio',
    description: 'Perfecciona tu técnica y amplía tu conocimiento del café. Desarrollo técnico, control de calidad y gestión del tiempo.',
    image:       '/images/course_intermedio.png',
    alt:         'Barista profesional trabajando — Nivel Intermedio',
    href:        '/cursos/intermedio',
    duration:    '24 Horas (3 sesiones de 8 horas)',
    price:       '$750,000 COP',
    modality:    'Presencial Intensivo',
    certification: 'Certificación Barista Intermedio - Torino Caffè Academy (Preparación para examen SCA Intermediate)',
    syllabus: [
      {
        moduleTitle: 'Módulo 1: Café Verde y Tueste',
        topics: [
          'Análisis físico del café verde: humedad, densidad y clasificación de defectos.',
          'Química básica del tueste: reacciones de Maillard y caramelización.',
          'Cómo influye el perfil de tueste en el comportamiento de la extracción en barra.',
        ],
      },
      {
        moduleTitle: 'Módulo 2: Análisis Científico del Espresso',
        topics: [
          'Uso del refractómetro para medir Sólidos Disueltos Totales (TDS).',
          'Cálculo exacto del porcentaje de extracción (Yield) y su impacto sensorial.',
          'Uso de la Gráfica de Control de Extracción para ajustar recetas complejas.',
        ],
      },
      {
        moduleTitle: 'Módulo 3: Vertido Avanzado y Latte Art',
        topics: [
          'Técnicas complejas de vertido libre: Rosetta, Cisne y figuras compuestas.',
          'Control de la velocidad de vertido, altura y ángulo de la taza.',
          'Técnicas de emulsión y vertido con alternativas de leche vegetal (avena, almendra).',
        ],
      },
      {
        moduleTitle: 'Módulo 4: Ergonomía y Operación de Barra',
        topics: [
          'Diseño eficiente de la estación de trabajo y ergonomía del barista.',
          'Flujo de trabajo para atender órdenes múltiples bajo presión de tiempo.',
          'Control de costos en barra, mermas de café y gestión de inventario.',
        ],
      },
    ],
  },
  {
    id:          'avanzado',
    level:       'Nivel 3',
    title:       'Barista Avanzado',
    description: 'Lleva tu habilidad al siguiente nivel y domina el espresso. Para quienes buscan la excelencia y la consistencia.',
    image:       '/images/course_avanzado.png',
    alt:         'Extracción de espresso perfecta — Barista Avanzado',
    href:        '/cursos/avanzado',
    duration:    '32 Horas (4 sesiones de 8 horas)',
    price:       '$1,100,000 COP',
    modality:    'Presencial (Nivel Avanzado)',
    certification: 'Certificación Barista Profesional - Torino Caffè Academy (Alineada con nivel SCA Professional)',
    syllabus: [
      {
        moduleTitle: 'Módulo 1: Control de Presión y Caudal Dinámico',
        topics: [
          'Principios de perfilado de presión en máquinas multibojler avanzadas.',
          'Efecto del preinfusión a baja presión en la extracción y el canalizado.',
          'Uso de bombas de caudal variable para modular acidez, cuerpo y amargor.',
        ],
      },
      {
        moduleTitle: 'Módulo 2: Química del Agua Avanzada',
        topics: [
          'Composición del agua: dureza de calcio, dureza de magnesio y alcalinidad.',
          'Cómo afectan los diferentes minerales a la extracción de compuestos solubles.',
          'Uso de kits de medición y ajuste químico del agua mediante recetas de re-mineralización.',
        ],
      },
      {
        moduleTitle: 'Módulo 3: Espresso Moderno y Cafés Exóticos',
        topics: [
          'Extracciones ultra altas mediante filtros de precisión (VST, IMS).',
          'Análisis sensorial de varietales exóticos (Geisha, Bourbon Rosado, Wush Wush).',
          'Impacto de las fermentaciones anaeróbicas y maceraciones carbónicas en el espresso.',
        ],
      },
      {
        moduleTitle: 'Módulo 4: Coctelería de Especialidad y Menú de Autor',
        topics: [
          'Fundamentos de la mixología aplicados al café de especialidad.',
          'Sinergias de sabor y maridajes moleculares con ingredientes naturales.',
          'Creación, costeo y sustentación técnica de una bebida insignia para competencia.',
        ],
      },
    ],
  },
  {
    id:          'cupping',
    level:       'Especialización',
    title:       'Sensory & Cupping',
    description: 'Desarrolla tu paladar y aprende a evaluar el café como un experto. Análisis sensorial profesional bajo estándar SCA.',
    image:       '/images/course_cupping.png',
    alt:         'Mesa de cata — Sensory & Cupping',
    href:        '/cursos/cupping',
    duration:    '20 Horas (2.5 sesiones de 8 horas)',
    price:       '$650,000 COP',
    modality:    'Presencial de Especialización',
    certification: 'Certificación en Análisis Sensorial - Torino Caffè Academy (Preparación para examen Q-Grader)',
    syllabus: [
      {
        moduleTitle: 'Módulo 1: Fisiología Sensorial y Gusto',
        topics: [
          'Biología de los receptores del gusto en la lengua y vías retronasales.',
          'Identificación e intensidad de los 5 sabores básicos en soluciones acuosas.',
          'Reconocimiento y clasificación de ácidos orgánicos del café (málico, cítrico, tartárico, acético).',
        ],
      },
      {
        moduleTitle: 'Módulo 2: Protocolo Oficial de Catación SCA',
        topics: [
          'Estándares SCA de agua, tostado, molienda y ratios para catación.',
          'Manejo de la mesa de cata, tiempos de infusión y etiqueta del catador.',
          'Uso correcto del léxico y la Rueda de Sabores de la SCA/WCR.',
        ],
      },
      {
        moduleTitle: 'Módulo 3: Calificación y Llenado del Formulario SCA',
        topics: [
          'Evaluación cualitativa y cuantitativa de atributos (fragancia, sabor, acidez, cuerpo, balance).',
          'Puntaje de consistencia, taza limpia, dulzor y detección de defectos (fenol, moho).',
          'Cálculo de puntaje final para clasificar microlotes y cafés comerciales.',
        ],
      },
      {
        moduleTitle: 'Módulo 4: Triangulaciones e Identificación a Ciegas',
        topics: [
          'Pruebas de discriminación triangular para identificar tazas diferentes.',
          'Cataciones a ciegas para identificar procesos (natural vs lavado) y variedades.',
          'Fundamentos de compra y control de calidad de lotes en base a la cata.',
        ],
      },
    ],
  },
];
