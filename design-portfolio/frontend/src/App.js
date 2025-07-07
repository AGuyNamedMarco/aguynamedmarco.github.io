import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await fetch('/api/portfolio');
        const data = await response.json();
        setPortfolioData(data);
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
        // Set default data if API fails
        setPortfolioData({
          name: "Alex Thompson",
          title: "Design Engineer",
          bio: "Passionate design engineer specializing in creating beautiful, functional, and user-centered digital experiences.",
          email: "alex@example.com",
          phone: "+1 (555) 123-4567",
          location: "San Francisco, CA",
          skills: ["UI/UX Design", "React", "TypeScript", "Figma", "Adobe Creative Suite"],
          projects: [],
          experience: [],
          education: [],
          social: {}
        });
      } finally {
        // Minimum loading time for smooth experience
        setTimeout(() => setLoading(false), 2000);
      }
    };

    fetchPortfolioData();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header portfolioData={portfolioData} />
        <main>
          <Hero portfolioData={portfolioData} />
          <About portfolioData={portfolioData} />
          <Skills portfolioData={portfolioData} />
          <Projects portfolioData={portfolioData} />
          <Experience portfolioData={portfolioData} />
          <Contact portfolioData={portfolioData} />
        </main>
        <Footer portfolioData={portfolioData} />
      </motion.div>
    </div>
  );
}

export default App;