import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';


const Meteors = ({ number = 20, className }) => {
  const meteorCount = Math.max(1, number);
  const meteors = React.useMemo(
    () =>
      Array.from({ length: meteorCount }, (_, idx) => ({
        key: `meteor-${idx}`,
        position: idx * (800 / meteorCount) - 400,
        delay: Math.random() * 5,
        duration: Math.random() * 5 + 5,
        startTop: Math.random() * 240 - 80 // spread vertically so trails reach into the hero
      })),
    [meteorCount]
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteors.map((meteor) => (
        <span
          key={meteor.key}
          className={cn(
            'animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-white/90 shadow-[0_0_0_1px_#ffffff40]',
            "before:absolute before:top-1/2 before:h-px before:w-[56px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-white before:to-transparent before:content-['']",
            className
          )}
          style={{
            top: `${meteor.startTop}px`,
            left: `${meteor.position}px`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
          }}
        />
      ))}
    </motion.div>
  );
};

export default Meteors;
