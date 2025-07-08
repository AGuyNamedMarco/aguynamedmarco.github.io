import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience = ({ portfolioData }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const defaultExperience = [
    {
      company: "TechFlow Inc",
      position: "Senior Design Engineer",
      startDate: "2022",
      endDate: "Present",
      location: "San Francisco, CA",
      description: "Leading design and development of user-facing products, managing a team of 4 designers and developers. Spearheaded the creation of a comprehensive design system that improved development efficiency by 40%.",
      achievements: [
        "Led redesign of core platform resulting in 35% increase in user engagement",
        "Implemented design system used across 12+ products",
        "Mentored junior developers and designers",
        "Improved code quality and reduced bugs by 50%"
      ]
    },
    {
      company: "InnovateUX",
      position: "Design Engineer",
      startDate: "2020",
      endDate: "2022",
      location: "Austin, TX",
      description: "Designed and developed responsive web applications with focus on user experience and performance. Collaborated with cross-functional teams to deliver high-quality products.",
      achievements: [
        "Developed 20+ responsive web applications",
        "Improved page load speeds by 60%",
        "Collaborated with UX team to improve user satisfaction by 45%",
        "Implemented automated testing reducing deployment time by 30%"
      ]
    },
    {
      company: "StartupXYZ",
      position: "Frontend Developer",
      startDate: "2019",
      endDate: "2020",
      location: "Remote",
      description: "Built modern, responsive user interfaces for a fast-growing startup. Worked closely with designers to bring mockups to life with pixel-perfect precision.",
      achievements: [
        "Built entire frontend architecture from scratch",
        "Implemented responsive design for mobile-first approach",
        "Integrated third-party APIs and services",
        "Reduced initial bundle size by 40%"
      ]
    },
    {
      company: "Design Studio Co",
      position: "UI/UX Designer",
      startDate: "2018",
      endDate: "2019",
      location: "New York, NY",
      description: "Created user-centered designs for various clients ranging from startups to Fortune 500 companies. Specialized in mobile app design and user research.",
      achievements: [
        "Designed 15+ mobile applications",
        "Conducted user research for 10+ projects",
        "Increased client satisfaction scores by 50%",
        "Created design guidelines and style guides"
      ]
    }
  ];

  const experience = portfolioData?.experience?.length > 0 ? portfolioData.experience : defaultExperience;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="section-padding">
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
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-8"></div>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              My professional journey and the impact I've made at each organization
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-primary-500 to-primary-600"></div>

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:items-start`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full border-4 border-white/20 z-10"></div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`glass-morphism rounded-2xl p-8 w-full md:w-5/12 ${
                      index % 2 === 0 ? 'md:ml-auto md:mr-8' : 'md:mr-auto md:ml-8'
                    } ml-12 md:ml-0`}
                  >
                    {/* Company Info */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-display font-semibold text-white mb-1">
                          {exp.position}
                        </h3>
                        <p className="text-primary-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center text-white/60 text-sm mt-2 sm:mt-0">
                        <FiCalendar className="mr-2" size={14} />
                        {exp.startDate} - {exp.endDate}
                      </div>
                    </div>

                    {/* Location */}
                    {exp.location && (
                      <div className="flex items-center text-white/60 text-sm mb-4">
                        <FiMapPin className="mr-2" size={14} />
                        {exp.location}
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-white/80 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    {exp.achievements && (
                      <div>
                        <h4 className="text-white font-medium mb-3 flex items-center">
                          <FiBriefcase className="mr-2" size={16} />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="text-white/70 text-sm flex items-start"
                            >
                              <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Download Resume CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Download Full Resume
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;