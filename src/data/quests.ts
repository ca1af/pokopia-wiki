/**
 * Pokemon Pokopia - Complete Quest Data
 *
 * Data sourced from: Serebii.net (Important Requests), Game8 JP (story + quest list)
 *
 * Quest types:
 * - 중요한 부탁 (Important Requests): 메인 스토리 진행에 필수, 노란 말풍선
 * - 포켓몬센터 복구: 각 지역의 포켓몬센터를 재건
 * - 환경 레벨 업: 지역 환경 레벨을 올려 상점 확장
 * - 입단 챌린지: 특수 수집 퀘스트
 */

export type QuestType = '중요한 부탁' | '포켓몬센터 복구' | '환경 레벨 업' | '입단 챌린지';

export interface SubQuest {
  name: string;
  description: string;
  requirements?: string[];
}

export interface Quest {
  id: string;
  nameKo: string;
  nameEn: string;
  nameJa: string;
  type: QuestType;
  region: string;
  regionEn: string;
  questGiver: string;
  questGiverEn: string;
  description: string;
  objectives: string[];
  subQuests?: SubQuest[];
  rewards: string[];
  storyOutcome?: string;
  tips?: string[];
}

export const QUEST_TYPE_COLORS: Record<QuestType, string> = {
  '중요한 부탁': 'bg-yellow-500 text-white',
  '포켓몬센터 복구': 'bg-pink-500 text-white',
  '환경 레벨 업': 'bg-green-500 text-white',
  '입단 챌린지': 'bg-purple-500 text-white',
};

export const REGION_ORDER = [
  '바싹바싹 황야',
  '울퉁불퉁 산지',
  '우중충한 해안',
  '반짝반짝 부유섬',
];

