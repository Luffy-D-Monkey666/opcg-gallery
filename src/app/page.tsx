'use client';

import { useState } from 'react';
import { Search, Globe, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { mockSeries } from '@/lib/data';

const languages = [
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh-cn', name: '简体中文', flag: '🇨🇳' },
];

export default function Home() {
  const [selectedLang, setSelectedLang] = useState('en');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredSeries, setHoveredSeries] = useState<string | null>(null);

  const filteredSeries = mockSeries.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.nameJa.includes(searchQuery)
  );

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-surface-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-apple-sm bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">OP</span>
              </div>
              <span className="text-xl font-semibold tracking-tight">OPCG Gallery</span>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary" />
                <input
                  type="text"
                  placeholder="Search series or cards..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-surface rounded-apple-sm border border-surface-secondary
                           text-text-primary placeholder-text-tertiary
                           focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-apple-sm bg-surface hover:bg-surface-secondary transition-colors">
                <Globe className="w-5 h-5 text-text-secondary" />
                <span>{languages.find((l) => l.code === selectedLang)?.flag}</span>
                <span className="hidden sm:inline text-sm">{languages.find((l) => l.code === selectedLang)?.name}</span>
              </button>
              
              <div className="absolute right-0 mt-2 w-48 bg-surface rounded-apple border border-surface-secondary shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setSelectedLang(lang.code)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-surface-secondary transition-colors first:rounded-t-apple last:rounded-b-apple
                      ${selectedLang === lang.code ? 'text-primary' : 'text-text-primary'}`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            ONE PIECE
            <span className="text-primary"> Card Game</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-secondary max-w-2xl mx-auto mb-8"
          >
            Comprehensive gallery and price tracking for collectors
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center space-x-8 text-text-tertiary"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-text-primary">{mockSeries.length}+</div>
              <div className="text-sm">Series</div>
            </div>
            <div className="w-px h-10 bg-surface-secondary" />
            <div className="text-center">
              <div className="text-2xl font-bold text-text-primary">4,000+</div>
              <div className="text-sm">Cards</div>
            </div>
            <div className="w-px h-10 bg-surface-secondary" />
            <div className="text-center">
              <div className="text-2xl font-bold text-text-primary">3</div>
              <div className="text-sm">Languages</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Series Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold">Booster Packs</h2>
            <span className="text-text-secondary text-sm">{filteredSeries.length} series</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSeries.map((series, index) => (
              <Link
                key={series.id}
                href={`/series/${series.id}`}
              >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onMouseEnter={() => setHoveredSeries(series.id)}
                onMouseLeave={() => setHoveredSeries(null)}
                className="group cursor-pointer"
              >
                <div className={`relative bg-surface rounded-apple p-6 card-hover border-2 transition-all duration-300
                  ${hoveredSeries === series.id ? 'border-primary shadow-2xl shadow-primary/20' : 'border-transparent'}`}>
                  {/* Series Code Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-bold rounded-full">
                      {series.code}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <div className="w-16 h-16 mb-4 rounded-apple-sm bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{series.code.split('-')[1]}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-1 line-clamp-2">{series.name}</h3>
                    <p className="text-sm text-text-secondary">{series.nameJa}</p>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-text-tertiary mb-4">
                    <span>{series.cardCount} cards</span>
                    <span>{series.releaseDate}</span>
                  </div>

                  {/* View Button */}
                  <div className={`flex items-center justify-between transition-all duration-300
                    ${hoveredSeries === series.id ? 'opacity-100' : 'opacity-0'}`}>
                    <span className="text-primary text-sm font-medium">View Cards</span>
                    <ChevronRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-surface-secondary py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-text-tertiary text-sm">
          <p className="mb-2">
            OPCG Gallery is a fan-made project. Not affiliated with Bandai Namco or Shueisha.
          </p>
          <p>© 2025 OPCG Gallery. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
