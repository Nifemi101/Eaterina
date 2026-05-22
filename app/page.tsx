import Hero from "@/src/components/sections/hero";
import PopularDishes from "@/src/components/sections/popularDishes";
import AboutServices from "@/src/components/sections/aboutService";
import ReservationCTA from "@/src/components/sections/reservationCta";
import Testimonials from "@/src/components/sections/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <PopularDishes />
      <AboutServices />
      <ReservationCTA />
      <Testimonials />
    </main>
  );
}