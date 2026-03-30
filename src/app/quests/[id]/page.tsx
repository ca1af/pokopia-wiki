import Link from 'next/link';
import { notFound } from 'next/navigation';
import { quests, getQuestById, QUEST_TYPE_COLORS } from '@/data/quests';

export function generateStaticParams() {
  return quests.map((q) => ({ id: q.id }));
}

export default async function QuestDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const quest = getQuestById(id);

  if (!quest) {
    notFound();
  }

  const typeColor = QUEST_TYPE_COLORS[quest.type] || 'bg-gray-500 text-white';

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8">
        <Link href="/quests" className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-block">
          &larr; 퀘스트 가이드
        </Link>

        {/* 헤더 */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${typeColor}`}>{quest.type}</span>
            <span className="text-xs text-muted-foreground">📍 {quest.region}</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground">{quest.nameKo}</h1>
          <p className="text-sm text-muted-foreground mt-1">{quest.nameEn} · {quest.nameJa}</p>
          <p className="mt-3 text-foreground/80">{quest.description}</p>
          <p className="mt-2 text-sm text-primary font-medium">👤 의뢰: {quest.questGiver}</p>
        </div>

        {/* 목표 */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-foreground mb-3">🎯 목표</h2>
          <div className="rounded-xl border border-border bg-card p-4">
            {quest.objectives.map((obj, i) => (
              <div key={i} className="flex items-start gap-2 text-foreground/80">
                <span className="text-green-500 mt-0.5">●</span>
                <span>{obj}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 서브퀘스트 */}
        {quest.subQuests && quest.subQuests.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-bold text-foreground mb-3">📋 진행 단계</h2>
            <div className="space-y-3">
              {quest.subQuests.map((sub, i) => (
                <div key={i} className="rounded-xl border border-border bg-card p-4">
                  <div className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-bold text-card-foreground">{sub.name}</p>
                      <p className="text-sm text-muted-foreground mt-1">{sub.description}</p>
                      {sub.requirements && (
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {sub.requirements.map((req, j) => (
                            <span key={j} className="rounded-md bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                              {req}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 보상 */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-foreground mb-3">🎁 보상</h2>
          <div className="flex flex-wrap gap-2">
            {quest.rewards.map((reward, i) => (
              <span key={i} className="rounded-lg bg-green-100 px-3 py-1.5 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                {reward}
              </span>
            ))}
          </div>
        </section>

        {/* 팁 */}
        {quest.tips && quest.tips.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-bold text-foreground mb-3">💡 꿀팁</h2>
            <div className="space-y-2">
              {quest.tips.map((tip, i) => (
                <div key={i} className="flex items-start gap-2 rounded-lg border border-border bg-card p-3">
                  <span className="text-amber-500 mt-0.5">★</span>
                  <p className="text-sm text-card-foreground/80">{tip}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
