// src/data/certifications.ts
import type { Certification } from '@/types';

export const CERTIFICATIONS: Certification[] = [
  {
    id:       'inei',
    acronym:  'INEI',
    fullName: 'Instituto Nazionale\nEspresso Italiano',
    subtitle: 'Certificación de origen italiano para formación en espresso auténtico.',
  },
  {
    id:       'sca',
    acronym:  'SCA',
    fullName: 'Specialty Coffee\nAssociation',
    subtitle: 'Estándar global para la industria del café de especialidad.',
  },
  {
    id:       'ast',
    acronym:  'AST',
    fullName: 'Authorized SCA\nTrainer',
    subtitle: 'Formadores certificados y avalados directamente por la SCA.',
  },
];
