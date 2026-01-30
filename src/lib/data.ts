// OPCG 完整数据 - 52个系列，4242+张卡片
// 数据来源：官方OPCG网站

// 图片基础URL
const IMAGE_BASE_URL_JA = 'https://www.onepiece-cardgame.com/images/cardlist/card';
const IMAGE_BASE_URL_EN = 'https://en.onepiece-cardgame.com/images/cardlist/card';

// 系列数据结构
export interface Series {
  id: string;
  code: string;
  name: string;
  nameJa: string;
  nameEn: string;
  cardCount: number;
  releaseDate: string;
  category: 'booster' | 'extra' | 'premium' | 'starter' | 'other';
}

// 卡片数据结构
export interface Card {
  id: string;
  number: string;
  name: string;
  nameJa?: string;
  rarity: 'L' | 'SR' | 'R' | 'UC' | 'C' | 'SEC' | 'SP' | 'P';
  type: 'LEADER' | 'CHARACTER' | 'EVENT' | 'STAGE';
  cost: number;
  power?: number;
  counter?: number;
  color: string;
  attribute?: string;
  feature?: string;
  effect?: string;
  imageUrl: string;
  price?: {
    jihuanshe?: number;
    trend?: 'up' | 'down' | 'stable';
  };
}

// ==========================================
// 系列数据 - 52个系列
// ==========================================
export const allSeries: Series[] = [
  // 补充包 (14个)
  { id: 'op-14', code: 'OP-14', name: '蒼海の七傑', nameJa: '蒼海の七傑', nameEn: "The Azure Sea's Seven", cardCount: 130, releaseDate: '2025-10-25', category: 'booster' },
  { id: 'op-13', code: 'OP-13', name: '受け継がれる意志', nameJa: '受け継がれる意志', nameEn: 'Carrying On His Will', cardCount: 133, releaseDate: '2025-08-23', category: 'booster' },
  { id: 'op-12', code: 'OP-12', name: '師弟の絆', nameJa: '師弟の絆', nameEn: 'Legacy of the Master', cardCount: 155, releaseDate: '2025-06-28', category: 'booster' },
  { id: 'op-11', code: 'OP-11', name: '神速の拳', nameJa: '神速の拳', nameEn: 'A Fist of Divine Speed', cardCount: 155, releaseDate: '2025-04-26', category: 'booster' },
  { id: 'op-10', code: 'OP-10', name: '王族の血統', nameJa: '王族の血統', nameEn: 'Royal Blood', cardCount: 155, releaseDate: '2025-02-22', category: 'booster' },
  { id: 'op-09', code: 'OP-09', name: '新たなる皇帝', nameJa: '新たなる皇帝', nameEn: 'Emperors in the New World', cardCount: 138, releaseDate: '2024-12-14', category: 'booster' },
  { id: 'op-08', code: 'OP-08', name: '二つの伝説', nameJa: '二つの伝説', nameEn: 'Two Legends', cardCount: 138, releaseDate: '2024-10-19', category: 'booster' },
  { id: 'op-07', code: 'OP-07', name: '500年後の未来', nameJa: '500年後の未来', nameEn: '500 Years in the Future', cardCount: 138, releaseDate: '2024-08-24', category: 'booster' },
  { id: 'op-06', code: 'OP-06', name: '双璧の覇者', nameJa: '双璧の覇者', nameEn: 'Wings of the Captain', cardCount: 138, releaseDate: '2024-06-22', category: 'booster' },
  { id: 'op-05', code: 'OP-05', name: '新時代の主役', nameJa: '新時代の主役', nameEn: 'Awakening of the New Era', cardCount: 138, releaseDate: '2024-04-27', category: 'booster' },
  { id: 'op-04', code: 'OP-04', name: '謀略の王国', nameJa: '謀略の王国', nameEn: 'Kingdoms of Intrigue', cardCount: 138, releaseDate: '2024-02-24', category: 'booster' },
  { id: 'op-03', code: 'OP-03', name: '強大な敵', nameJa: '強大な敵', nameEn: 'Pillars of Strength', cardCount: 138, releaseDate: '2023-12-23', category: 'booster' },
  { id: 'op-02', code: 'OP-02', name: '頂上決戦', nameJa: '頂上決戦', nameEn: 'Paramount War', cardCount: 138, releaseDate: '2023-10-28', category: 'booster' },
  { id: 'op-01', code: 'OP-01', name: 'ROMANCE DAWN', nameJa: 'ROMANCE DAWN', nameEn: 'Romance Dawn', cardCount: 138, releaseDate: '2023-08-25', category: 'booster' },
  
  // Extra Booster (4个)
  { id: 'eb-04', code: 'EB-04', name: 'EGGHEAD CRISIS', nameJa: 'EGGHEAD CRISIS', nameEn: 'Egghead Crisis', cardCount: 61, releaseDate: '2025-01-31', category: 'extra' },
  { id: 'eb-03', code: 'EB-03', name: 'ONE PIECE Heroines Edition', nameJa: 'ONE PIECE Heroines Edition', nameEn: 'Heroines Edition', cardCount: 61, releaseDate: '2024-11-22', category: 'extra' },
  { id: 'eb-02', code: 'EB-02', name: 'Anime 25th collection', nameJa: 'Anime 25th collection', nameEn: 'Anime 25th Collection', cardCount: 52, releaseDate: '2024-08-23', category: 'extra' },
  { id: 'eb-01', code: 'EB-01', name: 'メモリアルコレクション', nameJa: 'メモリアルコレクション', nameEn: 'Memorial Collection', cardCount: 52, releaseDate: '2024-05-25', category: 'extra' },
  
  // Premium Booster (2个)
  { id: 'prb-02', code: 'PRB-02', name: 'ONE PIECE CARD THE BEST vol.2', nameJa: 'ONE PIECE CARD THE BEST vol.2', nameEn: 'Card the Best Vol.2', cardCount: 104, releaseDate: '2024-12-14', category: 'premium' },
  { id: 'prb-01', code: 'PRB-01', name: 'ONE PIECE CARD THE BEST', nameJa: 'ONE PIECE CARD THE BEST', nameEn: 'Card the Best', cardCount: 100, releaseDate: '2024-02-10', category: 'premium' },
  
  // Starter Deck (29个)
  { id: 'st-29', code: 'ST-29', name: 'EGGHEAD', nameJa: 'EGGHEAD', nameEn: 'Egghead', cardCount: 51, releaseDate: '2024-12-14', category: 'starter' },
  { id: 'st-28', code: 'ST-28', name: '緑黄 ヤマト', nameJa: '緑黄 ヤマト', nameEn: 'Green/Yellow Yamato', cardCount: 51, releaseDate: '2024-10-25', category: 'starter' },
  { id: 'st-27', code: 'ST-27', name: '黒 マーシャル・D・ティーチ', nameJa: '黒 マーシャル・D・ティーチ', nameEn: 'Black Marshall D. Teach', cardCount: 51, releaseDate: '2024-09-28', category: 'starter' },
  { id: 'st-26', code: 'ST-26', name: '紫黒 モンキー・D・ルフィ', nameJa: '紫黒 モンキー・D・ルフィ', nameEn: 'Purple/Black Luffy', cardCount: 51, releaseDate: '2024-08-23', category: 'starter' },
  { id: 'st-25', code: 'ST-25', name: '青 バギー', nameJa: '青 バギー', nameEn: 'Blue Buggy', cardCount: 51, releaseDate: '2024-06-22', category: 'starter' },
  { id: 'st-24', code: 'ST-24', name: '緑 ジュエリー・ボニー', nameJa: '緑 ジュエリー・ボニー', nameEn: 'Green Jewelry Bonney', cardCount: 51, releaseDate: '2024-04-27', category: 'starter' },
  { id: 'st-23', code: 'ST-23', name: '赤 シャンクス', nameJa: '赤 シャンクス', nameEn: 'Red Shanks', cardCount: 51, releaseDate: '2024-02-24', category: 'starter' },
  { id: 'st-22', code: 'ST-22', name: 'エース&ニューゲート', nameJa: 'エース&ニューゲート', nameEn: 'Ace & Newgate', cardCount: 51, releaseDate: '2023-12-23', category: 'starter' },
  { id: 'st-21', code: 'ST-21', name: 'EX ギア5', nameJa: 'EX ギア5', nameEn: 'EX Gear 5', cardCount: 66, releaseDate: '2023-12-02', category: 'starter' },
  { id: 'st-20', code: 'ST-20', name: '黄 シャーロット・カタクリ', nameJa: '黄 シャーロット・カタクリ', nameEn: 'Yellow Katakuri', cardCount: 51, releaseDate: '2023-11-25', category: 'starter' },
  { id: 'st-19', code: 'ST-19', name: '黒 スモーカー', nameJa: '黒 スモーカー', nameEn: 'Black Smoker', cardCount: 51, releaseDate: '2023-10-28', category: 'starter' },
  { id: 'st-18', code: 'ST-18', name: '紫 モンキー・D・ルフィ', nameJa: '紫 モンキー・D・ルフィ', nameEn: 'Purple Luffy', cardCount: 51, releaseDate: '2023-09-30', category: 'starter' },
  { id: 'st-17', code: 'ST-17', name: '青 ドンキホーテ・ドフラミンゴ', nameJa: '青 ドンキホーテ・ドフラミンゴ', nameEn: 'Blue Doflamingo', cardCount: 51, releaseDate: '2023-09-09', category: 'starter' },
  { id: 'st-16', code: 'ST-16', name: '緑 ウタ', nameJa: '緑 ウタ', nameEn: 'Green Uta', cardCount: 51, releaseDate: '2023-08-25', category: 'starter' },
  { id: 'st-15', code: 'ST-15', name: '赤 エドワード・ニューゲート', nameJa: '赤 エドワード・ニューゲート', nameEn: 'Red Edward Newgate', cardCount: 51, releaseDate: '2023-07-29', category: 'starter' },
  { id: 'st-14', code: 'ST-14', name: '3D2Y', nameJa: '3D2Y', nameEn: '3D2Y', cardCount: 51, releaseDate: '2023-07-08', category: 'starter' },
  { id: 'st-13', code: 'ST-13', name: '3兄弟の絆', nameJa: '3兄弟の絆', nameEn: 'Bond of Three Brothers', cardCount: 51, releaseDate: '2023-06-10', category: 'starter' },
  { id: 'st-12', code: 'ST-12', name: 'ゾロ&サンジ', nameJa: 'ゾロ&サンジ', nameEn: 'Zoro & Sanji', cardCount: 51, releaseDate: '2023-05-27', category: 'starter' },
  { id: 'st-11', code: 'ST-11', name: 'Side ウタ', nameJa: 'Side ウタ', nameEn: 'Side Uta', cardCount: 51, releaseDate: '2023-04-22', category: 'starter' },
  { id: 'st-10', code: 'ST-10', name: '「三船長」集結', nameJa: '「三船長」集結', nameEn: 'Three Captains', cardCount: 51, releaseDate: '2023-03-25', category: 'starter' },
  { id: 'st-09', code: 'ST-09', name: 'Side ヤマト', nameJa: 'Side ヤマト', nameEn: 'Side Yamato', cardCount: 51, releaseDate: '2023-02-25', category: 'starter' },
  { id: 'st-08', code: 'ST-08', name: 'Side モンキー・D・ルフィ', nameJa: 'Side モンキー・D・ルフィ', nameEn: 'Side Monkey D. Luffy', cardCount: 51, releaseDate: '2023-01-21', category: 'starter' },
  { id: 'st-07', code: 'ST-07', name: 'ビッグ・マム海賊団', nameJa: 'ビッグ・マム海賊団', nameEn: 'Big Mom Pirates', cardCount: 51, releaseDate: '2022-12-17', category: 'starter' },
  { id: 'st-06', code: 'ST-06', name: '海軍', nameJa: '海軍', nameEn: 'Navy', cardCount: 51, releaseDate: '2022-11-18', category: 'starter' },
  { id: 'st-05', code: 'ST-05', name: 'ONE PIECE FILM edition', nameJa: 'ONE PIECE FILM edition', nameEn: 'Film Edition', cardCount: 51, releaseDate: '2022-10-21', category: 'starter' },
  { id: 'st-04', code: 'ST-04', name: '百獣海賊団', nameJa: '百獣海賊団', nameEn: 'Animal Kingdom Pirates', cardCount: 51, releaseDate: '2022-09-30', category: 'starter' },
  { id: 'st-03', code: 'ST-03', name: '王下七武海', nameJa: '王下七武海', nameEn: 'The Seven Warlords', cardCount: 51, releaseDate: '2022-09-09', category: 'starter' },
  { id: 'st-02', code: 'ST-02', name: '最悪の世代', nameJa: '最悪の世代', nameEn: 'Worst Generation', cardCount: 51, releaseDate: '2022-08-26', category: 'starter' },
  { id: 'st-01', code: 'ST-01', name: '麦わらの一味', nameJa: '麦わらの一味', nameEn: 'Straw Hat Crew', cardCount: 51, releaseDate: '2022-08-05', category: 'starter' },
  
  // 其他 (3个)
  { id: 'promo', code: 'PROMO', name: 'プロモーションカード', nameJa: 'プロモーションカード', nameEn: 'Promotion Cards', cardCount: 200, releaseDate: 'Various', category: 'other' },
  { id: 'limited', code: 'LIMITED', name: '限定商品収録カード', nameJa: '限定商品収録カード', nameEn: 'Limited Products', cardCount: 100, releaseDate: 'Various', category: 'other' },
  { id: 'family', code: 'FAMILY', name: 'ファミリーデッキセット', nameJa: 'ファミリーデッキセット', nameEn: 'Family Deck Set', cardCount: 50, releaseDate: '2023-04-01', category: 'other' },
];

