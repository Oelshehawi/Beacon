'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleResize = () => {
      requestAnimationFrame(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      id='home'
      className='min-h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden pointer-events-none'
    >
      {/* Background Animation */}
      <div className='absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black z-0' />
      <div
        className='absolute inset-0 bg-[radial-gradient(circle,rgba(1,65,255,0.15)_0%,transparent_60%)] z-0'
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${
            mousePosition.y * 0.01
          }px)`,
        }}
      />


      {/* Splash Screen Animation */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className='absolute inset-0 bg-black z-50 flex items-center justify-center'
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className='relative w-40 h-40'
        >
          <Image
            src='/beacon-logo.webp'
            alt='Beacon Logo'
            fill
            className='object-contain rounded-full'
          />
        </motion.div>
      </motion.div>

      {/* Main Hero Content */}
      <div className='relative z-10 container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className='text-center'
        >
          <motion.h1
            className='text-7xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500'
            animate={{
              backgroundPosition: ['0%', '100%'],
              filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            Beacon
          </motion.h1>
          <motion.p
            className='text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-gray-300'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
          >
            A revolutionary project that transforms how we connect with our
            local community
          </motion.p>

          {/* Floating Elements */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 4 }}
            className='absolute inset-0 pointer-events-none'
          >
            {windowSize.width > 0 &&
              [...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  className='absolute w-2 h-2 bg-blue-500/30 rounded-full'
                  initial={{
                    x: Math.random() * windowSize.width,
                    y: Math.random() * windowSize.height,
                  }}
                  animate={{
                    y: [-50, 50],
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 3 + (i * 0.1),
                  }}
                />
              ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2 }}
        className='absolute bottom-8 z-10'
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className='text-gray-400 flex flex-col items-center space-y-2'
        >
          <span className='text-sm uppercase tracking-widest'>
            Scroll to explore
          </span>
          <motion.svg
            className='w-6 h-6'
            viewBox='0 0 24 24'
            fill='none'
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <path
              d='M12 4L12 20M12 20L18 14M12 20L6 14'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
            />
          </motion.svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
