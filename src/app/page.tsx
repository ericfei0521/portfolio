import About from './components/About';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Experience from './components/Experiences';
import Skills from './components/Skills';

export default function Home() {
    return (
        <div className="min-h-screen bg-dark text-white overflow-x-hidden">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Contact />
        </div>
    );
}
