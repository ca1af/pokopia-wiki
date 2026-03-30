import type { Specialty } from "@/types";

export const specialtyList: Specialty[] = [
  {
    id: "ignite",
    name: "점화",
    nameEn: "Burn",
    pokemonType: "불",
    description:
      "불꽃으로 화로나 캠프파이어에 불을 붙이는 특기. 요리와 제련에 필수적인 능력이다.",
    effect: "화로, 캠프파이어, 횃불 등에 불을 붙일 수 있다. 유리 제작 등 제련 작업에 필요하다.",
    examplePokemon: ["파이리", "가디"],
    examplePokemonIds: ["charmander", "growlithe"],
    useCases: [
      "캠프파이어에 불 붙이기",
      "화로 점화하여 요리하기",
      "제련소에서 유리 제작",
      "횃불 켜기",
    ],
  },
  {
    id: "water",
    name: "물주기",
    nameEn: "Water",
    pokemonType: "물",
    description:
      "물을 뿌려 식물에 물을 주거나 관개 시설을 채우는 특기. 정원 관리의 핵심 능력.",
    effect: "식물에 물을 주어 성장을 돕고, 관개 시설을 채울 수 있다.",
    examplePokemon: ["꼬부기", "고라파덕"],
    examplePokemonIds: ["squirtle", "psyduck"],
    useCases: [
      "정원 식물에 물 주기",
      "관개 시설 채우기",
      "새로 심은 나무에 물 주기",
      "마른 토양 적시기",
    ],
  },
  {
    id: "cultivate",
    name: "재배",
    nameEn: "Grow",
    pokemonType: "풀",
    description:
      "식물의 성장을 촉진하는 특기. 열매 나무와 꽃의 성장 속도를 높여 준다.",
    effect: "식물의 성장 단계를 앞당기고, 수확량을 늘릴 수 있다.",
    examplePokemon: ["이상해씨", "뚜벅쵸"],
    examplePokemonIds: ["bulbasaur", "oddish"],
    useCases: [
      "열매 나무 성장 촉진",
      "꽃 빠르게 피우기",
      "농작물 성장 가속",
      "시든 식물 되살리기",
    ],
  },
  {
    id: "power-supply",
    name: "전기 공급",
    nameEn: "Generate",
    pokemonType: "전기",
    description:
      "전기를 공급하여 기계와 전자 기기를 작동시키는 특기. 라디오, 조명 등에 필요하다.",
    effect: "전자 기기와 기계에 전원을 공급하여 작동시킬 수 있다.",
    examplePokemon: ["꼬링크", "메리프"],
    examplePokemonIds: ["shinx", "mareep"],
    useCases: [
      "라디오 스테이션 전원 공급",
      "전기 조명 켜기",
      "전동 기계 작동",
      "충전이 필요한 도구 충전",
    ],
  },
  {
    id: "plant",
    name: "식물 심기",
    nameEn: "Plant",
    pokemonType: "풀",
    description:
      "새로운 식물을 심을 수 있는 특기. 서식지에 꽃, 나무, 풀을 심어 환경을 풍요롭게 만든다.",
    effect: "빈 땅에 씨앗을 심어 새로운 식물을 자라게 할 수 있다.",
    examplePokemon: ["이상해씨"],
    examplePokemonIds: ["bulbasaur"],
    useCases: [
      "서식지에 꽃 심기",
      "나무 씨앗 심기",
      "풀밭 만들기",
      "정원 꾸미기",
    ],
  },
  {
    id: "chop",
    name: "나무 베기",
    nameEn: "Chop",
    pokemonType: "노말",
    description:
      "나무를 베어 목재를 얻을 수 있는 특기. 건축에 필수적인 나무 재료를 수집할 때 사용한다.",
    effect: "나무를 베어 나무(Wood) 재료를 획득할 수 있다.",
    examplePokemon: ["리오루"],
    examplePokemonIds: ["riolu"],
    useCases: [
      "나무를 베어 목재 수집",
      "쓰러진 나무 제거",
      "길 막힌 곳 개척",
      "장작 만들기",
    ],
  },
  {
    id: "break-rock",
    name: "바위 부수기",
    nameEn: "Crush",
    pokemonType: "격투",
    description:
      "단단한 바위를 부수는 특기. 돌 재료를 얻거나 막힌 길을 열 때 사용한다.",
    effect: "바위를 부수어 돌(Stone) 재료를 획득하고, 숨겨진 아이템을 발견할 수 있다.",
    examplePokemon: ["리오루"],
    examplePokemonIds: ["riolu"],
    useCases: [
      "바위를 부수어 돌 수집",
      "막힌 동굴 입구 열기",
      "숨겨진 아이템 발견",
      "길 개척하기",
    ],
  },
  {
    id: "mine",
    name: "채굴",
    nameEn: "Mine",
    pokemonType: "바위",
    description:
      "광맥에서 광물을 캐내는 특기. 철, 석탄, 수정 등 귀중한 재료를 얻을 수 있다.",
    effect: "광맥에서 철, 석탄, 수정 등의 광물 재료를 채굴할 수 있다.",
    examplePokemon: ["리오루"],
    examplePokemonIds: ["riolu"],
    useCases: [
      "철 광맥에서 철 채굴",
      "석탄 채굴",
      "수정 채굴 (희귀)",
      "숨겨진 보석 발견",
    ],
  },
  {
    id: "swim",
    name: "수영",
    nameEn: "Swim",
    pokemonType: "물",
    description:
      "물 위를 건너갈 수 있는 특기. 강이나 연못을 건너 새로운 지역에 도달할 수 있다.",
    effect: "물 위를 이동하여 접근할 수 없었던 지역에 도달할 수 있다.",
    examplePokemon: ["꼬부기", "잉어킹"],
    examplePokemonIds: ["squirtle", "magikarp"],
    useCases: [
      "강 건너기",
      "연못 속 아이템 찾기",
      "물 건너편 지역 탐험",
      "수중 동굴 입장",
    ],
  },
  {
    id: "fly",
    name: "비행",
    nameEn: "Fly",
    pokemonType: "비행",
    description:
      "하늘을 날아 높은 곳에 도달하는 특기. 절벽 위나 산꼭대기 등 접근하기 어려운 곳에 갈 수 있다.",
    effect: "높은 곳으로 이동하여 새로운 지역이나 숨겨진 장소에 접근할 수 있다.",
    examplePokemon: [],
    examplePokemonIds: [],
    useCases: [
      "절벽 위 지역 도달",
      "산꼭대기 탐험",
      "높은 곳의 아이템 획득",
      "하늘 지역으로 이동",
    ],
  },
];

export function getSpecialtyById(id: string): Specialty | undefined {
  return specialtyList.find((s) => s.id === id);
}

export function searchSpecialties(query: string): Specialty[] {
  const q = query.toLowerCase();
  return specialtyList.filter(
    (s) =>
      s.name.toLowerCase().includes(q) ||
      s.nameEn.toLowerCase().includes(q) ||
      s.description.includes(q)
  );
}
