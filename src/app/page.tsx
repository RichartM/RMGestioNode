import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}
