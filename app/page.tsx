import { Header } from '@/components/Header';
import { SocialRail } from '@/components/SocialRail';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Work } from '@/components/Work';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <SocialRail />
      <main id="top" className="main-content">
        <Hero />
        <About />
        <Experience />
        {/* <Work /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
