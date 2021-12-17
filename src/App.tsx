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
`;

function App() {
  return (
    <Wrapper>
      <Box initial={{ scale: 0 }} animate={{ scale: 1, rotateZ: 360 }} />
    </Wrapper>
  );
}

export default App;
