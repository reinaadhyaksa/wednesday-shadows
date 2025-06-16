import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Characters from './components/Characters';
import Episodes from './components/Episodes';
import Join from './components/Join';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="bg-dark text-light font-poppins overflow-x-hidden">
      <div className="fixed inset-0 bg-fog opacity-10 pointer-events-none z-50"></div>

      <Navbar />
      <Hero />
      <About />
      <Characters />
      <Episodes />
      <Join />
      <Footer />
    </div>
  );
}

export default App;