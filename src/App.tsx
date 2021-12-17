import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #81ecec, #c23699);
`;

const WhiteBox = styled(motion.div)`
  position: absolute;
  top: 250px;
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.7);
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

const boxVariants: Variants = {
  initial: { opacity: 0, x: 200, scale: 0.5 },
  animate: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: -200, scale: 0.5 },
};

function App() {
  const contents = ['A', 'B', 'C', 'D', 'E'];
  const [contentIndex, setContentIndex] = useState(0);
  const showNextContent = () => {
    setContentIndex((prev) => (prev === contents.length - 1 ? 0 : prev + 1));
  };
  const showPrevContent = () => {
    setContentIndex((prev) => (prev === 0 ? contents.length - 1 : prev - 1));
  };
  return (
    <Wrapper>
      <AnimatePresence>
        <WhiteBox
          variants={boxVariants}
          initial="initial"
          animate="animate"
          transition={{
            default: { duration: 1 },
            opacity: { duration: 0.5 },
          }}
          exit="exit"
          key={contentIndex}
        >
          {contents[contentIndex]}
        </WhiteBox>
      </AnimatePresence>
      <button onClick={showPrevContent}>prev</button>
      <button onClick={showNextContent}>next</button>
    </Wrapper>
  );
}

export default App;
