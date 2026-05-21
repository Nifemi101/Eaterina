import Hero from "@/src/components/sections/hero";
import PopularDishes from "@/src/components/sections/popularDishes";
import AboutServices from "@/src/components/sections/aboutService";

export default function Home() {
  return (
    <main>
      <Hero />
      <PopularDishes />
      <AboutServices />
    </main>
  );
}