import Link from "next/link";
import { notFound } from "next/navigation";
import {
  materialList,
  getMaterialById,
  CATEGORY_LABELS,
  CATEGORY_COLORS,
} from "@/data/materials";

export function generateStaticParams() {
  return materialList.map((m) => ({ id: m.id }));
}

export default async function MaterialDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const material = getMaterialById(id);

  if (!material) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8">
        {/* 네비게이션 */}
        <Link
          href="/materials"
          className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-block"
        >
          &larr; 재료 도감으로 돌아가기
        </Link>

        {/* 헤더 */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-foreground">
              {material.name}
            </h1>
            <span
              className={`rounded-full px-3 py-1 text-sm font-medium ${CATEGORY_COLORS[material.category]}`}
            >
              {CATEGORY_LABELS[material.category]}
            </span>
          </div>
          <p className="mt-1 text-lg text-muted-foreground">
            {material.nameEn}
          </p>
        </div>

        {/* 설명 */}
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-bold text-foreground">설명</h2>
          <p className="leading-relaxed text-foreground/80">
            {material.description}
          </p>
        </section>

        {/* 획득 방법 */}
        <section className="mb-6">
          <h2 className="mb-3 text-xl font-bold text-foreground">획득 방법</h2>
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="text-card-foreground">{material.obtainMethod}</p>
          </div>
        </section>

        {/* 사용처 */}
        <section className="mb-6">
          <h2 className="mb-3 text-xl font-bold text-foreground">사용처</h2>
          <div className="space-y-2">
            {material.usedFor.map((use, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <p className="text-card-foreground">{use}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 발견 지역 */}
        <section className="mb-6">
          <h2 className="mb-3 text-xl font-bold text-foreground">
            발견 지역
          </h2>
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="text-card-foreground">{material.region}</p>
            <Link
              href="/habitats"
              className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
            >
              서식지 가이드 보기 &rarr;
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
