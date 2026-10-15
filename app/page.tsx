import { PrismaHero } from "./components/prisma-hero";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black">
      <PrismaHero />
    </main>
  );
}
