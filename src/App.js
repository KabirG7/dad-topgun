import React, { useState, useEffect } from 'react';
import './App.css';
import dadPhoto from './dad.jpg';


function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const [jetSound, setJetSound] = useState(false);

  // Simulate jet flyby sound effect
  useEffect(() => {
    if (jetSound) {
      setTimeout(() => {
        setJetSound(false);
      }, 2000);
    }
  }, [jetSound]);

  const handleEnterSite = () => {
    setShowIntro(false);
    setJetSound(true);
  };

  const sections = [
    {
      title: "THE PILOT",
      content: (
        <div className="section-content">
          <p>Call sign: "Captain"</p>
          <p>Age: 49 years of excellence</p>
          <p>Known for: His instincts, tactical precision</p>
          <p>Specialty: Being the best in any situation</p>
         <div className="dad-photo">
            <img src={dadPhoto} alt="Captain" className="dad-photo-img" />
          </div>
        </div>
      )
    },
    {
      title: "MISSION STATS",
      content: (
        <div className="section-content">
          <div className="stat-box">
            <h3>Flight Hours</h3>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '100%' }}></div>
            </div>
            <span className="stat-value">17,885 days</span>
          </div>
          
          <div className="stat-box">
            <h3>Dad Skills</h3>
            <div className="skill-item">
              <span>Advice</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span>Walking</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span>AI</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "ACHIEVEMENTS",
      content: (
        <div className="section-content">
          <div className="achievements">
            <div className="achievement">
              <div className="achievement-badge">🏆</div>
              <p>World's Greatest Dad</p>
            </div>
            <div className="achievement">
              <div className="achievement-badge">⭐</div>
              <p>Expert Leader</p>
            </div>
            <div className="achievement">
              <div className="achievement-badge">🥇</div>
              <p>Master Walker</p>
            </div>
            <div className="achievement">
              <div className="achievement-badge">🎂</div>
              <p>Survived 49 Missions Around the Sun</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "BIRTHDAY MESSAGE",
      content: (
        <div className="section-content message-section">
          <div className="message-box">
            <h3>INCOMING TRANSMISSION</h3>
              <p className="birthday-message">
              Captain, you've always guided me through the danger zone of life. Your leadership and precision have taught me to fly higher than I ever thought possible!
              Happy 49th Birthday to the greatest pilot to ever command the skies!
              <br/><br/>
              You are the best of the best, and I'm honored to serve as your co-pilot.
            </p>
            <p className="signature">With love, Your Co-Pilot</p>
          </div>
        </div>
      )
    }
  ];

  const nextSection = () => {
    setJetSound(true);
    setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));
  };

  const prevSection = () => {
    setJetSound(true);
    setCurrentSection((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="app">
      {jetSound && <div className="jet-sound">WHOOSH!</div>}
      
      {showIntro ? (
        <div className="intro-screen">
          <div className="intro-content">
            <h1 className="intro-title">TOP GUN</h1>
            <div className="intro-details">BIRTHDAY: 2025</div>
            <button className="enter-button" onClick={handleEnterSite}>
              ENTER THE DANGER ZONE
            </button>
          </div>
        </div>
      ) : (
        <div className="main-content">
          <div className="top-bar">
            <div className="logo">TOP GUN</div>
            <div className="age-counter">49</div>
          </div>
          
          <div className="content-section">
            <h2 className="section-title">{sections[currentSection].title}</h2>
            {sections[currentSection].content}
          </div>
          
          <div className="navigation">
            <button 
              className="nav-button" 
              onClick={prevSection} 
              disabled={currentSection === 0}
            >
              PREVIOUS
            </button>
            <div className="nav-indicator">
              {sections.map((_, index) => (
                <div 
                  key={index} 
                  className={`nav-dot ${index === currentSection ? 'active' : ''}`}
                  onClick={() => {
                    setJetSound(true);
                    setCurrentSection(index);
                  }}
                ></div>
              ))}
            </div>
            <button 
              className="nav-button" 
              onClick={nextSection} 
              disabled={currentSection === sections.length - 1}
            >
              NEXT
            </button>
          </div>
          
          <div className="footer">
            <p>HAPPY 49TH BIRTHDAY DAD!</p>
            <p className="tagline">THE BEST OF THE BEST!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;