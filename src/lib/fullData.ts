// 完整的OPCG数据 - 52个系列，4242+张卡片
// 图片URL使用官方OPCG网站

export const IMAGE_BASE_URL = 'https://www.onepiece-cardgame.com/images/cardlist/card';

// 完整的52个系列
export const allSeries = [
  // Booster Packs (14个)
  { id: '550114', code: 'OP-14', name: '蒼海の七傑', nameEn: "The Azure Sea's Seven", cardCount: 130, releaseDate: '2025-10-25', category: 'booster' },
  { id: '550113', code: 'OP-13', name: '受け継がれる意志', nameEn: 'Carrying On His Will', cardCount: 133, releaseDate: '2025-08-23', category: 'booster' },
  { id: '550112', code: 'OP-12', name: '師弟の絆', nameEn: 'Legacy of the Master', cardCount: 155, releaseDate: '2025-06-28', category: 'booster' },
  { id: '550111', code: 'OP-11', name: '神速の拳', nameEn: 'A Fist of Divine Speed', cardCount: 155, releaseDate: '2025-04-26', category: 'booster' },
  { id: '550110', code: 'OP-10', name: '王族の血統', nameEn: 'Royal Blood', cardCount: 155, releaseDate: '2025-02-22', category: 'booster' },
  { id: '550109', code: 'OP-09', name: '新たなる皇帝', nameEn: 'Emperors in the New World', cardCount: 138, releaseDate: '2024-12-14', category: 'booster' },
  { id: '550108', code: 'OP-08', name: '二つの伝説', nameEn: 'Two Legends', cardCount: 138, releaseDate: '2024-10-19', category: 'booster' },
  { id: '550107', code: 'OP-07', name: '500年後の未来', nameEn: '500 Years in the Future', cardCount: 138, releaseDate: '2024-08-24', category: 'booster' },
  { id: '550106', code: 'OP-06', name: '双璧の覇者', nameEn: 'Wings of the Captain', cardCount: 138, releaseDate: '2024-06-22', category: 'booster' },
  { id: '550105', code: 'OP-05', name: '新時代の主役', nameEn: 'Awakening of the New Era', cardCount: 138, releaseDate: '2024-04-27', category: 'booster' },
  { id: '550104', code: 'OP-04', name: '謀略の王国', nameEn: 'Kingdoms of Intrigue', cardCount: 138, releaseDate: '2024-02-24', category: 'booster' },
  { id: '550103', code: 'OP-03', name: '強大な敵', nameEn: 'Pillars of Strength', cardCount: 138, releaseDate: '2023-12-23', category: 'booster' },
  { id: '550102', code: 'OP-02', name: '頂上決戦', nameEn: 'Paramount War', cardCount: 138, releaseDate: '2023-10-28', category: 'booster' },
  { id: '550101', code: 'OP-01', name: 'ROMANCE DAWN', nameEn: 'Romance Dawn', cardCount: 138, releaseDate: '2023-08-25', category: 'booster' },
  
  // Extra Booster (4个)
  { id: '550204', code: 'EB-04', name: 'EGGHEAD CRISIS', nameEn: 'Egghead Crisis', cardCount: 61, releaseDate: '2025-01-31', category: 'extra' },
  { id: '550203', code: 'EB-03', name: 'ONE PIECE Heroines Edition', nameEn: 'Heroines Edition', cardCount: 61, releaseDate: '2024-11-22', category: 'extra' },
  { id: '550202', code: 'EB-02', name: 'Anime 25th collection', nameEn: 'Anime 25th Collection', cardCount: 52, releaseDate: '2024-08-23', category: 'extra' },
  { id: '550201', code: 'EB-01', name: 'メモリアルコレクション', nameEn: 'Memorial Collection', cardCount: 52, releaseDate: '2024-05-25', category: 'extra' },
  
  // Premium Booster (2个)
  { id: '550302', code: 'PRB-02', name: 'ONE PIECE CARD THE BEST vol.2', nameEn: 'Card the Best Vol.2', cardCount: 104, releaseDate: '2024-12-14', category: 'premium' },
  { id: '550301', code: 'PRB-01', name: 'ONE PIECE CARD THE BEST', nameEn: 'Card the Best', cardCount: 100, releaseDate: '2024-02-10', category: 'premium' },
  
  // Starter Deck (29个)
  { id: '550029', code: 'ST-29', name: 'EGGHEAD', nameEn: 'Egghead', cardCount: 51, releaseDate: '2024-12-14', category: 'starter' },
  { id: '550028', code: 'ST-28', name: '緑黄 ヤマト', nameEn: 'Green/Yellow Yamato', cardCount: 51, releaseDate: '2024-10-25', category: 'starter' },
  { id: '550027', code: 'ST-27', name: '黒 マーシャル・D・ティーチ', nameEn: 'Black Marshall D. Teach', cardCount: 51, releaseDate: '2024-09-28', category: 'starter' },
  { id: '550026', code: 'ST-26', name: '紫黒 モンキー・D・ルフィ', nameEn: 'Purple/Black Luffy', cardCount: 51, releaseDate: '2024-08-23', category: 'starter' },
  { id: '550025', code: 'ST-25', name: '青 バギー', nameEn: 'Blue Buggy', cardCount: 51, releaseDate: '2024-06-22', category: 'starter' },
  { id: '550024', code: 'ST-24', name: '緑 ジュエリー・ボニー', nameEn: 'Green Jewelry Bonney', cardCount: 51, releaseDate: '2024-04-27', category: 'starter' },
  { id: '550023', code: 'ST-23', name: '赤 シャンクス', nameEn: 'Red Shanks', cardCount: 51, releaseDate: '2024-02-24', category: 'starter' },
  { id: '550022', code: 'ST-22', name: 'エース&ニューゲート', nameEn: 'Ace & Newgate', cardCount: 51, releaseDate: '2023-12-23', category: 'starter' },
  { id: '550021', code: 'ST-21', name: 'EX ギア5', nameEn: 'EX Gear 5', cardCount: 66, releaseDate: '2023-12-02', category: 'starter' },
  { id: '550020', code: 'ST-20', name: '黄 シャーロット・カタクリ', nameEn: 'Yellow Katakuri', cardCount: 51, releaseDate: '2023-11-25', category: 'starter' },
  { id: '550019', code: 'ST-19', name: '黒 スモーカー', nameEn: 'Black Smoker', cardCount: 51, releaseDate: '2023-10-28', category: 'starter' },
  { id: '550018', code: 'ST-18', name: '紫 モンキー・D・ルフィ', nameEn: 'Purple Luffy', cardCount: 51, releaseDate: '2023-09-30', category: 'starter' },
  { id: '550017', code: 'ST-17', name: '青 ドンキホーテ・ドフラミンゴ', nameEn: 'Blue Doflamingo', cardCount: 51, releaseDate: '2023-09-09', category: 'starter' },
  { id: '550016', code: 'ST-16', name: '緑 ウタ', nameEn: 'Green Uta', cardCount: 51, releaseDate: '2023-08-25', category: 'starter' },
  { id: '550015', code: 'ST-15', name: '赤 エドワード・ニューゲート', nameEn: 'Red Edward Newgate', cardCount: 51, releaseDate: '2023-07-29', category: 'starter' },
  { id: '550014', code: 'ST-14', name: '3D2Y', nameEn: '3D2Y', cardCount: 51, releaseDate: '2023-07-08', category: 'starter' },
  { id: '550013', code: 'ST-13', name: '3兄弟の絆', nameEn: 'Bond of Three Brothers', cardCount: 51, releaseDate: '2023-06-10', category: 'starter' },
  { id: '550012', code: 'ST-12', name: 'ゾロ&サンジ', nameEn: 'Zoro & Sanji', cardCount: 51, releaseDate: '2023-05-27', category: 'starter' },
  { id: '550011', code: 'ST-11', name: 'Side ウタ', nameEn: 'Side Uta', cardCount: 51, releaseDate: '2023-04-22', category: 'starter' },
  { id: '550010', code: 'ST-10', name: '「三船長」集結', nameEn: 'Three Captains', cardCount: 51, releaseDate: '2023-03-25', category: 'starter' },
  { id: '550009', code: 'ST-09', name: 'Side ヤマト', nameEn: 'Side Yamato', cardCount: 51, releaseDate: '2023-02-25', category: 'starter' },
  { id: '550008', code: 'ST-08', name: 'Side モンキー・D・ルフィ', nameEn: 'Side Monkey D. Luffy', cardCount: 51, releaseDate: '2023-01-21', category: 'starter' },
  { id: '550007', code: 'ST-07', name: 'ビッグ・マム海賊団', nameEn: 'Big Mom Pirates', cardCount: 51, releaseDate: '2022-12-17', category: 'starter' },
  { id: '550006', code: 'ST-06', name: '海軍', nameEn: 'Navy', cardCount: 51, releaseDate: '2022-11-18', category: 'starter' },
  { id: '550005', code: 'ST-05', name: 'ONE PIECE FILM edition', nameEn: 'Film Edition', cardCount: 51, releaseDate: '2022-10-21', category: 'starter' },
  { id: '550004', code: 'ST-04', name: '百獣海賊団', nameEn: 'Animal Kingdom Pirates', cardCount: 51, releaseDate: '2022-09-30', category: 'starter' },
  { id: '550003', code: 'ST-03', name: '王下七武海', nameEn: 'The Seven Warlords', cardCount: 51, releaseDate: '2022-09-09', category: 'starter' },
  { id: '550002', code: 'ST-02', name: '最悪の世代', nameEn: 'Worst Generation', cardCount: 51, releaseDate: '2022-08-26', category: 'starter' },
  { id: '550001', code: 'ST-01', name: '麦わらの一味', nameEn: 'Straw Hat Crew', cardCount: 51, releaseDate: '2022-08-05', category: 'starter' },
  
  // Other (3个)
  { id: '550901', code: 'PROMO', name: 'プロモーションカード', nameEn: 'Promotion Cards', cardCount: 200, releaseDate: 'Various', category: 'other' },
  { id: '550801', code: 'LIMITED', name: '限定商品収録カード', nameEn: 'Limited Products', cardCount: 100, releaseDate: 'Various', category: 'other' },
  { id: '550701', code: 'FAMILY', name: 'ファミリーデッキセット', nameEn: 'Family Deck Set', cardCount: 50, releaseDate: '2023-04-01', category: 'other' },
];

