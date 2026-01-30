'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Filter, Grid3X3, List, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockCards, Card, rarityColors, Series } from '@/lib/data';

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
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="p-2 rounded-lg hover:bg-gray-800 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-lg font-semibold">{series.name}</h1>
                <p className="text-sm text-gray-400">{series.code} • {series.cardCount} cards</p>
              </div>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search cards..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-gray-900 rounded-lg border border-gray-700
                           text-sm text-white placeholder-gray-500
                           focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-2 bg-gray-900 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors ${viewMode === 'grid' ? 'bg-gray-700 text-blue-500' : 'text-gray-500'}`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors ${viewMode === 'list' ? 'bg-gray-700 text-blue-500' : 'text-gray-500'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="border-b border-gray-800 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center gap-4">
            {/* Type Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <div className="flex space-x-1">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-3 py-1.5 text-sm rounded-full transition-all
                      ${activeFilter === filter 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-px h-6 bg-gray-700" />

            {/* Rarity Filter */}
            <div className="flex items-center space-x-1">
              {rarities.map((rarity) => (
                <button
                  key={rarity}
                  onClick={() => setActiveRarity(rarity)}
                  className={`px-3 py-1.5 text-sm rounded-full transition-all font-medium
                    ${activeRarity === rarity 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
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
      <main className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-400 text-sm">
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
                  <div className="relative bg-gray-900 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform aspect-[2/3] border border-gray-800 hover:border-gray-600">
                    {/* Card Placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="text-4xl font-bold text-blue-500 mb-2">{card.number.split('-')[1]}</div>
                        <div className="text-xs text-gray-500">{card.rarity}</div>
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
                      <span className="px-2 py-0.5 text-xs bg-black/50 rounded text-gray-300">
                        {card.type}
                      </span>
                    </div>

                    {/* Hover Info */}
                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 to-transparent
                                  translate-y-full group-hover:translate-y-0 transition-transform">
                      <h3 className="text-sm font-medium line-clamp-2">{card.name}</h3>
                      <p className="text-xs text-gray-400 mt-1">{card.number}</p>
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
                  className="flex items-center p-4 bg-gray-900 rounded-xl cursor-pointer hover:bg-gray-800 transition-colors border border-gray-800"
                >
                  <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center mr-4">
                    <span className="text-blue-500 font-bold">{card.number.split('-')[1]}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{card.name}</h3>
                    <p className="text-sm text-gray-400">{card.number} • {card.type}</p>
                  </div>
                  <span 
                    className="px-3 py-1 text-sm font-bold rounded-lg"
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
      </main>

      {/* Card Detail Modal */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-800">
                <div>
                  <h2 className="text-2xl font-bold">{selectedCard.name}</h2>
                  <p className="text-gray-400">{selectedCard.number}</p>
                </div>
                <button 
                  onClick={() => setSelectedCard(null)}
                  className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Card Image Placeholder */}
                  <div className="w-full md:w-1/3 aspect-[2/3] bg-gradient-to-br from-gray-800 to-gray-900 
                                rounded-xl flex items-center justify-center border border-gray-700">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-blue-500 mb-4">{selectedCard.number.split('-')[1]}</div>
                      <div className="text-xl text-gray-400">{selectedCard.rarity}</div>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="flex-1">
                    {/* Rarity Badge */}
                    <div className="mb-4">
                      <span 
                        className="px-4 py-2 text-sm font-bold rounded-lg inline-block"
                        style={{ 
                          backgroundColor: `${rarityColors[selectedCard.rarity]}20`,
                          color: rarityColors[selectedCard.rarity]
                        }}
                      >
                        {selectedCard.rarity} - {selectedCard.type}
                      </span>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="bg-gray-800 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Cost</div>
                        <div className="text-xl font-bold">{selectedCard.cost}</div>
                      </div>
                      {selectedCard.power && (
                        <div className="bg-gray-800 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Power</div>
                          <div className="text-xl font-bold">{selectedCard.power.toLocaleString()}</div>
                        </div>
                      )}
                      {selectedCard.counter && (
                        <div className="bg-gray-800 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Counter</div>
                          <div className="text-xl font-bold">+{selectedCard.counter}</div>
                        </div>
                      )}
                      <div className="bg-gray-800 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Color</div>
                        <div className="text-xl font-bold">{selectedCard.color}</div>
                      </div>
                      {selectedCard.attribute && (
                        <div className="bg-gray-800 rounded-lg p-4">
                          <div className="text-sm text-gray-400 mb-1">Attribute</div>
                          <div className="text-xl font-bold">{selectedCard.attribute}</div>
                        </div>
                      )}
                    </div>

                    {/* Feature */}
                    {selectedCard.feature && (
                      <div className="bg-gray-800 rounded-lg p-4 mb-4">
                        <div className="text-sm text-gray-400 mb-1">Feature</div>
                        <div className="font-medium">{selectedCard.feature}</div>
                      </div>
                    )}

                    {/* Effect */}
                    {selectedCard.effect && (
                      <div className="bg-gray-800 rounded-lg p-4 mb-4">
                        <div className="text-sm text-gray-400 mb-2">Effect</div>
                        <p className="text-sm leading-relaxed">{selectedCard.effect}</p>
                      </div>
                    )}

                    {/* Price Info (Placeholder) */}
                    <div className="border-t border-gray-700 pt-4">
                      <h3 className="text-lg font-semibold mb-3">Price Information</h3>
                      <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                        <span className="text-gray-400">集换社 (Jihuanshe)</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold">¥{selectedCard.price?.jihuanshe || '--'}</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Price trend chart coming in next update...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
