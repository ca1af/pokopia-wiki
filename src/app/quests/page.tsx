'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, MapPin, Star, CheckCircle } from 'lucide-react';
import { quests, QUEST_TYPE_COLORS, REGION_ORDER } from '@/data/quests';
import type { QuestType, Quest } from '@/data/quests';

const ALL_TYPES: QuestType[] = ['중요한 부탁', '포켓몬센터 복구', '환경 레벨 업', '입단 챌린지'];

const REGION_EMOJI: Record<string, string> = {
  '바싹바싹 황야': '🏜️',
  '울퉁불퉁 산지': '⛰️',
  '우중충한 해안': '🌊',
  '반짝반짝 부유섬': '☁️',
};

function QuestCard({ quest }: { quest: Quest }) {
  const [expanded, setExpanded] = useState(false);
  const hasSubQuests = quest.subQuests && quest.subQuests.length > 0;
  const typeColor = QUEST_TYPE_COLORS[quest.type] || 'bg-gray-500 text-white';

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      {/* 퀘스트 헤더 */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-4 sm:p-5 hover:bg-muted/30 transition-colors"
      >
        <div className="flex items-start gap-3">
          {/* 확장 아이콘 */}
          <div className="mt-1 shrink-0 text-muted-foreground">
            {hasSubQuests ? (
              expanded ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />
            ) : (
              <CheckCircle className="h-5 w-5 text-green-500" />
            )}
          </div>

          <div className="flex-1 min-w-0">
            {/* 타입 + 지역 뱃지 */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${typeColor}`}>
                {quest.type}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />
                {quest.region}
              </span>
            </div>

            {/* 퀘스트 이름 */}
            <h3 className="text-lg font-bold text-card-foreground leading-tight">
              {quest.nameKo}
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              {quest.nameEn} · {quest.nameJa}
            </p>

            {/* 설명 */}
            <p className="text-sm text-card-foreground/70 mt-2">{quest.description}</p>

            {/* 퀘스트 의뢰인 */}
            <p className="text-xs text-primary font-medium mt-2">
              👤 의뢰: {quest.questGiver}
            </p>

            {/* 서브퀘스트 있으면 미리보기 */}
            {hasSubQuests && !expanded && (
              <p className="text-xs text-muted-foreground mt-2">
                📋 서브퀘스트 {quest.subQuests!.length}개 — 탭하여 상세 보기
              </p>
            )}
          </div>
        </div>
      </button>

      {/* 확장 영역: 서브퀘스트 + 보상 + 팁 */}
      {expanded && (
        <div className="border-t border-border bg-muted/10 p-4 sm:p-5 space-y-4">
          {/* 목표 */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-2">🎯 목표</h4>
            <ul className="space-y-1">
              {quest.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="mt-0.5 text-green-500">●</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 서브퀘스트 */}
          {hasSubQuests && (
            <div>
              <h4 className="text-sm font-bold text-foreground mb-3">📋 진행 단계</h4>
              <div className="space-y-3">
                {quest.subQuests!.map((sub, i) => (
                  <div key={i} className="rounded-xl border border-border bg-card p-3">
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-bold text-sm text-card-foreground">{sub.name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{sub.description}</p>
                        {sub.requirements && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {sub.requirements.map((req, j) => (
                              <span key={j} className="rounded-md bg-amber-100 px-2 py-0.5 text-xs text-amber-800 dark:bg-amber-900 dark:text-amber-200">
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
            </div>
          )}

          {/* 보상 */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-2">🎁 보상</h4>
            <div className="flex flex-wrap gap-2">
              {quest.rewards.map((reward, i) => (
                <span key={i} className="rounded-lg bg-green-100 px-3 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                  {reward}
                </span>
              ))}
            </div>
          </div>

          {/* 팁 */}
          {quest.tips && quest.tips.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-foreground mb-2">💡 꿀팁</h4>
              <ul className="space-y-1">
                {quest.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-foreground/70">
                    <span className="mt-0.5">★</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function QuestsPage() {
  const [selectedType, setSelectedType] = useState<QuestType | null>(null);

  const filtered = selectedType ? quests.filter((q) => q.type === selectedType) : quests;

  // 지역별로 그룹화
  const groupedByRegion: Record<string, Quest[]> = {};
  for (const region of REGION_ORDER) {
    const regionQuests = filtered.filter((q) => q.region === region);
    if (regionQuests.length > 0) {
      groupedByRegion[region] = regionQuests;
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8">
        {/* 헤더 */}
        <div className="mb-6">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground mb-2 inline-block">
            &larr; 홈으로
          </Link>
          <h1 className="text-3xl font-bold text-foreground">퀘스트 가이드</h1>
          <p className="mt-1 text-muted-foreground">
            포코피아의 모든 부탁과 중요한 부탁을 확인하세요! ({quests.length}개)
          </p>
        </div>

        {/* 시스템 안내 */}
        <div className="mb-6 rounded-xl border border-border bg-card p-4">
          <h2 className="font-bold text-card-foreground mb-2">퀘스트 시스템</h2>
          <div className="grid gap-2 sm:grid-cols-2 text-sm text-card-foreground/70">
            <div className="flex items-start gap-2">
              <span className="shrink-0 rounded-full bg-yellow-500 px-1.5 py-0.5 text-[10px] font-bold text-white">!</span>
              <span><strong>중요한 부탁</strong>: 노란 말풍선, 스토리 진행 필수</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="shrink-0 rounded-full bg-pink-500 px-1.5 py-0.5 text-[10px] font-bold text-white">♥</span>
              <span><strong>포켓몬센터 복구</strong>: 각 마을 시설 재건</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="shrink-0 rounded-full bg-green-500 px-1.5 py-0.5 text-[10px] font-bold text-white">↑</span>
              <span><strong>환경 레벨 업</strong>: 마을 발전, 상점 확장</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="shrink-0 rounded-full bg-purple-500 px-1.5 py-0.5 text-[10px] font-bold text-white">★</span>
              <span><strong>입단 챌린지</strong>: 특수 수집 퀘스트</span>
            </div>
          </div>
        </div>

        {/* 타입 필터 */}
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedType(null)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
              selectedType === null ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
            }`}
          >
            전체 ({quests.length})
          </button>
          {ALL_TYPES.map((type) => {
            const count = quests.filter((q) => q.type === type).length;
            return (
              <button
                key={type}
                onClick={() => setSelectedType(selectedType === type ? null : type)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  selectedType === type ? QUEST_TYPE_COLORS[type] : 'bg-muted text-muted-foreground'
                }`}
              >
                {type} ({count})
              </button>
            );
          })}
        </div>

        {/* 지역별 퀘스트 목록 */}
        {Object.entries(groupedByRegion).map(([region, regionQuests]) => (
          <div key={region} className="mb-8">
            <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-foreground">
              <span>{REGION_EMOJI[region] || '📍'}</span>
              {region}
            </h2>
            <div className="space-y-3">
              {regionQuests.map((quest) => (
                <QuestCard key={quest.id} quest={quest} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
