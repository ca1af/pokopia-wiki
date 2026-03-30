import Link from 'next/link';
import Image from 'next/image';
import type { HabitatData } from '@/data/habitats';

const CATEGORY_LABELS: Record<string, string> = {
  grass: '풀숲', flower: '꽃밭', water: '물가', rock: '바위', fire: '불',
  ghost: '유령', sky: '하늘', furniture: '가구', food: '음식', fossil: '화석',
  fishing: '낚시', music: '음악', dream: '꿈', sand: '모래', snow: '눈',
  electric: '전기', tree: '나무', misc: '기타',
};

const CATEGORY_COLORS: Record<string, string> = {
  grass: 'bg-green-100 text-green-800', flower: 'bg-pink-100 text-pink-800',
  water: 'bg-blue-100 text-blue-800', rock: 'bg-stone-200 text-stone-800',
  fire: 'bg-orange-100 text-orange-800', ghost: 'bg-purple-100 text-purple-800',
  sky: 'bg-sky-100 text-sky-800', furniture: 'bg-amber-100 text-amber-800',
  food: 'bg-red-100 text-red-800', fossil: 'bg-yellow-100 text-yellow-800',
  fishing: 'bg-cyan-100 text-cyan-800', music: 'bg-indigo-100 text-indigo-800',
  dream: 'bg-violet-100 text-violet-800', sand: 'bg-yellow-100 text-yellow-800',
  snow: 'bg-slate-100 text-slate-700', electric: 'bg-yellow-200 text-yellow-900',
  tree: 'bg-emerald-100 text-emerald-800', misc: 'bg-gray-100 text-gray-800',
};

export { CATEGORY_LABELS, CATEGORY_COLORS };

interface HabitatCardProps {
  habitat: HabitatData;
  compact?: boolean;
}

export function HabitatCard({ habitat, compact = false }: HabitatCardProps) {
  const catLabel = CATEGORY_LABELS[habitat.category] || habitat.category;
  const catColor = CATEGORY_COLORS[habitat.category] || 'bg-gray-100 text-gray-800';

  return (
    <Link
      href={`/habitats/${habitat.id}`}
      className="group block overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
    >
      {/* 실제 게임 스크린샷 */}
      <div className="relative aspect-[300/209] overflow-hidden bg-muted">
        <Image
          src={`/habitats/${habitat.id}.png`}
          alt={`${habitat.nameKo} 서식지 스크린샷`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {/* 번호 뱃지 */}
        <span className="absolute top-2 left-2 rounded-lg bg-black/60 px-2 py-0.5 text-xs font-bold text-white backdrop-blur-sm">
          No.{habitat.id}
        </span>
        {/* 카테고리 뱃지 */}
        <span className={`absolute top-2 right-2 rounded-lg px-2 py-0.5 text-xs font-bold backdrop-blur-sm ${catColor}`}>
          {catLabel}
        </span>
      </div>

      {/* 정보 영역 */}
      <div className="p-3">
        {/* 이름 */}
        <h2 className="text-base font-bold text-card-foreground group-hover:text-primary transition-colors leading-tight">
          {habitat.nameKo}
        </h2>

        {/* 포켓몬 */}
        {!compact && habitat.pokemonKo.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {habitat.pokemonKo.slice(0, 4).map((name, i) => (
              <span
                key={i}
                className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
              >
                {name}
              </span>
            ))}
            {habitat.pokemonKo.length > 4 && (
              <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                +{habitat.pokemonKo.length - 4}
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
