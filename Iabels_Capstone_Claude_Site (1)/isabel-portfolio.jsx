import React, { useState, useEffect, useRef } from 'react';

// Isabel Gorin Portfolio Website
// A visual journey from Arizona sunset to space

export default function IsabelPortfolio() {
  const [entered, setEntered] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setScrollY(containerRef.current.scrollTop);
        const sections = containerRef.current.querySelectorAll('.section');
        sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(index);
          }
        });
      }
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [entered]);

  const extracurriculars = [
    {
      id: 'mun',
      title: 'Model United Nations',
      icon: '🌐',
      category: 'Leadership & Civic Engagement',
      description: 'Representing nations, debating global policy, and developing diplomatic solutions to international challenges.',
      details: [
        'Multiple conference awards',
        'Position papers on international policy',
        'Delegate at regional and national conferences'
      ],
      color: '#6366f1'
    },
    {
      id: 'heartbeats',
      title: 'HeartBeats Director',
      icon: '💓',
      category: 'Leadership & Civic Engagement',
      description: 'Leading a program that connects communities through rhythm and music education.',
      details: [
        'Program Director',
        'Curriculum development',
        'Community outreach coordination'
      ],
      color: '#ec4899'
    },
    {
      id: 'asa',
      title: 'ASA Ambassador',
      icon: '🎭',
      category: 'Leadership & Civic Engagement',
      description: 'Welcoming prospective students and families to Arizona School for the Arts through campus tours.',
      details: [
        'Campus tour guide',
        'Student representative',
        'Prospective family liaison'
      ],
      color: '#f59e0b'
    },
    {
      id: 'rise',
      title: 'RISE',
      icon: '📢',
      category: 'Leadership & Civic Engagement',
      description: 'Student empowerment initiative focused on local policy advocacy and community volunteering.',
      details: [
        'Local policy engagement',
        'Volunteer coordination',
        'Student empowerment programs'
      ],
      color: '#10b981'
    },
    {
      id: 'stem',
      title: 'STEM Society',
      icon: '🔬',
      category: 'Leadership & Civic Engagement',
      description: 'Promoting STEM education and curiosity among students.',
      details: [
        'Science education advocacy',
        'STEM event organization',
        'Peer mentorship'
      ],
      color: '#3b82f6'
    },
    {
      id: 'opera',
      title: 'Global Science Opera',
      icon: '🎵',
      category: 'Arts Portfolio',
      description: 'International collaborative project combining science education with operatic performance.',
      details: [
        'Visual documentation',
        'International collaboration',
        'Science-art integration'
      ],
      color: '#8b5cf6',
      hasLink: true
    },
    {
      id: 'choir',
      title: 'Chamber Choir',
      icon: '🎤',
      category: 'Arts Portfolio',
      description: 'Performing in an elite vocal ensemble, developing musicianship and collaborative artistry.',
      details: [
        'Performance highlights',
        'Vocal ensemble member',
        'Concert season participation'
      ],
      color: '#06b6d4'
    },
    {
      id: 'visual',
      title: 'Visual Arts & Music',
      icon: '🎨',
      category: 'Arts Portfolio',
      description: 'Original paintings and musical compositions exploring personal expression and creativity.',
      details: [
        'Original paintings',
        'Musical compositions',
        'Mixed media works'
      ],
      color: '#f43f5e'
    }
  ];

  // Entry/Landing Screen
  if (!entered) {
    return (
      <div style={styles.entryContainer}>
        <div style={styles.sunsetGradient} />
        <div style={styles.sunContainer}>
          <div style={styles.sun} />
          <div style={styles.sunGlow} />
        </div>
        <div style={styles.desertSilhouette} />
        <div style={styles.saguaroContainer}>
          <svg style={styles.saguaro} viewBox="0 0 100 200" fill="none">
            <path d="M45 200 L45 100 Q30 90 30 70 L30 50 Q30 40 40 40 L40 90 L45 90 L45 60 Q45 30 55 30 Q65 30 65 60 L65 90 L70 90 L70 40 Q70 30 80 30 Q90 30 90 50 L90 70 Q90 90 75 100 L75 200 Z" fill="rgba(0,0,0,0.3)"/>
          </svg>
          <svg style={{...styles.saguaro, left: '75%', height: '120px'}} viewBox="0 0 100 200" fill="none">
            <path d="M45 200 L45 120 Q35 110 35 90 L35 80 Q35 70 45 70 L45 110 L50 110 L50 80 Q50 60 55 60 Q60 60 60 80 L60 110 L65 110 L65 70 Q65 60 75 60 Q85 60 85 80 L85 90 Q85 110 75 120 L75 200 Z" fill="rgba(0,0,0,0.25)"/>
          </svg>
        </div>
        <div style={styles.entryContent}>
          <div 
            style={styles.logoPlaceholder}
            onClick={() => setEntered(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setEntered(true)}
          >
            <div style={styles.logoInner}>
              <span style={styles.logoInitial}>IG</span>
              <span style={styles.logoSubtext}>Click to Enter</span>
            </div>
            <div style={styles.logoRing} />
            <div style={styles.logoRing2} />
          </div>
        </div>
        <div style={styles.entryFooter}>
          <p style={styles.entryName}>Isabel Gorin</p>
          <p style={styles.entryTagline}>Artist • Scholar • Leader</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} style={styles.mainContainer}>
      {/* Navigation Dots */}
      <nav style={styles.navDots}>
        {['About', 'Capstone', 'Portfolio'].map((label, index) => (
          <button
            key={label}
            onClick={() => {
              const sections = containerRef.current?.querySelectorAll('.section');
              sections?.[index]?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              ...styles.navDot,
              ...(activeSection === index ? styles.navDotActive : {}),
              background: activeSection === index 
                ? ['#f97316', '#22c55e', '#8b5cf6'][index]
                : 'rgba(255,255,255,0.3)'
            }}
            title={label}
          >
            <span style={styles.navLabel}>{label}</span>
          </button>
        ))}
      </nav>

      {/* SECTION 1: About Me - Arizona Sunset */}
      <section className="section" style={styles.section1}>
        <div style={styles.sunset1} />
        <div style={styles.sunset2} />
        <div style={styles.cloudContainer}>
          <div style={{...styles.cloud, left: '10%', top: '15%', animationDelay: '0s'}} />
          <div style={{...styles.cloud, left: '60%', top: '25%', animationDelay: '-5s', transform: 'scale(0.7)'}} />
          <div style={{...styles.cloud, left: '80%', top: '10%', animationDelay: '-10s', transform: 'scale(0.5)'}} />
        </div>
        
        <div style={styles.aboutContent}>
          <div style={styles.profileSection}>
            <div style={styles.profileImageContainer}>
              <div style={styles.profilePlaceholder}>
                <span style={styles.profileIcon}>📷</span>
                <span style={styles.profileText}>Photo Coming Soon</span>
              </div>
            </div>
          </div>
          
          <div style={styles.bioSection}>
            <h1 style={styles.nameTitle}>Isabel Gorin</h1>
            <p style={styles.subtitle}>Arizona School for the Arts | Class of 2026</p>
            
            <div style={styles.bioText}>
              <p>
                Welcome to my corner of the digital world. I'm a high school senior at Arizona School for the Arts, 
                where I've discovered that the intersection of science, art, and civic engagement isn't just possible—it's essential.
              </p>
              <p>
                From analyzing the environmental impacts of artificial intelligence to directing musical programs that 
                bring communities together, I believe in approaching every challenge with both analytical rigor and creative vision.
              </p>
              <p>
                This portfolio represents my journey through high school: the research that challenged my assumptions, 
                the performances that pushed my boundaries, and the leadership opportunities that shaped who I'm becoming.
              </p>
            </div>
            
            <div style={styles.quickLinks}>
              <span style={styles.quickLink}>🎭 Performing Arts</span>
              <span style={styles.quickLink}>🔬 STEM Research</span>
              <span style={styles.quickLink}>🌍 Global Citizenship</span>
            </div>
          </div>
        </div>
        
        <div style={styles.scrollIndicator}>
          <span>Scroll to explore</span>
          <div style={styles.scrollArrow}>↓</div>
        </div>
      </section>

      {/* SECTION 2: Capstone Project - Frutiger Aero */}
      <section className="section" style={styles.section2}>
        <div style={styles.aeroBackground}>
          <div style={styles.aeroGradient} />
          <div style={styles.hills}>
            <svg viewBox="0 0 1440 320" style={styles.hillsSvg}>
              <defs>
                <linearGradient id="hillGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#86efac" />
                  <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
                <linearGradient id="hillGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#4ade80" />
                  <stop offset="100%" stopColor="#16a34a" />
                </linearGradient>
              </defs>
              <path fill="url(#hillGradient1)" d="M0,160L60,149.3C120,139,240,117,360,128C480,139,600,181,720,181.3C840,181,960,139,1080,133.3C1200,128,1320,160,1380,176L1440,192L1440,320L0,320Z"/>
              <path fill="url(#hillGradient2)" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,320L0,320Z"/>
            </svg>
          </div>
          <div style={styles.aeroBubbles}>
            {[...Array(8)].map((_, i) => (
              <div 
                key={i} 
                style={{
                  ...styles.bubble,
                  left: `${10 + i * 12}%`,
                  animationDelay: `${i * 0.5}s`,
                  width: `${20 + Math.random() * 40}px`,
                  height: `${20 + Math.random() * 40}px`,
                }}
              />
            ))}
          </div>
        </div>

        <div style={styles.capstoneContent}>
          <div style={styles.capstoneHeader}>
            <div style={styles.aeroIcon}>🌱</div>
            <h2 style={styles.capstoneTitle}>Senior Capstone Project</h2>
            <p style={styles.capstoneSubtitle}>Exploring the intersection of technology and environmental stewardship</p>
          </div>

          <div style={styles.capstoneGrid}>
            <div style={styles.policyBriefCard}>
              <div style={styles.cardGlow} />
              <div style={styles.cardContent}>
                <div style={styles.cardIcon}>📄</div>
                <h3 style={styles.cardTitle}>Policy Brief</h3>
                <h4 style={styles.policyTitle}>Assessing the Environmental Impacts of AI</h4>
                <p style={styles.cardDescription}>
                  A comprehensive analysis of artificial intelligence's water usage, electricity consumption, 
                  and the policy frameworks needed for sustainable AI development.
                </p>
                <div style={styles.keyPoints}>
                  <div style={styles.keyPoint}>
                    <span style={styles.keyIcon}>💧</span>
                    <span>Water Usage Analysis</span>
                  </div>
                  <div style={styles.keyPoint}>
                    <span style={styles.keyIcon}>⚡</span>
                    <span>Energy Grid Impact</span>
                  </div>
                  <div style={styles.keyPoint}>
                    <span style={styles.keyIcon}>🏛️</span>
                    <span>Policy Recommendations</span>
                  </div>
                  <div style={styles.keyPoint}>
                    <span style={styles.keyIcon}>☢️</span>
                    <span>Nuclear Energy Solutions</span>
                  </div>
                </div>
                <a 
                  href="/mnt/user-data/uploads/Senior_Capstone_-_Isabel_Gorin__1_.pdf" 
                  target="_blank"
                  style={styles.viewButton}
                >
                  View Full Policy Brief →
                </a>
              </div>
            </div>

            <div style={styles.creativeCard}>
              <div style={styles.cardGlow2} />
              <div style={styles.cardContent}>
                <div style={styles.cardIcon}>🎨</div>
                <h3 style={styles.cardTitle}>Creative Companion</h3>
                <p style={styles.cardDescription}>
                  An artistic interpretation of AI sustainability themes, bringing policy concepts 
                  to life through creative storytelling.
                </p>
                <div style={styles.comingSoon}>
                  <span style={styles.comingSoonIcon}>🎬</span>
                  <span>Media coming soon</span>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.abstractPreview}>
            <h4 style={styles.abstractTitle}>From the Abstract:</h4>
            <blockquote style={styles.abstractQuote}>
              "The purpose of this brief is to review the most common concerns about AI's environmental impact, 
              including water usage and electricity usage, in order to propose the most effective policy... 
              supporting the increased implementation of clean energy to fuel AI sustainably."
            </blockquote>
          </div>
        </div>
      </section>

      {/* SECTION 3: Portfolio - Space Night */}
      <section className="section" style={styles.section3}>
        <div style={styles.spaceBackground}>
          <div style={styles.stars} />
          <div style={styles.stars2} />
          <div style={styles.nebula} />
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              style={{
                ...styles.star,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                width: `${1 + Math.random() * 3}px`,
                height: `${1 + Math.random() * 3}px`,
              }}
            />
          ))}
          <div style={styles.shootingStar} />
        </div>

        <div style={styles.portfolioContent}>
          <div style={styles.portfolioHeader}>
            <h2 style={styles.portfolioTitle}>Academic & Extracurricular Portfolio</h2>
            <p style={styles.portfolioSubtitle}>Leadership, civic engagement, and artistic pursuits</p>
          </div>

          <div style={styles.categorySection}>
            <h3 style={styles.categoryTitle}>
              <span style={styles.categoryIcon}>🏛️</span>
              Leadership & Civic Engagement
            </h3>
            <div style={styles.cardGrid}>
              {extracurriculars.filter(e => e.category === 'Leadership & Civic Engagement').map((item) => (
                <div 
                  key={item.id}
                  style={{
                    ...styles.portfolioCard,
                    ...(expandedCard === item.id ? styles.portfolioCardExpanded : {}),
                    borderColor: item.color,
                  }}
                  onClick={() => setExpandedCard(expandedCard === item.id ? null : item.id)}
                >
                  <div style={{...styles.cardIconLarge, background: `linear-gradient(135deg, ${item.color}40, ${item.color}20)`}}>
                    {item.icon}
                  </div>
                  <h4 style={styles.portfolioCardTitle}>{item.title}</h4>
                  <p style={styles.portfolioCardDesc}>{item.description}</p>
                  {expandedCard === item.id && (
                    <div style={styles.expandedContent}>
                      <ul style={styles.detailsList}>
                        {item.details.map((detail, i) => (
                          <li key={i} style={styles.detailItem}>✦ {detail}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <span style={styles.expandHint}>{expandedCard === item.id ? 'Click to collapse' : 'Click to expand'}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.categorySection}>
            <h3 style={styles.categoryTitle}>
              <span style={styles.categoryIcon}>🎭</span>
              Arts Portfolio
            </h3>
            <div style={styles.cardGrid}>
              {extracurriculars.filter(e => e.category === 'Arts Portfolio').map((item) => (
                <div 
                  key={item.id}
                  style={{
                    ...styles.portfolioCard,
                    ...(expandedCard === item.id ? styles.portfolioCardExpanded : {}),
                    borderColor: item.color,
                  }}
                  onClick={() => setExpandedCard(expandedCard === item.id ? null : item.id)}
                >
                  <div style={{...styles.cardIconLarge, background: `linear-gradient(135deg, ${item.color}40, ${item.color}20)`}}>
                    {item.icon}
                  </div>
                  <h4 style={styles.portfolioCardTitle}>{item.title}</h4>
                  <p style={styles.portfolioCardDesc}>{item.description}</p>
                  {expandedCard === item.id && (
                    <div style={styles.expandedContent}>
                      <ul style={styles.detailsList}>
                        {item.details.map((detail, i) => (
                          <li key={i} style={styles.detailItem}>✦ {detail}</li>
                        ))}
                      </ul>
                      {item.hasLink && (
                        <div style={styles.mediaPlaceholder}>
                          <span>🔗 Project link coming soon</span>
                        </div>
                      )}
                      {item.id === 'choir' && (
                        <div style={styles.mediaPlaceholder}>
                          <span>📷 Performance photos coming soon</span>
                        </div>
                      )}
                      {item.id === 'visual' && (
                        <div style={styles.mediaPlaceholder}>
                          <span>🖼️ Portfolio gallery coming soon</span>
                        </div>
                      )}
                    </div>
                  )}
                  <span style={styles.expandHint}>{expandedCard === item.id ? 'Click to collapse' : 'Click to expand'}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.operaFeature}>
            <div style={styles.operaGlow} />
            <div style={styles.operaContent}>
              <h3 style={styles.operaTitle}>✨ Featured: Global Science Opera Project</h3>
              <p style={styles.operaDesc}>
                An international collaboration bringing together students from around the world 
                to explore scientific concepts through the medium of opera. This project represents 
                the synthesis of my passions for science, art, and global connection.
              </p>
              <div style={styles.operaPlaceholder}>
                <span style={styles.operaPlaceholderIcon}>🌍</span>
                <span>Visual documentation & project link coming soon</span>
              </div>
            </div>
          </div>
        </div>

        <footer style={styles.footer}>
          <p style={styles.footerText}>© 2025 Isabel Gorin | Arizona School for the Arts</p>
          <p style={styles.footerTagline}>Where science meets art, and curiosity drives change.</p>
        </footer>
      </section>

      {/* CSS Keyframe animations embedded as style tag */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes drift {
          0% { transform: translateX(0); }
          100% { transform: translateX(100vw); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes rise {
          0% { transform: translateY(100%) scale(0.5); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-100vh) scale(1); opacity: 0; }
        }
        @keyframes shoot {
          0% { transform: translateX(0) translateY(0); opacity: 1; }
          100% { transform: translateX(-200px) translateY(200px); opacity: 0; }
        }
        @keyframes ringPulse {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .section {
          scroll-snap-align: start;
        }
      `}</style>
    </div>
  );
}

const styles = {
  // Entry Screen Styles
  entryContainer: {
    width: '100%',
    height: '100vh',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '"Crimson Text", Georgia, serif',
  },
  sunsetGradient: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, #ff6b35 0%, #f7931e 20%, #ffb347 40%, #ff8c69 60%, #d4577d 80%, #9b4d96 100%)',
    zIndex: 0,
  },
  sunContainer: {
    position: 'absolute',
    top: '15%',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1,
  },
  sun: {
    width: '120px',
    height: '120px',
    background: 'radial-gradient(circle, #fff9c4 0%, #ffe082 50%, #ffb300 100%)',
    borderRadius: '50%',
    boxShadow: '0 0 60px 30px rgba(255, 183, 0, 0.6), 0 0 100px 60px rgba(255, 152, 0, 0.4)',
  },
  sunGlow: {
    position: 'absolute',
    top: '-30px',
    left: '-30px',
    width: '180px',
    height: '180px',
    background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
    borderRadius: '50%',
    animation: 'pulse 4s ease-in-out infinite',
  },
  desertSilhouette: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%',
    background: 'linear-gradient(to top, rgba(139,77,150,0.9) 0%, transparent 100%)',
    zIndex: 2,
  },
  saguaroContainer: {
    position: 'absolute',
    bottom: '5%',
    left: 0,
    right: 0,
    height: '25%',
    zIndex: 3,
  },
  saguaro: {
    position: 'absolute',
    bottom: 0,
    left: '20%',
    height: '180px',
    opacity: 0.8,
  },
  entryContent: {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logoPlaceholder: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.15)',
    backdropFilter: 'blur(10px)',
    border: '2px solid rgba(255,255,255,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.4s ease',
    position: 'relative',
    ':hover': {
      transform: 'scale(1.05)',
      background: 'rgba(255,255,255,0.25)',
    },
  },
  logoInner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
  },
  logoInitial: {
    fontSize: '48px',
    fontWeight: '300',
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
    fontFamily: '"Playfair Display", Georgia, serif',
  },
  logoSubtext: {
    fontSize: '12px',
    color: 'rgba(255,255,255,0.8)',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  logoRing: {
    position: 'absolute',
    inset: '-10px',
    border: '1px solid rgba(255,255,255,0.3)',
    borderRadius: '50%',
    animation: 'ringPulse 2s ease-out infinite',
  },
  logoRing2: {
    position: 'absolute',
    inset: '-10px',
    border: '1px solid rgba(255,255,255,0.3)',
    borderRadius: '50%',
    animation: 'ringPulse 2s ease-out infinite 1s',
  },
  entryFooter: {
    position: 'absolute',
    bottom: '10%',
    textAlign: 'center',
    zIndex: 10,
  },
  entryName: {
    fontSize: '28px',
    color: '#fff',
    margin: 0,
    fontWeight: '300',
    letterSpacing: '4px',
    textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
    fontFamily: '"Playfair Display", Georgia, serif',
  },
  entryTagline: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.9)',
    margin: '8px 0 0',
    letterSpacing: '3px',
    textTransform: 'uppercase',
  },

  // Main Container
  mainContainer: {
    width: '100%',
    height: '100vh',
    overflowY: 'auto',
    overflowX: 'hidden',
    scrollSnapType: 'y mandatory',
    scrollBehavior: 'smooth',
    fontFamily: '"Crimson Text", Georgia, serif',
  },

  // Navigation
  navDots: {
    position: 'fixed',
    right: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    zIndex: 1000,
  },
  navDot: {
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    border: '2px solid rgba(255,255,255,0.5)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative',
  },
  navDotActive: {
    transform: 'scale(1.3)',
    border: '2px solid rgba(255,255,255,0.9)',
  },
  navLabel: {
    position: 'absolute',
    right: '24px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '12px',
    color: '#fff',
    whiteSpace: 'nowrap',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    pointerEvents: 'none',
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
  },

  // Section 1: About Me - Sunset
  section1: {
    width: '100%',
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 20px',
    boxSizing: 'border-box',
  },
  sunset1: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, #ff8c42 0%, #ff6b6b 30%, #ee5a70 50%, #c94b7c 70%, #9b4d96 100%)',
    zIndex: 0,
  },
  sunset2: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse at 50% 0%, rgba(255,200,100,0.4) 0%, transparent 60%)',
    zIndex: 1,
  },
  cloudContainer: {
    position: 'absolute',
    inset: 0,
    zIndex: 2,
    overflow: 'hidden',
  },
  cloud: {
    position: 'absolute',
    width: '200px',
    height: '60px',
    background: 'linear-gradient(to bottom, rgba(255,255,255,0.6), rgba(255,220,180,0.4))',
    borderRadius: '100px',
    filter: 'blur(10px)',
    animation: 'drift 60s linear infinite',
  },
  aboutContent: {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: '60px',
    maxWidth: '1000px',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  profileSection: {
    flex: '0 0 auto',
  },
  profileImageContainer: {
    width: '250px',
    height: '300px',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
    border: '4px solid rgba(255,255,255,0.3)',
  },
  profilePlaceholder: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
  },
  profileIcon: {
    fontSize: '48px',
    opacity: 0.7,
  },
  profileText: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.8)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  bioSection: {
    flex: '1 1 400px',
    maxWidth: '500px',
  },
  nameTitle: {
    fontSize: '48px',
    color: '#fff',
    margin: '0 0 8px',
    fontWeight: '400',
    textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
    fontFamily: '"Playfair Display", Georgia, serif',
  },
  subtitle: {
    fontSize: '16px',
    color: 'rgba(255,255,255,0.9)',
    margin: '0 0 24px',
    letterSpacing: '2px',
  },
  bioText: {
    color: 'rgba(255,255,255,0.95)',
    fontSize: '16px',
    lineHeight: '1.8',
    '& p': {
      marginBottom: '16px',
    },
  },
  quickLinks: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    marginTop: '24px',
  },
  quickLink: {
    padding: '8px 16px',
    background: 'rgba(255,255,255,0.15)',
    borderRadius: '20px',
    fontSize: '14px',
    color: '#fff',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.2)',
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
    color: 'rgba(255,255,255,0.8)',
    fontSize: '14px',
    zIndex: 10,
    animation: 'scrollBounce 2s ease-in-out infinite',
  },
  scrollArrow: {
    fontSize: '24px',
    marginTop: '8px',
  },

  // Section 2: Capstone - Frutiger Aero
  section2: {
    width: '100%',
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '80px 20px',
    boxSizing: 'border-box',
  },
  aeroBackground: {
    position: 'absolute',
    inset: 0,
    overflow: 'hidden',
  },
  aeroGradient: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, #87ceeb 0%, #b4e4ff 30%, #e0f4ff 60%, #f0faff 100%)',
  },
  hills: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '40%',
  },
  hillsSvg: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  aeroBubbles: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
  },
  bubble: {
    position: 'absolute',
    bottom: '-50px',
    borderRadius: '50%',
    background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(255,255,255,0.3))',
    border: '1px solid rgba(255,255,255,0.5)',
    animation: 'rise 15s ease-in-out infinite',
  },
  capstoneContent: {
    position: 'relative',
    zIndex: 10,
    maxWidth: '1100px',
    width: '100%',
  },
  capstoneHeader: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  aeroIcon: {
    fontSize: '48px',
    marginBottom: '16px',
  },
  capstoneTitle: {
    fontSize: '42px',
    color: '#1e4d6b',
    margin: '0 0 12px',
    fontWeight: '400',
    fontFamily: '"Playfair Display", Georgia, serif',
  },
  capstoneSubtitle: {
    fontSize: '18px',
    color: '#4a7c94',
    margin: 0,
  },
  capstoneGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    marginBottom: '40px',
  },
  policyBriefCard: {
    background: 'rgba(255,255,255,0.85)',
    borderRadius: '24px',
    padding: '32px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 10px 40px rgba(30,77,107,0.15)',
    border: '1px solid rgba(255,255,255,0.5)',
    backdropFilter: 'blur(10px)',
  },
  cardGlow: {
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle at 30% 30%, rgba(76,175,80,0.1), transparent 50%)',
    pointerEvents: 'none',
  },
  cardGlow2: {
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle at 70% 70%, rgba(156,39,176,0.1), transparent 50%)',
    pointerEvents: 'none',
  },
  cardContent: {
    position: 'relative',
    zIndex: 2,
  },
  cardIcon: {
    fontSize: '36px',
    marginBottom: '16px',
  },
  cardTitle: {
    fontSize: '14px',
    color: '#4a7c94',
    margin: '0 0 8px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  policyTitle: {
    fontSize: '22px',
    color: '#1e4d6b',
    margin: '0 0 16px',
    fontWeight: '600',
    lineHeight: '1.3',
  },
  cardDescription: {
    fontSize: '15px',
    color: '#5a7d8a',
    lineHeight: '1.7',
    margin: '0 0 20px',
  },
  keyPoints: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
    marginBottom: '24px',
  },
  keyPoint: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    color: '#4a7c94',
  },
  keyIcon: {
    fontSize: '16px',
  },
  viewButton: {
    display: 'inline-block',
    padding: '12px 24px',
    background: 'linear-gradient(135deg, #4caf50, #66bb6a)',
    color: '#fff',
    borderRadius: '30px',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(76,175,80,0.3)',
  },
  creativeCard: {
    background: 'rgba(255,255,255,0.85)',
    borderRadius: '24px',
    padding: '32px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 10px 40px rgba(30,77,107,0.15)',
    border: '1px solid rgba(255,255,255,0.5)',
    backdropFilter: 'blur(10px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  comingSoon: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 20px',
    background: 'linear-gradient(135deg, rgba(156,39,176,0.1), rgba(103,58,183,0.1))',
    borderRadius: '16px',
    gap: '12px',
    color: '#7b4b9e',
    fontSize: '14px',
  },
  comingSoonIcon: {
    fontSize: '32px',
  },
  abstractPreview: {
    background: 'rgba(255,255,255,0.9)',
    borderRadius: '20px',
    padding: '28px',
    boxShadow: '0 8px 30px rgba(30,77,107,0.1)',
  },
  abstractTitle: {
    fontSize: '14px',
    color: '#4a7c94',
    margin: '0 0 12px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  abstractQuote: {
    fontSize: '16px',
    color: '#1e4d6b',
    fontStyle: 'italic',
    lineHeight: '1.8',
    margin: 0,
    paddingLeft: '20px',
    borderLeft: '3px solid #4caf50',
  },

  // Section 3: Portfolio - Space
  section3: {
    width: '100%',
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    padding: '80px 20px 40px',
    boxSizing: 'border-box',
  },
  spaceBackground: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, #1a1a3e 0%, #0d0d24 30%, #050510 100%)',
    overflow: 'hidden',
  },
  stars: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(2px 2px at 20px 30px, #fff, transparent), radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent), radial-gradient(1px 1px at 90px 40px, #fff, transparent)',
    backgroundSize: '200px 200px',
  },
  stars2: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(1px 1px at 150px 100px, #fff, transparent), radial-gradient(2px 2px at 200px 150px, rgba(255,255,255,0.6), transparent)',
    backgroundSize: '300px 300px',
  },
  nebula: {
    position: 'absolute',
    top: '10%',
    right: '10%',
    width: '400px',
    height: '400px',
    background: 'radial-gradient(ellipse, rgba(139,92,246,0.15) 0%, rgba(236,72,153,0.1) 40%, transparent 70%)',
    filter: 'blur(40px)',
    borderRadius: '50%',
  },
  star: {
    position: 'absolute',
    background: '#fff',
    borderRadius: '50%',
    animation: 'twinkle 3s ease-in-out infinite',
  },
  shootingStar: {
    position: 'absolute',
    top: '20%',
    right: '30%',
    width: '100px',
    height: '2px',
    background: 'linear-gradient(to right, transparent, #fff, transparent)',
    transform: 'rotate(-45deg)',
    animation: 'shoot 8s ease-in-out infinite',
    opacity: 0.7,
  },
  portfolioContent: {
    position: 'relative',
    zIndex: 10,
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    flex: 1,
  },
  portfolioHeader: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  portfolioTitle: {
    fontSize: '42px',
    color: '#fff',
    margin: '0 0 12px',
    fontWeight: '400',
    textShadow: '0 0 30px rgba(139,92,246,0.5)',
    fontFamily: '"Playfair Display", Georgia, serif',
  },
  portfolioSubtitle: {
    fontSize: '18px',
    color: 'rgba(255,255,255,0.7)',
    margin: 0,
  },
  categorySection: {
    marginBottom: '50px',
  },
  categoryTitle: {
    fontSize: '24px',
    color: '#fff',
    margin: '0 0 24px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontWeight: '400',
  },
  categoryIcon: {
    fontSize: '28px',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px',
  },
  portfolioCard: {
    background: 'rgba(255,255,255,0.05)',
    borderRadius: '20px',
    padding: '24px',
    cursor: 'pointer',
    transition: 'all 0.4s ease',
    border: '1px solid rgba(255,255,255,0.1)',
    backdropFilter: 'blur(10px)',
    position: 'relative',
    overflow: 'hidden',
  },
  portfolioCardExpanded: {
    background: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
  },
  cardIconLarge: {
    width: '56px',
    height: '56px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
    marginBottom: '16px',
  },
  portfolioCardTitle: {
    fontSize: '20px',
    color: '#fff',
    margin: '0 0 10px',
    fontWeight: '500',
  },
  portfolioCardDesc: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.7)',
    lineHeight: '1.6',
    margin: '0 0 12px',
  },
  expandedContent: {
    marginTop: '16px',
    paddingTop: '16px',
    borderTop: '1px solid rgba(255,255,255,0.1)',
  },
  detailsList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 16px',
  },
  detailItem: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.8)',
    marginBottom: '8px',
  },
  mediaPlaceholder: {
    padding: '16px',
    background: 'rgba(255,255,255,0.05)',
    borderRadius: '12px',
    textAlign: 'center',
    fontSize: '13px',
    color: 'rgba(255,255,255,0.6)',
  },
  expandHint: {
    fontSize: '12px',
    color: 'rgba(255,255,255,0.5)',
    display: 'block',
    marginTop: '12px',
  },
  operaFeature: {
    background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(236,72,153,0.15))',
    borderRadius: '24px',
    padding: '40px',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid rgba(139,92,246,0.3)',
    marginTop: '20px',
  },
  operaGlow: {
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.2), transparent 50%)',
    pointerEvents: 'none',
  },
  operaContent: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
  },
  operaTitle: {
    fontSize: '28px',
    color: '#fff',
    margin: '0 0 16px',
    fontWeight: '400',
  },
  operaDesc: {
    fontSize: '16px',
    color: 'rgba(255,255,255,0.85)',
    lineHeight: '1.8',
    maxWidth: '700px',
    margin: '0 auto 24px',
  },
  operaPlaceholder: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px 28px',
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '30px',
    fontSize: '14px',
    color: 'rgba(255,255,255,0.8)',
  },
  operaPlaceholderIcon: {
    fontSize: '24px',
  },
  footer: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    paddingTop: '40px',
    marginTop: 'auto',
  },
  footerText: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.5)',
    margin: '0 0 8px',
  },
  footerTagline: {
    fontSize: '16px',
    color: 'rgba(255,255,255,0.7)',
    fontStyle: 'italic',
    margin: 0,
  },
};
