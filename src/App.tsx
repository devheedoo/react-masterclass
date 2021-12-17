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

function App() {
  return (
    <Wrapper>
      <WhiteBox></WhiteBox>
    </Wrapper>
  );
}

export default App;
