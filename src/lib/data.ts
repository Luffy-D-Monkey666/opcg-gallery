// OPCG Gallery - 数据层
// 完整系列数据：52个系列，4242+张卡片

import { allSeries, generateCardsForSeries, rarityColors, IMAGE_BASE_URL } from './fullData';

// 导出完整系列（52个）
export { allSeries, generateCardsForSeries, rarityColors, IMAGE_BASE_URL };

// 系列接口
export interface Series {
  id: string;
  code: string;
  name: string;
  nameEn: string;
  cardCount: number;
  releaseDate: string;
  category: 'booster' | 'extra' | 'premium' | 'starter' | 'other';
}

// 卡片接口
export interface Card {
  id: string;
  number: string;
  name: string;
  rarity: 'L' | 'SR' | 'R' | 'UC' | 'C' | 'SEC' | 'SP' | 'P';
  type: 'LEADER' | 'CHARACTER' | 'EVENT' | 'STAGE';
  cost: number;
  power?: number;
  color: string;
  imageUrl: string;
  price?: {
    jihuanshe?: number;
    trend?: 'up' | 'down' | 'stable';
  };
}

// 首页显示所有系列（52个）
export const mockSeries = allSeries;

// 获取特定系列的卡片
export function getCardsForSeries(seriesCode: string, seriesId: string): Card[] {
  return generateCardsForSeries(seriesCode, seriesId) as Card[];
}

// 语种配置（7种语言）
export const languages = [
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh-cn', name: '简体中文', flag: '🇨🇳' },
  { code: 'zh-tw', name: '繁體中文', flag: '🇹🇼' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
];

// 兼容旧代码的mockCards（默认显示OP14的卡片）
export const mockCards = getCardsForSeries('OP-14', '550114');
