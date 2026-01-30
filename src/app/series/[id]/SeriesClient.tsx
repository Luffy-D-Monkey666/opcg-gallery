'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Filter, Grid3X3, List, Search } from 'lucide-react';
import Link from 'next/link';
import { mockCards, Card, rarityColors, Series } from '@/lib/data';
import PriceChart from '@/components/PriceChart';

const filters = ['All', 'Leader', 'Character', 'Event', 'Stage'];
const rarities = ['All', 'L', 'SR', 'R', 'UC', 'C', 'SEC'];

interface SeriesClientProps {
  series: Series;
}

export default function SeriesClient({ series }: SeriesClientProps) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeRarity, setActiveRarity] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const filteredCards = mockCards.filter((card) => {
    const matchesFilter = activeFilter === 'All' || card.type === activeFilter.toUpperCase();
    const matchesRarity = activeRarity === 'All' || card.rarity === activeRarity;
    const matchesSearch = card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         card.number.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesRarity && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-surface-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="p-2 rounded-apple-sm hover:bg-surface transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-lg font-semibold">{series.name}</h1>
                <p className="text-sm text-text-secondary">{series.code} • {series.cardCount} cards</p>
              </div>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" />
                <input
                  type="text"
                  placeholder="Search cards..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-surface rounded-apple-sm border border-surface-secondary
                           text-sm text-text-primary placeholder-text-tertiary
                           focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-2 bg-surface rounded-apple-sm p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors ${viewMode === 'grid' ? 'bg-surface-secondary text-primary' : 'text-text-tertiary'}`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors ${viewMode === 'list' ? 'bg-surface-secondary text-primary' : 'text-text-tertiary'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="border-b border-surface-secondary/50 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center gap-4">
            {/* Type Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-text-secondary" />
              <div className="flex space-x-1">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-3 py-1.5 text-sm rounded-full transition-all
                      ${activeFilter === filter 
                        ? 'bg-primary text-white' 
                        : 'bg-surface text-text-secondary hover:bg-surface-secondary'}`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-px h-6 bg-surface-secondary" />

            {/* Rarity Filter */}
            <div className="flex items-center space-x-1">
              {rarities.map((rarity) => (
                <button
                  key={rarity}
                  onClick={() => setActiveRarity(rarity)}
                  className={`px-3 py-1.5 text-sm rounded-full transition-all font-medium
                    ${activeRarity === rarity 
                      ? 'bg-primary text-white' 
                      : 'bg-surface text-text-secondary hover:bg-surface-secondary'}`}
                  style={activeRarity === rarity ? {} : { color: rarity !== 'All' ? rarityColors[rarity] : undefined }}
                >
                  {rarity}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <span className="text-text-secondary text-sm">
              {filteredCards.length} cards found
            </span>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.03 }}
                  onClick={() => setSelectedCard(card)}
                  className="group cursor-pointer"
                >
                  <div className="relative bg-surface rounded-apple overflow-hidden card-hover aspect-[2/3]">
                    {/* Card Placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-surface-secondary to-surface flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="text-3xl font-bold text-primary mb-2">{card.number.split('-')[1]}</div>
                        <div className="text-xs text-text-tertiary">{card.rarity}</div>
                      </div>
                    </div>

                    {/* Rarity Badge */}
                    <div className="absolute top-2 right-2">
                      <span 
                        className="px-2 py-0.5 text-xs font-bold rounded"
                        style={{ 
                          backgroundColor: `${rarityColors[card.rarity]}30`,
                          color: rarityColors[card.rarity]
                        }}
                      >
                        {card.rarity}
                      </span>
                    </div>

                    {/* Type Badge */}
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-0.5 text-xs bg-surface/80 rounded text-text-secondary">
                        {card.type}
                      </span>
                    </div>

                    {/* Hover Info */}
                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 to-transparent
                                  translate-y-full group-hover:translate-y-0 transition-transform">
                      <h3 className="text-sm font-medium line-clamp-2">{card.name}</h3>
                      <p className="text-xs text-text-secondary mt-1">{card.number}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {filteredCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                  onClick={() => setSelectedCard(card)}
                  className="flex items-center p-4 bg-surface rounded-apple cursor-pointer hover:bg-surface-secondary transition-colors"
                >
                  <div className="w-12 h-12 rounded bg-surface-secondary flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">{card.number.split('-')[1]}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{card.name}</h3>
                    <p className="text-sm text-text-secondary">{card.number} • {card.type}</p>
                  </div>
                  <span 
                    className="px-3 py-1 text-sm font-bold rounded"
                    style={{ 
                      backgroundColor: `${rarityColors[card.rarity]}20`,
                      color: rarityColors[card.rarity]
                    }}
                  >
                    {card.rarity}
                  </span>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Card Detail Modal */}
      {selectedCard && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedCard(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-surface rounded-apple max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Card Image Placeholder */}
                <div className="w-full md:w-1/3 aspect-[2/3] bg-gradient-to-br from-surface-secondary to-surface 
                              rounded-apple flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-4">{selectedCard.number.split('-')[1]}</div>
                    <div className="text-lg text-text-secondary">{selectedCard.rarity}</div>
                  </div>
                </div>

                {/* Card Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold">{selectedCard.name}</h2>
                      <p className="text-text-secondary">{selectedCard.number}</p>
                    </div>
                    <span 
                      className="px-3 py-1 text-sm font-bold rounded-lg"
                      style={{ 
                        backgroundColor: `${rarityColors[selectedCard.rarity]}20`,
                        color: rarityColors[selectedCard.rarity]
                      }}
                    >
                      {selectedCard.rarity}
                    </span>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-surface-secondary rounded-apple-sm p-4">
                      <div className="text-sm text-text-secondary mb-1">Type</div>
                      <div className="font-medium">{selectedCard.type}</div>
                    </div>
                    <div className="bg-surface-secondary rounded-apple-sm p-4">
                      <div className="text-sm text-text-secondary mb-1">Cost</div>
                      <div className="font-medium">{selectedCard.cost}</div>
                    </div>
                    {selectedCard.power && (
                      <div className="bg-surface-secondary rounded-apple-sm p-4">
                        <div className="text-sm text-text-secondary mb-1">Power</div>
                        <div className="font-medium">{selectedCard.power.toLocaleString()}</div>
                      </div>
                    )}
                    {selectedCard.counter && (
                      <div className="bg-surface-secondary rounded-apple-sm p-4">
                        <div className="text-sm text-text-secondary mb-1">Counter</div>
                        <div className="font-medium">+{selectedCard.counter}</div>
                      </div>
                    )}
                    <div className="bg-surface-secondary rounded-apple-sm p-4">
                      <div className="text-sm text-text-secondary mb-1">Color</div>
                      <div className="font-medium">{selectedCard.color}</div>
                    </div>
                    {selectedCard.attribute && (
                      <div className="bg-surface-secondary rounded-apple-sm p-4">
                        <div className="text-sm text-text-secondary mb-1">Attribute</div>
                        <div className="font-medium">{selectedCard.attribute}</div>
                      </div>
                    )}
                  </div>

                  {/* Effect */}
                  {selectedCard.effect && (
                    <div className="bg-surface-secondary rounded-apple-sm p-4 mb-6">
                      <div className="text-sm text-text-secondary mb-2">Effect</div>
                      <p className="text-sm leading-relaxed">{selectedCard.effect}</p>
                    </div>
                  )}

                  {/* Price Chart */}
                  <div className="border-t border-surface-secondary pt-4">
                    <PriceChart 
                      cardId={selectedCard.id} 
                      cardName={selectedCard.name}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}
