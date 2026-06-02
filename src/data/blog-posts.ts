// src/data/blog-posts.ts
import type { BlogPost } from '@/types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id:       'origenes-espresso',
    category: 'Historia del Espresso',
    title:    'Los orígenes del espresso en la tradición italiana',
    excerpt:  'Un viaje por la historia del café espresso desde sus raíces en Italia hasta convertirse en un fenómeno mundial de cultura cafetera.',
    image:    '/images/blog_post_origenes_v3.png',
    alt:      'Historia del espresso italiano',
    href:     '/blog/origenes-espresso',
    date:     '15 Mayo 2026',
    readTime: '6 min de lectura',
    content: [
      'El espresso es mucho más que un método de preparación rápida o una inyección de cafeína matutina; es la columna vertebral de la cultura de cafetería moderna y un logro tecnológico que tardó más de medio siglo en perfeccionarse.',
      'A finales del siglo XIX, durante el apogeo de la Revolución Industrial en Europa, el tiempo se convirtió en el recurso más valioso. Los dueños de las fábricas en Italia buscaban una forma de acelerar la preparación de café para sus trabajadores sin sacrificar la calidad. Fue en este contexto donde nació la idea de forzar agua a presión a través del café molido.',
      'En 1884, Angelo Moriondo presentó en la Exposición General de Turín la patente de la primera máquina de café que utilizaba vapor a presión. Aunque sentó las bases, el vapor a menudo quemaba el café, dejando un sabor amargo y cenizo. A principios del siglo XX, Luigi Bezzera y Desiderio Pavoni mejoraron el diseño incorporando portafiltros individuales y la válvula de escape, permitiendo servir una taza fresca en menos de 45 segundos directamente al cliente, naciendo así el término "espresso" (expreso o rápido).',
      'Sin embargo, el espresso que conocemos hoy, caracterizado por su cuerpo denso y una capa sedosa de crema dorada en la superficie, no nació hasta 1948. Fue Achille Gaggia quien revolucionó la industria al sustituir el vapor por un pistón accionado por una palanca manual. Este mecanismo forzaba el agua a través del café a una presión de 9 atmósferas (en lugar de las 1.5 a 2 del vapor), emulsionando los aceites naturales del grano y creando la mítica "crema".',
      'Hoy en día, la tradición del espresso italiano sigue viva en cada rincón del mundo, recordándonos que detrás de esa pequeña taza hay décadas de ingeniería, pasión y búsqueda incesante de la taza perfecta.',
    ],
  },
  {
    id:       'calibracion-perfecta',
    category: 'Técnica Barista',
    title:    'Calibración perfecta: la clave de una extracción ideal',
    excerpt:  'Aprende cómo los pequeños ajustes en la molienda y la presión pueden transformar completamente la calidad de tu espresso.',
    image:    '/images/blog_post_calibracion_v3.png',
    alt:      'Técnica de calibración barista',
    href:     '/blog/calibracion-perfecta',
    date:     '22 Mayo 2026',
    readTime: '8 min de lectura',
    content: [
      'Para cualquier barista, la calibración de la mañana es un ritual sagrado. Cada día, variables invisibles como la temperatura ambiente, la humedad de la cocina, la edad de los granos tostados e incluso la presión atmosférica alteran la forma en que el agua interactúa con el café.',
      'El espresso es una bebida de precisión científica. Una extracción ideal busca disolver aproximadamente el 18% al 22% de los compuestos solubles del grano de café molido. Si extraes menos (sub-extracción), obtendrás una taza agria, salada y de cuerpo débil. Si extraes demasiado (sobre-extracción), la bebida resultará amarga, seca y astringente.',
      'La molienda es tu principal herramienta de control. Un cambio micrométrico en la distancia de las muelas del molino altera dramáticamente la superficie de contacto del café. Una molienda muy fina opone resistencia al agua, ralentizando el flujo; una molienda muy gruesa permite que el agua pase demasiado rápido sin disolver los sabores clave.',
      'El segundo parámetro es el ratio de extracción: la relación entre los gramos de café molido seco (dosis) y los gramos de bebida líquida en taza (rendimiento). Para un espresso clásico, un ratio de 1:2 (por ejemplo, 18 gramos de café molido para obtener 36 gramos de bebida en taza) es el punto de partida estándar.',
      'Finalmente, el tiempo (que debe rondar entre los 24 y 30 segundos) actúa como el termómetro de tu receta. Al aprender a sincronizar y equilibrar estas tres variables (molienda, ratio y tiempo), lograrás que cada taza exprese fielmente las notas de cata y la dulzura natural del origen.',
    ],
  },
  {
    id:       'paladar-cafe-especialidad',
    category: 'Cata y Análisis Sensorial',
    title:    'Cómo desarrollar tu paladar para el café de especialidad',
    excerpt:  'Guía práctica para desarrollar la sensibilidad sensorial y aprender a evaluar los matices de aroma, acidez y cuerpo en cafés de alta calidad.',
    image:    '/images/blog_post_paladar_v3.png',
    alt:      'Cata y análisis sensorial de café',
    href:     '/blog/paladar-cafe-especialidad',
    date:     '28 Mayo 2026',
    readTime: '7 min de lectura',
    content: [
      'El café de especialidad abre un abanico sensorial que va mucho más allá del simple sabor amargo y tostado que la mayoría de la gente asocia con el café comercial. En una sola taza de alta calidad es posible percibir notas florales a jazmín, acidez brillante a frutos rojos, dulzura a caramelo y un postgusto prolongado a chocolate amargo.',
      'Desarrollar el paladar no es un talento genético exclusivo de unos pocos elegidos; es una destreza cognitiva y biológica que cualquier persona puede entrenar mediante la atención consciente y la repetición constante.',
      'El primer paso fundamental consiste en realizar una cata consciente en cada taza diaria. Antes de dar el primer trago, huele los aromas que se desprenden de la taza (aroma) y los gases secos del café recién molido (fragancia). Identifica si te recuerdan a frutas, flores, especias o frutos secos.',
      'Durante la deglución, evalúa la acidez: ¿es brillante e intensa como un limón, o suave y redonda como una manzana madura? Observa el cuerpo o textura en boca: ¿se siente ligero como el té, o denso, sedoso y cremoso como la leche entera? El cuerpo y la acidez definen la estructura tridimensional de la bebida.',
      'Para entrenar el gusto de forma analítica, un excelente ejercicio en casa consiste en probar soluciones preparadas de agua con pequeñas cantidades de azúcar, sal y ácido cítrico. Este ejercicio calibra los receptores de tu lengua para identificar umbrales de sabor muy sutiles. Con práctica constante, tu biblioteca mental de sabores se expandirá, transformando por completo tu relación con el café.',
    ],
  },
];
