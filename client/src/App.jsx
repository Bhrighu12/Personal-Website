import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Blobs */}
      <div style={{
        position: 'fixed',
        top: '-20%',
        left: '-10%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '50%',
        zIndex: 0,
        pointerEvents: 'none',
        filter: 'blur(60px)'
      }} />
      <div style={{
        position: 'fixed',
        bottom: '-20%',
        right: '-10%',
        width: '60vw',
        height: '60vw',
        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '50%',
        zIndex: 0,
        pointerEvents: 'none',
        filter: 'blur(60px)'
      }} />

      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        background: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        transition: 'all 0.3s ease'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#fff', letterSpacing: '-0.05em' }}>
          Bhrigu Gupta<span style={{ color: 'var(--primary-color)' }}>.</span>
        </div>
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {['About', 'Projects', 'Certificates', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: '#e2e8f0',
                fontSize: '0.95rem',
                fontWeight: '500',
                opacity: 0.8
              }}
              onMouseOver={(e) => e.target.style.opacity = 1}
              onMouseOut={(e) => e.target.style.opacity = 0.8}
            >
              {item}
            </a>
          ))}
          <a
            href="/Bhrigu Gupta Resume.pdf"
            download
            style={{
              padding: '0.6rem 1.2rem',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '50px',
              color: '#fff',
              fontSize: '0.9rem',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#fff';
              e.target.style.color = '#000';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.1)';
              e.target.style.color = '#fff';
            }}
          >
            Download Resume
          </a>
        </div>
      </nav>

      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Contact />

      <footer style={{
        padding: '3rem 2rem',
        textAlign: 'center',
        borderTop: '1px solid var(--glass-border)',
        marginTop: '4rem',
        background: 'rgba(5,5,5,0.5)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1.5rem' }}>
          <a
            href="https://github.com/Bhrighu12"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#94a3b8', transition: 'color 0.3s' }}
            onMouseOver={(e) => e.target.style.color = '#fff'}
            onMouseOut={(e) => e.target.style.color = '#94a3b8'}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/bhrigugupta"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#94a3b8', transition: 'color 0.3s' }}
            onMouseOver={(e) => e.target.style.color = '#fff'}
            onMouseOut={(e) => e.target.style.color = '#94a3b8'}
          >
            LinkedIn
          </a>
        </div>
        <p style={{ color: '#64748b', fontSize: '0.9rem' }}>&copy; 2025 Bhrigu Gupta. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
