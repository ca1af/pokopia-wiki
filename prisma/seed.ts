import { PrismaClient } from '@prisma/client'
import * as fs from 'fs'
import * as path from 'path'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Check if gamedata.json exists
  const gamedataPath = path.join(__dirname, '..', 'src', 'data', 'gamedata.json')
  let gamedata: any = null

  if (fs.existsSync(gamedataPath)) {
    console.log('Found gamedata.json, loading external data...')
    gamedata = JSON.parse(fs.readFileSync(gamedataPath, 'utf-8'))
  }

  // --- Seed Specialties ---
  const specialties = [
    {
      nameKo: '점화',
      nameEn: 'Ignite',
      description: '불꽃 타입 포켓몬이 사용하는 특기. 캠프파이어를 밝히거나 제작 스테이션을 활성화합니다.',
      type: 'fire',
      teacherPokemon: 'Charmander (파이리)',
      effects: '캠프파이어 점화, 제작 스테이션 활성화',
    },
    {
      nameKo: '물주기',
      nameEn: 'Water',
      description: '물 타입 포켓몬이 사용하는 특기. 식물에 물을 주거나 관개 시설을 채웁니다.',
      type: 'water',
      teacherPokemon: 'Squirtle (꼬부기)',
      effects: '식물에 물주기, 관개 시설 충전',
    },
    {
      nameKo: '재배',
      nameEn: 'Cultivate',
      description: '식물의 성장 단계를 1단계 앞당기는 특기입니다.',
      type: 'grass',
      teacherPokemon: null,
      effects: '식물 성장 1단계 촉진',
    },
    {
      nameKo: '전기 공급',
      nameEn: 'Power Supply',
      description: '전기 타입 포켓몬이 사용하는 특기. 기계에 전력을 공급합니다.',
      type: 'electric',
      teacherPokemon: null,
      effects: '기계 전력 공급',
    },
    {
      nameKo: '식물 심기',
      nameEn: 'Plant',
      description: '풀 타입 포켓몬이 사용하는 특기. 즉시 식물을 추가합니다.',
      type: 'grass',
      teacherPokemon: 'Bulbasaur (이상해씨)',
      effects: '즉시 식물 추가',
    },
  ]

  for (const specialty of specialties) {
    await prisma.specialty.upsert({
      where: { id: specialties.indexOf(specialty) + 1 },
      update: specialty,
      create: specialty,
    })
  }
  console.log(`Seeded ${specialties.length} specialties`)

  // --- Seed Regions ---
  const regions = [
    {
      nameKo: '블리크 비치',
      nameEn: 'Bleak Beach',
      description: '한때 태양의 항구(구 갈색시티)였으나 지금은 어둠에 둘러싸인 해변 지역입니다.',
      unlockCondition: null,
      uniqueMaterials: null,
    },
  ]

  for (const region of regions) {
    await prisma.region.upsert({
      where: { id: regions.indexOf(region) + 1 },
      update: region,
      create: region,
    })
  }
  console.log(`Seeded ${regions.length} regions`)

  // --- Seed Pokemon ---
  const pokemon = [
    {
      nameKo: '덩쿠림보 박사',
      nameEn: 'Professor Tangrowth',
      nameJp: null,
      dexNumber: 465,
      type1: 'grass',
      type2: null,
      description: '포코피아의 가이드이자 튜토리얼 진행을 담당하는 NPC 포켓몬입니다.',
      specialty: null,
      specialtyDesc: null,
      personality: '친절하고 박학다식한 교수',
      location: null,
      region: null,
      isNpc: true,
      npcRole: 'guide/tutorial',
    },
    {
      nameKo: '창백카츄',
      nameEn: 'Peakychu',
      nameJp: null,
      dexNumber: 25,
      type1: 'electric',
      type2: null,
      description: '하얀 피카츄. 포코피아의 특별한 NPC 포켓몬입니다.',
      specialty: null,
      specialtyDesc: null,
      personality: null,
      location: null,
      region: null,
      isNpc: true,
      npcRole: 'NPC',
    },
    {
      nameKo: '이끼잠만보',
      nameEn: 'Mosslax',
      nameJp: null,
      dexNumber: 143,
      type1: 'normal',
      type2: null,
      description: '이끼로 덮인 잠만보. 포코피아의 특별한 NPC 포켓몬입니다.',
      specialty: null,
      specialtyDesc: null,
      personality: '느긋하고 평화로운 성격',
      location: null,
      region: null,
      isNpc: true,
      npcRole: 'NPC',
    },
    {
      nameKo: '셰프 덴테',
      nameEn: 'Chef Dente',
      nameJp: null,
      dexNumber: null,
      type1: 'normal',
      type2: null,
      description: '포코피아의 요리 담당 NPC 포켓몬입니다.',
      specialty: null,
      specialtyDesc: null,
      personality: '열정적인 요리사',
      location: null,
      region: null,
      isNpc: true,
      npcRole: 'cooking',
    },
    {
      nameKo: 'DJ 로토무',
      nameEn: 'DJ Rotom',
      nameJp: null,
      dexNumber: 479,
      type1: 'electric',
      type2: 'ghost',
      description: '포코피아의 DJ를 담당하는 NPC 포켓몬입니다.',
      specialty: null,
      specialtyDesc: null,
      personality: '활기차고 음악을 사랑하는 성격',
      location: null,
      region: null,
      isNpc: true,
      npcRole: 'DJ',
    },
    {
      nameKo: '꼬부기',
      nameEn: 'Squirtle',
      nameJp: 'ゼニガメ',
      dexNumber: 7,
      type1: 'water',
      type2: null,
      description: '물주기 특기를 가르쳐주는 포켓몬입니다.',
      specialty: '물주기',
      specialtyDesc: '식물에 물을 주거나 관개 시설을 채웁니다.',
      personality: null,
      location: null,
      region: null,
      isNpc: false,
      npcRole: null,
    },
    {
      nameKo: '이상해씨',
      nameEn: 'Bulbasaur',
      nameJp: 'フシギダネ',
      dexNumber: 1,
      type1: 'grass',
      type2: 'poison',
      description: '식물 심기 특기를 가르쳐주는 포켓몬입니다.',
      specialty: '식물 심기',
      specialtyDesc: '즉시 식물을 추가합니다.',
      personality: null,
      location: null,
      region: null,
      isNpc: false,
      npcRole: null,
    },
    {
      nameKo: '파이리',
      nameEn: 'Charmander',
      nameJp: 'ヒトカゲ',
      dexNumber: 4,
      type1: 'fire',
      type2: null,
      description: '점화 특기를 가르쳐주는 포켓몬입니다.',
      specialty: '점화',
      specialtyDesc: '캠프파이어를 밝히거나 제작 스테이션을 활성화합니다.',
      personality: null,
      location: null,
      region: null,
      isNpc: false,
      npcRole: null,
    },
  ]

  for (const p of pokemon) {
    await prisma.pokemon.upsert({
      where: { id: pokemon.indexOf(p) + 1 },
      update: p,
      create: p,
    })
  }
  console.log(`Seeded ${pokemon.length} pokemon`)

  // --- Load from gamedata.json if available ---
  if (gamedata) {
    if (gamedata.pokemon && Array.isArray(gamedata.pokemon)) {
      for (const p of gamedata.pokemon) {
        await prisma.pokemon.create({ data: p })
      }
      console.log(`Loaded ${gamedata.pokemon.length} additional pokemon from gamedata.json`)
    }

    if (gamedata.habitats && Array.isArray(gamedata.habitats)) {
      for (const h of gamedata.habitats) {
        await prisma.habitat.create({ data: h })
      }
      console.log(`Loaded ${gamedata.habitats.length} habitats from gamedata.json`)
    }

    if (gamedata.materials && Array.isArray(gamedata.materials)) {
      for (const m of gamedata.materials) {
        await prisma.material.create({ data: m })
      }
      console.log(`Loaded ${gamedata.materials.length} materials from gamedata.json`)
    }

    if (gamedata.recipes && Array.isArray(gamedata.recipes)) {
      for (const r of gamedata.recipes) {
        await prisma.recipe.create({ data: r })
      }
      console.log(`Loaded ${gamedata.recipes.length} recipes from gamedata.json`)
    }

    if (gamedata.quests && Array.isArray(gamedata.quests)) {
      for (const q of gamedata.quests) {
        await prisma.quest.create({ data: q })
      }
      console.log(`Loaded ${gamedata.quests.length} quests from gamedata.json`)
    }

    if (gamedata.regions && Array.isArray(gamedata.regions)) {
      for (const r of gamedata.regions) {
        await prisma.region.create({ data: r })
      }
      console.log(`Loaded ${gamedata.regions.length} additional regions from gamedata.json`)
    }

    if (gamedata.dreamIslands && Array.isArray(gamedata.dreamIslands)) {
      for (const d of gamedata.dreamIslands) {
        await prisma.dreamIsland.create({ data: d })
      }
      console.log(`Loaded ${gamedata.dreamIslands.length} dream islands from gamedata.json`)
    }
  }

  console.log('Seeding complete!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
