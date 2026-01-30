'use client';

import { useState } from 'react';
import { TrendingUp, TrendingDown, Calendar } from 'lucide-react';

interface PricePoint {
  date: string;
  jihuanshe: number;
  snkrdunkJP?: number;
  snkrdunkUS?: number;
}

interface PriceChartProps {
  cardId: string;
  cardName: string;
}

// 模拟价格数据
const generateMockData = (): PricePoint[] => {
  const data: PricePoint[] = [];
  const basePrice = 45;
  const today = new Date();
  
  for (let i = 90; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    // 模拟价格波动
    const randomChange = (Math.random() - 0.5) * 10;
    const trend = Math.sin(i / 15) * 15; // 周期性趋势
    
    const jihuanshe = Math.max(10, basePrice + randomChange + trend);
    const snkrdunkJP = jihuanshe * 2.1 + (Math.random() - 0.5) * 20; // 日元换算
    const snkrdunkUS = jihuanshe * 0.14 + (Math.random() - 0.5) * 3; // 美元换算
    
    data.push({
      date: date.toISOString().split('T')[0],
      jihuanshe: Math.round(jihuanshe),
      snkrdunkJP: Math.round(snkrdunkJP),
      snkrdunkUS: Math.round(snkrdunkUS * 10) / 10,
    });
  }
  return data;
};

