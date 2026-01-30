import { allSeries, getCardsForSeries } from '@/lib/data';
import SeriesClient from './SeriesClient';

// 静态生成所有系列页面（52个）
export function generateStaticParams() {
  return allSeries.map((series) => ({
    id: series.id,
  }));
}

export default function SeriesPage({ params }: { params: { id: string } }) {
  const series = allSeries.find((s) => s.id === params.id);
  
  if (!series) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Series not found</h1>
          <a href="/" className="text-blue-500 hover:underline">
            Back to home
          </a>
        </div>
      </div>
    );
  }

  // 获取该系列的完整卡片数据
  const cards = getCardsForSeries(series.code, series.id);

  return <SeriesClient series={series} cards={cards} />;
}
