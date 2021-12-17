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
  flex-direction: column;
`;

const WhiteBox = styled(motion.div)`
  position: absolute;
  top: 250px;
  width: 300px;
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
  start: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  invisible: { opacity: 0, y: 10 },
};

function App() {
  const [isShowing, setShowing] = useState(false);
  const toggleShowing = () => {
    setShowing((curr) => !curr);
  };
  return (
    <Wrapper>
      <AnimatePresence>
        {isShowing ? (
          <WhiteBox
            variants={boxVariants}
            initial="start"
            animate="visible"
            exit="invisible"
            transition={{
              default: { duration: 1 },
              opacity: { duration: 0.5 },
            }}
          >
            Hello!
          </WhiteBox>
        ) : null}
      </AnimatePresence>
      <button onClick={toggleShowing}>Toggle</button>
    </Wrapper>
  );
}

export default App;
