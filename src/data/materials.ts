import type { Material, MaterialCategory } from "@/types";

export const CATEGORY_LABELS: Record<MaterialCategory, string> = {
  natural: "자연 재료",
  crafted: "가공 재료",
  special: "특수 재료",
};

export const CATEGORY_COLORS: Record<MaterialCategory, string> = {
  natural: "bg-green-500 text-white",
  crafted: "bg-orange-500 text-white",
  special: "bg-purple-500 text-white",
};

export const materialList: Material[] = [
  {
    id: "wood",
    name: "나무",
    nameEn: "Wood",
    category: "natural",
    description:
      "포코피아 섬 곳곳에서 얻을 수 있는 기본 건축 재료. 나무를 베면 획득할 수 있다.",
    obtainMethod: "나무 베기 특기를 가진 포켓몬으로 나무를 베어 획득",
    usedFor: ["울타리 제작", "나무 가구 제작", "집 건축", "다리 건설"],
    region: "포코피아 섬 전역 (숲, 정원 서식지)",
  },
  {
    id: "stone",
    name: "돌",
    nameEn: "Stone",
    category: "natural",
    description:
      "단단한 바위에서 얻을 수 있는 재료. 다양한 건축물의 기초가 된다.",
    obtainMethod: "바위 부수기 특기를 가진 포켓몬으로 바위를 부수어 획득",
    usedFor: ["돌담 제작", "돌 가구 제작", "건물 기초", "포장 도로"],
    region: "산악 서식지, 포코피아 섬 북쪽",
  },
  {
    id: "iron",
    name: "철",
    nameEn: "Iron",
    category: "natural",
    description:
      "Rocky Ridges(바위 산등성이)에서 채굴할 수 있는 금속 재료. 튼튼한 도구와 건축물에 사용된다.",
    obtainMethod: "채굴 특기를 가진 포켓몬으로 바위 산등성이에서 채굴",
    usedFor: ["철제 가구 제작", "도구 제작", "기계 부품", "튼튼한 울타리"],
    region: "바위 산등성이 (Rocky Ridges)",
  },
  {
    id: "grass-bundle",
    name: "풀다발",
    nameEn: "Grass Bundle",
    category: "natural",
    description:
      "초원에서 풀을 베어 모은 다발. 그대로 사용하거나 천으로 가공할 수 있다.",
    obtainMethod: "초원이나 풀밭에서 풀 베기로 획득",
    usedFor: ["천 제작 (가공)", "짚 지붕 제작", "건초 장식", "둥지 만들기"],
    region: "초원 서식지, 정원 서식지",
  },
  {
    id: "berries",
    name: "나무열매",
    nameEn: "Berries",
    category: "natural",
    description:
      "열매 나무에서 수확할 수 있는 맛있는 열매. 요리 재료로 사용되며 포켓몬에게 선물할 수도 있다.",
    obtainMethod: "열매 나무에서 수확하거나 재배 특기로 키워서 획득",
    usedFor: ["요리 재료", "포켓몬 선물", "염료 제작", "열매 잼 만들기"],
    region: "포코피아 섬 전역 (열매 나무 위치)",
  },
  {
    id: "clay",
    name: "점토",
    nameEn: "Clay",
    category: "natural",
    description:
      "물가 근처에서 파낼 수 있는 부드러운 흙. 도자기나 벽돌을 만들 때 사용한다.",
    obtainMethod: "연못이나 강가 근처에서 땅 파기로 획득",
    usedFor: ["도자기 제작", "벽돌 제작", "화분 만들기", "점토 장식"],
    region: "연못 서식지, 강가 지역",
  },
  {
    id: "crystal",
    name: "수정",
    nameEn: "Crystal",
    category: "special",
    description:
      "반짝이는 하늘 땅(Sparkling Skylands)에서만 발견되는 희귀한 보석. 특별한 장식과 도구에 사용된다.",
    obtainMethod: "반짝이는 하늘 땅(Sparkling Skylands)에서 채굴",
    usedFor: ["특별 장식 제작", "고급 가구 제작", "빛나는 도구", "수정 램프"],
    region: "반짝이는 하늘 땅 (Sparkling Skylands)",
  },
  {
    id: "sand",
    name: "모래",
    nameEn: "Sand",
    category: "natural",
    description:
      "Bleak Beach(쓸쓸한 해변)에서 얻을 수 있는 고운 모래. 유리 제작의 원료가 된다.",
    obtainMethod: "쓸쓸한 해변(Bleak Beach)에서 모래 파기로 획득",
    usedFor: ["유리 제작 (가공)", "모래 장식", "모래성 가구", "해변 꾸미기"],
    region: "쓸쓸한 해변 (Bleak Beach)",
  },
  {
    id: "mushroom",
    name: "버섯",
    nameEn: "Mushroom",
    category: "natural",
    description:
      "숲의 그늘진 곳에서 자라는 버섯. 요리 재료로 사용하거나 장식으로 활용할 수 있다.",
    obtainMethod: "숲 지역의 그늘진 곳에서 채집",
    usedFor: ["요리 재료", "버섯 장식", "버섯 램프 제작", "포켓몬 간식"],
    region: "유령의 숲 서식지, 정원 서식지 숲 지역",
  },
  {
    id: "flower",
    name: "꽃",
    nameEn: "Flower",
    category: "natural",
    description:
      "꽃밭에서 피는 아름다운 꽃. 장식용으로 인기가 많으며 염료 재료로도 쓰인다.",
    obtainMethod: "꽃밭 서식지에서 채집하거나 식물 심기로 재배",
    usedFor: ["꽃 장식 제작", "화관 만들기", "염료 재료", "꽃다발 선물"],
    region: "꽃밭 서식지, 정원 서식지",
  },
  {
    id: "moss",
    name: "이끼",
    nameEn: "Moss",
    category: "natural",
    description:
      "축축한 곳에서 자라는 부드러운 이끼. 자연스러운 장식이나 특별한 제작에 사용된다.",
    obtainMethod: "습지나 동굴 입구 등 축축한 곳에서 채집",
    usedFor: ["이끼 장식", "자연풍 가구 제작", "포켓몬 둥지 재료", "정원 꾸미기"],
    region: "연못 서식지 주변, 동굴 입구",
  },
  {
    id: "coal",
    name: "석탄",
    nameEn: "Coal",
    category: "natural",
    description:
      "동굴이나 광산에서 채굴할 수 있는 검은 돌. 연료로 사용하여 제련이나 요리에 활용한다.",
    obtainMethod: "동굴이나 광산에서 채굴 특기로 획득",
    usedFor: ["화로 연료", "제련소 연료", "횃불 제작", "캠프파이어 재료"],
    region: "산악 서식지 동굴, 바위 산등성이",
  },
  {
    id: "paint",
    name: "물감",
    nameEn: "Paint",
    category: "special",
    description:
      "루브도(Smeargle) NPC에게서 얻을 수 있는 특수 재료. 서식지와 가구에 색을 입히는 데 사용한다.",
    obtainMethod: "루브도 NPC(아틀리에)에게서 구매하거나 퀘스트 보상으로 획득",
    usedFor: ["가구 색칠하기", "서식지 배경 꾸미기", "간판 제작", "벽화 그리기"],
    region: "마을 아틀리에 (루브도 NPC)",
  },
  {
    id: "fabric",
    name: "천",
    nameEn: "Fabric",
    category: "crafted",
    description:
      "풀다발을 가공하여 만든 부드러운 천. 쿠션이나 커튼 등 생활 가구 제작에 필요하다.",
    obtainMethod: "풀다발을 작업대에서 가공하여 제작",
    usedFor: ["쿠션 제작", "커튼 제작", "텐트 만들기", "포켓몬 옷 제작"],
    region: "작업대에서 제작 (풀다발 필요)",
  },
  {
    id: "glass",
    name: "유리",
    nameEn: "Glass",
    category: "crafted",
    description:
      "모래를 불로 녹여 만든 투명한 재료. 창문이나 유리 장식 제작에 사용한다.",
    obtainMethod: "모래 + 화로(점화 필요)로 제작",
    usedFor: ["유리창 제작", "유리병 제작", "유리 장식", "온실 건축"],
    region: "작업대에서 제작 (모래 + 점화 필요)",
  },
];

export function getMaterialById(id: string): Material | undefined {
  return materialList.find((m) => m.id === id);
}

export function getMaterialsByCategory(category: MaterialCategory): Material[] {
  return materialList.filter((m) => m.category === category);
}

export function searchMaterials(query: string): Material[] {
  const q = query.toLowerCase();
  return materialList.filter(
    (m) =>
      m.name.toLowerCase().includes(q) ||
      m.nameEn.toLowerCase().includes(q) ||
      m.description.includes(q)
  );
}
