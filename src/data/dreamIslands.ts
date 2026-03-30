/**
 * Pokemon Pokopia - Dream Islands (꿈섬) Complete Data
 *
 * Data sourced from: Serebii.net, Game8 (JP/EN), community guides
 * Cross-verified across multiple sources.
 *
 * 꿈섬은 흔등풍손(Drifloon)와 친해진 뒤 인형을 보여주면 방문할 수 있는
 * 절차적 생성(프로시저럴) 특별 지역입니다.
 */

export interface DreamIslandDoll {
  nameKo: string;
  nameEn: string;
  nameJa: string;
  howToObtain: string;
  imageHint: string; // description for illustration
}

export interface DreamIslandReward {
  nameKo: string;
  nameEn: string;
  category: 'material' | 'furniture' | 'outfit' | 'lore' | 'special';
}

export interface DreamIsland {
  id: string;
  nameKo: string;
  nameEn: string;
  nameJa: string;
  description: string;
  doll: DreamIslandDoll;
  focusRewards: {
    focus1: DreamIslandReward[];
    focus2: DreamIslandReward[];
    focus3: DreamIslandReward[];
  };
  legendaryPokemon: {
    nameKo: string;
    nameEn: string;
    note: string;
  } | null;
  environment: string; // visual description
  tips: string[];
}

export interface DreamIslandSystem {
  overview: string;
  howToUnlock: string;
  howToAccess: string;
  dailyLimit: string;
  resetInfo: string;
  drfloonRole: string;
  specialDolls: {
    nameKo: string;
    nameEn: string;
    effect: string;
  }[];
  legendaryInfo: string[];
  bonusRewards: string[];
  generalTips: string[];
  islands: DreamIsland[];
}