export const quests: Quest[] = [
  // ===== 바싹바싹 황야 (Withered Wastelands) =====
  {
    id: 'yawn-rain',
    nameKo: '하품으로 비를 내리게 하자',
    nameEn: 'Yawn Up a Storm',
    nameJa: 'あくびで雨をふらせよう',
    type: '중요한 부탁',
    region: '바싹바싹 황야',
    regionEn: 'Withered Wastelands',
    questGiver: '덩쿠림보 박사',
    questGiverEn: 'Professor Tangrowth',
    description: '건조한 광야에 비를 내리게 하여 대지를 되살려야 합니다. 마을의 습도를 100%까지 올리세요!',
    objectives: ['마을의 습도를 100%까지 올리기'],
    subQuests: [
      { name: '물대포로 수위 올리기', description: '물 타입 포켓몬의 "물주기" 특기로 물웅덩이를 채우세요', requirements: ['물 타입 포켓몬 필요'] },
      { name: '바위를 부수어 물길 만들기', description: '바위를 부수어 물이 흐르는 길을 만드세요', requirements: ['바위 부수기 특기 필요'] },
      { name: '꽃밭 심어 습도 올리기', description: '풀 타입 포켓몬의 도움으로 꽃밭을 만들어 습도를 높이세요', requirements: ['풀 타입 포켓몬 필요'] },
      { name: '야돈의 하품 사용하기', description: '습도가 충분히 오르면 야돈에게 하품을 부탁하세요', requirements: ['야돈(Slowpoke) 서식지 필요'] },
    ],
    rewards: ['트레이너 레벨: 슈퍼 달성', '특별한 이벤트 발생!'],
    // storyOutcome 제거 — 스포일러 방지
    tips: ['물 타입 포켓몬을 먼저 많이 모으세요', '꽃밭 서식지를 여러 개 만들면 습도가 빠르게 올라요', '야돈은 "파도치는 풀숲"(#5) 서식지에서 만날 수 있어요'],
  },
  {
    id: 'pokemon-center-wastelands',
    nameKo: '포켓몬센터를 고치자',
    nameEn: 'Repair Pokémon Center',
    nameJa: 'ポケモンセンターを直そう',
    type: '포켓몬센터 복구',
    region: '바싹바싹 황야',
    regionEn: 'Withered Wastelands',
    questGiver: '덩쿠림보 박사',
    questGiverEn: 'Professor Tangrowth',
    description: '광야 마을의 포켓몬센터를 복구하세요. 재료와 포켓몬의 도움이 필요합니다.',
    objectives: ['필요한 건축 재료 모으기', '건설 특기를 가진 포켓몬 모으기', '포켓몬센터 건설 완료'],
    rewards: ['광야 마을 포켓몬센터 이용 가능', '서식지 힌트 구매 가능'],
    tips: ['건설(Build) 특기를 가진 으랏차, 토쇠골 등을 먼저 모아두세요'],
  },
  {
    id: 'env-level-wastelands',
    nameKo: '환경 레벨을 더 올리자',
    nameEn: 'Raise Environment Level Further',
    nameJa: 'さらに環境レベルを上げよう',
    type: '환경 레벨 업',
    region: '바싹바싹 황야',
    regionEn: 'Withered Wastelands',
    questGiver: '덩쿠림보 박사',
    questGiverEn: 'Professor Tangrowth',
    description: '환경 레벨을 5까지 올려 마을을 더욱 풍요롭게 만드세요.',
    objectives: ['환경 레벨 5 달성'],
    rewards: ['상점 물품 확장', '폭죽 획득 (입단 챌린지 EX용)'],
    tips: ['서식지를 많이 만들고 포켓몬을 불러오면 환경 레벨이 올라요'],
  },
  {
    id: 'team-challenge',
    nameKo: '입단 챌린지(?)에 도전하자',
    nameEn: 'Do the Team Initiation Challenge',
    nameJa: '入団チャレンジ(？)に挑もう',
    type: '입단 챌린지',
    region: '바싹바싹 황야',
    regionEn: 'Withered Wastelands',
    questGiver: '??? (해안가 건물)',
    questGiverEn: '??? (Coastal Building)',
    description: '해안가의 수상한 건물에서 9개의 챌린지에 도전하세요! 각 챌린지마다 특정 아이템을 제출해야 합니다.',
    objectives: ['9개의 챌린지를 모두 클리어하기'],
    subQuests: [
      { name: '챌린지 1~6', description: '게임 진행 중 얻은 특정 아이템을 제출하세요' },
      { name: '챌린지 7', description: '각 지역의 환경 레벨 보상 아이템(냉장고, 세탁기, 게임보이 등)을 제출', requirements: ['모든 지역 환경 레벨 퀘스트 완료 필요'] },
      { name: '챌린지 8', description: '추가 특수 아이템 제출' },
      { name: '챌린지 9 (EX)', description: '폭죽을 제출하세요', requirements: ['광야 환경 레벨 보상 "폭죽" 필요'] },
    ],
    rewards: ['각 챌린지 클리어 시 배지 획득'],
    tips: ['스토리 진행에 따라 순차적으로 도전하세요', '챌린지 7은 모든 지역의 환경 레벨 퀘스트 완료가 필요해요'],
  },

  // ===== 울퉁불퉁 산지 (Rocky Ridges) =====
  {
    id: 'party-time',
    nameKo: '파티를 열자',
    nameEn: 'Time To Party',
    nameJa: 'パーティーを開こう',
    type: '중요한 부탁',
    region: '울퉁불퉁 산지',
    regionEn: 'Rocky Ridges',
    questGiver: 'DJ 로토무 & 요씽셰프',
    questGiverEn: 'DJ Rotom & Chef Dente',
    description: '산 마을의 분위기(무드)를 100까지 올리고 성대한 파티를 열어야 합니다!',
    objectives: ['마을 무드를 100까지 올리기', '파티 개최하기'],
    subQuests: [
      { name: 'DJ 로토무의 CD 찾기', description: 'DJ 로토무가 잃어버린 CD를 찾아주세요', requirements: ['탐색 특기 활용'] },
      { name: '큰 유실물 회수', description: '대형 유실물을 발견하여 되찾아 오세요', requirements: ['덩쿠림보 박사에게 감정 의뢰'] },
      { name: '로파파 서식지 만들기', description: '로파파를 불러올 수 있는 서식지를 만드세요', requirements: ['둥둥 웅덩이 서식지(#109)'] },
      { name: '파티 음식 5인분 준비', description: '재료를 모아 요씽셰프에게 가져가세요', requirements: ['히메리열매×15', '밀×15', '콩×15', '꿀×5'] },
    ],
    rewards: ['트레이너 레벨: 하이퍼 달성 (해변 퀘스트도 완료 시)'],
    // storyOutcome 제거 — 스포일러 방지
    tips: ['히메리열매는 광야의 꿈섬(이브이 인형)에서 대량으로 구할 수 있어요', 'DJ 로토무 서식지: #128 음악과 독서', '로파파 서식지(#109): 부평초×4 + 물×2'],
  },
  {
    id: 'pokemon-center-rocky',
    nameKo: '포켓몬센터를 고치자 (산)',
    nameEn: 'Repair Pokémon Center (Rocky)',
    nameJa: 'ポケモンセンターを直そう',
    type: '포켓몬센터 복구',
    region: '울퉁불퉁 산지',
    regionEn: 'Rocky Ridges',
    questGiver: '마을 포켓몬',
    questGiverEn: 'Town Pokémon',
    description: '산 마을의 포켓몬센터를 복구하세요.',
    objectives: ['건축 재료 모으기', '포켓몬센터 건설'],
    rewards: ['산 마을 포켓몬센터 이용 가능'],
  },
  {
    id: 'env-level-rocky',
    nameKo: '환경 레벨을 더 올리자 (산)',
    nameEn: 'Raise Environment Level Further (Rocky)',
    nameJa: 'さらに環境レベルを上げよう',
    type: '환경 레벨 업',
    region: '울퉁불퉁 산지',
    regionEn: 'Rocky Ridges',
    questGiver: '마을 포켓몬',
    questGiverEn: 'Town Pokémon',
    description: '산 마을의 환경 레벨을 올리세요.',
    objectives: ['환경 레벨 5 달성'],
    rewards: ['냉장고 획득 (입단 챌린지 7 필요)'],
  },

  // ===== 우중충한 해안 (Bleak Beach) =====
  {
    id: 'brighten-town',
    nameKo: '마을을 밝게 하자',
    nameEn: 'Brighten Things Up',
    nameJa: '街を明るくしよう',
    type: '중요한 부탁',
    region: '우중충한 해안',
    regionEn: 'Bleak Beach',
    questGiver: '나옹 & 깨봉이 & 창백카츄',
    questGiverEn: 'Meowth, Trubbish & Peakychu',
    description: '영원한 어둠에 잠긴 해변 마을에 빛을 되찾고, 길을 막고 있는 잠만보를 깨워야 합니다!',
    objectives: ['마을에 전기를 공급하기', '잠만보 깨우기'],
    subQuests: [
      { name: '빠모로 전기 생산', description: '빠모(Pawmi)를 찾아 전기를 만들어내세요', requirements: ['빠모 서식지 필요'] },
      { name: '잠만보 발견 & 깨우기', description: '어둠 속에 잠들어 있는 잠만보를 찾아내세요' },
      { name: '조개 램프 제작', description: '해변에서 조개를 모아 조개 램프를 만드세요', requirements: ['조개껍데기 (바다의 꿈섬)'] },
      { name: '발전소 & 용광로 연결', description: '수력 발전기, 용광로를 연결하여 마을 전체에 전기를 공급하세요', requirements: ['전기 타입 포켓몬', '수력 발전기', '용광로'] },
    ],
    rewards: ['트레이너 레벨: 하이퍼 달성 (산 퀘스트도 완료 시)'],
    // storyOutcome 제거 — 스포일러 방지
    tips: ['빠모: "선선한 꽃밭"(#56) 또는 "꼬르륵 레스토랑"(#67)', '조개껍데기: 바다의 꿈섬(피카츄 인형)', '전기 타입 포켓몬을 최대한 많이 모으세요'],
  },
  {
    id: 'pokemon-center-beach',
    nameKo: '포켓몬센터를 고치자 (해변)',
    nameEn: 'Repair Pokémon Center (Beach)',
    nameJa: 'ポケモンセンターを直そう',
    type: '포켓몬센터 복구',
    region: '우중충한 해안',
    regionEn: 'Bleak Beach',
    questGiver: '마을 포켓몬',
    questGiverEn: 'Town Pokémon',
    description: '해변 마을의 포켓몬센터를 복구하세요.',
    objectives: ['건축 재료 모으기', '포켓몬센터 건설'],
    rewards: ['해변 마을 포켓몬센터 이용 가능'],
  },
  {
    id: 'env-level-beach',
    nameKo: '환경 레벨을 더 올리자 (해변)',
    nameEn: 'Raise Environment Level Further (Beach)',
    nameJa: 'さらに環境レベルを上げよう',
    type: '환경 레벨 업',
    region: '우중충한 해안',
    regionEn: 'Bleak Beach',
    questGiver: '마을 포켓몬',
    questGiverEn: 'Town Pokémon',
    description: '해변 마을의 환경 레벨을 올리세요.',
    objectives: ['환경 레벨 5 달성'],
    rewards: ['세탁기 획득 (입단 챌린지 7 필요)'],
  },

  // ===== 반짝반짝 부유섬 (Sparkling Skylands) =====
  {
    id: 'build-building',
    nameKo: '거대 빌딩을 건축하자',
    nameEn: 'Rebuild the Huge Building',
    nameJa: '巨大ビルを建築しよう',
    type: '중요한 부탁',
    region: '반짝반짝 부유섬',
    regionEn: 'Sparkling Skylands',
    questGiver: '두드리짱(거장)',
    questGiverEn: 'Tinkaton (Tinkamaster)',
    description: '하늘 섬에 4층짜리 거대 빌딩을 건축하세요! 각 층마다 대량의 재료와 포켓몬이 필요합니다.',
    objectives: ['2층, 3층, 4층을 순서대로 건설 완료하기'],
    subQuests: [
      { name: '2층 건설', description: '첫 번째 층을 올리세요', requirements: ['콘크리트×25', '유리×10', '포켓메탈×5', '철 주괴×10', '포켓몬 6마리'] },
      { name: '3층 건설', description: '두 번째 층을 올리세요', requirements: ['콘크리트×25', '유리×10', '빛나는 돌×10', '구리 주괴×15', '포켓몬 10마리'] },
      { name: '4층 건설', description: '마지막 층을 올리세요', requirements: ['콘크리트×40', '유리×10', '종이×10', '벽돌×10', '목재×10', '포켓몬 15마리'] },
    ],
    rewards: ['트레이너 레벨: 마스터 달성'],
    // storyOutcome 제거 — 스포일러 방지
    tips: ['포켓메탈: 하늘의 꿈섬(망나뇽 인형)', '빛나는 돌: 화산의 꿈섬(윈디 인형)', '종이: 하늘의 꿈섬 "폐지" → 가공', '건설(Build) 특기 포켓몬을 최대한 많이 모아두세요'],
  },
  {
    id: 'pokemon-center-skylands',
    nameKo: '포켓몬센터를 고치자 (하늘섬)',
    nameEn: 'Repair Pokémon Center (Skylands)',
    nameJa: 'ポケモンセンターを直そう',
    type: '포켓몬센터 복구',
    region: '반짝반짝 부유섬',
    regionEn: 'Sparkling Skylands',
    questGiver: '마을 포켓몬',
    questGiverEn: 'Town Pokémon',
    description: '하늘 섬 마을의 포켓몬센터를 복구하세요.',
    objectives: ['건축 재료 모으기', '포켓몬센터 건설'],
    rewards: ['하늘 섬 마을 포켓몬센터 이용 가능'],
  },
  {
    id: 'env-level-skylands',
    nameKo: '환경 레벨을 더 올리자 (하늘섬)',
    nameEn: 'Raise Environment Level Further (Skylands)',
    nameJa: 'さらに環境レベルを上げよう',
    type: '환경 레벨 업',
    region: '반짝반짝 부유섬',
    regionEn: 'Sparkling Skylands',
    questGiver: '마을 포켓몬',
    questGiverEn: 'Town Pokémon',
    description: '하늘 섬 마을의 환경 레벨을 올리세요.',
    objectives: ['환경 레벨 5 달성'],
    rewards: ['게임보이 획득 (입단 챌린지 7 필요)'],
  },
];

export function getQuestById(id: string): Quest | undefined {
  return quests.find((q) => q.id === id);
}

export function getQuestsByType(type: QuestType): Quest[] {
  return quests.filter((q) => q.type === type);
}

export function getQuestsByRegion(region: string): Quest[] {
  return quests.filter((q) => q.region === region);
}
