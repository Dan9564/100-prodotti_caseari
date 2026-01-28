import { NavItem, Product } from './types';

export const COMPANY_INFO = {
  name: "100% Prodotto Italiano",
  claim: "Distributeurs laitiers et produits Italiens en France",
  siren: "FR 83 903 535 268",
  address: "74 Avenue des Bouleaux, 91170 Viry-Châtillon (France)",
  email: "100prodotticaseari@gmail.com",
  contacts: {
    rosario: {
      name: "Rosario Sorrentino",
      phone: "+33 7 83 15 27 72",
      country: "FR",
    },
    francesco: {
      name: "Francesco Ricciardi",
      phone: "+39 366 548 7092",
      country: "IT",
    },
  },
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Chi Siamo', path: '/chi-siamo' },
  { label: 'Prodotti', path: '/prodotti' },
  { label: 'Territorio', path: '/territorio' },
  { label: 'Qualità', path: '/qualita' },
  { label: 'Contatti', path: '/contatti' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Mozzarella di Bufala Campana',
    category: 'Latticini',
    description: 'La regina della tavola. Mozzarella fresca prodotta esclusivamente con latte di bufala intero fresco.',
    isDop: true,
    isIgp: false,
    image: '/images/Bufale_territorio.webp',
  },
  {
    id: '2',
    name: 'Burrata Pugliese',
    category: 'Latticini',
    description: 'Un sacchetto di pasta filata morbida che racchiude un cuore cremoso di stracciatella.',
    isDop: false,
    isIgp: true,
    image: '/images/Burrata_pugliese.webp',
  },
  {
    id: '3',
    name: 'Parmigiano Reggiano 24 mesi',
    category: 'Formaggi Stagionati',
    description: 'Il re dei formaggi, stagionato 24 mesi. Gusto ricco e friabile.',
    isDop: true,
    isIgp: false,
    image: '',
  },
  {
    id: '4',
    name: 'Prosciutto di Parma',
    category: 'Salumi',
    description: 'Dolce e raffinato, stagionato con cura nelle colline di Parma.',
    isDop: true,
    isIgp: false,
    image: '',
  },
  {
    id: '5',
    name: 'Ricotta di Bufala',
    category: 'Latticini',
    description: 'Morbida, delicata e leggermente dolce. Perfetta per dolci e ripieni.',
    isDop: true,
    isIgp: false,
    image: '',
  },
  {
    id: '6',
    name: 'Pecorino Romano',
    category: 'Formaggi Stagionati',
    description: 'Gusto intenso e piccante, simbolo della tradizione romana.',
    isDop: true,
    isIgp: false,
    image: '',
  },
];