export const dreamIslandSystem: DreamIslandSystem = {
  overview:
    '꿈섬은 포코피아에서 특별한 재료와 가구를 얻을 수 있는 절차적 생성 탐험 지역입니다. 매일 리셋되며, 인형에 따라 다른 섬을 방문할 수 있습니다.',
  howToUnlock:
    '흔등풍손(Drifloon)와 친구가 된 후 이용할 수 있습니다. 흔등풍손의 "꿈섬" 특기를 통해 이동합니다.',
  howToAccess:
    '흔등풍손에게 인형(ぬいぐるみ)을 보여주면 해당 인형에 대응하는 꿈섬으로 이동합니다. 인형 종류에 따라 방문하는 섬이 달라집니다.',
  dailyLimit: '하루에 한 종류의 꿈섬만 방문할 수 있습니다. 같은 섬은 하루에 여러 번 방문 가능합니다.',
  resetInfo:
    '꿈섬은 하루가 지나면 완전히 리셋됩니다. 섬에 남겨둔 아이템은 회수할 수 없으니, 반드시 가져올 것은 챙겨서 돌아오세요!',
  drfloonRole:
    '흔등풍손(Drifloon)가 꿈섬으로 데려다 줍니다. 서식지 #16 "따뜻한 바람을 타고" (모닥불×3)를 만들면 흔등풍손가 찾아옵니다.',

  specialDolls: [
    {
      nameKo: '메타몽 인형',
      nameEn: 'Ditto Doll',
      effect: '이전에 방문했던 꿈섬 중 랜덤한 곳으로 이동합니다.',
    },
    {
      nameKo: '대타출동 인형',
      nameEn: 'Substitute Doll',
      effect: '이전에 방문했던 꿈섬 중 랜덤한 곳으로 이동합니다.',
    },
  ],

  legendaryInfo: [
    '꿈섬 지하에서 전설의 포켓몬을 만날 수 있습니다',
    '전설의 포켓몬은 특별한 재질의 블록 뒤에 숨겨진 방에 있습니다',
    '스토리에서 먼저 만난 전설의 포켓몬만 꿈섬에 등장합니다',
    '등장하는 전설의 포켓몬: 라이코(Raikou), 앤테이(Entei), 스이쿤(Suicune), 뮤츠(Mewtwo)',
  ],

  bonusRewards: [
    '노트: 사람들이 남긴 기록이 숨겨져 있어 게임의 숨겨진 이야기를 알 수 있습니다',
    '의상: 블루(Blue), 그린(Green), 금(Ethan) 등 본편 캐릭터 기반 의상을 획득할 수 있습니다',
    '서식지 힌트: 아직 발견하지 못한 서식지에 대한 힌트를 얻을 수 있습니다',
  ],

  generalTips: [
    '꿈섬에는 야생 포켓몬이 살지 않습니다 — 전설의 포켓몬만 특별히 등장합니다',
    '섬의 지형은 절차적으로 생성되어 매번 달라집니다. 구석구석 탐험하세요!',
    '가구와 아이템은 마음대로 가져올 수 있습니다 — 어차피 리셋되니까요!',
    '지하 동굴을 잘 살펴보세요. 희귀 광석과 전설의 포켓몬이 숨어있을 수 있습니다',
    '메타몽/대타출동 인형은 이미 방문한 섬 중 랜덤이므로, 처음에는 전용 인형을 사용하세요',
    '매일 다른 인형으로 방문하면 모든 종류의 재료를 고루 모을 수 있습니다',
  ],

  islands: [
    {
      id: 'ocean',
      nameKo: '바다의 꿈섬',
      nameEn: 'Ocean Dream Island',
      nameJa: 'うなばらのゆめしま',
      description:
        '광활한 바다가 펼쳐진 꿈섬. 해변과 산호초 지대에서 바다 관련 재료를 수집할 수 있습니다.',
      doll: {
        nameKo: '피카츄 인형',
        nameEn: 'Pikachu Doll',
        nameJa: 'ピカチュウにんぎょう',
        howToObtain:
          '메인 스토리 초반에 획득합니다. 처음으로 받게 되는 인형으로, 꿈섬 시스템 튜토리얼에서 사용됩니다.',
        imageHint: 'pikachu plush toy',
      },
      focusRewards: {
        focus1: [
          { nameKo: '끈', nameEn: 'Twine', category: 'material' },
        ],
        focus2: [
          { nameKo: '바다유리 조각', nameEn: 'Seaglass Fragments', category: 'material' },
        ],
        focus3: [
          { nameKo: '조개껍데기', nameEn: 'Seashell', category: 'material' },
        ],
      },
      legendaryPokemon: {
        nameKo: '라이코',
        nameEn: 'Raikou',
        note: '스토리에서 먼저 만나야 꿈섬에 등장합니다',
      },
      environment: '해변, 산호초, 조수웅덩이가 있는 열대 바다 섬',
      tips: [
        '해변가에서 조개껍데기와 바다유리를 주울 수 있습니다',
        '수중 동굴에 희귀 재료가 숨겨져 있을 수 있습니다',
        '끈(Twine)은 크래프팅에 자주 쓰이니 넉넉히 모아두세요',
      ],
    },
    {
      id: 'grassland',
      nameKo: '광야의 꿈섬',
      nameEn: 'Grassland Dream Island',
      nameJa: 'こうやのゆめしま',
      description:
        '푸른 초원과 숲이 펼쳐진 꿈섬. 나무열매와 자연 재료를 풍부하게 수집할 수 있습니다.',
      doll: {
        nameKo: '이브이 인형',
        nameEn: 'Eevee Doll',
        nameJa: 'イーブイにんぎょう',
        howToObtain:
          '메인 스토리 진행 중 획득하거나, 탐색 중 땅에 묻힌 아이템(매장 아이템)으로 발견할 수 있습니다.',
        imageHint: 'eevee plush toy',
      },
      focusRewards: {
        focus1: [
          { nameKo: '히메리열매', nameEn: 'Leppa Berry', category: 'material' },
        ],
        focus2: [
          { nameKo: '덩굴 밧줄', nameEn: 'Vine Rope', category: 'material' },
        ],
        focus3: [
          { nameKo: '빛나는 버섯', nameEn: 'Glowing Mushrooms', category: 'material' },
        ],
      },
      legendaryPokemon: {
        nameKo: '스이쿤',
        nameEn: 'Suicune',
        note: '스토리에서 먼저 만나야 꿈섬에 등장합니다',
      },
      environment: '넓은 초원, 울창한 숲, 꽃밭이 있는 자연 섬',
      tips: [
        '나무열매는 나무를 흔들면 떨어집니다',
        '빛나는 버섯은 동굴 안 어두운 곳에서 찾을 수 있습니다',
        '덩굴 밧줄은 건축 레시피에 많이 쓰이는 중요 재료입니다',
      ],
    },
    {
      id: 'rocky-mountain',
      nameKo: '바위산의 꿈섬',
      nameEn: 'Rocky Mountain Dream Island',
      nameJa: 'いわやまのゆめしま',
      description:
        '높은 바위산과 동굴이 있는 꿈섬. 광물과 석재 관련 재료를 수집할 수 있습니다.',
      doll: {
        nameKo: '삐삐 인형',
        nameEn: 'Clefairy Doll',
        nameJa: 'ピッピにんぎょう',
        howToObtain:
          '스토리 진행 또는 특정 퀘스트 보상으로 획득할 수 있습니다. 바위산 지역 관련 퀘스트를 완료하면 얻을 수 있습니다.',
        imageHint: 'clefairy plush toy',
      },
      focusRewards: {
        focus1: [
          { nameKo: '동굴 버섯', nameEn: 'Cave Mushrooms', category: 'material' },
        ],
        focus2: [
          { nameKo: '구리 광석', nameEn: 'Copper Ore', category: 'material' },
        ],
        focus3: [
          { nameKo: '석회석', nameEn: 'Limestone', category: 'material' },
        ],
      },
      legendaryPokemon: null,
      environment: '험준한 바위산, 깊은 동굴, 광맥이 있는 산악 섬',
      tips: [
        '동굴 벽면을 채굴하면 구리 광석과 석회석을 얻을 수 있습니다',
        '동굴 버섯은 습한 동굴 바닥에서 자랍니다',
        '높은 곳에 오르면 희귀 광물을 발견할 확률이 높아집니다',
      ],
    },
    {
      id: 'volcano',
      nameKo: '화산의 꿈섬',
      nameEn: 'Volcano Dream Island',
      nameJa: 'かざんのゆめしま',
      description:
        '용암이 흐르는 뜨거운 화산 섬. 금속 광석과 희귀 광물을 수집할 수 있습니다.',
      doll: {
        nameKo: '윈디 인형',
        nameEn: 'Arcanine Doll',
        nameJa: 'ウインディにんぎょう',
        howToObtain:
          '가디(Growlithe)와 관련된 퀘스트를 완료하거나, 화산 지역 탐험에서 획득할 수 있습니다.',
        imageHint: 'arcanine plush toy',
      },
      focusRewards: {
        focus1: [
          { nameKo: '철 광석', nameEn: 'Iron Ore', category: 'material' },
        ],
        focus2: [
          { nameKo: '금 광석', nameEn: 'Gold Ore', category: 'material' },
        ],
        focus3: [
          { nameKo: '빛나는 돌', nameEn: 'Glowing Stone', category: 'material' },
        ],
      },
      legendaryPokemon: {
        nameKo: '앤테이',
        nameEn: 'Entei',
        note: '화산 꿈섬 지하에서 낮은 확률로 등장합니다',
      },
      environment: '활화산, 용암 지대, 뜨거운 온천이 있는 화산 섬',
      tips: [
        '용암 근처에서 철/금 광석을 채굴할 수 있습니다',
        '빛나는 돌은 매우 희귀한 재료로, 특수 가구 제작에 필요합니다',
        '화산 지하 동굴에 앤테이가 숨어있을 수 있습니다',
      ],
    },
    {
      id: 'sky',
      nameKo: '하늘의 꿈섬',
      nameEn: 'Sky Dream Island',
      nameJa: 'そらのゆめしま',
      description:
        '구름 위에 떠 있는 신비로운 하늘 섬. 가장 희귀한 재료와 특별한 보상을 얻을 수 있습니다.',
      doll: {
        nameKo: '망나뇽 인형',
        nameEn: 'Dragonite Doll',
        nameJa: 'カイリューにんぎょう',
        howToObtain:
          '스토리 후반부에 획득할 수 있습니다. 스파클링 스카이랜드(Sparkling Skylands) 지역 관련 퀘스트 보상입니다.',
        imageHint: 'dragonite plush toy',
      },
      focusRewards: {
        focus1: [
          { nameKo: '폐지', nameEn: 'Wastepaper', category: 'material' },
        ],
        focus2: [
          { nameKo: '포켓메탈', nameEn: 'PokéMetal', category: 'material' },
        ],
        focus3: [
          { nameKo: '수정 조각', nameEn: 'Crystal Fragment', category: 'material' },
        ],
      },
      legendaryPokemon: {
        nameKo: '뮤츠',
        nameEn: 'Mewtwo',
        note: '스토리에서 먼저 만나야 하늘 꿈섬에 등장합니다',
      },
      environment: '구름 위 공중 섬, 무지개 다리, 수정 동굴이 있는 천상의 섬',
      tips: [
        '포켓메탈은 가장 강력한 가구 제작에 필요한 최상급 재료입니다',
        '수정 조각은 특별한 장식 아이템 제작에 사용됩니다',
        '하늘 섬은 스토리 후반에 해금되므로 가장 늦게 방문하게 됩니다',
        '뮤츠는 수정 동굴 깊은 곳에서 만날 수 있습니다',
      ],
    },
  ],
};
