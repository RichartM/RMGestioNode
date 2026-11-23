import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TechCarousel from '@/components/TechCarousel';
import OpticaSaaS from '@/components/OpticaSaaS';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Stack from '@/components/Stack';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechCarousel />
        <OpticaSaaS />
        <Experience />
        <Projects />
        <Stack />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