export default function PriceChart({ cardId, cardName }: PriceChartProps) {
  const [timeRange, setTimeRange] = useState<'30d' | '90d' | 'all'>('90d');
  const [showSNKRDUNK, setShowSNKRDUNK] = useState(true);
  
  const data = generateMockData();
  
  // 根据时间范围过滤数据
  const filteredData = timeRange === '30d' 
    ? data.slice(-30) 
    : timeRange === '90d' 
    ? data.slice(-90) 
    : data;
  
  // 计算价格统计
  const currentPrice = filteredData[filteredData.length - 1]?.jihuanshe || 0;
  const previousPrice = filteredData[filteredData.length - 8]?.jihuanshe || currentPrice;
  const priceChange = currentPrice - previousPrice;
  const priceChangePercent = ((priceChange / previousPrice) * 100).toFixed(1);
  
  // 计算最高最低价
  const prices = filteredData.map(d => d.jihuanshe);
  const maxPrice = Math.max(...prices);
  const minPrice = Math.min(...prices);
  
  // 简单的 SVG 折线图
  const width = 600;
  const height = 200;
  const padding = { top: 20, right: 20, bottom: 30, left: 50 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  
  // 生成路径
  const generatePath = (key: keyof PricePoint) => {
    const values = filteredData.map(d => d[key] as number);
    const max = Math.max(...values, maxPrice * 1.1);
    const min = Math.min(...values, minPrice * 0.9);
    const range = max - min || 1;
    
    return filteredData.map((point, index) => {
      const x = padding.left + (index / (filteredData.length - 1)) * chartWidth;
      const y = padding.top + chartHeight - ((point[key] as number - min) / range) * chartHeight;
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
  };
  
  // 生成区域路径
  const generateAreaPath = (key: keyof PricePoint) => {
    const values = filteredData.map(d => d[key] as number);
    const max = Math.max(...values, maxPrice * 1.1);
    const min = Math.min(...values, minPrice * 0.9);
    const range = max - min || 1;
    
    const points = filteredData.map((point, index) => {
      const x = padding.left + (index / (filteredData.length - 1)) * chartWidth;
      const y = padding.top + chartHeight - ((point[key] as number - min) / range) * chartHeight;
      return `${x} ${y}`;
    });
    
    return `M ${points[0]} L ${points.join(' L ')} L ${padding.left + chartWidth} ${padding.top + chartHeight} L ${padding.left} ${padding.top + chartHeight} Z`;
  };

  return (
    <div className="w-full">
      {/* 价格概览 */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-6">
          <div>
            <div className="text-sm text-text-secondary mb-1">Current Price (集换社)</div>
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold">¥{currentPrice}</span>
              <span className={`flex items-center text-sm ${priceChange >= 0 ? 'text-success' : 'text-danger'}`}>
                {priceChange >= 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                {priceChange >= 0 ? '+' : ''}{priceChange} ({priceChange >= 0 ? '+' : ''}{priceChangePercent}%)
              </span>
            </div>
          </div>
          <div className="w-px h-12 bg-surface-secondary" />
          <div className="text-sm">
            <div className="text-text-secondary">Range (90d)</div>
            <div className="font-medium">¥{minPrice} - ¥{maxPrice}</div>
          </div>
        </div>
        
        {/* 时间范围选择 */}
        <div className="flex items-center space-x-2 bg-surface rounded-apple-sm p-1">
          {(['30d', '90d', 'all'] as const).map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-1.5 text-sm rounded transition-all
                ${timeRange === range 
                  ? 'bg-primary text-white' 
                  : 'text-text-secondary hover:text-text-primary'}`}
            >
              {range === 'all' ? 'All Time' : range}
            </button>
          ))}
        </div>
      </div>
      
      {/* 数据源切换 */}
      <div className="flex items-center space-x-4 mb-4">
        <label className="flex items-center space-x-2 cursor-pointer">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span className="text-sm">集换社 (CNY)</span>
        </label>
        <label className="flex items-center space-x-2 cursor-pointer" onClick={() => setShowSNKRDUNK(!showSNKRDUNK)}>
          <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors
            ${showSNKRDUNK ? 'bg-success border-success' : 'border-text-tertiary'}`}>
            {showSNKRDUNK && <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
          </div>
          <span className="text-sm text-text-secondary">SNKRDUNK (JPY→CNY)</span>
        </label>
      </div>
      
      {/* SVG 图表 */}
      <div className="bg-surface rounded-apple p-4 overflow-x-auto">
        <svg 
          viewBox={`0 0 ${width} ${height}`} 
          className="w-full"
          style={{ minWidth: '500px' }}
        >
          {/* 背景网格线 */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={i}
              x1={padding.left}
              y1={padding.top + (chartHeight * i) / 4}
              x2={padding.left + chartWidth}
              y2={padding.top + (chartHeight * i) / 4}
              stroke="currentColor"
              strokeOpacity="0.1"
              className="text-text-primary"
            />
          ))}
          
          {/* 集换社价格区域 */}
          <path
            d={generateAreaPath('jihuanshe')}
            fill="currentColor"
            fillOpacity="0.1"
            className="text-primary"
          />
          
          {/* 集换社价格线 */}
          <path
            d={generatePath('jihuanshe')}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary"
          />
          
          {/* SNKRDUNK 日本线 */}
          {showSNKRDUNK && (
            <path
              d={generatePath('snkrdunkJP')}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="5,5"
              className="text-success"
            />
          )}
          
          {/* Y轴标签 */}
          {[0, 1, 2, 3, 4].map((i) => {
            const value = minPrice + ((maxPrice - minPrice) * (4 - i)) / 4;
            return (
              <text
                key={i}
                x={padding.left - 10}
                y={padding.top + (chartHeight * i) / 4 + 4}
                textAnchor="end"
                className="fill-text-tertiary text-xs"
              >
                ¥{Math.round(value)}
              </text>
            );
          })}
          
          {/* X轴标签 */}
          {[0, Math.floor(filteredData.length / 2), filteredData.length - 1].map((index) => {
            const point = filteredData[index];
            if (!point) return null;
            return (
              <text
                key={index}
                x={padding.left + (index / (filteredData.length - 1)) * chartWidth}
                y={height - 5}
                textAnchor="middle"
                className="fill-text-tertiary text-xs"
              >
                {point.date.slice(5)}
              </text>
            );
          })}
        </svg>
      </div>
      
      {/* 图例 */}
      <div className="flex items-center justify-center space-x-6 mt-4 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-0.5 bg-primary" />
          <span className="text-text-secondary">集换社 (CNY)</span>
        </div>
        {showSNKRDUNK && (
          <div className="flex items-center space-x-2">
            <div className="w-4 h-0.5 bg-success" style={{ borderTop: '2px dashed' }} />
            <span className="text-text-secondary">SNKRDUNK JP (JPY→CNY)</span>
          </div>
        )}
      </div>
      
      {/* 免责声明 */}
      <p className="text-xs text-text-tertiary mt-4 text-center">
        价格数据仅供参考，实际交易价格可能有所不同。
        SNKRDUNK 价格为日元换算人民币（汇率按 1 JPY = 0.047 CNY）。
      </p>
    </div>
  );
}
