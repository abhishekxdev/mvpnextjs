'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import styles from './Portfolio.module.css';

interface PortfolioItemProps {
  title: string;
  description: string;
  image: string;
  categories: string[];
  services: string;
  delay: number;
  inView: boolean;
}

const PortfolioItem = ({ title, description, image, categories, services, delay, inView }: PortfolioItemProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="portfolio-box relative transform-gpu rounded-2xl overflow-hidden"
      style={{
        transformStyle: 'preserve-3d',
        borderRadius: '16px'
      }}
    >
      <div className="relative z-10 bg-white rounded-2xl">
        <div className="h-64 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 gradient-text">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category: string, index: number) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {category}
              </span>
            ))}
          </div>
          
          <div className="text-sm text-gray-500 border-t border-gray-100 pt-4">
            {services}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const portfolioItems = [
    {
      title: 'Nuro AI',
      description: 'We crafted Nuro AI\'s digital presence to clearly communicate how it transforms sales with intelligent automation and real-time insights.',
      image: '/images/portfolio2.jpg',
      categories: ['SaaS', 'AI'],
      services: 'Web Design  -  Animation',
      delay: 0.2,
    },
    {
      title: 'Wealth AI',
      description: 'We brought Wealth AI to life with dynamic visuals and smooth flows that reflect its futuristic financial vision.',
      image: '/images/portfolio3.jpg',
      categories: ['Agency', 'Web Design', 'B2B'],
      services: 'Web Design  -  Copywriting  -  App Design',
      delay: 0.3,
    },
    {
      title: 'FlowHive',
      description: 'We built FlowHive\'s platform from the ground up, combining structured interface logic with sleek animations for a better productivity experience.',
      image: '/images/portfolio1.jpg',
      categories: ['SaaS', 'Productivity', 'UI/UX'],
      services: 'Web Design  -  Animation  -  Product Design',
      delay: 0.4,
    },
    {
      title: 'Applex',
      description: 'For Applex, we created a clean and mobile-first website that brings clarity to team collaboration through soft visuals and purposeful UX.',
      image: '/images/portfolio4.jpg',
      categories: ['Mobile', 'SaaS', 'Collaboration'],
      services: 'Web Design  -  Product Design',
      delay: 0.5,
    }
  ];

  return (
    <section id="portfolio" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4 gradient-text">MVP's Built for Founders and Startups</h2>
          <p className="body-lg max-w-2xl mx-auto">
            We sign NDAs with all clients, so most projects aren't public and we can't share much code. If a preview exists, it's usually just the frontend clone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} {...item} inView={inView} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <a 
            href="#contact" 
            className="btn btn-gradient rounded-full flex items-center justify-center gap-2 group"
          >
            See More Case Studies
            <ExternalLink size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;