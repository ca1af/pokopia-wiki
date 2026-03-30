// 포켓몬 타입
export type PokemonType =
  | "노말"
  | "불"
  | "물"
  | "풀"
  | "전기"
  | "얼음"
  | "격투"
  | "독"
  | "땅"
  | "비행"
  | "에스퍼"
  | "벌레"
  | "바위"
  | "고스트"
  | "드래곤"
  | "악"
  | "강철"
  | "페어리";

// 포켓몬 역할
export type PokemonRole = "NPC" | "야생" | "주인공";

export interface Pokemon {
  id: string;
  name: string;
  nameEn: string;
  types: PokemonType[];
  role: PokemonRole;
  description: string;
  specialty?: string; // 특기 (예: 물주기, 점화 등)
  personality?: string;
  habitat?: string; // 서식지 ID
  location?: string; // 발견 장소 설명
  relatedQuests?: string[];
  npcTitle?: string; // NPC 역할명 (예: 박사, DJ 등)
  nickname?: string; // 별명 (예: 창백카츄)
  generation: number;
}

export interface Habitat {
  id: string;
  name: string;
  description: string;
  creationConditions: string[];
  backgroundType: string;
  region?: string;
  pokemonIds: string[];
  tips: string[];
}

export interface DreamIslandType {
  id: string;
  name: string;
  pokemonType: PokemonType;
  description: string;
  rewards: string[];
  specialPokemon?: string[];
}

export interface DreamIslandInfo {
  description: string;
  howToAccess: string;
  resetInfo: string;
  islands: DreamIslandType[];
  legendaryEncounters: string[];
  tips: string[];
}

// 재료 카테고리
export type MaterialCategory = "natural" | "crafted" | "special";

export interface Material {
  id: string;
  name: string;
  nameEn: string;
  category: MaterialCategory;
  description: string;
  obtainMethod: string;
  usedFor: string[];
  region: string;
}

// 퀘스트 타입
export type QuestType = "메인 스토리" | "부탁" | "중요한 부탁";

export interface Quest {
  id: string;
  name: string;
  type: QuestType;
  description: string;
  questGiver: string; // 포켓몬 이름
  questGiverId?: string; // 포켓몬 ID (링크용)
  objectives: string[];
  rewards: string[];
  prerequisites?: string[];
  walkthrough: string[];
  region: string;
  tips?: string[];
}

// 특기
export interface Specialty {
  id: string;
  name: string;
  nameEn: string;
  pokemonType: PokemonType;
  description: string;
  effect: string;
  examplePokemon: string[];
  examplePokemonIds: string[];
  useCases: string[];
}
