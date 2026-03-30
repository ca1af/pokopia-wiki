import Link from "next/link";
import {
  BookOpen,
  TreePine,
  Cloud,
  Gem,
  Scroll,
  Star,
  PawPrint,
  MapPin,
  Palmtree,
  Hammer,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SearchBar } from "@/components/SearchBar";

const categories = [
  {
    href: "/pokemon",
    icon: BookOpen,
    title: "포켓몬 도감",
    description: "포코피아에 등장하는 모든 포켓몬 정보",
    count: "300종",
    color: "bg-type-grass/10 text-type-grass dark:bg-type-grass/20",
    iconColor: "text-type-grass",
  },
  {
    href: "/habitats",
    icon: TreePine,
    title: "서식지",
    description: "포켓몬들이 살고 있는 다양한 지역",
    count: "5개 지역",
    color: "bg-type-ground/10 text-type-ground dark:bg-type-ground/20",
    iconColor: "text-type-ground",
  },
  {
    href: "/dream-islands",
    icon: Cloud,
    title: "꿈섬",
    description: "특별한 포켓몬을 만날 수 있는 신비로운 섬",
    count: "탐험 중",
    color: "bg-type-flying/10 text-type-flying dark:bg-type-flying/20",
    iconColor: "text-type-flying",
  },
  {
    href: "/materials",
    icon: Gem,
    title: "재료",
    description: "건축과 크래프트에 필요한 재료 목록",
    count: "수집 가능",
    color: "bg-type-rock/10 text-type-rock dark:bg-type-rock/20",
    iconColor: "text-type-rock",
  },
  {
    href: "/quests",
    icon: Scroll,
    title: "퀘스트",
    description: "마을 주민들의 의뢰와 메인 스토리",
    count: "진행 중",
    color: "bg-type-psychic/10 text-type-psychic dark:bg-type-psychic/20",
    iconColor: "text-type-psychic",
  },
  {
    href: "/specialties",
    icon: Star,
    title: "특기",
    description: "포켓몬과 함께 배우는 다양한 능력",
    count: "다양한 특기",
    color: "bg-type-electric/10 text-type-electric dark:bg-type-electric/20",
    iconColor: "text-type-electric",
  },
];

const stats = [
  {
    icon: PawPrint,
    label: "등장 포켓몬",
    value: "300종",
  },
  {
    icon: MapPin,
    label: "탐험 지역",
    value: "5개 지역",
  },
  {
    icon: Palmtree,
    label: "꿈섬",
    value: "발견 대기",
  },
  {
    icon: Hammer,
    label: "건축 키트",
    value: "50종",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-pokopia-cream via-pokopia-yellow-light to-background dark:from-primary/10 dark:via-accent dark:to-background">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-[10%] text-6xl animate-bounce-gentle">
            🌱
          </div>
          <div
            className="absolute top-20 right-[15%] text-5xl animate-bounce-gentle"
            style={{ animationDelay: "0.5s" }}
          >
            🌸
          </div>
          <div
            className="absolute bottom-16 left-[20%] text-4xl animate-bounce-gentle"
            style={{ animationDelay: "1s" }}
          >
            🍃
          </div>
          <div
            className="absolute bottom-10 right-[25%] text-5xl animate-bounce-gentle"
            style={{ animationDelay: "0.7s" }}
          >
            🌼
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <div className="animate-fade-in">
            <div className="text-5xl sm:text-6xl mb-6">🏡</div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              포켓몬 포코피아 위키에
              <br className="sm:hidden" /> 오신 것을 환영합니다!
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              닌텐도 스위치 2 전용 슬로우 라이프 샌드박스 게임!
              <br />
              메타몽과 함께 포코피아 섬에서 느긋한 모험을 시작하세요.
            </p>

            <div className="max-w-lg mx-auto">
              <SearchBar />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-2 text-center animate-slide-up"
                >
                  <div className="flex items-center justify-center size-12 rounded-full bg-primary/10 dark:bg-primary/20">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            무엇을 찾고 계신가요?
          </h2>
          <p className="text-muted-foreground">
            아래 카테고리를 선택해서 원하는 정보를 찾아보세요
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.href} href={category.href} className="group">
                <Card className="h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:ring-2 hover:ring-primary/20">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex items-center justify-center size-10 rounded-xl ${category.color}`}
                      >
                        <Icon className={`size-5 ${category.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {category.title}
                        </CardTitle>
                      </div>
                      <Badge variant="secondary">{category.count}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{category.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Game Description */}
      <section className="bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <Card className="bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl">
                🎮 포켓몬 포코피아란?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                <strong className="text-foreground">포켓몬 포코피아</strong>는
                닌텐도 스위치 2 전용으로 출시되는 슬로우 라이프 샌드박스
                게임입니다. 플레이어는 변신 포켓몬{" "}
                <strong className="text-foreground">메타몽</strong>이 되어
                포코피아 섬에서 자유로운 생활을 즐길 수 있습니다.
              </p>
              <p>
                포켓몬 친구들과 함께 집을 짓고, 재료를 모으고, 요리를 하고, 다양한
                퀘스트를 완료하면서 나만의 마을을 만들어 보세요. 300종이 넘는
                포켓몬들이 포코피아 섬 곳곳에서 여러분을 기다리고 있습니다!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Warm Message */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-3">
          <Separator className="max-w-xs mx-auto mb-6" />
          <p className="text-base text-muted-foreground leading-relaxed max-w-lg mx-auto">
            이 위키는 포코피아를 사랑하는 어린이들을 위해 만들어졌습니다.
            <br />
            포코피아 섬에서의 모험이 언제나 행복하고 따뜻하길 바랍니다. 🌟
          </p>
        </div>
      </section>
    </div>
  );
}
