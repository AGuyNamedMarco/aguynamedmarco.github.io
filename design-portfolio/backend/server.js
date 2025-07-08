const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(morgan('combined'));
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// MongoDB Connection
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/design-portfolio';
    await mongoose.connect(mongoURI);
    console.log('✅ MongoDB Connected Successfully');
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    process.exit(1);
  }
};

// Portfolio Data Schema
const portfolioSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  bio: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  location: String,
  skills: [String],
  projects: [{
    title: String,
    description: String,
    technologies: [String],
    imageUrl: String,
    projectUrl: String,
    githubUrl: String
  }],
  experience: [{
    company: String,
    position: String,
    startDate: String,
    endDate: String,
    description: String
  }],
  education: [{
    institution: String,
    degree: String,
    year: String
  }],
  social: {
    linkedin: String,
    github: String,
    dribbble: String,
    behance: String,
    website: String
  }
}, { timestamps: true });

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

// Routes

// Get portfolio data
app.get('/api/portfolio', async (req, res) => {
  try {
    let portfolio = await Portfolio.findOne();
    
    // If no portfolio exists, create default data
    if (!portfolio) {
      portfolio = new Portfolio({
        name: "Marco Mendoza",
        title: "Design Engineer",
        bio: "Passionate design engineer specializing in creating beautiful, functional, and user-centered digital experiences. I bridge the gap between design and development, bringing creative visions to life through code.",
        email: "marco@example.com",
        phone: "+1 (555) 123-4567",
        location: "San Francisco, CA",
        skills: [
          "UI/UX Design", "React", "TypeScript", "Node.js", "Figma", 
          "Adobe Creative Suite", "3D Modeling", "Prototyping", "CSS Animations", 
          "WebGL", "Three.js", "Design Systems"
        ],
        projects: [
          {
            title: "E-Commerce Platform Redesign",
            description: "Complete UI/UX overhaul of a major e-commerce platform, improving conversion rates by 35% and user satisfaction scores by 42%.",
            technologies: ["React", "TypeScript", "Figma", "A/B Testing"],
            imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
            projectUrl: "#",
            githubUrl: "#"
          },
          {
            title: "Interactive 3D Product Configurator",
            description: "Built an immersive 3D product customization tool that increased user engagement by 60% and reduced return rates.",
            technologies: ["Three.js", "WebGL", "React", "Node.js"],
            imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800",
            projectUrl: "#",
            githubUrl: "#"
          },
          {
            title: "Design System & Component Library",
            description: "Developed a comprehensive design system and React component library used across 12+ products, reducing development time by 40%.",
            technologies: ["React", "Storybook", "TypeScript", "CSS-in-JS"],
            imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800",
            projectUrl: "#",
            githubUrl: "#"
          }
        ],
        experience: [
          {
            company: "TechFlow Inc",
            position: "Senior Design Engineer",
            startDate: "2022",
            endDate: "Present",
            description: "Leading design and development of user-facing products, managing a team of 4 designers and developers."
          },
          {
            company: "InnovateUX",
            position: "Design Engineer",
            startDate: "2020",
            endDate: "2022",
            description: "Designed and developed responsive web applications with focus on user experience and performance."
          }
        ],
        education: [
          {
            institution: "Stanford University",
            degree: "MS in Human-Computer Interaction",
            year: "2020"
          },
          {
            institution: "UC Berkeley",
            degree: "BS in Computer Science",
            year: "2018"
          }
        ],
        social: {
          linkedin: "https://linkedin.com/in/marcomendoza",
          github: "https://github.com/marcomendoza",
          dribbble: "https://dribbble.com/marcomendoza",
          behance: "https://behance.net/marcomendoza",
          website: "https://marcomendoza.design"
        }
      });
      await portfolio.save();
    }
    
    res.json(portfolio);
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update portfolio data
app.put('/api/portfolio', async (req, res) => {
  try {
    const portfolio = await Portfolio.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true }
    );
    res.json(portfolio);
  } catch (error) {
    console.error('Error updating portfolio:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Design Portfolio API is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start server
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📱 API available at http://localhost:${PORT}/api`);
  });
};

startServer().catch(console.error);