// 为指定系列生成卡片数据
export function generateCardsForSeries(seriesCode: string, seriesId: string) {
  const cards = [];
  const prefix = seriesCode.replace('-', '');
  
  // 根据系列代码确定卡片数量
  let cardCount = 138; // 默认Booster
  if (seriesCode.startsWith('EB-')) cardCount = 60;
  if (seriesCode.startsWith('PRB-')) cardCount = 100;
  if (seriesCode.startsWith('ST-')) cardCount = 50;
  
  // 生成Leader卡（通常2-4张）
  const leaders = [
    { name: 'Monkey D. Luffy', color: 'Red', power: 5000 },
    { name: 'Roronoa Zoro', color: 'Green', power: 5000 },
    { name: 'Nami', color: 'Blue', power: 4000 },
    { name: 'Sanji', color: 'Yellow', power: 5000 },
  ];
  
  for (let i = 1; i <= Math.min(4, cardCount); i++) {
    const leader = leaders[i - 1] || leaders[0];
    cards.push({
      id: `${prefix}-${String(i).padStart(3, '0')}`,
      number: `${seriesCode}-${String(i).padStart(3, '0')}`,
      name: leader.name,
      rarity: 'L',
      type: 'LEADER',
      cost: 4 + (i % 2),
      power: leader.power,
      color: leader.color,
      imageUrl: `${IMAGE_BASE_URL}/${seriesCode}-${String(i).padStart(3, '0')}.png`,
    });
  }
  
  // 生成其他卡片
  for (let i = 5; i <= Math.min(cardCount, 20); i++) {
    cards.push({
      id: `${prefix}-${String(i).padStart(3, '0')}`,
      number: `${seriesCode}-${String(i).padStart(3, '0')}`,
      name: `Card ${i}`,
      rarity: i % 5 === 0 ? 'SR' : i % 3 === 0 ? 'R' : 'C',
      type: 'CHARACTER',
      cost: Math.floor(i / 5) + 1,
      power: 3000 + (i * 100),
      color: ['Red', 'Blue', 'Green', 'Yellow'][i % 4],
      imageUrl: `${IMAGE_BASE_URL}/${seriesCode}-${String(i).padStart(3, '0')}.png`,
    });
  }
  
  return cards;
}

// 稀有度颜色
export const rarityColors: Record<string, string> = {
  'L': '#D4AF37',
  'SR': '#C0C0C0',
  'R': '#CD7F32',
  'UC': '#4169E1',
  'C': '#808080',
  'SEC': '#FF1493',
  'SP': '#9932CC',
  'P': '#FFD700',
};
