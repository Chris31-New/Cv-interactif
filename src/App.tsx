import Navbar from './assets/components/Navbar';
import Hero from './assets/components/Hero';
import About from './assets/components/About';
import Skills from './assets/components/Skills';
import Timeline from './assets/components/Timeline';
import Projects from './assets/components/Projects';
import ChatIA from './assets/components/ChatAi';
import Contact from './assets/components/Contact';
import Footer from './assets/components/Footer';
import Background from './assets/components/Background';

export default function App() {
  return (
    <div className="relative bg-[#030712] text-white">

      <Background />

      <Navbar />

      <main className="relative z-10">

        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="timeline">
          <Timeline />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="chat">
          <ChatIA />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </main>

      <Footer />

    </div>
  );
}