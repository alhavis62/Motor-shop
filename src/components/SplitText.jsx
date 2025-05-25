
import { motion } from 'framer-motion';

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: 'easeOut'
    },
  }),
};

export default function SplitText({ text }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={textVariant}
          initial="hidden"
          animate="visible"
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            margin: '0 2px',
            color: 'white',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
}
