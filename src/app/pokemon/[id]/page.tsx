import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { pokemonList, getPokemonById, TYPE_COLORS } from "@/data/pokemon";
import { habitats } from "@/data/habitats";
import { getPokemonSpriteUrl } from "@/data/pokemonSprites";

export function generateStaticParams() {
  return pokemonList.map((p) => ({ id: p.id }));
}

export default async function PokemonDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pokemon = getPokemonById(id);

  if (!pokemon) {
    notFound();
  }

  const habitat = pokemon.habitat
    ? habitats.find((h) => h.nameEn.toLowerCase().includes(pokemon.habitat?.toLowerCase() || ''))
    : null;

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8">
        {/* 네비게이션 */}
        <Link
          href="/pokemon"
          className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-block"
        >
          &larr; 포켓몬 도감으로 돌아가기
        </Link>

        {/* 헤더 - 포켓몬 이미지 포함 */}
        <div className="mb-8">
          <div className="flex items-center gap-5">
            {(() => {
              const spriteUrl = getPokemonSpriteUrl(pokemon.nameEn);
              return spriteUrl ? (
                <div className="shrink-0 flex items-center justify-center rounded-2xl bg-muted/50 p-3">
                  <Image
                    src={spriteUrl}
                    alt={pokemon.name}
                    width={96}
                    height={96}
                    className="object-contain"
                    priority
                  />
                </div>
              ) : (
                <div className="shrink-0 flex h-24 w-24 items-center justify-center rounded-2xl bg-muted text-4xl">
                  🐾
                </div>
              );
            })()}
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold text-foreground">
                  {pokemon.name}
                </h1>
                {pokemon.nickname && (
                  <span className="rounded-full bg-accent px-3 py-1 text-sm text-accent-foreground">
                    {pokemon.nickname}
                  </span>
                )}
              </div>
              <p className="mt-1 text-lg text-muted-foreground">
                {pokemon.nameEn}
              </p>
            </div>
          </div>

          {/* 타입 배지 */}
          <div className="mt-4 flex gap-2">
            {pokemon.types.map((type) => (
              <span
                key={type}
                className={`rounded-full px-3 py-1 text-sm font-medium ${TYPE_COLORS[type]}`}
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* 역할 표시 */}
        {pokemon.role === "NPC" && pokemon.npcTitle && (
          <div className="mb-6 rounded-lg border border-border bg-card p-4">
            <span className="text-sm font-medium text-muted-foreground">
              NPC 역할
            </span>
            <p className="mt-1 text-lg font-bold text-card-foreground">
              {pokemon.npcTitle}
            </p>
          </div>
        )}

        {pokemon.role === "주인공" && (
          <div className="mb-6 rounded-lg border-2 border-yellow-300 bg-yellow-50 p-4">
            <span className="text-sm font-medium text-yellow-700">
              주인공 포켓몬
            </span>
            <p className="mt-1 text-yellow-900">
              포코피아의 모험을 이끄는 주인공입니다!
            </p>
          </div>
        )}

        {/* 설명 */}
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-bold text-foreground">설명</h2>
          <p className="leading-relaxed text-foreground/80">
            {pokemon.description}
          </p>
        </section>

        {/* 성격 */}
        {pokemon.personality && (
          <section className="mb-6">
            <h2 className="mb-2 text-xl font-bold text-foreground">성격</h2>
            <p className="text-foreground/80">{pokemon.personality}</p>
          </section>
        )}

        {/* 특기 */}
        {pokemon.specialty && (
          <section className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
            <h2 className="mb-1 text-lg font-bold text-blue-900">특기</h2>
            <p className="text-blue-800">{pokemon.specialty}</p>
          </section>
        )}

        {/* 이 포켓몬을 만날 수 있는 곳 */}
        <section className="mb-6">
          <h2 className="mb-3 text-xl font-bold text-foreground">
            이 포켓몬을 만날 수 있는 곳
          </h2>
          {pokemon.location && (
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-card-foreground">{pokemon.location}</p>
              {habitat && (
                <Link
                  href={`/habitats/${habitat.id}`}
                  className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
                >
                  {habitat.nameKo} 상세 보기 &rarr;
                </Link>
              )}
            </div>
          )}
          {!pokemon.location && (
            <p className="text-muted-foreground">
              위치 정보가 아직 확인되지 않았습니다.
            </p>
          )}
        </section>

        {/* 관련 퀘스트 */}
        {pokemon.relatedQuests && pokemon.relatedQuests.length > 0 && (
          <section className="mb-6">
            <h2 className="mb-3 text-xl font-bold text-foreground">
              관련 퀘스트
            </h2>
            <ul className="space-y-2">
              {pokemon.relatedQuests.map((quest, i) => (
                <li
                  key={i}
                  className="rounded-lg border border-border bg-card p-3 text-card-foreground"
                >
                  {quest}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 세대 정보 */}
        <section className="mb-6">
          <span className="text-sm text-muted-foreground">
            제{pokemon.generation}세대 포켓몬
          </span>
        </section>
      </div>
    </div>
  );
}
