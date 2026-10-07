import React from 'react';
import { motion } from 'framer-motion';

const sentences = [
  'Website cepat, automasi AI, dan dashboard yang rapi.',
  'Sistem terhubung, aman, dan siap untuk AI.',
];

const ProjectShowcase = () => {
  return (
    <section id="services" className="scroll-mt-24 py-28 md:py-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-left">
        <motion.h2
          initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 leading-tight"
        >
          Solusi Digital untuk Bisnis yang Lebih Efisien
        </motion.h2>

        <p className="mt-5 text-base md:text-lg leading-relaxed tracking-tight text-slate-500 font-medium">
          {sentences.map((s, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 36, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="inline"
            >
              <span className="text-slate-900">{s.split('.')[0]}</span>
              <span>. </span>
            </motion.span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default ProjectShowcase;
