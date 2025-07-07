import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub, FiEye } from 'react-icons/fi';

const Projects = ({ portfolioData }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [selectedCategory, setSelectedCategory] = useState('All');

  const defaultProjects = [
    {
      title: "E-Commerce Platform Redesign",
      description: "Complete UI/UX overhaul of a major e-commerce platform, improving conversion rates by 35% and user satisfaction scores by 42%.",
      technologies: ["React", "TypeScript", "Figma", "A/B Testing"],
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
      projectUrl: "#",
      githubUrl: "#",
      category: "Design"
    },
    {
      title: "Interactive 3D Product Configurator",
      description: "Built an immersive 3D product customization tool that increased user engagement by 60% and reduced return rates.",
      technologies: ["Three.js", "WebGL", "React", "Node.js"],
      imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800",
      projectUrl: "#",
      githubUrl: "#",
      category: "Development"
    },
    {
      title: "Design System & Component Library",
      description: "Developed a comprehensive design system and React component library used across 12+ products, reducing development time by 40%.",
      technologies: ["React", "Storybook", "TypeScript", "CSS-in-JS"],
      imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800",
      projectUrl: "#",
      githubUrl: "#",
      category: "Design"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Created an intelligent dashboard that visualizes complex data patterns using machine learning insights for better decision making.",
      technologies: ["React", "D3.js", "Python", "TensorFlow"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      projectUrl: "#",
      githubUrl: "#",
      category: "Development"
    },
    {
      title: "Mobile App UI/UX Design",
      description: "Designed a complete mobile application interface for a fintech startup, focusing on accessibility and user experience.",
      technologies: ["Figma", "Prototyping", "User Research", "iOS Design"],
      imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
      projectUrl: "#",
      githubUrl: "#",
      category: "Design"
    },
    {
      title: "Real-time Collaboration Platform",
      description: "Developed a real-time collaboration platform with live editing, video conferencing, and project management features.",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
      projectUrl: "#",
      githubUrl: "#",
      category: "Development"
    }
  ];

  const projects = portfolioData?.projects?.length > 0 ? portfolioData.projects : defaultProjects;
  const categories = ['All', ...new Set(projects.map(project => project.category || 'Other'))];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => (project.category || 'Other') === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="projects" className="section-padding bg-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-8"></div>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              A showcase of my recent work spanning design and development projects
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                    : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${selectedCategory}`}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover={{ y: -10 }}
                  className="glass-morphism rounded-2xl overflow-hidden group cursor-pointer"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Project Links */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.projectUrl && (
                        <motion.a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        >
                          <FiExternalLink size={16} />
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        >
                          <FiGithub size={16} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies?.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Project Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-primary-500/20 to-primary-600/20 border border-primary-400/30 text-primary-400 py-2 rounded-lg font-medium hover:from-primary-500/30 hover:to-primary-600/30 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <FiEye size={16} />
                      View Project
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View More Button */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              View All Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;