// 首页展示用（补充包前8个）
export const mockSeries = allSeries.filter(s => s.category === 'booster').slice(0, 8);

// ==========================================
// 卡片数据 - 带真实图片URL
// ==========================================
export const mockCards: Card[] = [
  {
    id: 'op14-001',
    number: 'OP14-001',
    name: 'Silvers Rayleigh',
    nameJa: 'シルバーズ・レイリー',
    rarity: 'L',
    type: 'LEADER',
    cost: 5,
    power: 5000,
    color: 'Red',
    attribute: 'Slash',
    feature: 'Former Roger Pirates',
    effect: '[DON!! x1] [Your Turn] All of your Characters gain +1000 power.',
    imageUrl: `${IMAGE_BASE_URL_JA}/OP14-001.png`,
    price: { jihuanshe: 45, trend: 'up' },
  },
  {
    id: 'op14-001-p1',
    number: 'OP14-001_p1',
    name: 'Silvers Rayleigh (Parallel)',
    nameJa: 'シルバーズ・レイリー (パラレル)',
    rarity: 'L',
    type: 'LEADER',
    cost: 5,
    power: 5000,
    color: 'Red',
    attribute: 'Slash',
    feature: 'Former Roger Pirates',
    effect: '[DON!! x1] [Your Turn] All of your Characters gain +1000 power.',
    imageUrl: `${IMAGE_BASE_URL_JA}/OP14-001_p1.png`,
    price: { jihuanshe: 120, trend: 'stable' },
  },
  {
    id: 'op14-002',
    number: 'OP14-002',
    name: 'Edward Newgate',
    nameJa: 'エドワード・ニューゲート',
    rarity: 'L',
    type: 'LEADER',
    cost: 5,
    power: 6000,
    color: 'Blue',
    attribute: 'Special',
    feature: 'The Four Emperors/Whitebeard Pirates',
    effect: '[DON!! x1] [Opponent\'s Turn] This Leader gains +1000 power.',
    imageUrl: `${IMAGE_BASE_URL_JA}/OP14-002.png`,
    price: { jihuanshe: 38, trend: 'down' },
  },
  {
    id: 'op14-003',
    number: 'OP14-003',
    name: 'Monkey D. Luffy',
    nameJa: 'モンキー・D・ルフィ',
    rarity: 'SR',
    type: 'CHARACTER',
    cost: 4,
    power: 6000,
    counter: 1000,
    color: 'Red',
    attribute: 'Strike',
    feature: 'Supernovas/Straw Hat Crew',
    effect: '[On Play] Draw 1 card. Then, trash 1 card from your hand.',
    imageUrl: `${IMAGE_BASE_URL_JA}/OP14-003.png`,
    price: { jihuanshe: 15, trend: 'stable' },
  },
  {
    id: 'op14-004',
    number: 'OP14-004',
    name: 'Roronoa Zoro',
    nameJa: 'ロロノア・ゾロ',
    rarity: 'SR',
    type: 'CHARACTER',
    cost: 3,
    power: 5000,
    counter: 1000,
    color: 'Red',
    attribute: 'Slash',
    feature: 'Supernovas/Straw Hat Crew',
    effect: '[DON!! x1] [When Attacking] This Character gains +1000 power.',
    imageUrl: `${IMAGE_BASE_URL_JA}/OP14-004.png`,
    price: { jihuanshe: 12, trend: 'up' },
  },
  {
    id: 'op14-005',
    number: 'OP14-005',
    name: 'Nami',
    nameJa: 'ナミ',
    rarity: 'R',
    type: 'CHARACTER',
    cost: 2,
    power: 3000,
    counter: 1000,
    color: 'Red',
    attribute: 'Wisdom',
    feature: 'Straw Hat Crew',
    effect: '[On Play] Look at the top 3 cards of your deck. Put them back in any order.',
    imageUrl: `${IMAGE_BASE_URL_JA}/OP14-005.png`,
    price: { jihuanshe: 8, trend: 'stable' },
  },
  {
    id: 'op14-006',
    number: 'OP14-006',
    name: 'Sanji',
    nameJa: 'サンジ',
    rarity: 'SR',
    type: 'CHARACTER',
    cost: 4,
    power: 6000,
    counter: 1000,
    color: 'Red',
    attribute: 'Strike',
    feature: 'Straw Hat Crew',
    effect: '[DON!! x1] [When Attacking] If you have 2 or less cards in hand, this Character gains +2000 power.',
    imageUrl: `${IMAGE_BASE_URL_JA}/OP14-006.png`,
    price: { jihuanshe: 18, trend: 'up' },
  },
  {
    id: 'op14-007',
    number: 'OP14-007',
    name: 'Nico Robin',
    nameJa: 'ニコ・ロビン',
    rarity: 'R',
    type: 'CHARACTER',
    cost: 3,
    power: 4000,
    counter: 1000,
    color: 'Red',
    attribute: 'Wisdom',
    feature: 'Straw Hat Crew',
    effect: '[On Play] Draw 1 card.',
    imageUrl: `${IMAGE_BASE_URL_JA}/OP14-007.png`,
    price: { jihuanshe: 6, trend: 'stable' },
  },
  {
    id: 'op14-008',
    number: 'OP14-008',
    name: 'Brook',
    nameJa: 'ブルック',
    rarity: 'UC',
    type: 'CHARACTER',
    cost: 2,
    power: 3000,
    counter: 1000,
    color: 'Red',
    attribute: 'Slash',
    feature: 'Straw Hat Crew',
    effect: '[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)',
    imageUrl: `${IMAGE_BASE_URL_JA}/OP14-008.png`,
    price: { jihuanshe: 3, trend: 'stable' },
  },
];

// 稀有度颜色映射
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

// 稀有度标签
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

// 语种配置
export const languages = [
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh-cn', name: '简体中文', flag: '🇨🇳' },
  { code: 'zh-tw', name: '繁體中文', flag: '🇹🇼' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
];
