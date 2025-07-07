import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMapPin, FiMail, FiPhone, FiGraduationCap } from 'react-icons/fi';

const About = ({ portfolioData }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const contactInfo = [
    {
      icon: FiMapPin,
      label: 'Location',
      value: portfolioData?.location || 'San Francisco, CA'
    },
    {
      icon: FiMail,
      label: 'Email',
      value: portfolioData?.email || 'marco@example.com',
      href: `mailto:${portfolioData?.email || 'marco@example.com'}`
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: portfolioData?.phone || '+1 (555) 123-4567',
      href: `tel:${portfolioData?.phone || '+15551234567'}`
    }
  ];

  return (
    <section id="about" className="section-padding bg-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mb-8"></div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-white/80 leading-relaxed mb-8"
            >
              {portfolioData?.bio || 'I am a passionate design engineer with a unique blend of creative design skills and technical expertise. My goal is to create digital experiences that not only look beautiful but also function seamlessly and provide real value to users.'}
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm font-medium">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white hover:text-primary-400 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Education */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="glass-morphism rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <FiGraduationCap className="text-primary-400" size={24} />
                <h3 className="text-2xl font-display font-semibold text-white">Education</h3>
              </div>
              
              <div className="space-y-6">
                {portfolioData?.education?.length > 0 ? (
                  portfolioData.education.map((edu, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="border-l-2 border-primary-400 pl-6 pb-6 last:pb-0"
                    >
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-primary-400 font-medium mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-white/60 text-sm">
                        {edu.year}
                      </p>
                    </motion.div>
                  ))
                ) : (
                  <div className="space-y-6">
                    <div className="border-l-2 border-primary-400 pl-6 pb-6">
                      <h4 className="text-lg font-semibold text-white mb-1">
                        MS in Human-Computer Interaction
                      </h4>
                      <p className="text-primary-400 font-medium mb-2">
                        Stanford University
                      </p>
                      <p className="text-white/60 text-sm">2020</p>
                    </div>
                    <div className="border-l-2 border-primary-400 pl-6">
                      <h4 className="text-lg font-semibold text-white mb-1">
                        BS in Computer Science
                      </h4>
                      <p className="text-primary-400 font-medium mb-2">
                        UC Berkeley
                      </p>
                      <p className="text-white/60 text-sm">2018</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: '50+', label: 'Projects' },
                { number: '5+', label: 'Years Experience' },
                { number: '100%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center glass-morphism rounded-xl p-6"
                >
                  <h4 className="text-2xl font-bold text-white mb-2">{stat.number}</h4>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;