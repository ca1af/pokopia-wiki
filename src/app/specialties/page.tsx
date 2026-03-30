import Link from "next/link";
import { specialtyList } from "@/data/specialties";
import { TYPE_COLORS } from "@/data/pokemon";

export default function SpecialtiesPage() {
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
          <h1 className="text-3xl font-bold text-foreground">특기 가이드</h1>
          <p className="mt-2 text-muted-foreground">
            포켓몬들의 다양한 특기를 알아보고 포코피아 섬 생활에 활용해 보세요!
          </p>
        </div>

        {/* 특기 시스템 안내 */}
        <div className="mb-8 rounded-xl border border-border bg-card p-6">
          <h2 className="mb-3 text-lg font-bold text-card-foreground">
            특기란?
          </h2>
          <p className="mb-4 leading-relaxed text-card-foreground/80">
            특기는 포켓몬들이 가진 고유한 능력입니다. 메타몽은 해당 포켓몬으로
            변신하여 특기를 사용할 수 있으며, 재료 수집, 건축, 탐험 등
            다양한 활동에 특기가 필요합니다.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-muted p-4">
              <h3 className="mb-1 text-sm font-bold text-muted-foreground">
                사용 방법
              </h3>
              <p className="text-sm text-foreground">
                해당 특기를 가진 포켓몬에게 다가가 변신하면 특기를 사용할 수
                있습니다.
              </p>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <h3 className="mb-1 text-sm font-bold text-muted-foreground">
                활용 팁
              </h3>
              <p className="text-sm text-foreground">
                서식지에 다양한 특기를 가진 포켓몬을 모아 두면 편리합니다.
              </p>
            </div>
          </div>
        </div>

        {/* 특기 카드 그리드 */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {specialtyList.map((specialty) => (
            <div
              key={specialty.id}
              className="rounded-xl border border-border bg-card p-5 transition-all hover:shadow-md"
            >
              {/* 이름 + 타입 */}
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-xl font-bold text-card-foreground">
                  {specialty.name}
                </h2>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                    TYPE_COLORS[specialty.pokemonType] ||
                    "bg-gray-400 text-white"
                  }`}
                >
                  {specialty.pokemonType}
                </span>
              </div>

              <p className="text-sm text-muted-foreground mb-1">
                {specialty.nameEn}
              </p>

              {/* 설명 */}
              <p className="mt-3 text-sm leading-relaxed text-card-foreground/80">
                {specialty.description}
              </p>

              {/* 효과 */}
              <div className="mt-4 rounded-lg bg-muted p-3">
                <h3 className="mb-1 text-xs font-medium uppercase text-muted-foreground">
                  효과
                </h3>
                <p className="text-sm text-foreground">{specialty.effect}</p>
              </div>

              {/* 사용처 */}
              <div className="mt-4">
                <h3 className="mb-2 text-xs font-medium uppercase text-muted-foreground">
                  활용 예시
                </h3>
                <ul className="space-y-1">
                  {specialty.useCases.slice(0, 3).map((useCase, i) => (
                    <li
                      key={i}
                      className="text-sm text-card-foreground/70"
                    >
                      &bull; {useCase}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 대표 포켓몬 */}
              {specialty.examplePokemon.length > 0 && (
                <div className="mt-4">
                  <h3 className="mb-2 text-xs font-medium uppercase text-muted-foreground">
                    대표 포켓몬
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {specialty.examplePokemon.map((name, i) => (
                      <Link
                        key={i}
                        href={`/pokemon/${specialty.examplePokemonIds[i]}`}
                        className="rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground hover:bg-accent/80 transition-colors"
                      >
                        {name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {specialty.examplePokemon.length === 0 && (
                <div className="mt-4">
                  <h3 className="mb-2 text-xs font-medium uppercase text-muted-foreground">
                    대표 포켓몬
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    아직 발견되지 않았습니다. 꿈섬에서 만날 수 있을지도?
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
