'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, ChevronDown } from 'lucide-react';
import { habitats } from '@/data/habitats';
import { HabitatCard, CATEGORY_LABELS, CATEGORY_COLORS } from '@/components/HabitatCard';

const ALL_CATEGORIES = [
  'grass', 'flower', 'tree', 'water', 'fire', 'rock', 'sand',
  'furniture', 'food', 'ghost', 'electric', 'sky', 'fishing',
  'fossil', 'music', 'dream', 'snow', 'misc',
] as const;

const PAGE_SIZE = 24;

export default function HabitatsPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    setVisibleCount(PAGE_SIZE);
    let result = habitats;
    if (selectedCategory) {
      result = result.filter((h) => h.category === selectedCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (h) =>
          h.nameKo.toLowerCase().includes(q) ||
          h.nameEn.toLowerCase().includes(q) ||
          h.nameJa.includes(q) ||
          h.pokemonKo.some((p) => p.includes(q)) ||
          h.pokemon.some((p) => p.toLowerCase().includes(q))
      );
    }
    return result;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, selectedCategory]);

  // 카테고리별 서식지 수
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const h of habitats) {
      counts[h.category] = (counts[h.category] || 0) + 1;
    }
    return counts;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* 헤더 */}
        <div className="mb-6">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground mb-2 inline-block"
          >
            &larr; 홈으로
          </Link>
          <h1 className="text-3xl font-bold text-foreground">서식지 도감</h1>
          <p className="mt-1 text-muted-foreground">
            전체 {habitats.length}종의 서식지를 확인하세요! 아이템을 조합하여 포켓몬이 찾아오는 서식지를 만들어 보세요.
          </p>
        </div>

        {/* 서식지 시스템 안내 */}
        <div className="mb-6 rounded-xl border border-border bg-card p-5">
          <h2 className="mb-2 text-lg font-bold text-card-foreground">서식지 만드는 법</h2>
          <div className="grid gap-3 text-sm text-card-foreground/80 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-2">
              <span className="mt-0.5 text-green-500">🌿</span>
              <span>필요 아이템을 가까이 배치하면 서식지가 완성됩니다</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 text-blue-500">🔍</span>
              <span>반짝이는 포켓몬 흔적을 조사하면 서식지 힌트를 얻어요</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 text-purple-500">⏰</span>
              <span>서식지 완성 후 시간이 지나면 포켓몬이 찾아옵니다</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 text-amber-500">☁️</span>
              <span>일부 서식지는 맑음/비 등 날씨 조건이 필요해요</span>
            </div>
          </div>
        </div>

        {/* 한국어 이름 안내 */}
        <div className="mb-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-800 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-200">
          <p>
            <strong>안내:</strong> 서식지 한국어 이름은 일본어/영어 원문을 바탕으로 번역한 것입니다.
            게임 내 공식 한국어 이름과 다를 수 있으니 영어·일본어 이름도 함께 확인해 주세요.
            정확한 이름을 알고 있다면 알려주세요!
          </p>
        </div>

        {/* 검색 + 필터 */}
        <div className="mb-6 space-y-4">
          {/* 검색바 */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="서식지 이름, 포켓몬 이름으로 검색..."
              className="w-full rounded-xl border border-border bg-card py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* 카테고리 필터 */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              전체 ({habitats.length})
            </button>
            {ALL_CATEGORIES.map((cat) => {
              const count = categoryCounts[cat] || 0;
              if (count === 0) return null;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                    selectedCategory === cat
                      ? CATEGORY_COLORS[cat] || 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {CATEGORY_LABELS[cat] || cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* 결과 수 */}
        <p className="mb-4 text-sm text-muted-foreground">
          {filtered.length}개의 서식지{search || selectedCategory ? ' (필터 적용됨)' : ''}
        </p>

        {/* 서식지 카드 그리드 */}
        {filtered.length > 0 ? (
          <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.slice(0, visibleCount).map((habitat) => (
                <HabitatCard key={habitat.id} habitat={habitat} />
              ))}
            </div>
            {visibleCount < filtered.length && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <ChevronDown className="h-4 w-4" />
                  더 보기 ({filtered.length - visibleCount}개 남음)
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="rounded-xl border border-border bg-card p-12 text-center">
            <p className="text-lg font-medium text-muted-foreground">
              검색 결과가 없습니다
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              다른 검색어나 카테고리를 시도해 보세요
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
