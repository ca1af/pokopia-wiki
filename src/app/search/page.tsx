'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { pokemonList, TYPE_COLORS } from '@/data/pokemon';
import { habitats } from '@/data/habitats';
import { quests } from '@/data/quests';
import { getPokemonSpriteUrl } from '@/data/pokemonSprites';
import { SearchBar } from '@/components/SearchBar';
import { Suspense } from 'react';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const q = query.toLowerCase();

  const results = useMemo(() => {
    if (!q) return { pokemon: [], habitats: [], quests: [] };

    const matchedPokemon = pokemonList.filter(
      (p) =>
        p.name.includes(q) ||
        p.nameEn.toLowerCase().includes(q) ||
        (p.nickname && p.nickname.includes(q)) ||
        p.types.some((t) => t.includes(q))
    ).slice(0, 12);

    const matchedHabitats = habitats.filter(
      (h) =>
        h.nameKo.toLowerCase().includes(q) ||
        h.nameEn.toLowerCase().includes(q) ||
        h.pokemonKo.some((p) => p.includes(q)) ||
        h.pokemon.some((p) => p.toLowerCase().includes(q))
    ).slice(0, 12);

    const matchedQuests = quests.filter(
      (qst) =>
        qst.nameKo.includes(q) ||
        qst.nameEn.toLowerCase().includes(q) ||
        qst.region.includes(q) ||
        qst.questGiver.includes(q)
    ).slice(0, 12);

    return { pokemon: matchedPokemon, habitats: matchedHabitats, quests: matchedQuests };
  }, [q]);

  const totalCount = results.pokemon.length + results.habitats.length + results.quests.length;

  if (!q) {
    return (
      <div className="text-center py-16">
        <Search className="mx-auto h-12 w-12 text-muted-foreground/30" />
        <p className="mt-4 text-lg text-muted-foreground">검색어를 입력해 주세요</p>
      </div>
    );
  }

  if (totalCount === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-4xl">🔍</p>
        <p className="mt-4 text-lg font-medium text-muted-foreground">
          &quot;{query}&quot;에 대한 검색 결과가 없습니다
        </p>
        <p className="mt-1 text-sm text-muted-foreground">다른 검색어를 시도해 보세요</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <p className="text-sm text-muted-foreground">
        &quot;{query}&quot; 검색 결과: {totalCount}건
      </p>

      {/* 포켓몬 결과 */}
      {results.pokemon.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            🐾 포켓몬 ({results.pokemon.length})
          </h2>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {results.pokemon.map((p) => {
              const spriteUrl = getPokemonSpriteUrl(p.nameEn);
              return (
                <Link
                  key={p.id}
                  href={`/pokemon/${p.id}`}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-card p-3 hover:border-primary/30 hover:shadow-sm transition-all"
                >
                  {spriteUrl ? (
                    <Image src={spriteUrl} alt={p.name} width={40} height={40} className="object-contain shrink-0" />
                  ) : (
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-lg">🐾</div>
                  )}
                  <div className="min-w-0">
                    <p className="truncate font-bold text-card-foreground group-hover:text-primary">{p.name}</p>
                    <div className="flex gap-1 mt-0.5">
                      {p.types.map((t) => (
                        <span key={t} className={`rounded-full px-1.5 py-0.5 text-[10px] font-medium ${TYPE_COLORS[t]}`}>{t}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* 서식지 결과 */}
      {results.habitats.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            🌿 서식지 ({results.habitats.length})
          </h2>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {results.habitats.map((h) => (
              <Link
                key={h.id}
                href={`/habitats/${h.id}`}
                className="group overflow-hidden rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <div className="relative aspect-[300/209] bg-muted">
                  <Image src={`/habitats/${h.id}.png`} alt={h.nameKo} fill className="object-cover" sizes="200px" />
                </div>
                <div className="p-2">
                  <p className="truncate text-sm font-bold text-card-foreground group-hover:text-primary">{h.nameKo}</p>
                  <p className="truncate text-xs text-muted-foreground">{h.nameEn}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 퀘스트 결과 */}
      {results.quests.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            📋 퀘스트 ({results.quests.length})
          </h2>
          <div className="space-y-2">
            {results.quests.map((qst) => (
              <Link
                key={qst.id}
                href={`/quests/${qst.id}`}
                className="group block rounded-xl border border-border bg-card p-3 hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="rounded-full bg-yellow-500 px-2 py-0.5 text-[10px] font-bold text-white">{qst.type}</span>
                  <span className="text-xs text-muted-foreground">📍 {qst.region}</span>
                </div>
                <p className="font-bold text-card-foreground group-hover:text-primary">{qst.nameKo}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{qst.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="mb-6">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground mb-2 inline-block">
            &larr; 홈으로
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-4">검색</h1>
          <SearchBar />
        </div>

        <Suspense fallback={<div className="text-center py-16 text-muted-foreground">검색 중...</div>}>
          <SearchResults />
        </Suspense>
      </div>
    </div>
  );
}
