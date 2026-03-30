import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { SearchBar } from "@/components/SearchBar";
import { Separator } from "@/components/ui/separator";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "포코피아 위키 - 포켓몬 포코피아 가이드",
  description:
    "포켓몬 포코피아의 모든 것! 포켓몬, 서식지, 꿈섬, 재료, 퀘스트 정보를 한눈에 확인하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Top row: Logo + Search + Mobile Menu */}
            <div className="flex items-center justify-between h-14 gap-4">
              <Link href="/" className="flex items-center gap-2 shrink-0">
                <span className="text-2xl" role="img" aria-label="pokeball">
                  🌿
                </span>
                <span className="text-lg font-bold tracking-tight text-primary">
                  포코피아 위키
                </span>
              </Link>

              <div className="hidden sm:block flex-1 max-w-md mx-4">
                <SearchBar compact />
              </div>

              <Navigation />
            </div>

            {/* Mobile search bar */}
            <div className="sm:hidden pb-3">
              <SearchBar compact />
            </div>

            {/* Desktop nav row */}
            <div className="hidden md:flex items-center gap-1 -mb-px" />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-border/60 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>포코피아를 사랑하는 어린이들을 위해</span>
                <Heart className="size-4 text-pokopia-pink fill-pokopia-pink" />
                <span>만들었습니다</span>
              </div>
              <Separator className="max-w-xs" />
              <div className="text-xs text-muted-foreground/70 space-y-1">
                <p>
                  포켓몬과 포코피아는 Nintendo / The Pokemon Company의
                  상표입니다.
                </p>
                <p>이 위키는 팬이 만든 비공식 정보 사이트입니다.</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
