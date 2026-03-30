import Link from "next/link";
import {
  Cloud,
  Gift,
  Clock,
  Star,
  MapPin,
  Sparkles,
  BookOpen,
  Shirt,
  AlertCircle,
} from "lucide-react";
import { dreamIslandSystem } from "@/data/dreamIslands";

const ISLAND_COLORS: Record<string, string> = {
  ocean: "from-blue-100 to-cyan-50 border-blue-200",
  grassland: "from-green-100 to-emerald-50 border-green-200",
  "rocky-mountain": "from-stone-100 to-amber-50 border-stone-200",
  volcano: "from-orange-100 to-red-50 border-orange-200",
  sky: "from-violet-100 to-indigo-50 border-violet-200",
};

const ISLAND_EMOJI: Record<string, string> = {
  ocean: "🌊",
  grassland: "🌿",
  "rocky-mountain": "⛰️",
  volcano: "🌋",
  sky: "☁️",
};

export default function DreamIslandsPage() {
  const sys = dreamIslandSystem;

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 py-8">
        {/* 헤더 */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground mb-2 inline-block"
          >
            &larr; 홈으로
          </Link>
          <h1 className="text-3xl font-bold text-foreground">꿈섬 가이드</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            매일 새롭게 펼쳐지는 신비로운 모험의 세계!
          </p>
        </div>

        {/* 시스템 개요 카드 */}
        <div className="mb-8 rounded-2xl border border-border bg-gradient-to-br from-violet-50 to-indigo-50 p-6 dark:from-violet-950/30 dark:to-indigo-950/30">
          <h2 className="mb-4 text-xl font-bold text-foreground flex items-center gap-2">
            <Cloud className="h-5 w-5 text-violet-500" />
            꿈섬이란?
          </h2>
          <p className="mb-4 leading-relaxed text-foreground/80">{sys.overview}</p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-white/60 p-4 dark:bg-white/5">
              <h3 className="mb-2 font-bold text-foreground flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-500" /> 해금 조건
              </h3>
              <p className="text-sm text-foreground/70">{sys.howToUnlock}</p>
            </div>
            <div className="rounded-xl bg-white/60 p-4 dark:bg-white/5">
              <h3 className="mb-2 font-bold text-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-500" /> 방문 방법
              </h3>
              <p className="text-sm text-foreground/70">{sys.howToAccess}</p>
            </div>
            <div className="rounded-xl bg-white/60 p-4 dark:bg-white/5">
              <h3 className="mb-2 font-bold text-foreground flex items-center gap-2">
                <Clock className="h-4 w-4 text-green-500" /> 일일 제한
              </h3>
              <p className="text-sm text-foreground/70">{sys.dailyLimit}</p>
            </div>
            <div className="rounded-xl bg-white/60 p-4 dark:bg-white/5">
              <h3 className="mb-2 font-bold text-foreground flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-red-500" /> 리셋 주의
              </h3>
              <p className="text-sm text-foreground/70">{sys.resetInfo}</p>
            </div>
          </div>
        </div>

        {/* 꿈섬 목록 */}
        <h2 className="mb-6 text-2xl font-bold text-foreground">꿈섬 목록</h2>

        <div className="space-y-6 mb-10">
          {sys.islands.map((island) => (
            <div
              key={island.id}
              className={`rounded-2xl border bg-gradient-to-r p-6 ${
                ISLAND_COLORS[island.id] || "from-gray-100 to-gray-50 border-gray-200"
              } dark:from-card dark:to-card dark:border-border`}
            >
              {/* 섬 이름 + 환경 */}
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <span>{ISLAND_EMOJI[island.id] || "🏝️"}</span>
                    {island.nameKo}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {island.nameEn} · {island.nameJa}
                  </p>
                </div>
                {island.legendaryPokemon && (
                  <span className="shrink-0 rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                    ⭐ {island.legendaryPokemon.nameKo} 출현
                  </span>
                )}
              </div>

              <p className="mb-4 text-foreground/80">{island.description}</p>
              <p className="mb-4 text-sm italic text-muted-foreground">{island.environment}</p>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {/* 필요 인형 */}
                <div className="rounded-xl bg-white/70 p-4 dark:bg-white/5">
                  <h4 className="mb-2 text-sm font-bold text-foreground flex items-center gap-1.5">
                    🧸 필요 인형
                  </h4>
                  <p className="text-lg font-bold text-primary">{island.doll.nameKo}</p>
                  <p className="text-xs text-muted-foreground mb-2">
                    {island.doll.nameEn} · {island.doll.nameJa}
                  </p>
                  <div className="rounded-lg bg-blue-50 p-2.5 dark:bg-blue-950/30">
                    <p className="text-xs font-medium text-blue-800 dark:text-blue-200">
                      💡 획득 방법
                    </p>
                    <p className="mt-1 text-xs text-blue-700 dark:text-blue-300">
                      {island.doll.howToObtain}
                    </p>
                  </div>
                </div>

                {/* 주요 보상 */}
                <div className="rounded-xl bg-white/70 p-4 dark:bg-white/5">
                  <h4 className="mb-2 text-sm font-bold text-foreground flex items-center gap-1.5">
                    <Gift className="h-3.5 w-3.5" /> 주요 보상 재료
                  </h4>
                  <div className="space-y-2">
                    <div>
                      <span className="text-xs text-muted-foreground">Focus 1:</span>
                      <div className="flex flex-wrap gap-1 mt-0.5">
                        {island.focusRewards.focus1.map((r) => (
                          <span key={r.nameEn} className="rounded-md bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                            {r.nameKo}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground">Focus 2:</span>
                      <div className="flex flex-wrap gap-1 mt-0.5">
                        {island.focusRewards.focus2.map((r) => (
                          <span key={r.nameEn} className="rounded-md bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                            {r.nameKo}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground">Focus 3:</span>
                      <div className="flex flex-wrap gap-1 mt-0.5">
                        {island.focusRewards.focus3.map((r) => (
                          <span key={r.nameEn} className="rounded-md bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                            {r.nameKo}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 전설 포켓몬 + 팁 */}
                <div className="rounded-xl bg-white/70 p-4 dark:bg-white/5">
                  <h4 className="mb-2 text-sm font-bold text-foreground flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5" /> 탐험 팁
                  </h4>
                  <ul className="space-y-1.5">
                    {island.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs text-foreground/70">
                        <span className="mt-0.5 text-amber-500">★</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                  {island.legendaryPokemon && (
                    <div className="mt-3 rounded-lg bg-yellow-50 p-2 dark:bg-yellow-950/30">
                      <p className="text-xs font-medium text-yellow-800 dark:text-yellow-200">
                        ⚡ 전설의 포켓몬: {island.legendaryPokemon.nameKo} ({island.legendaryPokemon.nameEn})
                      </p>
                      <p className="mt-0.5 text-xs text-yellow-700 dark:text-yellow-300">
                        {island.legendaryPokemon.note}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 특수 인형 */}
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-bold text-foreground">특수 인형</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {sys.specialDolls.map((doll) => (
              <div
                key={doll.nameEn}
                className="rounded-xl border border-border bg-card p-4"
              >
                <h3 className="font-bold text-card-foreground">🎲 {doll.nameKo}</h3>
                <p className="text-xs text-muted-foreground">{doll.nameEn}</p>
                <p className="mt-2 text-sm text-card-foreground/80">{doll.effect}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 전설의 포켓몬 */}
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-bold text-foreground flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" /> 전설의 포켓몬
          </h2>
          <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-5 dark:border-yellow-800 dark:bg-yellow-950/30">
            <ul className="space-y-2">
              {sys.legendaryInfo.map((info, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-yellow-900 dark:text-yellow-100">
                  <span className="mt-0.5">⚡</span>
                  <span>{info}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 추가 보상 */}
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-bold text-foreground">추가 보상</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {sys.bonusRewards.map((reward, i) => {
              const icons = [BookOpen, Shirt, MapPin];
              const Icon = icons[i] || Gift;
              return (
                <div key={i} className="rounded-xl border border-border bg-card p-4">
                  <Icon className="mb-2 h-5 w-5 text-primary" />
                  <p className="text-sm text-card-foreground/80">{reward}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 재료별 꿈섬 찾기 - 역참조 */}
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-bold text-foreground">이 재료, 어디서 구하지?</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            원하는 재료를 얻으려면 어떤 꿈섬에 가야 하는지 한눈에 확인하세요!
          </p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {sys.islands.flatMap((island) =>
              [
                ...island.focusRewards.focus1,
                ...island.focusRewards.focus2,
                ...island.focusRewards.focus3,
              ].map((reward) => (
                <div
                  key={`${island.id}-${reward.nameEn}`}
                  className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-2.5"
                >
                  <div>
                    <span className="font-medium text-card-foreground">{reward.nameKo}</span>
                    <span className="ml-1.5 text-xs text-muted-foreground">({reward.nameEn})</span>
                  </div>
                  <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {ISLAND_EMOJI[island.id]} {island.nameKo}
                  </span>
                </div>
              ))
            )}
          </div>
        </section>

        {/* 인형 한눈에 보기 */}
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-bold text-foreground">인형 → 꿈섬 대응표</h2>
          <div className="overflow-x-auto">
            <table className="w-full rounded-xl border border-border bg-card text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-3 text-left font-bold">인형</th>
                  <th className="px-4 py-3 text-left font-bold">꿈섬</th>
                  <th className="px-4 py-3 text-left font-bold">주요 보상</th>
                  <th className="px-4 py-3 text-left font-bold">전설 포켓몬</th>
                  <th className="px-4 py-3 text-left font-bold">획득 방법</th>
                </tr>
              </thead>
              <tbody>
                {sys.islands.map((island) => (
                  <tr key={island.id} className="border-b border-border/50">
                    <td className="px-4 py-3 font-medium">🧸 {island.doll.nameKo}</td>
                    <td className="px-4 py-3">
                      {ISLAND_EMOJI[island.id]} {island.nameKo}
                    </td>
                    <td className="px-4 py-3 text-xs">
                      {[
                        ...island.focusRewards.focus1,
                        ...island.focusRewards.focus2,
                        ...island.focusRewards.focus3,
                      ].map((r) => r.nameKo).join(', ')}
                    </td>
                    <td className="px-4 py-3">
                      {island.legendaryPokemon ? (
                        <span className="text-yellow-600 font-medium">
                          ⭐ {island.legendaryPokemon.nameKo}
                        </span>
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">
                      {island.doll.howToObtain.substring(0, 40)}...
                    </td>
                  </tr>
                ))}
                {sys.specialDolls.map((doll) => (
                  <tr key={doll.nameEn} className="border-b border-border/50 bg-muted/20">
                    <td className="px-4 py-3 font-medium">🎲 {doll.nameKo}</td>
                    <td className="px-4 py-3 text-muted-foreground italic" colSpan={4}>
                      {doll.effect}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 팁 */}
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-bold text-foreground">꿈섬 꿀팁</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {sys.generalTips.map((tip, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
              >
                <span className="mt-0.5 text-lg">💡</span>
                <p className="text-sm text-card-foreground/80">{tip}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
