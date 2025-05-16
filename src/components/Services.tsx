import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServiceCard = ({ title, images, delay, inView }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="relative group flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[200px] w-full flex justify-center mb-2 overflow-visible">
        {images.slice(0, 2).map((image, index) => (
          <motion.div
            key={index}
            className={`absolute w-[200px] ${index === 0 ? 'z-20' : 'z-10'}`}
            animate={{
              y: isHovered ? -(index + 1) * 140 : 0, // spread upward
              scale: isHovered ? 1.2 : 1,             // enlarge on hover
              rotate: 0,                              // no rotation for alignment
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img
                src={image}
                alt={`${title} example ${index + 1}`}
                className="w-full h-[120px] object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
      <h3 className="text-2xl font-bold text-center gradient-text">{title}</h3>
    </motion.div>
  );
};

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: 'Websites',
      images: [
        '/images/MockupMVP3.jpg',
        '/images/MockupMVP4.jpg',
      ],
      delay: 0.2,
    },
    {
      title: 'Mobile Apps',
      images: [
        '/images/app1.jpg',
        '/images/app2.jpg',
      ],
      delay: 0.3,
    },
    {
      title: 'Product Design',
      images: [
        '/images/portfolio2.jpg',
        '/images/portfolio3.jpg',
      ],
      delay: 0.4,
    },
    {
      title: 'Automations',
      images: [
        '/images/n8n1.jpeg',
        '/images/n8n2.jpeg',
      ],
      delay: 0.5,
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4 gradient-text">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We craft digital experiences across multiple disciplines, bringing your vision to life with precision and creativity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
