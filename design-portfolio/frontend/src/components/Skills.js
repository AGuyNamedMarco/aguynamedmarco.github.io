import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = ({ portfolioData }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const defaultSkills = [
    { name: 'UI/UX Design', level: 95, category: 'Design' },
    { name: 'React', level: 90, category: 'Development' },
    { name: 'TypeScript', level: 85, category: 'Development' },
    { name: 'Node.js', level: 80, category: 'Development' },
    { name: 'Figma', level: 95, category: 'Design' },
    { name: 'Adobe Creative Suite', level: 88, category: 'Design' },
    { name: '3D Modeling', level: 75, category: 'Design' },
    { name: 'Prototyping', level: 92, category: 'Design' },
    { name: 'CSS Animations', level: 87, category: 'Development' },
    { name: 'WebGL', level: 70, category: 'Development' },
    { name: 'Three.js', level: 75, category: 'Development' },
    { name: 'Design Systems', level: 90, category: 'Design' }
  ];

  const skills = portfolioData?.skills || [];
  const skillsWithLevels = defaultSkills.filter(skill => 
    skills.length === 0 || skills.includes(skill.name)
  );

  const categories = [...new Set(skillsWithLevels.map(skill => skill.category))];

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
    }
  };

  return (
    <section id="skills" className="section-padding">
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
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-8"></div>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              I combine creative design thinking with technical expertise to create exceptional digital experiences
            </p>
          </motion.div>

          {/* Skills by Category */}
          <div className="space-y-12">
            {categories.map((category) => (
              <motion.div key={category} variants={itemVariants}>
                <h3 className="text-2xl font-display font-semibold text-white mb-8 text-center">
                  {category}
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skillsWithLevels
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="glass-morphism rounded-xl p-6 card-hover"
                      >
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="text-lg font-semibold text-white">
                            {skill.name}
                          </h4>
                          <span className="text-primary-400 font-medium">
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1.5, delay: index * 0.1 }}
                            className="bg-gradient-to-r from-primary-400 to-primary-600 h-2 rounded-full"
                          ></motion.div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technologies Grid */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-display font-semibold text-white mb-8 text-center">
              Technologies & Tools
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                'React', 'TypeScript', 'Node.js', 'MongoDB', 'Figma', 'Adobe XD',
                'Photoshop', 'Illustrator', 'Blender', 'Unity', 'Git', 'AWS'
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="glass-morphism rounded-lg p-4 text-center group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {tech.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <p className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                    {tech}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;