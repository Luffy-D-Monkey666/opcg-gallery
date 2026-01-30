import { mockSeries, mockCards } from '@/lib/data';

export function generateStaticParams() {
  return mockSeries.map((series) => ({
    id: series.id,
  }));
}

export default function SeriesPage({ params }: { params: { id: string } }) {
  const series = mockSeries.find((s) => s.id === params.id);
  
  if (!series) {
    return <div>Series not found</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-4">{series.name}</h1>
      <p className="text-gray-400 mb-8">{series.code} • {series.cardCount} cards</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {mockCards.map((card) => (
          <div key={card.id} className="bg-gray-900 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-500 mb-2">
              {card.number.split('-')[1]}
            </div>
            <div className="text-sm">{card.name}</div>
            <div className="text-xs text-gray-500 mt-1">{card.rarity}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
