export interface Series {
  id: string;
  code: string;
  name: string;
  nameJa: string;
  cardCount: number;
  releaseDate: string;
  imageUrl?: string;
}

export interface Card {
  id: string;
  number: string;
  name: string;
  rarity: 'L' | 'SR' | 'R' | 'UC' | 'C' | 'SEC' | 'SP' | 'P';
  type: 'LEADER' | 'CHARACTER' | 'EVENT' | 'STAGE';
  cost: number;
  power?: number;
  counter?: number;
  color: string;
  attribute?: string;
  feature?: string;
  effect?: string;
  imageUrl?: string;
  price?: {
    jihuanshe?: number;
    trend?: 'up' | 'down' | 'stable';
  };
}

export const mockSeries: Series[] = [
  {
    id: 'op-14',
    code: 'OP-14',
    name: 'The Azure Sea\'s Seven',
    nameJa: '蒼海の七傑',
    cardCount: 130,
    releaseDate: '2025-10-25',
  },
  {
    id: 'op-13',
    code: 'OP-13',
    name: 'Carrying On His Will',
    nameJa: '受け継がれる意志',
    cardCount: 133,
    releaseDate: '2025-08-23',
  },
  {
    id: 'op-12',
    code: 'OP-12',
    name: 'Legacy of the Master',
    nameJa: '師弟の絆',
    cardCount: 155,
    releaseDate: '2025-06-28',
  },
  {
    id: 'op-11',
    code: 'OP-11',
    name: 'A Fist of Divine Speed',
    nameJa: '神速の拳',
    cardCount: 155,
    releaseDate: '2025-04-26',
  },
  {
    id: 'op-10',
    code: 'OP-10',
    name: 'Royal Blood',
    nameJa: '王族の血統',
    cardCount: 155,
    releaseDate: '2025-02-22',
  },
  {
    id: 'op-09',
    code: 'OP-09',
    name: 'Emperors in the New World',
    nameJa: '新たなる皇帝',
    cardCount: 138,
    releaseDate: '2024-12-14',
  },
  {
    id: 'op-08',
    code: 'OP-08',
    name: 'Two Legends',
    nameJa: '二つの伝説',
    cardCount: 138,
    releaseDate: '2024-10-19',
  },
  {
    id: 'op-07',
    code: 'OP-07',
    name: '500 Years in the Future',
    nameJa: '500年後の未来',
    cardCount: 138,
    releaseDate: '2024-08-24',
  },
];

export const mockCards: Card[] = [
  {
    id: 'op12-001',
    number: 'OP12-001',
    name: 'Silvers Rayleigh',
    rarity: 'L',
    type: 'LEADER',
    cost: 5,
    power: 5000,
    color: 'Red',
    attribute: 'Slash',
    feature: 'Former Roger Pirates',
    effect: '[DON!! x1] [Your Turn] All of your Characters gain +1000 power.',
    price: { jihuanshe: 45, trend: 'up' },
  },
  {
    id: 'op12-001-p1',
    number: 'OP12-001_p1',
    name: 'Silvers Rayleigh (Alt)',
    rarity: 'L',
    type: 'LEADER',
    cost: 5,
    power: 5000,
    color: 'Red',
    attribute: 'Slash',
    feature: 'Former Roger Pirates',
    effect: '[DON!! x1] [Your Turn] All of your Characters gain +1000 power.',
    price: { jihuanshe: 120, trend: 'stable' },
  },
  {
    id: 'op12-002',
    number: 'OP12-002',
    name: 'Edward Newgate',
    rarity: 'L',
    type: 'LEADER',
    cost: 5,
    power: 6000,
    color: 'Blue',
    attribute: 'Special',
    feature: 'The Four Emperors/Whitebeard Pirates',
    effect: '[DON!! x1] [Opponent\'s Turn] This Leader gains +1000 power.',
    price: { jihuanshe: 38, trend: 'down' },
  },
  {
    id: 'op12-003',
    number: 'OP12-003',
    name: 'Monkey D. Luffy',
    rarity: 'SR',
    type: 'CHARACTER',
    cost: 4,
    power: 6000,
    counter: 1000,
    color: 'Red',
    attribute: 'Strike',
    feature: 'Supernovas/Straw Hat Crew',
    effect: '[On Play] Draw 1 card. Then, trash 1 card from your hand.',
    price: { jihuanshe: 15, trend: 'stable' },
  },
  {
    id: 'op12-004',
    number: 'OP12-004',
    name: 'Roronoa Zoro',
    rarity: 'SR',
    type: 'CHARACTER',
    cost: 3,
    power: 5000,
    counter: 1000,
    color: 'Red',
    attribute: 'Slash',
    feature: 'Supernovas/Straw Hat Crew',
    effect: '[DON!! x1] [When Attacking] This Character gains +1000 power.',
    price: { jihuanshe: 12, trend: 'up' },
  },
];

export const rarityColors: Record<string, string> = {
  'L': '#D4AF37',   // Leader - Gold
  'SR': '#C0C0C0',  // Super Rare - Silver
  'R': '#CD7F32',   // Rare - Bronze
  'UC': '#4169E1',  // Uncommon - Blue
  'C': '#808080',   // Common - Gray
  'SEC': '#FF1493', // Secret - Pink
  'SP': '#9932CC',  // Special - Purple
  'P': '#FFD700',   // Promo - Gold
};

export const rarityLabels: Record<string, string> = {
  'L': 'L',
  'SR': 'SR',
  'R': 'R',
  'UC': 'UC',
  'C': 'C',
  'SEC': 'SEC',
  'SP': 'SP',
  'P': 'P',
};
