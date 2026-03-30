import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { habitats, getHabitatById } from '@/data/habitats';
import { HabitatRecipe } from '@/components/HabitatRecipe';
import { getPokemonSpriteUrl } from '@/data/pokemonSprites';
import { CATEGORY_LABELS, CATEGORY_COLORS } from '@/components/HabitatCard';

export function generateStaticParams() {
  return habitats.map((h) => ({ id: String(h.id) }));
}

export default async function HabitatDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const habitat = getHabitatById(Number(id));

  if (!habitat) {
    notFound();
  }

  const catLabel = CATEGORY_LABELS[habitat.category] || habitat.category;
  const catColor = CATEGORY_COLORS[habitat.category] || 'bg-gray-100 text-gray-800';

  const currentIndex = habitats.findIndex((h) => h.id === habitat.id);
  const prevHabitat = currentIndex > 0 ? habitats[currentIndex - 1] : null;
  const nextHabitat = currentIndex < habitats.length - 1 ? habitats[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-6">
        {/* 뒤로가기 */}
        <Link
          href="/habitats"
          className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-block"
        >
          &larr; 서식지 도감
        </Link>

        {/* ===== 메인 카드 ===== */}
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          {/* 게임 스크린샷 - 원본 비율 유지 */}
          <div className="relative w-full bg-gradient-to-b from-muted to-muted/50 flex items-center justify-center p-4 sm:p-6">
            <div className="relative w-full max-w-lg">
              <Image
                src={`/habitats/${habitat.id}.png`}
                alt={`${habitat.nameKo} - 게임 내 스크린샷`}
                width={600}
                height={418}
                className="w-full h-auto rounded-xl shadow-lg"
                priority
              />
            </div>
          </div>

          {/* 서식지 정보 오버레이 (이미지 아래) */}
          <div className="bg-gradient-to-b from-primary/5 to-transparent px-5 py-3">
            <div className="flex items-end justify-between">
              <div>
                <span className={`inline-block rounded-lg px-2 py-0.5 text-xs font-bold mb-1 ${catColor}`}>
                  {catLabel}
                </span>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                  {habitat.nameKo}
                </h1>
                <p className="text-sm text-muted-foreground">
                  No.{habitat.id} · {habitat.nameEn}
                </p>
              </div>
              {!habitat.verified && (
                <span className="rounded-lg bg-yellow-400/90 px-2 py-0.5 text-xs font-bold text-yellow-900">
                  번역명
                </span>
              )}
            </div>
          </div>

          {/* 설명 */}
          <div className="p-5">
            <p className="text-base leading-relaxed text-foreground/80">
              {habitat.description}
            </p>

            {/* 날씨/시간 조건 */}
            {(habitat.weatherCondition || habitat.timeCondition) && (
              <div className="mt-3 flex flex-wrap gap-2">
                {habitat.weatherCondition && (
                  <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-800">
                    {habitat.weatherCondition === 'sunny' ? '☀️ 맑은 날 필요' :
                     habitat.weatherCondition === 'rainy' ? '🌧️ 비 오는 날 필요' :
                     `🌤️ ${habitat.weatherCondition}`}
                  </span>
                )}
                {habitat.timeCondition && (
                  <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800">
                    {habitat.timeCondition === 'night' ? '🌙 밤에만' :
                     habitat.timeCondition === 'day' ? '☀️ 낮에만' :
                     `⏰ ${habitat.timeCondition}`}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* ===== 만드는 법 ===== */}
        <section className="mt-6">
          <h2 className="mb-3 text-xl font-bold text-foreground">🛠️ 만드는 법</h2>
          <HabitatRecipe items={habitat.requiredItems} itemsEn={habitat.requiredItemsEn} />
        </section>

        {/* ===== 만날 수 있는 포켓몬 ===== */}
        <section className="mt-6">
          <h2 className="mb-3 text-xl font-bold text-foreground">
            🐾 여기서 만날 수 있는 포켓몬
            {habitat.pokemonKo.length > 0 && (
              <span className="ml-2 text-base font-normal text-muted-foreground">
                {habitat.pokemonKo.length}마리
              </span>
            )}
          </h2>

          {habitat.pokemonKo.length > 0 ? (
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {habitat.pokemonKo.map((nameKo, i) => {
                const spriteUrl = getPokemonSpriteUrl(habitat.pokemon[i]);
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 transition-colors hover:bg-muted/30"
                  >
                    {spriteUrl ? (
                      <div className="relative h-10 w-10 shrink-0">
                        <Image
                          src={spriteUrl}
                          alt={nameKo}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-lg">
                        🐾
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="truncate font-bold text-card-foreground">{nameKo}</p>
                      <p className="truncate text-xs text-muted-foreground">{habitat.pokemon[i]}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="rounded-xl border-2 border-dashed border-border p-6 text-center">
              <p className="text-2xl">🔍</p>
              <p className="mt-1 text-sm text-muted-foreground">아직 조사 중이에요!</p>
            </div>
          )}
        </section>

        {/* ===== 비슷한 서식지 (이미지로!) ===== */}
        <section className="mt-6">
          <h2 className="mb-3 text-xl font-bold text-foreground">🌿 비슷한 서식지</h2>
          <div className="grid grid-cols-3 gap-2">
            {habitats
              .filter((h) => h.category === habitat.category && h.id !== habitat.id)
              .slice(0, 6)
              .map((h) => (
                <Link
                  key={h.id}
                  href={`/habitats/${h.id}`}
                  className="group overflow-hidden rounded-xl border border-border bg-card"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src={`/habitats/${h.id}.png`}
                      alt={h.nameKo}
                      fill
                      className="object-cover transition-transform duration-200 group-hover:scale-105"
                      sizes="(max-width: 768px) 33vw, 200px"
                    />
                  </div>
                  <p className="truncate p-2 text-xs font-medium text-card-foreground group-hover:text-primary">
                    {h.nameKo}
                  </p>
                </Link>
              ))}
          </div>
        </section>

        {/* ===== 이전/다음 ===== */}
        <div className="mt-8 flex items-center justify-between border-t border-border pt-4">
          {prevHabitat ? (
            <Link
              href={`/habitats/${prevHabitat.id}`}
              className="group flex items-center gap-2"
            >
              <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-muted shrink-0">
                <Image
                  src={`/habitats/${prevHabitat.id}.png`}
                  alt={prevHabitat.nameKo}
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <div className="text-sm">
                <p className="text-xs text-muted-foreground">&larr; 이전</p>
                <p className="font-medium text-foreground group-hover:text-primary">
                  {prevHabitat.nameKo}
                </p>
              </div>
            </Link>
          ) : <div />}
          {nextHabitat ? (
            <Link
              href={`/habitats/${nextHabitat.id}`}
              className="group flex items-center gap-2 text-right"
            >
              <div className="text-sm">
                <p className="text-xs text-muted-foreground">다음 &rarr;</p>
                <p className="font-medium text-foreground group-hover:text-primary">
                  {nextHabitat.nameKo}
                </p>
              </div>
              <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-muted shrink-0">
                <Image
                  src={`/habitats/${nextHabitat.id}.png`}
                  alt={nextHabitat.nameKo}
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}
