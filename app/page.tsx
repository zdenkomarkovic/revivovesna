import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Tretmani from "@/components/sections/Tretmani";
import Education from "@/components/sections/Education";
import Edukacije from "@/components/sections/Edukacije";
import Awards from "@/components/sections/Awards";
import Contact from "@/components/sections/Contact";

export const metadata = {
  title: "Kozmetički Studio REVIVE Beograd | Vesna Parojčić — PMU & Tattoo Artist",
  description:
    "Kozmetički studio REVIVE Beograd — Vesna Parojčić, nagrađivani PMU & tattoo artist, edukator i sudija. Tattoos, permanentni makeup i laser uklanjanje.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tretmani />
        <Edukacije />
        <Education />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
