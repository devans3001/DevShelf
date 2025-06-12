import React from 'react';
import { motion } from 'framer-motion';
import { Github, Link } from 'lucide-react';

const RevealCard = ({ imageUrl, title, description, githubLink, demoLink }) => {
  return (
    <motion.div 
      className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Background Image - shrinks to bottom left on hover */}
      <motion.div
        className="absolute inset-0"
        variants={{
          rest: { 
            clipPath: 'inset(0% 0% 0% 0% round 8px)',
            transition: { duration: 0.4, ease: "easeOut" }
          },
          hover: { 
            clipPath: 'inset(40% 30% 0% 0% round 8px)', // Shows in bottom-left
            transition: { duration: 0.4, ease: "easeOut" }
          }
        }}
      >
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      {/* Overlay Grid - appears on hover */}
      <motion.div 
        className="absolute inset-0 grid grid-rows-[40%_60%] text-white"
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 }
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Top Section - Description (40%) */}
        <motion.div 
          className="p-4 bg-black bg-opacity-70"
          variants={{
            rest: { y: -20, opacity: 0 },
            hover: { y: 0, opacity: 1 }
          }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-sm line-clamp-3">{description}</p>
        </motion.div>
        
        {/* Bottom Section (60%) */}
        <div className="grid grid-cols-[70%_30%] h-full">
          {/* Left - Empty space where image appears (70%) */}
          <div className="h-full"></div>
          
          {/* Right - Links (30%) */}
          <motion.div 
            className="flex flex-col items-center justify-center space-y-4 bg-black bg-opacity-70 p-4"
            variants={{
              rest: { x: 20, opacity: 0 },
              hover: { x: 0, opacity: 1 }
            }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            {githubLink && (
              <motion.a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
            )}
            {demoLink && (
              <motion.a 
                href={demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link className="w-5 h-5" />
              </motion.a>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Example usage
const RevealCardsGrid = () => {
  const projects = [
    {
      title: "Mountain Adventure",
      description: "Explore breathtaking mountain landscapes with this adventure app. Features trail maps, weather updates, and safety tips.",
      imageUrl: "https://images.pexels.com/photos/1983772/pexels-photo-1983772.jpeg?auto=compress&cs=tinysrgb&w=600",
      githubLink: "https://github.com",
      demoLink: "https://example.com"
    },
    // Add more projects as needed
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-100">
      {projects.map((project, index) => (
        <RevealCard key={index} {...project} />
      ))}
    </div>
  );
};

export default RevealCardsGrid;