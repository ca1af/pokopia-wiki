"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  materialList,
  CATEGORY_LABELS,
  CATEGORY_COLORS,
} from "@/data/materials";
import type { MaterialCategory } from "@/types";

const ALL_CATEGORIES: MaterialCategory[] = ["natural", "crafted", "special"];

export default function MaterialsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<MaterialCategory | null>(null);

  const filteredMaterials = useMemo(() => {
    return materialList.filter((m) => {
      const matchesSearch =
        !searchQuery ||
        m.name.includes(searchQuery) ||
        m.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.description.includes(searchQuery);

      const matchesCategory =
        !selectedCategory || m.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

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
          <h1 className="text-3xl font-bold text-foreground">재료 도감</h1>
          <p className="mt-2 text-muted-foreground">
            포코피아에서 수집하고 제작할 수 있는 다양한 재료들을 확인해 보세요!
          </p>
        </div>

        {/* 검색 */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="재료 이름으로 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* 카테고리 필터 */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
              selectedCategory === null
                ? "bg-foreground text-background"
                : "bg-muted text-muted-foreground hover:bg-accent"
            }`}
          >
            전체
          </button>
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setSelectedCategory(selectedCategory === cat ? null : cat)
              }
              className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                selectedCategory === cat
                  ? CATEGORY_COLORS[cat]
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>

        {/* 결과 수 */}
        <p className="mb-4 text-sm text-muted-foreground">
          {filteredMaterials.length}개의 재료를 찾았습니다
        </p>

        {/* 재료 그리드 */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredMaterials.map((material) => (
            <Link
              key={material.id}
              href={`/materials/${material.id}`}
              className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-foreground/20 hover:shadow-md"
            >
              {/* 이름 + 카테고리 */}
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-bold text-card-foreground group-hover:text-primary">
                  {material.name}
                </h2>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${CATEGORY_COLORS[material.category]}`}
                >
                  {CATEGORY_LABELS[material.category]}
                </span>
              </div>

              <p className="text-sm text-muted-foreground mb-1">
                {material.nameEn}
              </p>

              {/* 획득 방법 */}
              <div className="mt-3">
                <h3 className="mb-1 text-xs font-medium uppercase text-muted-foreground">
                  획득 방법
                </h3>
                <p className="text-sm text-card-foreground/70">
                  {material.obtainMethod}
                </p>
              </div>

              {/* 발견 지역 */}
              <div className="mt-3">
                <h3 className="mb-1 text-xs font-medium uppercase text-muted-foreground">
                  발견 지역
                </h3>
                <p className="text-sm text-card-foreground/70">
                  {material.region}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {filteredMaterials.length === 0 && (
          <div className="py-12 text-center text-muted-foreground">
            <p className="text-lg">검색 결과가 없습니다</p>
            <p className="mt-2 text-sm">다른 이름이나 카테고리로 검색해 보세요</p>
          </div>
        )}
      </div>
    </div>
  );
}
