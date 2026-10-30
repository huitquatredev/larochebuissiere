export interface Cuvee {
  index: string;
  slug: string;
  name: string;
  color: string;
  /** Couleur du texte posé sur le champ de couleur, calculée pour le contraste. */
  ink: string;
  signature: string;
}

export const cuvees: Cuvee[] = [
  {
    index: '01',
    slug: 'flonflons',
    name: 'Flonflons',
    color: '#da022b',
    ink: '#ffffff',
    signature: 'Antoine et Laurence Joly, vignerons. Faucon F-84110',
  },
  {
    index: '02',
    slug: 'gaia',
    name: 'Gaïa',
    color: '#003b63',
    ink: '#ffffff',
    signature: 'Antoine et Laurence Joly, vignerons. Faucon F-84110',
  },
  {
    index: '03',
    slug: 'petit-jo',
    name: 'petit Jo',
    color: '#09a274',
    ink: '#19171a',
    signature: 'Antoine et Pierre Joly, vignerons. Faucon F-84110',
  },
  {
    index: '04',
    slug: 'premices',
    name: 'Prémices',
    color: '#01a1de',
    ink: '#19171a',
    signature: 'Antoine et Laurence Joly, vignerons. Faucon F-84110',
  },
  {
    index: '05',
    slug: 'le-claux',
    name: 'Le Claux',
    color: '#b8b9bb',
    ink: '#19171a',
    signature: 'Antoine et Pierre Joly, vignerons. Faucon F-84110',
  },
];

export const palette = [
  { name: 'Papier', hex: '#ffffff', oklch: '1 0 0', role: 'Fond, bande de marque' },
  { name: 'Encre', hex: '#19171a', oklch: '0.208 0.005 326', role: 'Noir du pied d’étiquette' },
  { name: 'Gris fanion', hex: '#b8b9bb', oklch: '0.786 0.003 265', role: 'Moitié gauche du fanion' },
  { name: 'Flonflons', hex: '#da022b', oklch: '0.561 0.226 23.5', role: 'Couleur de cuvée' },
  { name: 'Gaïa', hex: '#003b63', oklch: '0.342 0.088 246', role: 'Couleur de cuvée' },
  { name: 'petit Jo', hex: '#09a274', oklch: '0.631 0.133 164', role: 'Couleur de cuvée' },
  { name: 'Prémices', hex: '#01a1de', oklch: '0.669 0.141 234.5', role: 'Couleur de cuvée' },
  { name: 'Le Claux', hex: '#b8b9bb', oklch: '0.786 0.003 265', role: 'Couleur de cuvée' },
];
