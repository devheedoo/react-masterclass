import { motion } from 'framer-motion';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
`;

const boxAnimation = {
  start: { scale: 0 },
  end: { scale: 1, rotateZ: 360, transition: { type: 'spring', delay: 0.5 } },
};

function App() {
  return (
    <Wrapper>
      <Box variants={boxAnimation} initial="start" animate="end" />
    </Wrapper>
  );
}

export default App;
