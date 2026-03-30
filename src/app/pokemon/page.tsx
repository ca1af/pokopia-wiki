"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { pokemonList, TYPE_COLORS, ALL_TYPES } from "@/data/pokemon";
import { getPokemonSpriteUrl } from "@/data/pokemonSprites";

export default function PokemonListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filteredPokemon = useMemo(() => {
    return pokemonList.filter((p) => {
      const matchesSearch =
        !searchQuery ||
        p.name.includes(searchQuery) ||
        p.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.types.some((t) => t.includes(searchQuery));

      const matchesType =
        !selectedType || p.types.includes(selectedType as (typeof p.types)[number]);

      return matchesSearch && matchesType;
    });
  }, [searchQuery, selectedType]);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* 헤더 */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground mb-2 inline-block"
          >
            &larr; 홈으로
          </Link>
          <h1 className="text-3xl font-bold text-foreground">포켓몬 도감</h1>
          <p className="mt-2 text-muted-foreground">
            포코피아에서 만날 수 있는 포켓몬들을 확인해 보세요!
          </p>
        </div>

        {/* 검색 */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="포켓몬 이름으로 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* 타입 필터 */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedType(null)}
            className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
              selectedType === null
                ? "bg-foreground text-background"
                : "bg-muted text-muted-foreground hover:bg-accent"
            }`}
          >
            전체
          </button>
          {ALL_TYPES.map((type) => (
            <button
              key={type}
              onClick={() =>
                setSelectedType(selectedType === type ? null : type)
              }
              className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                selectedType === type
                  ? TYPE_COLORS[type]
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* 결과 수 */}
        <p className="mb-4 text-sm text-muted-foreground">
          {filteredPokemon.length}마리의 포켓몬을 찾았습니다
        </p>

        {/* 포켓몬 그리드 */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filteredPokemon.map((pokemon) => (
            <Link
              key={pokemon.id}
              href={`/pokemon/${pokemon.id}`}
              className="group rounded-xl border border-border bg-card p-4 transition-all hover:border-foreground/20 hover:shadow-md"
            >
              {/* 포켓몬 이미지 */}
              {(() => {
                const spriteUrl = getPokemonSpriteUrl(pokemon.nameEn);
                return spriteUrl ? (
                  <div className="mb-3 flex justify-center">
                    <Image
                      src={spriteUrl}
                      alt={pokemon.name}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="mb-3 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted text-2xl">🐾</div>
                  </div>
                );
              })()}
              {/* 이름 */}
              <h2 className="text-lg font-bold text-card-foreground group-hover:text-primary text-center">
                {pokemon.name}
              </h2>
              <p className="text-sm text-muted-foreground text-center">{pokemon.nameEn}</p>

              {/* 타입 배지 */}
              <div className="mt-3 flex flex-wrap gap-1">
                {pokemon.types.map((type) => (
                  <span
                    key={type}
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${TYPE_COLORS[type]}`}
                  >
                    {type}
                  </span>
                ))}
              </div>

              {/* 역할/특기 */}
              <div className="mt-3 space-y-1">
                {pokemon.role === "NPC" && pokemon.npcTitle && (
                  <span className="inline-block rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                    NPC: {pokemon.npcTitle}
                  </span>
                )}
                {pokemon.role === "주인공" && (
                  <span className="inline-block rounded bg-yellow-100 px-2 py-0.5 text-xs text-yellow-800">
                    주인공
                  </span>
                )}
                {pokemon.specialty && (
                  <span className="inline-block rounded bg-blue-100 px-2 py-0.5 text-xs text-blue-800">
                    특기: {pokemon.specialty}
                  </span>
                )}
                {pokemon.nickname && (
                  <p className="text-xs text-muted-foreground">
                    별명: {pokemon.nickname}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {filteredPokemon.length === 0 && (
          <div className="py-12 text-center text-muted-foreground">
            <p className="text-lg">검색 결과가 없습니다</p>
            <p className="mt-2 text-sm">다른 이름이나 타입으로 검색해 보세요</p>
          </div>
        )}
      </div>
    </div>
  );
}
